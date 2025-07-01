import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Chart, registerables } from 'chart.js/auto';
import NeetDetailsForm from '@/Components/NeetDetailsForm';
import { starpiInstance } from '@/config/strapiInstance';
import { useToast } from "@chakra-ui/react";

// --- DATA HUB (Consider moving to a separate file or fetching from API) ---
const rankPredictorData = [ { score: 640, rank: 5 }, { score: 625, rank: 10 }, { score: 615, rank: 20 }, { score: 600, rank: 80 }, { score: 580, rank: 400 }, { score: 560, rank: 850 }, { score: 550, rank: 1100 }, { score: 540, rank: 1500 }, { score: 530, rank: 2000 }, { score: 520, rank: 2700 }, { score: 510, rank: 3500 }, { score: 500, rank: 5000 }, { score: 490, rank: 6300 }, { score: 470, rank: 8500 }, { score: 450, rank: 10500 }, { score: 430, rank: 13000 }, { score: 410, rank: 16500 }, { score: 390, rank: 20000 }, { score: 370, rank: 24000 }, { score: 350, rank: 29000 }, { score: 330, rank: 34000 }, { score: 310, rank: 39000 }, { score: 0, rank: 50000 }];
const keralaLastRanks = { MBBS_Govt: { SM: 954, EW: 3320, EZ: 2483, MU: 1729, BH: 2253, LA: 3101, DV: 8490, VK: 2197, BX: 4070, SC: 14549, ST: 25783 }, MBBS_Self: { SM: 10095, EW: 16957, EZ: 10510, MU: 11694, BH: 12587, LA: 13192, DV: 11228, VK: 12854, BX: 12605, SC: 16710, ST: 25507 }, BDS_Govt: { SM: 4446, EW: 10900, EZ: 6653, MU: 5037, BH: 11689, LA: 11780, DV: 17137, VK: 8815, SC: 18191, ST: 27074 }, BDS_Self: { SM: 12431, EZ: 15348, MU: 14780, LA: 18415, BH: 15044, DV: 17577, VK: 19548, SC: 18958, ST: 31153 }, BVSc_Govt: { SM: 5313, EW: 9493, EZ: 6621, MU: 6514, LA: 10120, BH: 8815, DV: 8970, VK: 12758, SC: 17394, ST: 25511 }, Agri_Govt: { SM: 10016, EW: 17738, EZ: 13080, MU: 12875, BH: 13437, LA: 19414, DV: 17791, VK: 14311, SC: 21814, ST: 26135 }, Hort_Govt: { SM: 5724, EW: 10608, EZ: 7757, MU: 6390, BH: 10560, LA: 10540, DV: 11938, VK: 11458, SC: 18800, ST: 24009 }, Forestry_Govt: { SM: 15512, EW: 19635, EZ: 15782, MU: 16065, BH: 17505, LA: 20077, DV: 21308, VK: 17448, SC: 23984, ST: 25885 }, Fisheries_Govt: { SM: 18162, EW: 35105, EZ: 21217, MU: 19765, BH: 22331, LA: 26269, DV: 22383, VK: 22800, SC: 25235, ST: 26688 }, BAMS_Govt: { SM: 13155, EW: 22153, EZ: 18125, MU: 16379, BH: 17507, LA: 21492, DV: 24516, VK: 15212, SC: 24907, ST: 29006 }, BHMS_Govt: { SM: 16539, EW: 23783, EZ: 20917, MU: 18945, BH: 22557, LA: 25122, DV: 33020, VK: 20947, SC: 26790, ST: 28776 }};
const aiqCollegeData = [ { state: 'TN', name: 'Madras Medical College', lastRanks: { GEN: 1083, OBC: 1732, EWS: 3184, SC: 22098, ST: 39836 } }, { state: 'TN', name: 'Stanley Medical College', lastRanks: { GEN: 3448, OBC: 4591, EWS: 7103, SC: 43450, ST: 59211 } }, { state: 'KA', name: 'Bangalore Medical College', lastRanks: { GEN: 1479, OBC: 2560, EWS: 3891, SC: 28910, ST: 54821 } }, { state: 'AP', name: 'AIIMS Mangalagiri', lastRanks: { GEN: 1729, OBC: 2890, EWS: 2987, SC: 19876, ST: 35678 } }, { state: 'TS', name: 'Gandhi Medical College', lastRanks: { GEN: 4554, OBC: 5890, EWS: 6901, SC: 48901, ST: 65432 } }, { state: 'TN', name: 'Newer GMCs', lastRanks: { GEN: 18500, OBC: 19000, EWS: 20000, SC: 125000, ST: 150000 } }];
const analysisConfig = { daily_prep_time: { max: 10, area: 'Effort' }, questions: { max: 15, area: 'Practice' }, mocks: { max: 15, area: 'Revision' }, revisions: { max: 15, area: 'Revision' }, mental_before: { max: 10, area: 'Mindset' }, parent_vision: { max: 10, area: 'Support' } };
const parentVisionOptions = [
    { value: '-1', text: 'Select' },
    { value: '10', text: "Support student's decision 100%" },
    { value: '8', text: 'Want student to prepare again' },
    { value: '3', text: 'Promote taking another course' },
    { value: '-5', text: 'Angry or desperate' },
    { value: '0', text: 'Will not support re-repeat' }
];

// --- UTILITY FUNCTIONS ---
const predictRankFromScore = (score) => {
    for (const item of rankPredictorData) { if (score >= item.score) return item.rank; }
    return 50000;
};

// --- SUB-COMPONENTS ---
const Section = ({ title, children, className = "" }) => (
    <section className={`results-section mb-6 border border-gray-200 rounded-lg p-4 ${className}`}>
        <h3 className="section-title text-lg font-semibold text-blue-800 border-b-2 border-blue-200 pb-2 mb-4">{title}</h3>
        {children}
    </section>
);

const InputField = ({ label, id, name, type = "text", ...props }) => (
    <div className="mt-2">
        <label htmlFor={id} className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
        <input id={id} name={name} type={type} {...props} className="w-full p-2 border rounded-md bg-gray-50" />
    </div>
);

const SelectField = ({ label, id, name, ...props }) => (
    <div className="mt-2">
        <label htmlFor={id} className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
        <select id={id} name={name} {...props} className="w-full p-2 border rounded-md bg-gray-50" />
    </div>
);

const ReadinessChart = ({ analysis }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartRef.current && analysis) {
            Chart.register(...registerables);
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                if (chartInstance.current) { chartInstance.current.destroy(); }
                chartInstance.current = new Chart(ctx, {
                    type: 'radar',
                    data: {
                        labels: ['Academics', 'Effort', 'Practice', 'Revision', 'Mindset', 'Support'],
                        datasets: [{ label: 'Readiness', data: Object.values(analysis.scores), fill: true, backgroundColor: 'rgba(56, 189, 248, 0.2)', borderColor: 'rgb(14, 116, 144)', pointBackgroundColor: 'rgb(14, 116, 144)' }]
                    },
                    options: { scales: { r: { beginAtZero: true, max: 100, ticks: { stepSize: 25 } } }, plugins: { legend: { display: false } } }
                });
            }
        }
        return () => { if (chartInstance.current) { chartInstance.current.destroy(); } };
    }, [analysis]);

    return <canvas ref={chartRef}></canvas>;
};

const CourseOptionsModal = ({ data, isOpen, onClose }) => {
    if (!isOpen) return null;
    const checkChance = (cutoff, currentRank) => {
        if (currentRank > 0 && cutoff) {
            if (currentRank <= cutoff) return <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-100 text-emerald-800">High</span>;
            if (currentRank <= cutoff * 1.1) return <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-800">Borderline</span>;
        }
        return <span className="px-2 py-0.5 text-xs rounded-full bg-rose-100 text-rose-800">Low</span>;
    };
    const createSection = (title, courseKey) => {
        const cutoff = keralaLastRanks[courseKey]?.[data.category];
        const chance = checkChance(cutoff, data.rank);
        return <div key={courseKey} className="flex justify-between items-center py-2 border-b"><span className="font-medium text-slate-700">{title}</span> <span>{chance} (Cutoff: ~{cutoff || 'N/A'})</span></div>;
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-3xl font-light text-gray-500 hover:text-gray-800">&times;</button>
                <h3 className="text-2xl font-bold text-slate-800 border-b pb-3">All Possible Course Options</h3>
                <div className="mt-4">
                    {(data.finance === 'prepared' || data.finance === 'loan') && (<>
                        <h4 className="font-semibold text-lg text-slate-800 mt-3">Self-Financing Options</h4>
                        {createSection('MBBS (Self-Financing)', 'MBBS_Self')}
                        {createSection('BDS (Self-Financing)', 'BDS_Self')}
                    </>)}
                    <h4 className="font-semibold text-lg text-slate-800 mt-4">Govt. Allied & AYUSH Courses</h4>
                    {createSection('BDS', 'BDS_Govt')}
                    {createSection('B.V.Sc (Veterinary)', 'BVSc_Govt')}
                    {createSection('B.Sc Agriculture', 'Agri_Govt')}
                    {createSection('B.Sc Horticulture', 'Hort_Govt')}
                    {createSection('B.Sc Forestry', 'Forestry_Govt')}
                    {createSection('B.F.Sc Fisheries', 'Fisheries_Govt')}
                    {createSection('BAMS', 'BAMS_Govt')}
                    {createSection('BHMS', 'BHMS_Govt')}
                </div>
            </div>
        </div>
    );
};


// --- MAIN PAGE COMPONENT ---
const CollegePredictionPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [inputs, setInputs] = useState({
        student_name: '', neet_score: '', aiq_rank: '', student_category: '', aiq_category: '', attempts: '',
        daily_prep_time: '-1', questions: '-1', mocks: '-1', revisions: '-1', mental_before: '-1',
        parent_vision: '-1', financial_setup: ''
    });
    const [isLoading,setLoading] = useState(false);
    const [studentData, setStudentData] = useState(null);
    const [prepAnalysis, setPrepAnalysis] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isShow,setShow] = useState(false);
    const toast = useToast();
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputs(prev => ({ ...prev, [name]: value }));
    };

    const calculatePreparation = useCallback((score) => {
        let scores = { Academics: 0, Effort: 0, Practice: 0, Revision: 0, Mindset: 0, Support: 0 };
        let maxScores = { Effort: 0, Practice: 0, Revision: 0, Mindset: 0, Support: 0 };

        if (score > 620) scores.Academics = 10;
        else if (score > 580) scores.Academics = 8;
        else if (score > 540) scores.Academics = 6;
        else if (score > 500) scores.Academics = 4;
        else scores.Academics = 2;

        for (const key in analysisConfig) {
            const config = analysisConfig[key];
            const value = parseInt(inputs[key]);
            if (!isNaN(value) && value !== -1 && config.area) {
                scores[config.area] += value;
                maxScores[config.area] += config.max;
            }
        }
        
        for (const area in scores) {
            if (area !== 'Academics') {
                scores[area] = maxScores[area] > 0 ? Math.round((scores[area] / maxScores[area]) * 100) : 0;
            } else {
                scores.Academics *= 10;
            }
        }
        return { scores };
    }, [inputs]);

    useEffect(() => {
        const score = parseInt(inputs.neet_score) || 0;
        const selectedParentVision = parentVisionOptions.find(opt => opt.value === inputs.parent_vision);
        const parentVisionText = selectedParentVision ? selectedParentVision.text : '';

        const currentStudentData = {
            name: inputs.student_name || 'Student', score: score, rank: predictRankFromScore(score),
            category: inputs.student_category, aiqRank: parseInt(inputs.aiq_rank) || 0,
            aiqCategory: inputs.aiq_category, attempts: parseInt(inputs.attempts) || 0,
            parentVision: { value: parseInt(inputs.parent_vision), text: parentVisionText },
            finance: inputs.financial_setup
        };
        setStudentData(currentStudentData);
        setPrepAnalysis(calculatePreparation(score));
    }, [inputs, calculatePreparation]);

    const handleSave = async () => {
        if (!studentData) {
            setSaveMessage('No data to save.');
            setTimeout(() => setSaveMessage(''), 3000);
            return;
        }
        setIsSaving(true);
        setSaveMessage('Saving...');

        try {
            const response = await fetch('/api/counseling-data', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ studentData, prepAnalysis }),
            });

            if (!response.ok) { throw new Error(`API Error: ${response.statusText}`); }
            
            setSaveMessage('Data saved successfully!');
        } catch (error) {
            setSaveMessage('Error: Could not save data.');
            console.error('Error saving data:', error.message);
        } finally {
            setIsSaving(false);
            setTimeout(() => setSaveMessage(''), 3000);
        }
    };

    const getChanceHtml = (cutoff, currentRank) => {
        if (currentRank > 0 && cutoff) {
            if (currentRank <= cutoff) return <>✅ <span className="text-emerald-700 font-semibold">High Chance</span> (Cutoff: ~{cutoff})</>;
            if (currentRank <= cutoff * 1.1) return <>⚠️ <span className="text-yellow-700 font-semibold">Borderline</span> (Cutoff: ~{cutoff})</>;
        }
        return <>❌ <span className="text-rose-700 font-semibold">Low Chance</span> (Cutoff: ~{cutoff || 'N/A'})</>;
    };

    const renderVerdict = () => {
        if (!studentData || studentData.score === 0 || studentData.attempts === 0) return null;
        const keralaCutoff = keralaLastRanks.MBBS_Govt[studentData.category];
        const hasKeralaChance = studentData.rank > 0 && keralaCutoff && (studentData.rank <= keralaCutoff);
        const hasAiqChance = studentData.aiqRank > 0 && studentData.aiqCategory && aiqCollegeData.some(c => studentData.aiqRank <= (c.lastRanks[studentData.aiqCategory] || 999999));
        if (hasKeralaChance || hasAiqChance) {
            return <div className="p-4 rounded-lg bg-emerald-100 text-emerald-800 text-center"><h3 className="text-xl font-bold">✅ Congratulations!</h3><p className="text-sm">A Government MBBS seat is likely. The focus should now be on the counseling process.</p></div>;
        }
        let verdictScore = 0;
        if (studentData.rank < 25000) verdictScore += 4; else if (studentData.rank < 40000) verdictScore += 2;
        if (studentData.attempts <= 2) verdictScore += 3; else if (studentData.attempts === 3) verdictScore += 1; else verdictScore -= 2;
        if (studentData.parentVision.value !== -1) verdictScore += (studentData.parentVision.value / 2);
        let title, reason, colorClass;
        if (verdictScore >= 9) { title = "⚠️ Strong Candidate for Re-Repeat"; reason = "Favorable rank and support system."; colorClass = "bg-yellow-100 text-yellow-800"; } 
        else if (verdictScore >= 5) { title = "⚠️ Consider Re-Repeat Carefully"; reason = "Success is possible, but requires a significant strategy change."; colorClass = "bg-yellow-100 text-yellow-800"; } 
        else { title = "❌ Alternative Courses Recommended"; reason = "Repeating is very challenging. Explore other strong career paths."; colorClass = "bg-rose-100 text-rose-800"; }
        return <div className={`p-4 rounded-lg text-center ${colorClass}`}><h3 className="text-xl font-bold">${title}</h3><p className="text-sm">${reason}</p></div>;
    };

    const renderPersonalizedStrategies = () => {
        if (!prepAnalysis) return null;
        let suggestions = { Academics: [], Effort: [], Practice: [], Revision: [], Mindset: [], Support: [] };
        const { scores } = prepAnalysis;
        if (scores.Academics < 70) suggestions.Academics.push("Focus on strengthening core concepts where marks were lost.");
        if (scores.Effort < 70) suggestions.Effort.push("Increase daily study hours and question practice volume consistently.");
        if (scores.Practice < 70) suggestions.Practice.push("Aim for 200-300+ questions per chapter. Volume is key to building speed and accuracy.");
        if (scores.Revision < 70) suggestions.Revision.push("Implement a multi-layered revision strategy and attempt all mock exams.");
        if (scores.Mindset < 70) suggestions.Mindset.push("Work on building confidence and managing exam-day anxiety.");
        if (scores.Support < 70) suggestions.Support.push("Address the home environment; parental support is crucial for a successful repeat year.");
        const createSection = (title, points) => {
            if (points.length === 0) return null;
            return (<div key={title}>
                <h4 className="font-semibold text-slate-600 mt-2">{title}</h4>
                <ul className="list-disc list-inside text-sm text-slate-600">{points.map((p, i) => <li key={i}>{p}</li>)}</ul>
            </div>);
        };
        if (Object.values(suggestions).every(arr => arr.length === 0)) {
            return <p className="text-sm text-slate-500">Preparation and support seem solid. Focus on maintaining consistency.</p>;
        }
        return (<>
            {createSection("Academics", suggestions.Academics)}
            {createSection("Effort & Practice", [...suggestions.Effort, ...suggestions.Practice])}
            {createSection("Revision & Mocks", suggestions.Revision)}
            {createSection("Mindset & Support", [...suggestions.Mindset, ...suggestions.Support])}
        </>);
    };
    
    const renderTalkingPoints = () => {
        if (!studentData || !studentData.score) return <p className="text-sm text-slate-500">Enter student data to see talking points.</p>;
        let points = [];
        const { rank, category, finance, parentVision, aiqRank, aiqCategory, attempts } = studentData;
        const keralaGovtCutoff = keralaLastRanks.MBBS_Govt[category];
        const hasKeralaChance = rank > 0 && category && keralaGovtCutoff && (rank <= keralaGovtCutoff);
        if (hasKeralaChance) {
            points.push(`Congratulations! With a predicted rank of ~${rank}, there's a strong possibility for a Govt. MBBS seat in Kerala.`);
        } else {
             if(aiqRank > 0 && aiqCategory) {
                const hasAiqChance = aiqCollegeData.some(c => aiqRank <= (c.lastRanks[aiqCategory] || 999999));
                if (hasAiqChance) { points.push(`Congratulations! While a Kerala Govt. seat is tough, there's a good chance for a Govt. MBBS seat through the All India Quota.`);
                } else { points.push("With no clear chance in Kerala or AIQ for Govt. MBBS, it is important to be realistic. The hope for an AIQ seat can often be misleading."); }
             }
             if (attempts >= 3) points.push(`This is attempt #${attempts}. A repeat must involve a fundamental change in strategy.`);
             if(parentVision.value < 5 && !isNaN(parentVision.value) && parentVision.value !== -1) points.push(`The parent's current mindset (${parentVision.text.toLowerCase()}) is a major hurdle. We need to address this directly.`);
             if (finance === 'not_possible') points.push("Since finances for self-financing seats are a concern, a focused re-repeat is the most viable path to MBBS.");
        }
        if (points.length === 0 && studentData.score > 0) points.push("Begin by discussing the student's primary goal and motivation for the upcoming year.");
        return <ul className="list-disc list-inside space-y-2 text-slate-600">{points.map((p, i) => <li key={i}>{p}</li>)}</ul>;
    };

    if (!isMounted) {
        return null; // Or a loading spinner
    }

    const onFormSubmission = async (data) => {
        console.log(data);
        setLoading(true);
        try {
            starpiInstance.defaults.headers.common['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_STRAPIE_TOKEN}`;
            starpiInstance.defaults.headers.common['Content-Type'] = 'application/json';

            const response = await starpiInstance.post('/api/college-prection-neet-scores', {
                data: data,
       
            });
            if (response.status === 200) {
                setShow(true)
                toast({
                    status: "success",
                    description: "Registered Successfully!",
                    title: "Great!",
                });
                setLoading(false);
            } else {
                setLoading(false);
                toast({
                    status: "error",
                    description: "Something went wrong!",
                    title: "Ugh no!",
                });
            }
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };
    return (
        <div className="bg-gray-100 font-sans">
            {!isShow ? <NeetDetailsForm onSubmit={onFormSubmission} isLoading={isLoading} /> : <></>}
           {isShow && <>
            <style>{`
                body { font-family: 'Inter', sans-serif; scroll-behavior: smooth; }
                .results-section { margin-bottom: 1.5rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; }
                .section-title { font-size: 1.125rem; font-weight: 600; color: #1e3a8a; border-bottom: 2px solid #93c5fd; padding-bottom: 0.5rem; margin-bottom: 1rem; }
                @media print {
                    body * { visibility: hidden; }
                    #results-panel, #results-panel * { visibility: visible; }
                    #results-panel { position: absolute; left: 0; top: 0; width: 100%; box-shadow: none; border: none; }
                    #input-panel, #header, #print-btn, .no-print { display: none !important; }
                }
            `}</style>
            <div className="container mx-auto p-6">
                <header id="header" className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-sky-800">DNAT Counselor's Dashboard</h1>
                    <p className="text-slate-600">Enter student data for instant, data-driven counseling.</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left Panel: Data Input */}
                    <div id="input-panel" className="bg-white p-6 rounded-lg shadow-md">
                        <form>
                            <fieldset className="mb-6">
                                <legend className="text-xl font-semibold border-b pb-2 mb-4 text-slate-700">Student & Score</legend>
            
                                <InputField label="NEET Score" id="neet_score" name="neet_score" type="number" placeholder="e.g., 580" value={inputs.neet_score} onChange={handleInputChange} />
                                <InputField label="All India Rank" id="aiq_rank" name="aiq_rank" type="number" placeholder="e.g., 25000" value={inputs.aiq_rank} onChange={handleInputChange} />
                                <SelectField label="Kerala Category" id="student_category" name="student_category" value={inputs.student_category} onChange={handleInputChange}><option value="">Select</option><option value="SM">SM</option><option value="EW">EWS</option><option value="EZ">Ezhava</option><option value="MU">Muslim</option><option value="BH">BH</option><option value="LA">LA</option><option value="DV">DV</option><option value="VK">VK</option><option value="BX">BX</option><option value="SC">SC</option><option value="ST">ST</option></SelectField>
                                <SelectField label="AIQ Category" id="aiq_category" name="aiq_category" value={inputs.aiq_category} onChange={handleInputChange}><option value="">Select</option><option value="GEN">GEN</option><option value="OBC">OBC</option><option value="EWS">EWS</option><option value="SC">SC</option><option value="ST">ST</option></SelectField>
                                <InputField label="NEET Attempts" id="attempts" name="attempts" type="number" placeholder="e.g., 2" value={inputs.attempts} onChange={handleInputChange} />
                            </fieldset>
                            <fieldset className="mb-6">
                                <legend className="text-xl font-semibold border-b pb-2 mb-4 text-slate-700">Detailed Preparation Analysis</legend>
                                <SelectField label="Avg. daily study hours?" id="daily_prep_time" name="daily_prep_time" value={inputs.daily_prep_time} onChange={handleInputChange}><option value="-1">Select</option><option value="10">12+ hr</option><option value="8">10-12 hr</option><option value="6">8-10 hr</option><option value="4">6-8 hr</option><option value="0">&lt;6 hr</option></SelectField>
                                <SelectField label="Avg. questions per chapter?" id="questions" name="questions" value={inputs.questions} onChange={handleInputChange}><option value="-1">Select</option><option value="15">300+</option><option value="12">200+</option><option value="8">100+</option><option value="4">&lt;100</option><option value="0">&lt;50</option></SelectField>
                                <SelectField label="Mock exams attended?" id="mocks" name="mocks" value={inputs.mocks} onChange={handleInputChange}><option value="-1">Select</option><option value="15">All</option><option value="12">Mostly</option><option value="8">Some</option><option value="4">Very Few</option><option value="0">Not at all</option></SelectField>
                                <SelectField label="Number of revisions?" id="revisions" name="revisions" value={inputs.revisions} onChange={handleInputChange}><option value="-1">Select</option><option value="15">Multiple</option><option value="10">Few times</option><option value="5">One time</option><option value="0">None</option></SelectField>
                                <SelectField label="Mentality Before Exam?" id="mental_before" name="mental_before" value={inputs.mental_before} onChange={handleInputChange}><option value="-1">Select</option><option value="10">Confident</option><option value="6">Hopeful</option><option value="2">Anxious</option><option value="0">Hopeless</option></SelectField>
                            </fieldset>
                            <fieldset>
                                <legend className="text-xl font-semibold border-b pb-2 mb-4 text-slate-700">Home Environment</legend>
                                <SelectField label="Parent's vision?" id="parent_vision" name="parent_vision" value={inputs.parent_vision} onChange={handleInputChange}>
                                    {parentVisionOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.text}</option>)}
                                </SelectField>
                                <SelectField label="Readiness for Self-Financing?" id="financial_setup" name="financial_setup" value={inputs.financial_setup} onChange={handleInputChange}><option value="">Select</option><option value="prepared">Prepared</option><option value="loan">Needs Loan</option><option value="difficult">Difficult</option><option value="not_possible">Not Possible</option></SelectField>
                            </fieldset>
                        </form>
                    </div>

                    {/* Right Panel: Counseling Guidance */}
                    <div className="sticky top-6">
                        <div id="results-panel" className="bg-white p-6 rounded-lg shadow-lg max-h-[95vh] overflow-y-auto">
                            {studentData && (<>
                                <Section title="Student Snapshot">
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div><strong>Name:</strong> <span className="font-normal">{studentData.name}</span></div>
                                        <div><strong>NEET Score:</strong> <span className="font-normal">{studentData.score || 'N/A'}</span></div>
                                        <div><strong>Predicted KE Rank:</strong> <span className="font-normal">~{studentData.rank || 'N/A'}</span></div>
                                        <div><strong>AIQ Rank:</strong> <span className="font-normal">{studentData.aiqRank || 'N/A'}</span></div>
                                    </div>
                                </Section>
                                <Section title="1. Primary Goal: Government MBBS Analysis">
                                    <div><strong>Kerala Govt. MBBS Status:</strong> {getChanceHtml(keralaLastRanks.MBBS_Govt[studentData.category], studentData.rank)}</div>
                                    <div className="mt-2">
                                        <strong>All India Quota (AIQ) Status: </strong>
                                        {studentData.aiqRank > 0 && studentData.aiqCategory ? (aiqCollegeData.some(c => studentData.aiqRank <= (c.lastRanks[studentData.aiqCategory] || 999999)) ? <span className="text-emerald-700 font-semibold">Possible Options</span> : <span className="text-rose-700 font-semibold">Low Chance</span>) : <span className="text-slate-500">Enter AIQ Rank</span>}
                                    </div>
                                </Section>
                                <section className="results-section p-0 border-none">{renderVerdict()}</section>
                                {!(studentData.rank > 0 && keralaLastRanks.MBBS_Govt[studentData.category] && studentData.rank <= keralaLastRanks.MBBS_Govt[studentData.category]) && (
                                    <Section title="2. Secondary Options & Next Steps">
                                        <button onClick={() => setIsModalOpen(true)} className="w-full bg-sky-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-700 no-print">
                                            Explore All Other Course Options
                                        </button>
                                    </Section>
                                )}
                                <Section title="Key Talking Points">{renderTalkingPoints()}</Section>
                                <Section title="Readiness Analysis">
                                    <ReadinessChart analysis={prepAnalysis} />
                                </Section>
                                <Section title="Personalized Strategy">{renderPersonalizedStrategies()}</Section>
                                <Section title="Private Counselor Notes" className="no-print">
                                    <textarea className="w-full p-2 border rounded-md" rows={3} placeholder="Notes for internal follow-up..."></textarea>
                                </Section>
                            </>)}
                        </div>
                    </div>
                </div>
            </div>
            {studentData && <CourseOptionsModal data={studentData} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
            </>}
        </div>
    );
};

export default CollegePredictionPage;
