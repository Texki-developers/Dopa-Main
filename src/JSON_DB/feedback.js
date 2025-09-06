// This file separates the static data from the component logic for better organization.

export const feedbackMap = {
    q1: {
        responses: ["Rarely", "Never"],
        category: "critical",
        theme: "Schedule Adherence",
        message: "Following a structured schedule is fundamental for steady progress. Lack of consistency can lead to piled-up backlogs and stress.",
        suggestion: "Download a sample DOPA schedule and adapt it. Start by following it for just one day, then build momentum.",
        cue: "🔴"
    },
    q2: {
        responses: ["No", "Not sure"],
        category: "attention",
        theme: "Revision Awareness",
        message: "The final 3 months are a crucial period for intensive revision. Being unaware can put you at a significant disadvantage.",
        suggestion: "Start planning your revision blocks now. Focus on finishing your syllabus with enough buffer time for multiple revisions.",
        cue: "🟠"
    },
    q3: {
        responses: ["2-4 hrs", "4-6 hrs"],
        category: "critical",
        theme: "Study Hours Low",
        message: "NEET requires both quality and quantity of study. Less than 6 effective hours daily might not be sufficient to cover the vast syllabus.",
        suggestion: "Strategically increase your study hours. Use techniques like the Pomodoro method (25 min study, 5 min break) to build stamina.",
        cue: "🔴"
    },
    q4: {
        responses: ["<100", "100-300"],
        category: "critical",
        theme: "MCQ Practice Deficit",
        message: "MCQ practice is essential for building speed, accuracy, and exam temperament. Insufficient practice leads to poor time management and silly mistakes.",
        suggestion: "Aim for a minimum of 300+ MCQs per chapter before your weekly exam. Quality analysis of mistakes is as important as quantity.",
        cue: "🔴"
    },
    q5: {
        responses: ["1-2 hr", ">2 hr"],
        category: "attention",
        theme: "Note Reading Excessive",
        message: "Spending too much time reading notes can be a form of passive learning. Active problem-solving (MCQs) is a higher priority.",
        suggestion: "Limit dedicated note reading to under 1 hour daily. Use active recall methods like flashcards or teaching a concept to a friend.",
        cue: "🟠"
    },
    q6: {
        responses: ["Rarely", "Never", "Sometimes"],
        category: "critical",
        theme: "Exam Attendance Gap",
        message: "Skipping mocks, even when unprepared, means missing a chance to build exam temperament and identify weaknesses under pressure.",
        suggestion: "Treat every mock exam as the real NEET. Attend them all to overcome exam fear and perfect your strategy.",
        cue: "🔴"
    },
    q7: {
        responses: ["Rarely", "Never", "Sometimes"],
        category: "critical",
        theme: "Exam Analysis Gap",
        message: "Taking an exam without analyzing it is a wasted effort. The real learning happens when you understand WHY you made a mistake.",
        suggestion: "Dedicate 2-3 hours after every mock for detailed mistake analysis. Maintain a mistake notebook.",
        cue: "🔴"
    },
    q8: {
        responses: ["Rarely", "Never", "Sometimes"],
        category: "critical",
        theme: "Revision Aids Lacking",
        message: "Short notes and formula sheets are your best friends during the final revision phase. Not having them makes quick reviews difficult.",
        suggestion: "Start preparing short notes alongside each chapter. Use DOPA's templates or create your own.",
        cue: "🔴"
    },
    q9: { 
        "1-month noticeable improvement": {
            category: "attention",
            theme: "Progress Expectation",
            message: "⚠️ Progress takes longer; cultivate patience with consistent study and revision.",
            cue: "🟠"
        },
        "2-3 months steady growth": {
            category: "ontrack",
            theme: "Progress Expectation",
            message: "👍 Great start; maintain regular practice and focus on fundamentals.",
            cue: "✅"
        },
        "4-6 months gradual": {
            category: "ontrack",
            theme: "Progress Expectation",
            message: "✅ Realistic expectation; intensify study and revision phases timely.",
            cue: "✅"
        },
        "6-8 months sustained effort": {
            category: "ontrack",
            theme: "Progress Expectation",
            message: "🌟 Excellent mindset; persistence is key to lasting success.",
            cue: "✅"
        },
        "Unsure": {
            category: "attention",
            theme: "Progress Expectation",
            message: "🤔 Feeling unsure is okay. Talk to mentors and counselors to build clarity and confidence in the process.",
            cue: "🟠"
        }
    },
    q11: {
        responses: ["High", "Very high"],
        category: "critical",
        theme: "High Stress Levels",
        message: "High stress can severely impact memory, focus, and performance. Managing it is not a luxury, but a necessity.",
        suggestion: "Practice mindfulness and relaxation techniques daily. Ensure you're getting 7-8 hours of sleep. Consider talking to a counselor.",
        cue: "🔴"
    },
    q12: {
        responses: ["Rarely", "Never", "Occasionally"],
        category: "attention",
        theme: "No Mindfulness Practice",
        message: "Mindfulness and meditation are powerful tools to reduce anxiety, improve focus, and enhance overall well-being during this demanding journey.",
        suggestion: "Incorporate just 5-10 minutes of daily mindfulness or guided meditation. There are many free apps and resources available.",
        cue: "🟠"
    },
    q13: {
        responses: ["Rarely", "Never", "Sometimes"],
        category: "critical",
        theme: "Unrealistic Schedule",
        message: "An unsustainable schedule leads to burnout, not success. A balanced day with adequate breaks, sleep, and relaxation is more productive.",
        suggestion: "Adjust your plan to a sustainable ~12 hours/day, which includes study, breaks, meals, and stress relief. Use a balanced schedule template.",
        cue: "🔴"
    },
    q14: {
        responses: ["Doubtful", "Not confident", "Neutral"],
        category: "critical",
        theme: "Confidence Building Needed",
        message: "Self-doubt is the biggest enemy of a NEET aspirant. Your belief in your methods and your ability is what will carry you through tough times.",
        suggestion: "Focus on a growth mindset. Seek mentor support, celebrate your daily achievements, and consider counseling to build robust self-confidence.",
        cue: "🔴"
    },
};

export const q10Suggestions = {
    'Time management': '🕒 Use time-blocking and focused to-do lists; limit distractions.',
    'Motivation': '🔥 Break goals into small wins, reward progress, seek community support.',
    'Anxiety': '🌿 Practice daily mindfulness, use relaxation apps, consider counseling.',
    'Concepts': '📚 Use varied resources and focused revision sessions on weak topics.',
    'Practice discipline/quantity': '🎯 Follow daily MCQ and revision targets; track progress diligently.',
    'Other': '💡 For other challenges, we highly recommend a personalized discussion. Please reach out to our counseling team for follow-up.'
};
