import { useState } from 'react';
import NeetDetailsForm from "@/Components/NeetDetailsForm";
import { authenticatedStrapiInstance } from "@/config/strapiInstance";
import { useToast } from "@chakra-ui/react";


const PREP_QUESTIONS = [
    { id: 'q_classes', label: 'Watching Classes', options: [{ value: "", text: "Select your consistency" }, { value: "100", text: "100% - Never missed" }, { value: "80", text: ">90% - Missed very few" }, { value: "60", text: "~75% - Missed some" }, { value: "40", text: "~50% - Attended half" }, { value: "20", text: "<50% - Missed many" }] },
    { id: 'q_notes', label: 'Writing Own Notes', options: [{ value: "", text: "Select your habit" }, { value: "100", text: "Always, for every chapter" }, { value: "80", text: "Mostly, for important topics" }, { value: "50", text: "Sometimes, for difficult topics" }, { value: "25", text: "Rarely" }, { value: "0", text: "Never, used printed materials" }] },
    { id: 'q_practice', label: 'Question Practice (per chapter)', options: [{ value: "", text: "Select your average" }, { value: "100", text: "300+ Questions" }, { value: "80", text: "200-300 Questions" }, { value: "60", text: "100-200 Questions" }, { value: "40", text: "50-100 Questions" }, { value: "20", text: "<50 Questions" }] },
    { id: 'q_revision_material', label: 'Making Revision Materials', options: [{ value: "", text: "Select your approach" }, { value: "100", text: "Yes, from the very beginning" }, { value: "75", text: "Yes, but started late" }, { value: "50", text: "Started, but not consistent" }, { value: "25", text: "Only for a few chapters" }, { value: "0", text: "No, I did not make any" }] },
    { id: 'q_revision_freq', label: 'Revision Frequency', options: [{ value: "", text: "Select your frequency" }, { value: "100", text: "Multiple, well-planned revisions" }, { value: "80", text: "Revised everything twice" }, { value: "60", text: "Revised everything once" }, { value: "40", text: "Only revised weak topics" }, { value: "20", text: "Hardly revised" }] },
    { id: 'q_exam_attendance', label: 'Exam Attendance', options: [{ value: "", text: "Select your attendance" }, { value: "100", text: "100% - Attended all exams" }, { value: "75", text: "Attended most, skipped a few" }, { value: "50", text: "Attended only when I felt prepared" }, { value: "25", text: "Attended less than half" }, { value: "0", text: "Skipped most exams" }] },
    { id: 'q_analysis', label: 'Post-Exam Analysis', options: [{ value: "", text: "Select your habit" }, { value: "100", text: "After every single exam" }, { value: "75", text: "Most of the time" }, { value: "50", text: "Sometimes, if the score was low" }, { value: "25", text: "Rarely" }, { value: "0", text: "Never" }] },
    { id: 'q_mentality', label: 'Mentality & Mindset', options: [{ value: "", text: "Select your mindset" }, { value: "100", text: "Stayed positive and hardworking" }, { value: "75", text: "Mostly positive, but had some doubts" }, { value: "50", text: "Felt demotivated by low scores" }, { value: "25", text: "Often felt stressed" }, { value: "0", text: "Felt like giving up at times" }] },
];

const SUPPORT_QUESTIONS = [
    { id: 'q_parent_understanding', label: 'How well do your parents understand NEET demands?', options: [{ value: "", text: "Select their understanding" }, { value: "100", text: "Very well, they are fully aware" }, { value: "75", text: "Quite well, they understand the basics" }, { value: "50", text: "Somewhat, but not the full details" }, { value: "25", text: "They try, but don't really understand" }, { value: "0", text: "Not really, they are not very involved" }] },
    { id: 'q_parent_support', label: 'How supportive are they of your re-attempt?', options: [{ value: "", text: "Select their support level" }, { value: "100", text: "100% supportive and encouraging" }, { value: "75", text: "Very supportive, with occasional questions" }, { value: "50", text: "They are okay with it, but have doubts" }, { value: "25", text: "They are hesitant and worried" }, { value: "0", text: "They are against it or unsupportive" }] },
];

const SUGGESTIONS = {
    q_classes: { title: "Inconsistent Class Attendance", text: "Missing classes creates conceptual gaps that are hard to fix later. At DOPA, our doctor-led sessions ensure you don't just learn, but understand. Consistent attendance is the first step to a better score." },
    q_notes: { title: "Ineffective Note-Making", text: "Relying on printed materials isn't enough. Writing your own notes reinforces memory. DOPA's mentorship program teaches you how to create high-yield notes, a crucial skill for top rankers." },
    q_practice: { title: "Insufficient Question Practice", text: "NEET is about application. Less than 300 questions per chapter is a major red flag. DOPA's structured program includes extensive question banks and daily practice sessions to build speed and accuracy." },
    q_revision_material: { title: "Lack of Revision Materials", text: "Waiting until the end to revise is a common mistake. DOPA mentors guide you in creating short notes and formula books from day one, making revision systematic and effective." },
    q_revision_freq: { title: "Infrequent Revision", text: "Forgetting is natural; not having a revision plan is a strategic error. The DOPA system incorporates spaced revision, a scientifically proven method to retain information long-term." },
    q_exam_attendance: { title: "Skipping Exams", text: "Avoiding exams due to fear or lack of preparation is counterproductive. At DOPA, we encourage attending every test. It's the best way to build exam temperament and identify weaknesses under pressure." },
    q_analysis: { title: "No Post-Exam Analysis", text: "An exam without analysis is a wasted opportunity. Our doctor-mentors sit with you to analyze every mistake, turning each error into a learning experience for future success." },
    q_mentality: { title: "Negative Mindset", text: "The journey of a repeater is tough. A negative mindset can be your biggest enemy. DOPA's daily mentorship and supportive environment are designed to keep you motivated, focused, and resilient." },
    q_parent_understanding: { title: "Need for Parental Alignment", text: "A repeater's journey requires a supportive home environment. DOPA conducts regular parent education sessions to help them understand the process and how they can be your biggest strength." },
    q_parent_support: { title: "Strengthening the Support System", text: "A student's success is a team effort. DOPA believes in a collaborative approach and our counselors are here to help bridge any gaps and ensure your family is aligned with your goal." }
};

const PREP_LABELS = { q_classes: 'Class Attendance', q_notes: 'Note Making', q_practice: 'Question Practice', q_revision_material: 'Revision Material Prep', q_revision_freq: 'Revision Frequency', q_exam_attendance: 'Exam Attendance', q_analysis: 'Post-Exam Analysis', q_mentality: 'Positive Mentality' };


// Main Component
export default function DopaReattemptAnalyzer() {
  const [isShow, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
    const initialFormState = {
        physics_score: '',
        chemistry_score: '',
        biology_score: '',
        ...Object.fromEntries(PREP_QUESTIONS.map(q => [q.id, ''])),
        ...Object.fromEntries(SUPPORT_QUESTIONS.map(q => [q.id, ''])),
    };

    const toast = useToast();
    const [formData, setFormData] = useState(initialFormState);
    const [results, setResults] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const callGeminiAPI = async (prompt) => {
        let chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
        const payload = { contents: chatHistory };
        const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY; // Leave empty, handled by environment
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const result = await response.json();

            if (result.candidates && result.candidates[0].content && result.candidates[0].content.parts[0].text) {
                return result.candidates[0].content.parts[0].text;
            } else {
                console.error("Unexpected API response structure:", result);
                return "Could not retrieve AI insights at this time. Please try again later.";
            }
        } catch (error) {
            console.error("Error fetching from Gemini API:", error);
            return "An error occurred while fetching AI analysis. Please check your connection and try again.";
        }
    };

    const handleAnalysis = async () => {
        setError('');
        // --- Validation ---
        const { physics_score, chemistry_score, biology_score } = formData;
        const physicsScore = parseInt(physics_score);
        const chemistryScore = parseInt(chemistry_score);
        const biologyScore = parseInt(biology_score);

        if (isNaN(physicsScore) || isNaN(chemistryScore) || isNaN(biologyScore) || physicsScore < 0 || physicsScore > 180 || chemistryScore < 0 || chemistryScore > 180 || biologyScore < 0 || biologyScore > 360) {
            setError('Please enter valid scores (Physics/Chem: 0-180, Bio: 0-360).');
            return;
        }

        const isFormValid = [...PREP_QUESTIONS, ...SUPPORT_QUESTIONS].every(q => formData[q.id] !== "");
        if (!isFormValid) {
            setError('Please answer all strategy and support questions.');
            return;
        }

        setIsLoading(true);
        setResults(null); // Clear previous results

        const totalScore = physicsScore + chemistryScore + biologyScore;

        if (totalScore >= 528) {
            setResults({ type: 'congratulations', totalScore });
            setIsLoading(false);
            return;
        }

        // --- Calculations ---
        const prepScores = PREP_QUESTIONS.map(q => parseInt(formData[q.id]));
        const prepScore = prepScores.reduce((a, b) => a + b, 0) / prepScores.length;
        const supportScores = SUPPORT_QUESTIONS.map(q => parseInt(formData[q.id]));
        const supportScore = supportScores.reduce((a, b) => a + b, 0) / supportScores.length;

        let greenFlags = [];
        let redFlags = [];
        let redFlagSuggestions = [];

        if (totalScore > 450) greenFlags.push(`Strong academic base with a score of ${totalScore}.`);
        else redFlags.push(`Academic score (${totalScore}) needs significant improvement.`);

        prepScores.forEach((score, index) => {
            const key = PREP_QUESTIONS[index].id;
            if (score === 100) greenFlags.push(`${PREP_LABELS[key]} is excellent.`);
            else if (score < 80) {
                redFlags.push(`${PREP_LABELS[key]} needs more consistency.`);
                redFlagSuggestions.push(SUGGESTIONS[key]);
            }
        });

        if (supportScore >= 75) greenFlags.push("Excellent parental support system.");
        else {
            redFlags.push("Parental support system needs strengthening.");
            redFlagSuggestions.push(SUGGESTIONS['q_parent_understanding']);
        }
        
        const checkScholarship = (neetScore) => {
            if (neetScore >= 500) return "Full Free Scholarship (100% Academic & Hostel Free, only mess fee applicable)";
            if (neetScore >= 490) return "100% Academic Fee Scholarship (Hostel fee applicable)";
            if (neetScore >= 480) return "90% Academic Fee Scholarship";
            if (neetScore >= 470) return "75% Academic Fee Scholarship";
            if (neetScore >= 430) return "50% Academic Fee Scholarship";
            if (neetScore >= 400) return "25% Academic Fee Scholarship";
            return null;
        };
        const scholarship = checkScholarship(totalScore);

        // --- AI Prompt ---
        const prompt = `You are an expert NEET counselor at DOPA. A student is considering a re-attempt. Here is their profile:
        - Academic Score: ${totalScore}
        - Strengths (Green Flags): ${greenFlags.join(', ')}.
        - Areas to Improve (Red Flags): ${redFlags.join(', ')}.
        - Scholarship Eligibility from NEET Score: ${scholarship || 'None'}.

        Based on this complete profile, generate a personalized, empathetic, and strategic analysis. 
        1. Start with a clear, high-level recommendation (e.g., "Re-attempt Highly Recommended," "Re-attempt Possible with Critical Strategy Changes," or "A Foundational Year is Recommended").
        2. Create a final section called "### AI-Powered Summary & Next Steps". In this section, summarize the student's potential and reiterate that success is achievable by addressing the identified red flags. Emphasize that DOPA's doctor-led mentorship is designed to provide the daily guidance needed to overcome these specific challenges. If they are eligible for a scholarship, mention it again here as a final motivating point.`;
        
        const aiStrategy = await callGeminiAPI(prompt);

        setResults({
            type: 'analysis',
            totalScore,
            prepScore,
            supportScore,
            greenFlags,
            redFlags,
            redFlagSuggestions,
            aiStrategy
        });
        setIsLoading(false);
    };

    const resetForm = () => {
        setFormData(initialFormState);
        setResults(null);
        setError('');
        setIsLoading(false);
    };
    
    const onFormSubmission = async (data) => {
        console.log(data);
        setLoading(true);
        try {
          const response = await authenticatedStrapiInstance.post(
            "/api/neetanalysistools",
            {
              data: data,
            }
          );
          if (response.status === 200) {
            setShow(true);
            toast({
                status: "success",
                description: "Registered Successfully!",
                title: "Great!",
              });
          } else {
            toast({
                status: "error",
                description: "Something went wrong!",
                title: "Ugh no!",
              });
          }
        } catch (error) {
          console.error(error);
          toast({   
            status: "error",
            description: "Something went wrong!",
            title: "Ugh no!",
          });
        } finally {
          setLoading(false);
        }
      };

    const renderForm = () => (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 mb-12 space-y-10">
            {/* Academic Profile */}
            <fieldset className="border-t-2 border-sky-500 pt-4">
                <legend className="text-2xl font-bold text-gray-800 px-2 -ml-2">1. Academic Profile</legend>
                <p className="text-sm text-gray-500 mb-6 mt-1">Enter your most recent (or approximate) NEET subject scores.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label htmlFor="physics_score" className="block text-sm font-medium text-slate-700">Physics Score* (out of 180)</label>
                        <input type="number" id="physics_score" value={formData.physics_score} onChange={handleInputChange} placeholder="e.g., 95" className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500" />
                    </div>
                    <div>
                        <label htmlFor="chemistry_score" className="block text-sm font-medium text-slate-700">Chemistry Score* (out of 180)</label>
                        <input type="number" id="chemistry_score" value={formData.chemistry_score} onChange={handleInputChange} placeholder="e.g., 110" className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500" />
                    </div>
                    <div>
                        <label htmlFor="biology_score" className="block text-sm font-medium text-slate-700">Biology Score* (out of 360)</label>
                        <input type="number" id="biology_score" value={formData.biology_score} onChange={handleInputChange} placeholder="e.g., 280" className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500" />
                    </div>
                </div>
            </fieldset>

            {/* Preparation Strategy */}
            <fieldset className="border-t-2 border-sky-500 pt-4">
                <legend className="text-2xl font-bold text-gray-800 px-2 -ml-2">2. Preparation Strategy</legend>
                <p className="text-sm text-gray-500 mb-6 mt-1">Be honest about your study habits. This helps us give you the best advice.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {PREP_QUESTIONS.map(q => (
                        <div key={q.id}>
                            <label htmlFor={q.id} className="block text-sm font-medium text-slate-700">{q.label}</label>
                            <select id={q.id} value={formData[q.id]} onChange={handleInputChange} className="mt-1 block w-full p-2 border rounded-md shadow-sm">
                                {q.options.map(opt => <option key={opt.value} value={opt.value} disabled={opt.value === ""}>{opt.text}</option>)}
                            </select>
                        </div>
                    ))}
                </div>
            </fieldset>

            {/* Support System */}
            <fieldset className="border-t-2 border-sky-500 pt-4">
                <legend className="text-2xl font-bold text-gray-800 px-2 -ml-2">3. Your Support System</legend>
                <p className="text-sm text-gray-500 mb-6 mt-1">A strong support system is key. Help us understand your environment.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {SUPPORT_QUESTIONS.map(q => (
                        <div key={q.id}>
                            <label htmlFor={q.id} className="block text-sm font-medium text-slate-700">{q.label}</label>
                            <select id={q.id} value={formData[q.id]} onChange={handleInputChange} className="mt-1 block w-full p-2 border rounded-md shadow-sm">
                                {q.options.map(opt => <option key={opt.value} value={opt.value} disabled={opt.value === ""}>{opt.text}</option>)}
                            </select>
                        </div>
                    ))}
                </div>
            </fieldset>

            {error && <p className="text-red-600 text-center font-medium">{error}</p>}

            <div className="mt-8 flex justify-center">
                <button onClick={handleAnalysis} disabled={isLoading} className="w-full md:w-1/2 bg-sky-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-sky-700 transition-colors shadow-md flex items-center justify-center disabled:bg-sky-300 disabled:cursor-not-allowed">
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Analyzing...
                        </>
                    ) : (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" /></svg>
                            Analyze My Re-Attempt Potential
                        </>
                    )}
                </button>
            </div>
        </div>
    );
    
    const renderResults = () => {
        if (isLoading) {
            return (
                <div className="flex justify-center items-center p-16">
                    <div className="loader"></div>
                </div>
            );
        }
    
        if (!results) return null;
    
        if (results.type === 'congratulations') {
            return (
                <div className="results-fade-in">
                    <div className="text-center mb-8 flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <div>
                            <h2 className="text-2xl font-bold text-green-700 text-left">Congratulations!</h2>
                            <p className="text-gray-600 mt-1 text-left">With a score of <strong>{results.totalScore}</strong>, you have an excellent chance of securing a Government MBBS seat this year!</p>
                        </div>
                        <button onClick={resetForm} className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors mt-4 md:mt-0">Start Over</button>
                    </div>
                </div>
            );
        }
    
        if (results.type === 'analysis') {
            const { totalScore, prepScore, supportScore, greenFlags, redFlags, redFlagSuggestions, aiStrategy } = results;
            const prepColor = prepScore > 75 ? 'text-green-600' : (prepScore > 50 ? 'text-orange-500' : 'text-red-600');
            const supportColor = supportScore > 75 ? 'text-green-600' : (supportScore > 50 ? 'text-orange-500' : 'text-red-600');
            
            // Basic markdown to HTML conversion for AI response
            const formattedAiStrategy = aiStrategy
                .replace(/### (.*?)\n/g, '<h3 class="text-xl font-bold text-sky-800 mt-6 mb-3">$1</h3>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\n\s?\*\s/g, '</li><li class="mb-1">')
                .replace(/\n/g, '<br />');

            return (
                <div className="results-fade-in">
                    <div className="text-center mb-8 flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-left">Your Personalized Analysis</h2>
                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                                <div><p className="text-sm font-medium text-gray-500">Academic Score</p><p className="text-2xl font-bold text-sky-700">{totalScore}</p></div>
                                <div><p className="text-sm font-medium text-gray-500">Preparation Score</p><p className={`text-2xl font-bold ${prepColor}`}>{Math.round(prepScore)}%</p></div>
                                <div><p className="text-sm font-medium text-gray-500">Parental Support</p><p className={`text-2xl font-bold ${supportColor}`}>{Math.round(supportScore)}%</p></div>
                            </div>
                        </div>
                        <button onClick={resetForm} className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors mt-4 md:mt-0">Start Over</button>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                <h3 className="font-bold text-lg text-green-800">✅ Green Flags (Your Strengths)</h3>
                                <ul className="mt-2 text-green-700 text-sm list-disc list-inside space-y-1">
                                    {greenFlags.map((flag, i) => <li key={i}>{flag}</li>)}
                                </ul>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                <h3 className="font-bold text-lg text-red-800">🚩 Areas for Improvement</h3>
                                <ul className="mt-2 text-red-700 text-sm list-disc list-inside space-y-1">
                                    {redFlags.map((flag, i) => <li key={i}>{flag}</li>)}
                                </ul>
                            </div>
                        </div>
                        
                        {redFlagSuggestions.length > 0 && (
                            <div className="border-t pt-6">
                                <h3 className="text-2xl font-bold text-sky-800 mb-4">DOPA's Personalized Suggestions</h3>
                                <div className="space-y-4">
                                    {redFlagSuggestions.map((s, i) => (
                                        <div key={i} className="flex items-start">
                                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center">
                                                <svg className="h-6 w-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            </div>
                                            <div className="ml-4">
                                                <p className="font-bold text-gray-800">{s.title}</p>
                                                <p className="text-sm text-gray-600">{s.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="prose max-w-none border-t pt-4 mt-6">
                             <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: `<ul><li class="mb-1">${formattedAiStrategy.substring(formattedAiStrategy.indexOf('</li><li class="mb-1">') > -1 ? formattedAiStrategy.indexOf('</li><li class="mb-1">') + 24 : 0)}</ul>` }}></div>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    };

    if (!isShow) {
      return (
        <div className="h-full bg-gray-50 p-4 py-12 flex">
        <NeetDetailsForm 
          onSubmit={onFormSubmission} 
          isLoading={loading} 
          subheading="we will help you to analyse your preparation"
          title="Enter Your NEET 2025 Details"
          btn="Start Analysis"
        />
        </div>
      );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 py-12">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">NEET Re-Attempt Analysis Tool</h1>
                    
                    {!results && !isLoading ? renderForm() : renderResults()}

                    {/* Final CTA - always visible after first analysis */}
                    {(results || isLoading) && (
                        <div className="mt-8 bg-sky-700 text-white rounded-lg p-8 text-center shadow-xl">
                            <h2 className="text-3xl font-extrabold">Ready for the Next Step?</h2>
                            <p className="mt-4 max-w-2xl mx-auto">This AI analysis is your first step. A formal DOPA NEET Analysis Test (DNAT) and a one-on-one session with our doctor-mentors will give you the definitive, winning strategy.</p>
                            <div className="mt-8">
                                <h3 className="font-bold text-xl text-sky-200">Walk In for Your Personalized DNAT Assessment</h3>
                                <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-8">
                                    <div className="text-center">
                                        <p className="font-semibold">North Kerala Students</p>
                                        <a href="tel:9645202200" className="mt-2 inline-block bg-white text-sky-700 font-bold py-3 px-6 rounded-lg hover:bg-sky-100 transition-colors">Call Calicut Office: 964 520 2200</a>
                                    </div>
                                    <div className="text-center">
                                        <p className="font-semibold">South Kerala Students</p>
                                        <a href="tel:9207802200" className="mt-2 inline-block bg-white text-sky-700 font-bold py-3 px-6 rounded-lg hover:bg-sky-100 transition-colors">Call Thrissur Office: 920 780 2200</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
