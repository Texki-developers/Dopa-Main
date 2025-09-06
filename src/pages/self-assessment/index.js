'use client';

import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';
import { authenticatedStrapiInstance} from '@/config/strapiInstance';

// Data is now embedded directly in the component file to resolve import issues.
const feedbackMap = {
    q1: { theme: "Schedule Adherence", responses: ["Sometimes", "Rarely", "Never"], category: "critical", cue: "🔴", message: "Inconsistent schedule adherence is a major risk. A structured plan is non-negotiable for success.", suggestion: "Commit to a daily schedule. Use timers and block out study periods. Consistency is more important than intensity." },
    q2: { theme: "Revision Strategy", responses: ["No", "Not sure"], category: "critical", cue: "🔴", message: "Lack of awareness about the final revision phase is dangerous. The last 3 months are crucial for consolidation.", suggestion: "Start planning your revision from now. Create a timeline and prioritize high-yield topics." },
    q3: { theme: "Study Hours", responses: ["2-4 hrs", "4-6 hrs"], category: "attention", cue: "🟠", message: "Your current study hours might be insufficient. NEET requires significant time investment.", suggestion: "Gradually increase your study time. Aim for at least 6-8 hours of focused study daily." },
    q4: { theme: "MCQ Practice", responses: ["<100", "100-300"], category: "critical", cue: "🔴", message: "Low MCQ practice is a red flag. NEET is an MCQ-based exam, and practice is essential.", suggestion: "Aim for at least 300-500 MCQs per chapter. Quality analysis of mistakes is as important as quantity." },
    q5: { theme: "Revision Technique", responses: ["1-2 hr", ">2 hr"], category: "attention", cue: "🟠", message: "Excessive time on passive note reading is inefficient. Active recall and practice are more effective.", suggestion: "Limit note revision to under 1 hour daily. Spend more time solving problems and reviewing mistakes." },
    q6: { theme: "Exam Temperament", responses: ["Sometimes", "Rarely", "Never"], category: "critical", cue: "🔴", message: "Skipping exams is a critical mistake. It avoids facing weaknesses and builds exam fear.", suggestion: "Never miss an exam, regardless of preparation. Use it as a diagnostic tool to identify weak areas." },
    q7: { theme: "Mistake Analysis", responses: ["Sometimes", "Rarely", "Never"], category: "attention", cue: "🟠", message: "Neglecting mistake analysis limits improvement. Understanding errors is how you grow.", suggestion: "Dedicate time after every exam to thoroughly analyze every mistake. Maintain a mistake notebook." },
    q8: { theme: "Note Making", responses: ["Sometimes", "Rarely", "Never"], category: "attention", cue: "🟠", message: "Inconsistent short-note preparation will hurt during revision. Concise notes are vital for quick review.", suggestion: "Make it a habit to create short notes or flashcards after studying each chapter." },
    q9: { 
        "1-month noticeable improvement": { category: "critical", theme: "Unrealistic Expectations", cue: "🔴", message: "Expecting rapid progress in a short time can lead to burnout and disappointment. NEET is a marathon, not a sprint." },
        "2-3 months steady growth": { category: "attention", theme: "Optimistic Timeline", cue: "🟠", message: "While positive, a 2-3 month timeline for significant growth is ambitious. Be prepared for a longer journey." },
        "Unsure": { category: "attention", theme: "Lack of a Clear Plan", cue: "🟠", message: "Being unsure about your progress timeline suggests a need for a clearer, long-term strategy." },
        "4-6 months gradual": { category: "ontrack", theme: "Realistic Outlook", cue: "✅", message: "This is a practical and healthy perspective on NEET preparation. Keep up the steady effort." },
        "6-8 months sustained effort": { category: "ontrack", theme: "Excellent Foresight", cue: "✅", message: "You have a mature and realistic understanding of the dedication required. This mindset is a great asset." }
    },
    q12: { theme: "Stress Management", responses: ["Rarely", "Never"], category: "attention", cue: "🟠", message: "Ignoring mental well-being can lead to burnout. Stress management is a key part of preparation.", suggestion: "Incorporate short breaks, mindfulness, or a hobby into your daily routine to manage stress effectively." },
    q13: { theme: "Sustainable Schedule", responses: ["Rarely", "Never", "Sometimes"], category: "critical", cue: "🔴", message: "An unsustainable schedule leads to burnout. Consistency over a long period is the goal.", suggestion: "Design a balanced schedule with adequate sleep, breaks, and buffer time. Avoid marathon study sessions without rest." },
    q14: { theme: "Confidence Level", responses: ["Doubtful", "Not confident"], category: "critical", cue: "🔴", message: "Low confidence can undermine your efforts. Believing in your ability to improve is crucial.", suggestion: "Focus on small, consistent wins. Review your mistake analysis to see concrete progress. Seek mentorship." }
};

const q10Suggestions = {
    "Time management": "Use the Pomodoro Technique (25 min study, 5 min break). Create a daily to-do list and prioritize tasks.",
    "Motivation": "Set small, achievable goals. Reward yourself for meeting them. Remind yourself of your long-term goal.",
    "Anxiety": "Practice deep breathing exercises. Talk to a mentor or friend. Ensure you're getting enough sleep.",
    "Concepts": "Go back to basics. Use resources like Khan Academy or reference books. Don't hesitate to ask teachers for help.",
    "Practice discipline/quantity": "Start with a small, manageable number of MCQs daily and gradually increase. Schedule practice time like any other subject.",
    "Other": "Acknowledge the specific challenge and seek targeted help from a mentor, teacher, or counselor."
};

// Tailwind class constants for consistency and easier maintenance
const btnPrimaryClasses = "bg-[rgb(0,32,91)] text-white font-semibold py-3 px-6 rounded-lg transition-colors hover:bg-[rgb(0,20,60)]";
const btnSecondaryClasses = "bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors hover:bg-gray-300";
const choiceLabelClasses = "block cursor-pointer border-2 border-gray-200 py-3 px-5 rounded-lg text-center text-sm sm:text-base transition-all ease-in-out hover:border-[rgb(0,174,239)] peer-checked:bg-[rgb(0,174,239)] peer-checked:text-white peer-checked:border-[rgb(0,150,210)]";


export default function AssessmentPage() {
    // State management
    const [screen, setScreen] = useState('welcome');
    const [currentSection, setCurrentSection] = useState(0);
    const [answers, setAnswers] = useState({});
    const [userData, setUserData] = useState({});
    const [reportData, setReportData] = useState(null);
    const [scriptsLoaded, setScriptsLoaded] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef(null);
    const reportRef = useRef(null);
    const toast = useToast();
    
    // React Hook Form setup
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger
    } = useForm({ 
        mode: 'onChange',
        defaultValues: {
            'full-name': userData.fullName || '',
            'mobile-number': userData.mobileNumber || '',
            'is-dopa-student': userData.isDopaStudent || false,
            'consent': false
        }
    });
    
    const totalSections = 5;
    const storageKey = 'neetAssessmentAnswers';
    const userDataKey = 'neetAssessmentUserData';

    // Load saved data from localStorage on initial render
    useEffect(() => {
        try {
            const savedAnswers = localStorage.getItem(storageKey);
            if (savedAnswers) {
                setAnswers(JSON.parse(savedAnswers));
            }
            const savedUserData = localStorage.getItem(userDataKey);
            if (savedUserData) {
                setUserData(JSON.parse(savedUserData));
            }
        } catch (error) {
            console.error("Failed to parse from localStorage", error);
        }
    }, []);

    // Load external scripts for PDF generation
    useEffect(() => {
        const loadScript = (src, id) => {
            return new Promise((resolve, reject) => {
                if (document.getElementById(id)) {
                    resolve(true);
                    return;
                }
                const script = document.createElement('script');
                script.src = src;
                script.id = id;
                script.onload = () => resolve(true);
                script.onerror = () => reject(new Error(`Script load error for ${src}`));
                document.head.appendChild(script);
            });
        };

        Promise.all([
            loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js', 'jspdf-script'),
            loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js', 'html2canvas-script')
        ])
        .then(() => {
            setScriptsLoaded(true);
        })
        .catch(error => console.error("Failed to load PDF libraries", error));
    }, []);


    // Handlers
    const handleUserDataSubmit = async (data) => {
        try {
            setIsSubmitting(true);
            
            const newUserData = {
                fullName: data['full-name'],
                mobileNumber: data['mobile-number'],
                isDopaStudent: data['is-dopa-student'] || false,
            };

            // Save to Strapi - only send name and mobile as required by the API
            const response = await authenticatedStrapiInstance.post('/api/onam-assessments', {
                data: {
                    name: newUserData.fullName,
                    mobile: newUserData.mobileNumber
                }
            });

            if (response.status === 200) {
                setUserData(newUserData);
                localStorage.setItem(userDataKey, JSON.stringify(newUserData));
                setScreen('assessment');
                
                toast({
                    title: 'Success',
                    description: 'Successfully starting your assessment!',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast({
                title: 'Error',
                description: 'Failed to submit your information. Please try again.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newAnswers = { ...answers };

        if (type === 'checkbox') {
            const currentValues = newAnswers[name] || [];
            if (checked) {
                newAnswers[name] = [...currentValues, value];
            } else {
                newAnswers[name] = currentValues.filter((v) => v !== value);
            }
        } else {
            newAnswers[name] = value;
        }
        
        setAnswers(newAnswers);
        localStorage.setItem(storageKey, JSON.stringify(newAnswers));
    };
    
    const validateSection = (index) => {
        // Since sections are conditionally rendered, we can only validate the current one.
        // We find it by its data attribute within the form.
        const sectionEl = formRef.current?.querySelector(`[data-section="${index + 1}"]`);
        if (!sectionEl) {
             // This case should not happen in normal flow
            console.error(`Could not find section ${index + 1} to validate.`);
            return false;
        }

        const inputs = sectionEl.querySelectorAll('input[required]');
        let allValid = true;

        inputs.forEach(input => {
            const radioGroup = sectionEl.querySelectorAll(`input[name="${input.name}"]`);
            if (![...radioGroup].some(radio => radio.checked)) {
                allValid = false;
            }
        });
        
        if (index === 3) { // Section 4 with Q10
            const q10checkboxes = sectionEl.querySelectorAll('input[name="q10"]');
            const q10error = document.getElementById('q10-error');
            const isChecked = [...q10checkboxes].some(cb => cb.checked);
            if (!isChecked) {
                q10error?.classList.remove('hidden');
                allValid = false;
            } else {
                q10error?.classList.add('hidden');
            }
        }

        if (!allValid) {
            alert('Please answer all questions in this section.');
        }
        return allValid;
    };


    const handleNext = () => {
        if (validateSection(currentSection)) {
            if (currentSection < totalSections - 1) {
                setCurrentSection(currentSection + 1);
            }
        }
    };

    const handlePrev = () => {
        if (currentSection > 0) {
            setCurrentSection(currentSection - 1);
        }
    };
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validateSection(currentSection)) {
            generateReport();
            setScreen('report');
        }
    };

    const getMindsetEmoji = () => {
        let score = 0;
        const confidence = answers.q14;
        if (confidence === 'Very confident') score += 2; else if (confidence === 'Confident') score += 1; else if (confidence === 'Doubtful') score -= 1; else if (confidence === 'Not confident') score -= 2;
        
        const stress = answers.q11;
        if (stress === 'Very low') score += 2; else if (stress === 'Low') score += 1; else if (stress === 'High') score -= 1; else if (stress === 'Very high') score -= 2;

        const timeline = answers.q9;
        if (timeline === '6-8 months sustained effort') score += 2; else if (timeline === '4-6 months gradual') score += 1; else if (timeline === 'Unsure') score -= 1; else if (timeline === '1-month noticeable improvement') score -= 2;

        if (score >= 3) return { emoji: '😊', text: 'Excellent Mindset' };
        if (score >= 0) return { emoji: '🙂', text: 'Positive Mindset' };
        if (score >= -3) return { emoji: '😐', text: 'Neutral Mindset' };
        return { emoji: '😟', text: 'Needs Support' };
    }

    const generateReport = () => {
        let feedbackItems = { critical: [], attention: [], ontrack: [] };

        // Handle Q9 separately
        const q9Answer = answers.q9;
        if (q9Answer && feedbackMap.q9[q9Answer]) {
            const q9Feedback = feedbackMap.q9[q9Answer];
            feedbackItems[q9Feedback.category].push({
                theme: q9Feedback.theme, message: q9Feedback.message, cue: q9Feedback.cue,
            });
        }
        
        // Process other questions
        Object.entries(feedbackMap).forEach(([key, value]) => {
            if (key === 'q9') return;
            const userResponse = answers[key];
            if (userResponse && value.responses?.includes(userResponse)) {
                feedbackItems[value.category].push(value);
            }
        });

        // Default "On Track" messages
        if (!feedbackItems.critical.some(f => f.theme === "Schedule Adherence") && !feedbackItems.attention.some(f => f.theme === "Schedule Adherence")) {
            feedbackItems.ontrack.push({ theme: "Schedule Strength", message: "Great schedule discipline! Keep going strong.", cue: "✅"});
        }
         if (!feedbackItems.critical.some(f => f.theme.includes("Exam")) && !feedbackItems.attention.some(f => f.theme.includes("Exam"))) {
            feedbackItems.ontrack.push({ theme: "Strong Exam Habits", message: "Excellent exam attendance and analysis. This is key to improvement.", cue: "✅"});
        }

        setReportData(feedbackItems);
    };
    
    const handleDownloadPdf = async () => {
        if (!scriptsLoaded) {
            alert("PDF generation libraries are still loading. Please try again in a moment.");
            return;
        }

        const { jsPDF } = window.jspdf;
        const html2canvas = window.html2canvas;

        if (!reportRef.current) {
            alert("Report element not found.");
            return;
        }

        // Create a new PDF document
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const margin = 10; // 10mm margin on all sides
        const contentWidth = pageWidth - 2 * margin;
        
        // Get all report sections
        const reportSections = reportRef.current.querySelectorAll('.report-section');
        let currentY = margin;
        
        // Add a function to check if we need a new page
        const checkPageBreak = (heightNeeded) => {
            if (currentY + heightNeeded > pageHeight - margin) {
                pdf.addPage();
                currentY = margin;
            }
        };
        
        // Process each section one by one
        for (const section of reportSections) {
            // Create a temporary container for the section
            const tempContainer = document.createElement('div');
            tempContainer.style.position = 'absolute';
            tempContainer.style.left = '-9999px';
            tempContainer.style.width = `${contentWidth}mm`;
            tempContainer.style.padding = '10px';
            tempContainer.style.backgroundColor = 'white';
            tempContainer.appendChild(section.cloneNode(true));
            document.body.appendChild(tempContainer);
            
            // Convert section to canvas
            const canvas = await html2canvas(tempContainer.firstChild, {
                scale: 2,
                useCORS: true,
                allowTaint: true,
                width: contentWidth * 3.78, // Convert mm to pixels (1mm ≈ 3.78px at 96dpi)
                windowWidth: contentWidth * 3.78,
                logging: false
            });
            
            // Calculate dimensions
            const imgData = canvas.toDataURL('image/png');
            const imgHeight = (canvas.height * contentWidth) / canvas.width;
            
            // Check if we need a new page for this section
            checkPageBreak(imgHeight + 5); // Add small margin between sections
            
            // Add the section to the PDF
            pdf.addImage(
                imgData,
                'PNG',
                margin,
                currentY,
                contentWidth,
                imgHeight
            );
            
            currentY += imgHeight + 5; // Add small margin between sections
            
            // Clean up
            document.body.removeChild(tempContainer);
        }
        
        // Save the PDF
        pdf.save(`${(userData.name || 'User').replace(/ /g, '_')}_NEET_Report.pdf`);
    };

    const handleRestart = () => {
        localStorage.removeItem(storageKey);
        localStorage.removeItem(userDataKey);
        setAnswers({});
        setUserData({});
        setCurrentSection(0);
        setReportData(null);
        setScreen('welcome');
    };

    // Render logic
    const renderScreen = () => {
        switch (screen) {
            case 'welcome':
                return (
                    <div id="welcome-screen" className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                        <div className="text-center">
                            <h1 className="text-2xl sm:text-4xl font-bold mb-2" style={{ color: 'rgb(0, 32, 91)' }}>1st Term Onam Vacation Preparation Self-Assessment</h1>
                            <p className="text-slate-600 mb-6 max-w-2xl mx-auto text-sm sm:text-base">Welcome! This tool helps evaluate your study habits for early, strategic improvement. Please provide your details to begin.</p>
                        </div>
                        <form id="user-data-form" onSubmit={handleSubmit(handleUserDataSubmit)}>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input 
                                        type="text" 
                                        id="full-name"
                                        {...register('full-name', { 
                                            required: 'Full name is required',
                                            minLength: { value: 2, message: 'Name must be at least 2 characters' }
                                        })}
                                        className={`mt-1 block w-full px-3 py-2 bg-white border ${errors['full-name'] ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm`}
                                    />
                                    {errors['full-name'] && (
                                        <p className="mt-1 text-sm text-red-600">{errors['full-name'].message}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="mobile-number" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                                    <input 
                                        type="tel" 
                                        id="mobile-number"
                                        {...register('mobile-number', { 
                                            required: 'Mobile number is required',
                                            pattern: {
                                                value: /^[0-9]{10}$/,
                                                message: 'Please enter a valid 10-digit mobile number'
                                            }
                                        })}
                                        className={`mt-1 block w-full px-3 py-2 bg-white border ${errors['mobile-number'] ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm`}
                                    />
                                    {errors['mobile-number'] && (
                                        <p className="mt-1 text-sm text-red-600">{errors['mobile-number'].message}</p>
                                    )}
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input 
                                            id="is-dopa-student" 
                                            type="checkbox" 
                                            {...register('is-dopa-student')}
                                            className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300 rounded" 
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="is-dopa-student" className="font-medium text-gray-700">I am a DOPA student</label>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input 
                                            id="consent" 
                                            type="checkbox"
                                            {...register('consent', { required: 'You must agree to the privacy policy' })}
                                            className={`focus:ring-sky-500 h-4 w-4 text-sky-600 ${errors.consent ? 'border-red-500' : 'border-gray-300'} rounded`} 
                                        />
                                        {errors.consent && (
                                            <p className="mt-1 text-sm text-red-600">{errors.consent.message}</p>
                                        )}
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="consent" className="font-medium text-gray-700">I agree to the <a href="#" className="text-sky-600 hover:underline">privacy policy</a> and consent to data collection.</label>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 text-center">
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className={`${btnPrimaryClasses} text-lg sm:text-xl px-10 sm:px-12 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Start Assessment'}
                                </button>
                            </div>
                        </form>
                    </div>
                );
            case 'assessment':
                const percentage = ((currentSection + 1) / totalSections) * 100;
                return (
                    <form ref={formRef} id="assessment-form" className="bg-white p-6 sm:p-8 rounded-xl shadow-lg" onSubmit={handleFormSubmit} onChange={handleFormChange}>
                        {/* Progress Bar */}
                        <div className="mb-8">
                            <div className="flex justify-between mb-1">
                                <span className="text-base font-medium" style={{ color: 'rgb(0, 32, 91)' }}>Progress</span>
                                <span id="progress-text" className="text-sm font-medium" style={{ color: 'rgb(0, 32, 91)' }}>Step {currentSection + 1} of {totalSections}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div id="progress-bar" className="h-2.5 rounded-full transition-all duration-500 ease-in-out bg-[rgb(0,174,239)]" style={{ width: `${percentage}%` }}></div>
                            </div>
                        </div>

                        {/* Sections Wrapper*/}
                        <div id="form-sections-wrapper">
                             {/* Section 1: Schedule & Awareness */}
                             {currentSection === 0 && (
                             <div data-section="1">
                                <h2 className="text-xl sm:text-2xl font-bold mb-2 text-slate-700">Section 1: Schedule & Awareness</h2>
                                <p className="text-slate-500 mb-6 text-sm sm:text-base">Let's look at your daily structure and planning.</p>
                                {/* Q1 */}
                                <div className="mb-6">
                                    <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-3">1. Do you currently follow a structured study schedule provided by institute/mentor?</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
                                        {["Always", "Mostly", "Sometimes", "Rarely", "Never"].map(opt => (
                                            <div key={opt} className="relative">
                                                <input type="radio" name="q1" id={`q1-${opt}`} value={opt} className="hidden peer" required defaultChecked={answers.q1 === opt}/>
                                                <label htmlFor={`q1-${opt}`} className={choiceLabelClasses}>{opt}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                 {/* Q2 */}
                                <div className="mb-6">
                                    <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-3">2. Are you aware that the last 3 months before NEET require intensive revision?</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                                        {["Yes", "No", "Not sure"].map(opt => (
                                             <div key={opt} className="relative">
                                                <input type="radio" name="q2" id={`q2-${opt}`} value={opt} className="hidden peer" required defaultChecked={answers.q2 === opt}/>
                                                <label htmlFor={`q2-${opt}`} className={choiceLabelClasses}>{opt}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Q3 */}
                                <div className="mb-6">
                                    <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-3">3. How many hours do you study daily on average?</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                                       {["2-4 hrs", "4-6 hrs", "6-8 hrs", "8-12 hrs", "12+ hrs"].map(opt => (
                                           <div key={opt} className="relative">
                                                <input type="radio" name="q3" id={`q3-${opt}`} value={opt} className="hidden peer" required defaultChecked={answers.q3 === opt}/>
                                                <label htmlFor={`q3-${opt}`} className={choiceLabelClasses}>{opt}</label>
                                            </div>
                                       ))}
                                    </div>
                                </div>
                            </div>
                            )}
                            {/* Section 2 */}
                            {currentSection === 1 && (
                             <div data-section="2">
                                <h2 className="text-xl sm:text-2xl font-bold mb-2 text-slate-700">Section 2: Practice & Balance</h2>
                                <p className="text-slate-500 mb-6 text-sm sm:text-base">Evaluating your practice routines and study balance.</p>
                                {/* Q4 */}
                                <div className="mb-6">
                                    <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-3">4. Number of MCQs practiced per chapter before weekly exam?</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                                        {["<100", "100-300", "300-500", "500+"].map(opt => (
                                            <div key={opt} className="relative">
                                                <input type="radio" name="q4" id={`q4-${opt}`} value={opt} className="hidden peer" required defaultChecked={answers.q4 === opt}/>
                                                <label htmlFor={`q4-${opt}`} className={choiceLabelClasses}>{opt}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Q5 */}
                                <div className="mb-6">
                                    <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-3">5. Average daily note reading/revision time?
                                        <span className="tooltip inline-block align-middle ml-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.06-1.061l2.5-2.5a.75.75 0 011.06 0l2.5 2.5a.75.75 0 01-1.06 1.061L11 5.439V9.75a.75.75 0 11-1.5 0V5.439L8.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /></svg>
                                            <span className="tooltiptext">Ideal note revision time is under 1 hour. Prioritize active learning like solving MCQs over passive reading.</span>
                                        </span>
                                    </label>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                                        {["<30 min", "30 min-1 hr", "1-2 hr", ">2 hr"].map(opt => (
                                            <div key={opt} className="relative">
                                                <input type="radio" name="q5" id={`q5-${opt}`} value={opt} className="hidden peer" required defaultChecked={answers.q5 === opt}/>
                                                <label htmlFor={`q5-${opt}`} className={choiceLabelClasses}>{opt}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            )}
                             {/* Section 3 */}
                             {currentSection === 2 && (
                            <div data-section="3">
                                <h2 className="text-xl sm:text-2xl font-bold mb-2 text-slate-700">Section 3: Exam & Analysis</h2>
                                <p className="text-slate-500 mb-6 text-sm sm:text-base">How you approach exams and learn from them.</p>
                                {["6", "7", "8"].map(qNum => (
                                     <div className="mb-6" key={qNum}>
                                        <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-3">{
                                            {
                                                "6": "6. Do you attend all chapter-wise and mock exams even if you feel unprepared?",
                                                "7": "7. How often do you analyze your mistakes after exams?",
                                                "8": "8. How consistent are you in preparing short notes/equation books?"
                                            }[qNum]
                                        }</label>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
                                             {["Always", "Mostly", "Sometimes", "Rarely", "Never"].map(opt => (
                                                <div key={opt} className="relative">
                                                    <input type="radio" name={`q${qNum}`} id={`q${qNum}-${opt}`} value={opt} className="hidden peer" required defaultChecked={answers[`q${qNum}`] === opt}/>
                                                    <label htmlFor={`q${qNum}-${opt}`} className={choiceLabelClasses}>{opt}</label>
                                                </div>
                                             ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            )}
                            {/* Section 4 */}
                            {currentSection === 3 && (
                            <div data-section="4">
                                <h2 className="text-xl sm:text-2xl font-bold mb-2 text-slate-700">Section 4: Mindset & Stress</h2>
                                <p className="text-slate-500 mb-6 text-sm sm:text-base">Your mental approach to preparation is crucial.</p>
                                {/* Q9 */}
                                <div className="mb-6">
                                    <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-3">9. How do you realistically expect your NEET preparation progress to unfold?</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                                        {[
                                            {val: "1-month noticeable improvement", label: "1-month improvement"},
                                            {val: "2-3 months steady growth", label: "2–3 months growth"},
                                            {val: "4-6 months gradual", label: "4–6 months gradual"},
                                            {val: "6-8 months sustained effort", label: "6–8 months sustained"},
                                            {val: "Unsure", label: "Unsure", span: "col-span-1 sm:col-span-2 lg:col-span-1"},
                                        ].map(opt => (
                                            <div key={opt.val} className={`relative ${opt.span || ''}`}>
                                                <input type="radio" name="q9" id={`q9-${opt.label}`} value={opt.val} className="hidden peer" required defaultChecked={answers.q9 === opt.val}/>
                                                <label htmlFor={`q9-${opt.label}`} className={choiceLabelClasses}>{opt.label}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Q10 */}
                                <div className="mb-6">
                                    <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-3">10. Biggest current challenges? (Select all that apply)</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                                        {[
                                            {val: "Time management", label: "Time management"},
                                            {val: "Motivation", label: "Motivation"},
                                            {val: "Anxiety", label: "Anxiety"},
                                            {val: "Concepts", label: "Concepts"},
                                            {val: "Practice discipline/quantity", label: "Practice discipline"},
                                            {val: "Other", label: "Other"},
                                        ].map(opt => (
                                            <div key={opt.val} className="relative">
                                                <input type="checkbox" name="q10" id={`q10-${opt.label}`} value={opt.val} className="hidden peer" defaultChecked={answers.q10?.includes(opt.val)}/>
                                                <label htmlFor={`q10-${opt.label}`} className={choiceLabelClasses}>{opt.label}</label>
                                            </div>
                                        ))}
                                    </div>
                                    <textarea name="q10_other" id="q10_other" placeholder="If other, please specify" defaultValue={answers.q10_other || ''} className={`mt-3 w-full p-2 border rounded-md ${!answers.q10?.includes('Other') ? 'hidden' : ''}`}></textarea>
                                    <p id="q10-error" className="text-red-500 text-sm mt-1 hidden">Please select at least one option.</p>
                                </div>
                                {/* Q11 & Q12 */}
                                <div className="mb-6">
                                    <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-3">11. Stress level related to NEET preparation?</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
                                         {["Very low", "Low", "Moderate", "High", "Very high"].map(opt => (
                                            <div key={opt} className="relative">
                                                <input type="radio" name="q11" id={`q11-${opt}`} value={opt} className="hidden peer" required defaultChecked={answers.q11 === opt}/>
                                                <label htmlFor={`q11-${opt}`} className={choiceLabelClasses}>{opt.replace(' ', ' ')}</label>
                                            </div>
                                         ))}
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-3">12. Practice mindfulness/meditation/relaxation?</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
                                        {["Daily", "Weekly", "Occasionally", "Rarely", "Never"].map(opt => (
                                            <div key={opt} className="relative">
                                                <input type="radio" name="q12" id={`q12-${opt}`} value={opt} className="hidden peer" required defaultChecked={answers.q12 === opt}/>
                                                <label htmlFor={`q12-${opt}`} className={choiceLabelClasses}>{opt}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            )}
                            {/* Section 5 */}
                            {currentSection === 4 && (
                             <div data-section="5">
                                <h2 className="text-xl sm:text-2xl font-bold mb-2 text-slate-700">Section 5: Final Outlook</h2>
                                <p className="text-slate-500 mb-6 text-sm sm:text-base">A final check on your routine and confidence.</p>
                                <div className="mb-6">
                                    <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-3">13. Maintain a realistic ~12hr/day schedule with breaks?</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
                                        {["Always", "Mostly", "Sometimes", "Rarely", "Never"].map(opt => (
                                            <div key={opt} className="relative">
                                                <input type="radio" name="q13" id={`q13-${opt}`} value={opt} className="hidden peer" required defaultChecked={answers.q13 === opt}/>
                                                <label htmlFor={`q13-${opt}`} className={choiceLabelClasses}>{opt}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                 <div className="mb-6">
                                    <label className="block text-base sm:text-lg font-semibold text-gray-900 mb-3">14. How confident are you about your preparation methods and mindset?</label>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
                                        {["Very confident", "Confident", "Neutral", "Doubtful", "Not confident"].map(opt => (
                                            <div key={opt} className="relative">
                                                <input type="radio" name="q14" id={`q14-${opt}`} value={opt} className="hidden peer" required defaultChecked={answers.q14 === opt}/>
                                                <label htmlFor={`q14-${opt}`} className={choiceLabelClasses}>{opt}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>

                        {/* Navigation */}
                        <div id="navigation-buttons" className="flex justify-between mt-10">
                            <button type="button" onClick={handlePrev} className={`${btnSecondaryClasses} !py-3 !px-6 ${currentSection === 0 ? 'hidden' : ''}`}>Previous</button>
                            <div className={`${currentSection === 0 ? 'ml-auto' : ''}`}>
                                <button type="button" onClick={handleNext} className={`${btnPrimaryClasses} !py-3 !px-6 ${currentSection === totalSections - 1 ? 'hidden' : ''}`}>Next</button>
                                <button type="submit" className={`${btnPrimaryClasses} !py-3 !px-6 ${currentSection !== totalSections - 1 ? 'hidden' : ''}`}>View My Report</button>
                            </div>
                        </div>
                    </form>
                );

            case 'report':
                if (!reportData) return <p>Generating your report...</p>;
                const mindset = getMindsetEmoji();
                const q10Answers = answers.q10 || [];

                return (
                     <div id="report-container">
                        <div ref={reportRef} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                            <div className="border-b pb-6 mb-6">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-2">
                                    <div>
                                        <h1 className="text-2xl sm:text-3xl font-bold" style={{color: 'rgb(0, 32, 91)'}}>{userData.name || 'Your'} Personalized Report</h1>
                                        <p className="text-slate-600 text-sm sm:text-base">Here are your strengths and areas for improvement.</p>
                                    </div>
                                    {userData.isDopaStudent && (
                                        <div className="flex items-center gap-2 text-sm font-semibold rounded-full px-3 py-1" style={{backgroundColor: 'rgba(0, 174, 239, 0.1)', color: 'rgb(0, 32, 91)'}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" style={{color: 'rgb(0, 174, 239)'}}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                            DOPA Student
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 text-center mb-8">
                                <div className="p-4 rounded-lg md:col-span-1" style={{backgroundColor: 'rgba(0, 32, 91, 0.05)', border: '1px solid rgba(0, 32, 91, 0.2)'}}>
                                    <h3 className="text-base sm:text-lg font-semibold" style={{color: 'rgb(0, 32, 91)'}}>Critical Areas</h3>
                                    <p className="text-3xl sm:text-4xl font-bold mt-2" style={{color: 'rgb(0, 32, 91)'}}>{reportData.critical.length}</p>
                                </div>
                                <div className="p-4 rounded-lg md:col-span-1" style={{backgroundColor: 'rgba(255, 165, 0, 0.05)', border: '1px solid rgba(255, 165, 0, 0.2)'}}>
                                    <h3 className="text-base sm:text-lg font-semibold" style={{color: '#c2410c'}}>Needs Attention</h3>
                                    <p className="text-3xl sm:text-4xl font-bold mt-2" style={{color: '#c2410c'}}>{reportData.attention.length}</p>
                                </div>
                                <div className="p-4 rounded-lg md:col-span-1" style={{backgroundColor: 'rgba(0, 174, 239, 0.05)', border: '1px solid rgba(0, 174, 239, 0.2)'}}>
                                    <h3 className="text-base sm:text-lg font-semibold" style={{color: '#0284c7'}}>On Track</h3>
                                    <p className="text-3xl sm:text-4xl font-bold mt-2" style={{color: '#0284c7'}}>{reportData.ontrack.length}</p>
                                </div>
                                <div className="p-4 rounded-lg md:col-span-1" style={{backgroundColor: 'rgba(0, 32, 91, 0.05)', border: '1px solid rgba(0, 32, 91, 0.2)'}}>
                                     <h3 className="text-base sm:text-lg font-semibold" style={{color: 'rgb(0, 32, 91)'}}>Mindset Snapshot</h3>
                                     <p className="text-3xl sm:text-4xl font-bold mt-2" title={mindset.text}>{mindset.emoji}</p>
                                </div>
                            </div>
                            
                            {/* Render feedback sections */}
                            {q10Answers.length > 0 && (
                                <div className="report-section">
                                <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{color: 'rgb(0, 32, 91)'}}>💡 Guidance for Your Challenges</h2>
                                <div className="space-y-4 mb-8">
                                    {q10Answers.map((challenge, index) => (
                                        <div key={index} className="p-4 rounded-lg" style={{backgroundColor: 'rgba(0, 174, 239, 0.05)', borderLeft: '4px solid rgb(0, 174, 239)'}}>
                                            <h4 className="font-bold text-base sm:text-lg" style={{color: '#0369a1'}}>{challenge}</h4>
                                            <p style={{color: '#0369a1'}} className="text-sm sm:text-base">{q10Suggestions[challenge]}</p>
                                        </div>
                                    ))}
                                </div>
                                </div>
                            )}
                            
                            {reportData.critical.length > 0 && (
                                <div className="report-section">
                                <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{color: 'rgb(0, 32, 91)'}}>🔴 Critical Areas to Address Immediately</h2>
                                <div className="space-y-4 mb-8">
                                    {reportData.critical.map((item, index) => (
                                        <div key={index} className="p-4 rounded-lg" style={{backgroundColor: 'rgba(0, 32, 91, 0.05)', border: '1px solid rgba(0, 32, 91, 0.2)'}}>
                                            <h4 className="font-bold text-base sm:text-lg" style={{color: 'rgb(0, 32, 91)'}}>{item.cue} {item.theme}</h4>
                                            <p className="my-2 text-sm sm:text-base" style={{color: 'rgb(0, 32, 91)'}}>{item.message}</p>
                                            {item.suggestion && <p className="font-semibold text-sm sm:text-base p-3 rounded-md" style={{backgroundColor: 'rgba(0, 32, 91, 0.1)'}}><strong>Action:</strong> {item.suggestion}</p>}
                                        </div>
                                    ))}
                                </div>
                                </div>
                            )}
                            
                            {reportData.attention.length > 0 && (
                                 <div className="report-section">
                                <h2 className="text-xl sm:text-2xl font-bold text-orange-600 mb-4">🟠 Areas to Focus On</h2>
                                <div className="space-y-4 mb-8">
                                    {reportData.attention.map((item, index) => (
                                        <div key={index} className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                                            <h4 className="font-bold text-base sm:text-lg text-orange-800">{item.cue} {item.theme}</h4>
                                            <p className="text-orange-700 my-2 text-sm sm:text-base">{item.message}</p>
                                             {item.suggestion && <p className="font-semibold text-orange-900 bg-orange-100 p-3 rounded-md text-sm sm:text-base"><strong>Action:</strong> {item.suggestion}</p>}
                                        </div>
                                    ))}
                                </div>
                                </div>
                            )}
                            
                            {reportData.ontrack.length > 0 && (
                                <div className="report-section">
                                <h2 className="text-xl sm:text-2xl font-bold mb-4" style={{color: '#0369a1'}}>✅ Your Strengths</h2>
                                <div className="space-y-4 mb-8">
                                    {reportData.ontrack.map((item, index) => (
                                        <div key={index} className="p-4 rounded-lg" style={{backgroundColor: 'rgba(0, 174, 239, 0.05)', border: '1px solid rgba(0, 174, 239, 0.2)'}}>
                                            <h4 className="font-bold text-base sm:text-lg" style={{color: '#0369a1'}}>{item.cue} {item.theme}</h4>
                                            <p style={{color: '#0369a1'}} className="text-sm sm:text-base">{item.message}</p>
                                        </div>
                                    ))}
                                </div>
                                </div>
                            )}

                            {/* Counseling & Actions */}
                            <div className="mt-10 pt-6 border-t text-center">
                                <h2 className="text-2xl font-bold text-slate-800 mb-4">Next Steps</h2>
                                <p className="text-slate-600 mb-6">Use this feedback to refine your study plan. Remember, consistency is key!</p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <button onClick={handleDownloadPdf} className={btnPrimaryClasses}>Download Report as PDF</button>
                                    <button onClick={handleRestart} className={btnSecondaryClasses}>Take Assessment Again</button>
                                </div>
                                <div className="mt-8 p-6 rounded-lg" style={{backgroundColor: 'rgba(0, 32, 91, 0.05)'}}>
                                    {userData.isDopaStudent ? (
                                         <>
                                            <h3 className="text-xl font-bold" style={{color: 'rgb(0, 32, 91)'}}>Need Personalized Guidance?</h3>
                                            <p className="mt-2 mb-4" style={{color: 'rgb(0, 32, 91)'}}>Please contact your respective campus coordinator for a personalized strategy session.</p>
                                         </>
                                    ) : (
                                        <>
                                            <div className="text-center mb-4">
                                                <p className="font-bold text-sm tracking-wide" style={{color: 'rgb(0, 32, 91)'}}>DOPA</p>
                                                <p className="text-xs" style={{color: '#0369a1'}}>Preparing leaders for NEET success.</p>
                                            </div>
                                            <h3 className="text-xl font-bold text-center sm:text-left" style={{color: 'rgb(0, 32, 91)'}}>Need Personalized Guidance?</h3>
                                            <p className="mt-2 mb-4 text-center sm:text-left" style={{color: 'rgb(0, 32, 91)'}}>Our expert counselors in Kerala are here to help you.</p>
                                            <div className="grid sm:grid-cols-2 gap-6 text-left">
                                                <div className="border-t-4 rounded-b-lg p-4 shadow-md" style={{borderColor: 'rgb(0, 174, 239)'}}>
                                                    <h4 className="font-bold text-lg" style={{color: 'rgb(0, 32, 91)'}}>North Kerala (Calicut)</h4>
                                                    <p className="text-slate-600 mb-4">+91 96452 02200</p>
                                                    <div className="flex gap-2">
                                                        <a href="tel:+919645202200" className="flex-1 text-center !py-2 !px-4 bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors hover:bg-gray-300">Call</a>
                                                        <a href="https://wa.me/919645202200" target="_blank" className="flex-1 text-center !py-2 !px-4 bg-[#25D366] text-white font-semibold rounded-lg transition-colors hover:!bg-green-600">WhatsApp</a>
                                                    </div>
                                                </div>
                                                <div className="border-t-4 rounded-b-lg p-4 shadow-md" style={{borderColor: 'rgb(0, 174, 239)'}}>
                                                    <h4 className="font-bold text-lg" style={{color: 'rgb(0, 32, 91)'}}>South Kerala (Thrissur)</h4>
                                                    <p className="text-slate-600 mb-4">+91 97450 95556</p>
                                                    <div className="flex gap-2">
                                                        <a href="tel:+919745095556" className="flex-1 text-center !py-2 !px-4 bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors hover:bg-gray-300">Call</a>
                                                        <a href="https://wa.me/919745095556" target="_blank" className="flex-1 text-center !py-2 !px-4 bg-[#25D366] text-white font-semibold rounded-lg transition-colors hover:!bg-green-600">WhatsApp</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                     </div>
                );
        }
    };
    
    return (
        <main className="container mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
            {renderScreen()}
        </main>
    );
}
