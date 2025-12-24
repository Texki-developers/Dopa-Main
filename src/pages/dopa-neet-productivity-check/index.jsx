"use client";

import React, { useState, useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import {
  ChevronRight,
  ChevronLeft,
  Download,
  Calendar,
  User,
  Phone,
  BookOpen,
  AlertCircle,
  CheckCircle,
  Share2,
  Printer,
  Stethoscope,
  Activity,
  ArrowRight,
  Sunrise,
  FileText,
  Lock,
  Youtube,
  Heart,
  Zap,
  Coffee,
  Moon,
  MessageCircle,
  Info,
  Brain,
  Clock,
  Shield,
  Target,
  Video,
} from "lucide-react";
import { useToast } from "@chakra-ui/react";
import { authenticatedStrapiInstance } from "@/config/strapiInstance";

// --- BRANDING COLORS ---
// Primary Navy: #00205b
// Secondary Cyan: #00b2fa

const AXES_CONFIG = {
  routine: { label: "Routine", fullLabel: "Routine & Sleep", maxScore: 10 },
  method: { label: "Method", fullLabel: "Learning Strategy", maxScore: 10 },
  temperament: { label: "Mindset", fullLabel: "Exam Anxiety", maxScore: 10 },
  resilience: {
    label: "Resilience",
    fullLabel: "Emotional Strength",
    maxScore: 10,
  },
  feedback: {
    label: "Analysis",
    fullLabel: "Correction Mechanism",
    maxScore: 10,
  },
  focus: {
    label: "Focus",
    fullLabel: "Environment & Distraction",
    maxScore: 10,
  },
};

// --- QUESTIONS (Shuffled options) ---
const QUESTIONS = [
  // --- AXIS 1: ROUTINE ---
  {
    id: 1,
    axis: "routine",
    text: "Which statement best describes your wake-up routine?",
    options: [
      {
        text: "My wake-up time varies day-to-day based on when I sleep.",
        value: 1,
      },
      {
        text: "I start my study routine shortly after waking up, regardless of the time.",
        value: 5,
      }, // Ideal
      {
        text: "I wake up early but often go back to sleep for a while.",
        value: 2,
      },
      {
        text: "I wake up at a fixed time but take time to start studying.",
        value: 3,
      },
      {
        text: "I wait for a specific 'perfect' time (like 6:00 AM) to begin my day.",
        value: 2,
      },
    ],
  },
  {
    id: 2,
    axis: "routine",
    text: "On average, how many hours do you sleep daily?",
    options: [
      { text: "More than 9 hours.", value: 1 },
      { text: "Between 6-7 hours consistently.", value: 5 }, // Ideal
      { text: "Less than 5 hours.", value: 2 },
      { text: "Between 8-9 hours.", value: 3 },
      { text: "My sleep duration changes drastically every day.", value: 1 },
    ],
  },
  // --- AXIS 2: METHODOLOGY ---
  {
    id: 3,
    axis: "method",
    text: "How do you approach a new chapter from start to finish?",
    options: [
      {
        text: "Read notes -> Solve a few questions -> Skip exam if not confident.",
        value: 2,
      },
      {
        text: "Watch Class -> Write Notes -> Read Notes (1-2x) -> Practice (Open to Closed Book) -> Exam -> Analysis -> Short Notes.",
        value: 5,
      }, // Ideal
      {
        text: "Read textbook -> Watch Video -> Try to solve only hard questions directly.",
        value: 2,
      },
      {
        text: "Watch Video -> Memorize Notes -> Write Exam directly without practice.",
        value: 1,
      },
      {
        text: "Attend Class -> Read Notes -> Solve only easy questions -> Skip Exam.",
        value: 1,
      },
    ],
  },
  {
    id: 4,
    axis: "method",
    text: "What is your goal when practicing questions for a topic?",
    options: [
      {
        text: "To finish a specific number of questions (e.g., 50) regardless of understanding.",
        value: 3,
      },
      {
        text: "To check the solution key immediately if I get stuck.",
        value: 1,
      },
      {
        text: "To practice (Open Book -> Closed Book) until I attain mastery and speed.",
        value: 5,
      }, // Ideal
      { text: "To solve only the questions that look easy.", value: 2 },
      {
        text: "To read the theory perfectly before touching any question.",
        value: 1,
      },
    ],
  },
  // --- AXIS 3: TEMPERAMENT ---
  {
    id: 5,
    axis: "temperament",
    text: "If a Unit Test is scheduled for tomorrow and you are 70% prepared:",
    options: [
      {
        text: "I write it but leave unsure questions blank to avoid negatives.",
        value: 3,
      },
      {
        text: "I feel physically unwell (headache/stomach ache) and might skip.",
        value: 2,
      },
      {
        text: "I usually skip it to prepare fully for the next one.",
        value: 1,
      },
      { text: "I write the exam attempting all possible questions.", value: 5 }, // Ideal
      {
        text: "I write it but may not finish if I feel discouraged.",
        value: 1,
      },
    ],
  },
  {
    id: 6,
    axis: "temperament",
    text: "During an exam, if you encounter 3 difficult questions in a row:",
    options: [
      { text: "I feel frustrated with the difficulty level.", value: 2 },
      {
        text: "I skip them immediately and move to the next question.",
        value: 5,
      }, // Ideal
      {
        text: "I spend extra time trying to solve them to get them right.",
        value: 2,
      },
      { text: "I feel anxious and my mind goes blank.", value: 1 },
      { text: "I guess the answers to move forward.", value: 1 },
    ],
  },
  // --- AXIS 4: RESILIENCE ---
  {
    id: 7,
    axis: "resilience",
    text: "If you have a mild headache or feel low energy during study time:",
    options: [
      {
        text: "I switch to an easier subject (Bio/Chem) or take a short rest to re-energize.",
        value: 5,
      }, // Ideal
      { text: "I sit at my desk but struggle to focus.", value: 2 },
      { text: "I stop studying and rest or use my phone.", value: 1 },
      { text: "I discuss my feelings with friends or family.", value: 2 },
      {
        text: "I force myself to continue with the same difficult topic.",
        value: 3,
      },
    ],
  },
  {
    id: 8,
    axis: "resilience",
    text: "When you receive a lower-than-expected score in a mock test:",
    options: [
      { text: "I accept the score and continue with my routine.", value: 3 },
      { text: "I review the paper to identify specific mistakes.", value: 5 }, // Ideal
      {
        text: "I feel the questions were too difficult or out of syllabus.",
        value: 2,
      },
      {
        text: "I feel very discouraged and may skip studying for a day.",
        value: 1,
      },
      { text: "I prefer not to discuss or look at the result.", value: 2 },
    ],
  },
  // --- AXIS 5: FEEDBACK ---
  {
    id: 9,
    axis: "feedback",
    text: "How do you handle questions you got wrong in an exam?",
    options: [
      { text: "I note them down but rarely review them later.", value: 3 },
      {
        text: "I usually discard the question paper after checking marks.",
        value: 1,
      },
      { text: "I write them down and review them periodically.", value: 5 }, // Ideal
      { text: "I check the correct answer key once.", value: 2 },
      {
        text: "I trust I will remember the correct method next time.",
        value: 2,
      },
    ],
  },
  {
    id: 10,
    axis: "feedback",
    text: "What is your primary method for revising an old chapter?",
    options: [
      { text: "I read the textbook chapters again.", value: 3 },
      { text: "I use my own short notes or summary sheets.", value: 5 }, // Ideal
      { text: "I re-read my class notes completely.", value: 1 },
      { text: "I watch a summary or 'One-Shot' video.", value: 2 },
      { text: "I usually don't revise until just before an exam.", value: 1 },
    ],
  },
  // --- AXIS 6: FOCUS ---
  {
    id: 11,
    axis: "focus",
    text: "Which describes your typical study environment?",
    options: [
      { text: "I study in a common area where others are present.", value: 2 },
      {
        text: "I study in a quiet space with my phone away or silent.",
        value: 5,
      }, // Ideal
      { text: "I keep my phone nearby and check notifications.", value: 1 },
      {
        text: "My desk often has books and materials from various subjects.",
        value: 3,
      },
      { text: "I often study while sitting on my bed.", value: 1 },
    ],
  },
];

// --- SIMPLE LANGUAGE FEEDBACK ---
const getDetailedFeedback = (axis, score) => {
  const map = {
    routine: {
      weak: "You struggle with a consistent start.",
      strong: "Your routine is solid.",
      tip: "Focus on starting your study within 20 mins of waking up. Aim for 6-7 hours sleep.",
    },
    method: {
      weak: "Your study method is a bit passive.",
      strong: "You are an active learner.",
      tip: "Use the 'Open Book' method: Solve questions with notes open to learn faster.",
    },
    temperament: {
      weak: "Exam fear is holding you back.",
      strong: "You have a fearless mindset.",
      tip: "Attempt exams aggressively. It is better to make mistakes now than in NEET.",
    },
    resilience: {
      weak: "Small setbacks affect your mood.",
      strong: "You bounce back quickly.",
      tip: "If you feel low, switch to an easier subject. Don't stop the day completely.",
    },
    feedback: {
      weak: "You are not learning from mistakes.",
      strong: "You analyze your errors well.",
      tip: "Maintain a 'Mistake Book' and read it every Sunday.",
    },
    focus: {
      weak: "Distractions are stealing your time.",
      strong: "You have great focus.",
      tip: "Create a 'No Phone Zone' while studying.",
    },
  };

  if (score >= 7) {
    return { status: map[axis].strong, action: "Keep doing this!" };
  } else {
    return { status: map[axis].weak, action: map[axis].tip };
  }
};

// --- READ MORE PAGE COMPONENT (INTEGRATED) ---
const ReadMorePage = ({ onBack }) => {
  const [lang, setLang] = useState("english"); // 'english' or 'malayalam'

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919645302200?text=I%20want%20to%20book%20a%20DNAT%20session",
      "_blank"
    );
  };

  const content = {
    english: {
      title: "The December Protocol: The 'Mid-Year Pivot'",
      subtitle: "Shifting from 'Student Mode' to 'Candidate Mode'",
      toggle: "മലയാളത്തിൽ വായിക്കാം",
      intro:
        "Status: Expert/Dedicated Preparation Stage. Timeline: December (The Critical Junction). At the 6-month mark, 90% of serious aspirants hit a wall. The initial adrenaline has faded, but exam fear hasn't kicked in. It's time to pivot.",

      diagnosisTitle: "1. The Situational Analysis (The 'December Diagnosis')",
      diagnosisDesc:
        "The Trap: You feel you have 'forgotten everything' from the first 3 months. The Danger: You try to re-watch lectures for old chapters, creating a backlog in current chapters. The Goal: Stop trying to 'Finish Syllabus.' Start trying to 'Secure Marks.'",

      pivotTitle: "2. The Strategic Pivot: The Input/Output Flip",
      pivotDesc:
        "In June, you were a Learner (70% Input / 30% Output). Now, you must become a Solver (40% Input / 60% Output). Reading gives the 'Illusion of Competence.' Solving exposes reality.",
      pivotAction:
        "Actionable Protocol: Stop 'Re-watching'. If you forget a Physics chapter, do NOT watch a One-Shot video (Passive). Instead, open 30 Solved Examples and copy them (Active). For revision, take a Chapter Test *first* ('Reverse Study'). Let mistakes tell you what to read.",

      backlogTitle: "3. The 'Backlog vs. Current' Conflict",
      backlogDesc:
        "The #1 killer in December. The QMentr Rule: Never Sacrifice Today for Yesterday.",
      backlogProtocol: [
        "Mon-Sat: 100% focus on the Current Topic being taught. Ignore backlog.",
        "The 'Sunday Surgery': Sunday is the ONLY day allowed for backlogs.",
        "The 'Block Strategy': Don't try to finish a whole backlog chapter. Pick ONE sub-topic (e.g., 'Just Projectile Motion'). A small win is better than a large failure.",
      ],

      wallTitle: "4. Breaking the '500-Mark Wall'",
      wallDesc:
        "Stuck between 450-550? It's an Execution Issue, not a Knowledge Issue. You need the 'Mistake Autopsy'.",
      wallTypes: [
        {
          type: "Type A (Silly):",
          fix: "Calculation error, didn't read 'NOT'. Fix: Slow down reading. Underline keywords.",
        },
        {
          type: "Type B (Conceptual):",
          fix: "Wrong formula. Fix: Re-read that specific concept in NCERT.",
        },
        {
          type: "Type C (Blind Spot):",
          fix: "Didn't know the topic. Fix: Add to Sunday list.",
        },
      ],
      wallTarget:
        "Target: Reduce Type A errors to <5%. That alone jumps score from 500 to 560.",

      subjectTitle: "5. Subject-Specific 'December Tactics'",
      subjects: [
        {
          name: "Physics: The 'Rough Sheet' Drill",
          desc: "Fear of new questions? Solve 30 questions in 45 mins. If stuck, peek at the solution immediately. Learn the method. Draw FBDs for every question.",
        },
        {
          name: "Chemistry: The Segmentation",
          desc: "Physical: Formula sheet + Practice. Organic: Daily 'Reaction Map' drawing. Inorganic: Start the 'NCERT Loop' (Read one block daily for 20 mins).",
        },
        {
          name: "Biology: The 'Speed-Reading' Era",
          desc: "Answer in 20 seconds. Practice 50 'Statement Based' questions daily to learn the NEET language.",
        },
      ],

      psychoTitle: "6. Psychological Defense: Handling the 'Dip'",
      psychoDesc:
        "December burnout peaks now. You feel like you're working all day with no progress. Motivation follows action; it does not precede it.",
      psychoAction: "Mandatory Daily Rituals:",
      psychoList: [
        "The Daily Win: Do not sleep until you write down ONE specific thing you mastered today.",
        "Visualizing Progress: Use the 'Traffic Light' system on your tracker. 3 Green days bring confidence back.",
        "Stress Management: 10 mins rapid stair climbing & breathing exercises daily. Prepare for pressure now.",
      ],

      sleepTitle: "7. Health & Exam Protocol",
      sleepDesc:
        "Fix the sleep cycle. 6-7 hours of continuous sleep is non-negotiable for memory. If you sleep at 3 AM now, your brain will be dead at 2 PM in May.",

      checklistTitle: "Summary Checklist for December",
      checklist: [
        "Shift Ratio: 60% Solving / 40% Reading.",
        "Backlogs: Only on Sundays.",
        "Exam Policy: Attend ALL exams even if 0% prepared. Mistakes are golden learning opportunities. Never skip.",
        "Health: 11 PM - 6 AM Sleep routine recommended.",
      ],
      mantra: "Enough Thinking. Pick up the pen. The only way out is through.",

      mentorTitle: "Need a Personal Strategy?",
      mentorDesc:
        "This is the DOPA uniqueness. We don't give generic advice. To tailor this 'December Protocol' to your specific situation, talk to a DOPA Academic Doctor.",
      mentorContactName: "Kadeeja DOPA",
      mentorContactRole: "Programme Coordinator",
      mentorContactNumber: "+91 96453 02200",
      mentorAction: "Chat to Book DNAT Session",
    },
    malayalam: {
      title: "ഡിസംബർ പ്രോട്ടോക്കോൾ: 'മിഡ്-ഇയർ പിവറ്റ്'",
      subtitle: "'Student Mode' ൽ നിന്നും 'Candidate Mode' ലേക്ക്",
      toggle: "Read in English",
      intro:
        "നിങ്ങൾ ഒരു പ്രധാനപ്പെട്ട ഘട്ടത്തിലാണ്. ജൂണിലെ ആവേശം പോയി, പക്ഷെ പരീക്ഷ പേടി വന്നിട്ടില്ല. 90% കുട്ടികളും തളരുന്ന സമയമാണിത്. 'സിലബസ് തീർക്കുക' എന്നതിലല്ല, 'മാർക്ക് വാങ്ങുക' എന്നതിലാണ് ഇനി ശ്രദ്ധ വേണ്ടത്.",

      diagnosisTitle: "1. ഡിസംബർ പ്രതിസന്ധി",
      diagnosisDesc:
        "ആദ്യത്തെ 3 മാസത്തെ കാര്യങ്ങൾ മറന്നുപോയെന്ന തോന്നൽ വരാം. അപകടം: പഴയ ചാപ്റ്ററുകൾക്ക് വീണ്ടും വീഡിയോ കാണാൻ നിൽക്കരുത്. അത് ഇപ്പോഴത്തെ പഠനത്തെ ബാധിക്കും.",

      pivotTitle: "2. പഠനരീതി മാറ്റാം (Input/Output Flip)",
      pivotDesc:
        "ജൂണിൽ നിങ്ങൾ പഠിക്കുകയായിരുന്നു (വായന). ഇപ്പോൾ നിങ്ങൾ 'Solver' ആകണം (60% ചോദ്യങ്ങൾ ചെയ്യണം). വായന നിങ്ങൾക്ക് 'എല്ലാം അറിയാം' എന്ന തോന്നൽ തരും, പക്ഷെ ചോദ്യം ചെയ്യുമ്പോഴേ സത്യം അറിയൂ.",
      pivotAction:
        "ചെയ്യേണ്ടത്: ഫിസിക്സ് ചാപ്റ്റർ മറന്നെങ്കിൽ വീണ്ടും ക്ലാസ്സ് കാണരുത്. പകരം 30 ചോദ്യങ്ങൾ (Solved Examples) നോക്കി എഴുതുക. റിവിഷന് വേണ്ടി ആദ്യം ടെസ്റ്റ് എഴുതുക ('Reverse Study').",

      backlogTitle: "3. ബാക്ക്ലോഗ് vs കറന്റ് ടോപ്പിക്",
      backlogDesc:
        "ഇന്നത്തെ പഠനം നാളത്തേക്ക് മാറ്റിവെക്കരുത്. പഴയത് പഠിക്കാൻ വേണ്ടി പുതിയത് പഠിക്കാതിരുന്നാൽ, ഭാവിയിൽ പുതിയൊരു ബാക്ക്ലോഗ് കൂടി ഉണ്ടാകും.",
      backlogProtocol: [
        "തിങ്കൾ - ശനി: ഇപ്പോൾ ക്ലാസ്സിൽ എടുക്കുന്ന ടോപ്പിക്ക് മാത്രം പഠിക്കുക.",
        "'സൺ‌ഡേ സർജറി': ഞായറാഴ്ച മാത്രം പഴയ ബാക്ക്ലോഗിനായി മാറ്റിവെക്കുക.",
        "'ബ്ലോക്ക് സ്ട്രാറ്റജി': ഒരു ചാപ്റ്റർ മുഴുവൻ തീർക്കാൻ നോക്കരുത്. ഒരു ചെറിയ ഭാഗം മാത്രം പഠിക്കുക.",
      ],

      wallTitle: "4. 500-മാർക്ക് കടമ്പ കടക്കാൻ",
      wallDesc:
        "450-550 ൽ നിൽക്കുന്നത് അറിവിന്റെ കുഴപ്പമല്ല, പരീക്ഷ എഴുതുന്ന രീതിയുടെ കുഴപ്പമാണ്. തെറ്റുകളെ പോസ്റ്റ്മോർട്ടം ചെയ്യണം (Mistake Autopsy).",
      wallTypes: [
        {
          type: "Type A (Silly):",
          fix: "ശ്രദ്ധക്കുറവ്. പരിഹാരം: ചോദ്യം വായിക്കുന്ന വേഗത കുറയ്ക്കുക.",
        },
        {
          type: "Type B (Conceptual):",
          fix: "ഫോർമുല മാറിപ്പോയി. പരിഹാരം: ആ കൺസെപ്റ്റ് മാത്രം NCERT യിൽ വായിക്കുക.",
        },
        {
          type: "Type C (Blind Spot):",
          fix: "ഇങ്ങനൊരു ടോപ്പിക്ക് അറിയില്ല. പരിഹാരം: ഞായറാഴ്ചത്തെ ലിസ്റ്റിൽ പെടുത്തുക.",
        },
      ],
      wallTarget:
        "ലക്ഷ്യം: സില്ലി മിസ്റ്റേക്ക് ഒഴിവാക്കുക. അത് മാത്രം മതി മാർക്ക് കൂടാൻ.",

      subjectTitle: "5. ഡിസംബർ തന്ത്രങ്ങൾ",
      subjects: [
        {
          name: "ഫിസിക്സ്",
          desc: "പുതിയ ചോദ്യങ്ങളെ പേടിക്കണ്ട. 45 മിനിറ്റിൽ 30 ചോദ്യങ്ങൾ ചെയ്യുക. ഉത്തരം കിട്ടിയില്ലെങ്കിൽ സൊല്യൂഷൻ നോക്കി പഠിക്കുക. ഓരോ ചോദ്യത്തിനും പടം വരയ്ക്കാൻ ശീലിക്കുക.",
        },
        {
          name: "കെമിസ്ട്രി",
          desc: "ഓർഗാനിക്: റിയാക്ഷൻ മാപ്പുകൾ വരയ്ക്കുക. ഇൻഓർഗാനിക്: എല്ലാ ദിവസവും രാവിലെ 20 മിനിറ്റ് NCERT വായിക്കുക.",
        },
        {
          name: "ബയോളജി",
          desc: "20 സെക്കൻഡിൽ ഉത്തരം കിട്ടണം. സ്റ്റേറ്റ്‌മെന്റ് ചോദ്യങ്ങൾ ദിവസവും 50 എണ്ണം ചെയ്യുക.",
        },
      ],

      psychoTitle: "6. മാനസിക തയ്യാറെടുപ്പ്",
      psychoDesc:
        "ഡിസംബറിൽ മടുപ്പ് സ്വാഭാവികമാണ്. പ്രവർത്തിച്ചാലേ മോട്ടിവേഷൻ വരൂ.",
      psychoAction: "നിർബന്ധമായും ചെയ്യേണ്ടവ:",
      psychoList: [
        "Daily Win: ഉറങ്ങുന്നതിന് മുൻപ് അന്ന് പഠിച്ച ഒരുകാര്യം എഴുതി വെക്കുക.",
        "Traffic Light: ട്രാക്കറിൽ പച്ച കാണുമ്പോൾ ആത്മവിശ്വാസം കൂടും.",
        "വ്യായാമം: 10 മിനിറ്റ് സ്റ്റെപ്പ് കയറുക, ശ്വാസം ശ്രദ്ധിക്കുക.",
      ],

      sleepTitle: "7. ഉറക്കവും പരീക്ഷയും",
      sleepDesc:
        "6-7 മണിക്കൂർ തുടർച്ചയായ ഉറക്കം നിർബന്ധമാണ്. ഉറക്കം മുറിക്കരുത്. മെയ് മാസത്തെ പരീക്ഷയ്ക്ക് വേണ്ടി ഇപ്പോഴേ ശീലിക്കുക.",

      checklistTitle: "സമ്മറി ചെക്ക്‌ലിസ്റ്റ്",
      checklist: [
        "രീതി മാറ്റുക: 60% ചോദ്യങ്ങൾ ചെയ്യുക.",
        "ബാക്ക്ലോഗ്: ഞായറാഴ്ച മാത്രം.",
        "പരീക്ഷ: പഠിച്ചില്ലെങ്കിലും പരീക്ഷ എഴുതുക. ഉത്തരം അറിയില്ലെങ്കിലും എഴുതണം. തെറ്റുകൾ വലിയ പാഠമാണ്. ഒളിച്ചോടരുത്.",
        "ഉറക്കം: 11 PM - 6 AM (ശീലമാക്കുക).",
      ],
      mantra: "ചിന്തിച്ചത് മതി. പേന എടുക്കൂ. മുന്നോട്ട് പോവുക തന്നെ വഴി.",

      mentorTitle: "നിങ്ങൾക്ക് മാത്രമായി ഒരു പ്ലാൻ വേണോ?",
      mentorDesc:
        "എല്ലാ കുട്ടികളും വ്യത്യസ്തരാണ്. DOPA യിൽ ഞങ്ങൾ ജനറൽ ഉപദേശം നൽകാറില്ല. നിങ്ങളുടെ പ്രശ്നങ്ങൾക്ക് കൃത്യമായ പരിഹാരം കാണാൻ DOPA ഡോക്ടറുമായി സംസാരിക്കൂ.",
      mentorContactName: "ഖദീജ DOPA",
      mentorContactRole: "പ്രോഗ്രാം കോർഡിനേറ്റർ",
      mentorContactNumber: "+91 96453 02200",
      mentorAction: "DNAT സെഷൻ ബുക്ക് ചെയ്യാൻ മെസ്സേജ് അയക്കൂ",
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-10 animate-fade-in">
      {/* HEADER */}
      <div className="bg-[#00205b] text-white p-4 sticky top-0 z-50 flex justify-between items-center shadow-md">
        <button
          onClick={onBack}
          className="flex items-center text-sm font-bold text-gray-200 hover:text-white"
        >
          <ChevronLeft className="w-5 h-5 mr-1" /> Back
        </button>
        <button
          onClick={() => setLang(lang === "english" ? "malayalam" : "english")}
          className="bg-white/20 px-4 py-1 rounded-full text-xs font-bold hover:bg-white/30 transition border border-white/30"
        >
          {t.toggle}
        </button>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-6">
        {/* HERO SECTION */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#00205b] mb-2 leading-tight">
            {t.title}
          </h1>
          <p className="text-gray-600 text-sm md:text-lg font-medium">
            {t.subtitle}
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-[#00b2fa] p-5 rounded-r-lg mb-8 text-sm md:text-base leading-relaxed text-gray-700 shadow-sm">
          {t.intro}
        </div>

        {/* 1. DIAGNOSIS */}
        <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-red-600 mb-3 flex items-center">
            <Activity className="w-6 h-6 mr-2" /> {t.diagnosisTitle}
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            {t.diagnosisDesc}
          </p>
        </div>

        {/* 2. STRATEGIC PIVOT */}
        <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-[#00205b] mb-3 flex items-center">
            <Target className="w-6 h-6 mr-2 text-[#00b2fa]" /> {t.pivotTitle}
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
            {t.pivotDesc}
          </p>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-sm font-medium text-yellow-900">
            {t.pivotAction}
          </div>
        </div>

        {/* 3. BACKLOG VS CURRENT */}
        <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-[#00205b] mb-3 flex items-center">
            <Clock className="w-6 h-6 mr-2 text-[#00b2fa]" /> {t.backlogTitle}
          </h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            {t.backlogDesc}
          </p>
          <ul className="space-y-2">
            {t.backlogProtocol.map((item, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 mr-2 mt-1 text-green-500 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. BREAKING THE WALL */}
        <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-[#00205b] mb-3 flex items-center">
            <Shield className="w-6 h-6 mr-2 text-[#00b2fa]" /> {t.wallTitle}
          </h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            {t.wallDesc}
          </p>
          <div className="grid gap-3 mb-4">
            {t.wallTypes.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-3 rounded border-l-4 border-red-400 text-sm"
              >
                <span className="font-bold block text-gray-900">
                  {item.type}
                </span>
                <span className="text-gray-600">{item.fix}</span>
              </div>
            ))}
          </div>
          <p className="text-sm font-bold text-[#00b2fa]">{t.wallTarget}</p>
        </div>

        {/* 5. SUBJECT TACTICS */}
        <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-[#00205b] mb-4 flex items-center">
            <BookOpen className="w-6 h-6 mr-2 text-[#00b2fa]" />{" "}
            {t.subjectTitle}
          </h2>
          <div className="space-y-4">
            {t.subjects.map((item, idx) => (
              <div
                key={idx}
                className="border-b border-gray-100 last:border-0 pb-3 last:pb-0"
              >
                <h3 className="font-bold text-gray-800 mb-1">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. PSYCHOLOGY & STRESS MANAGEMENT */}
        <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-[#00205b] mb-3 flex items-center">
            <Brain className="w-6 h-6 mr-2 text-[#00b2fa]" /> {t.psychoTitle}
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
            {t.psychoDesc}
          </p>

          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400 mb-6">
            <p className="font-bold text-orange-800 mb-2">{t.psychoAction}</p>
            <ul className="space-y-2">
              {t.psychoList.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-sm text-orange-900"
                >
                  <CheckCircle className="w-4 h-4 mr-2 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 7. SLEEP & CHECKLIST */}
        <div className="mb-10 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-[#00205b] mb-3 flex items-center">
            <Moon className="w-6 h-6 mr-2 text-[#00b2fa]" /> {t.sleepTitle}
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-sm md:text-base">
            {t.sleepDesc}
          </p>

          <div className="mt-6 bg-[#00205b] text-white p-5 rounded-xl shadow-lg">
            <h3 className="font-bold text-lg mb-4 flex items-center text-[#00b2fa]">
              <Zap className="w-5 h-5 mr-2" /> {t.checklistTitle}
            </h3>
            <ul className="space-y-2 mb-6 text-sm text-gray-200">
              {t.checklist.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2 text-[#00b2fa]">•</span> {item}
                </li>
              ))}
            </ul>
            <div className="text-center pt-4 border-t border-white/20">
              <p className="text-lg font-bold italic text-[#00b2fa]">
                "{t.mantra}"
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 8: MENTORSHIP CTA */}
        <div className="bg-gradient-to-br from-[#00b2fa] to-[#00205b] text-white p-8 rounded-2xl text-center shadow-2xl mb-12 relative overflow-hidden">
          <div className="relative z-10">
            <Stethoscope className="w-12 h-12 mx-auto mb-4 text-white opacity-90" />
            <h2 className="text-2xl font-bold mb-3">{t.mentorTitle}</h2>
            <p className="text-sm md:text-base mb-2 text-blue-50 opacity-90 max-w-lg mx-auto">
              {t.mentorDesc}
            </p>
            <div className="text-sm font-bold text-white mb-6 bg-white/20 inline-block px-4 py-2 rounded-lg">
              <p>{t.mentorContactName}</p>
              <p className="text-xs font-normal opacity-80">
                {t.mentorContactRole}
              </p>
              <p className="text-lg mt-1">{t.mentorContactNumber}</p>
            </div>
            <br />
            <button
              onClick={handleWhatsApp}
              className="bg-white text-[#00205b] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105 flex items-center mx-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" /> {t.mentorAction}
            </button>
          </div>
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -ml-10 -mb-10"></div>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTS ---

const Header = () => (
  <header className="bg-[#00205b] text-white p-4 shadow-lg sticky top-0 z-50 print:hidden">
    <div className="max-w-4xl mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
          <span className="text-[#00205b] font-black text-2xl tracking-tighter">
            D
          </span>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-lg leading-none tracking-wide">DOPA</h1>
          <span className="text-[10px] text-sky-200 uppercase tracking-widest mt-1">
            Medical Coaching
          </span>
        </div>
      </div>
      <div className="text-xs font-medium bg-[#00b2fa]/20 px-3 py-1.5 rounded-full shadow-inner border border-[#00b2fa]/30 text-white">
        Winter Booster 2025
      </div>
    </div>
  </header>
);

const LandingPage = ({ onStart }) => (
  <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 text-center space-y-6 animate-fade-in bg-gradient-to-b from-blue-50 to-white print:hidden">
    <div className="space-y-4 max-w-2xl">
      <div className="inline-flex items-center bg-white text-[#00205b] px-4 py-1.5 rounded-full font-bold text-xs tracking-wider mb-2 border border-gray-200 shadow-sm">
        <Activity className="w-3 h-3 mr-2 text-[#00b2fa]" />
        NEET PRODUCTIVITY CHECK
      </div>
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Is Your Studying <span className="text-[#00205b]">Productive</span>?
      </h2>
      <p className="text-base md:text-lg text-gray-600">
        Most students fail because of <b>study habits</b>, not because of
        intelligence. Find the "silent leaks" in your preparation now.
      </p>

      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-sm text-yellow-800 max-w-lg mx-auto flex items-start text-left">
        <Lock className="w-5 h-5 mr-3 mt-0.5 shrink-0" />
        <div>
          <span className="font-bold block mb-1">Strictly Confidential</span>
          This is a diagnostic tool. Answer based on your <b>last 7 days</b> to
          get a real prescription.
        </div>
      </div>
    </div>

    <button
      onClick={onStart}
      className="mt-6 bg-[#00205b] hover:bg-[#001742] text-white text-lg font-bold py-4 px-12 rounded-full shadow-xl transition transform hover:scale-105 flex items-center w-full md:w-auto justify-center ring-4 ring-[#00b2fa]/20"
    >
      Start Diagnostic Test{" "}
      <ChevronRight className="ml-2 w-5 h-5 text-[#00b2fa]" />
    </button>
  </div>
);

const UserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    isDopa: "dopa",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.mobile) onSubmit(formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-xl mt-8 md:mt-12 animate-slide-up mx-4 border-t-4 border-[#00205b] print:hidden">
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
        Student Profiling
      </h3>
      <p className="text-center text-sm text-gray-500 mb-6">
        Enter your details to generate your DNA Report
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b2fa] focus:border-[#00b2fa] outline-none bg-gray-50 transition-all"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            WhatsApp Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b2fa] focus:border-[#00b2fa] outline-none bg-gray-50 transition-all"
              placeholder="9876543210"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Current Institute
          </label>
          <div className="relative">
            <div className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <select
              className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00b2fa] focus:border-[#00b2fa] outline-none bg-gray-50 appearance-none transition-all"
              value={formData.isDopa}
              onChange={(e) =>
                setFormData({ ...formData, isDopa: e.target.value })
              }
            >
              <option value="dopa">I am a DOPA Student</option>
              <option value="other">Other Institute</option>
            </select>
            <ChevronRight className="absolute right-3 top-4 w-4 h-4 text-gray-400 rotate-90" />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#00205b] text-white font-bold py-3.5 rounded-lg hover:bg-[#001742] transition shadow-lg mt-2"
        >
          Begin Assessment
        </button>
      </form>
    </div>
  );
};

const QuestionCard = ({
  question,
  onAnswer,
  onBack,
  progress,
  currentIdx,
  total,
  selectedIndex,
}) => {
  const [selectedIdx, setSelectedIdx] = useState(
    selectedIndex !== undefined ? selectedIndex : null
  );

  useEffect(() => {
    setSelectedIdx(selectedIndex !== undefined ? selectedIndex : null);
  }, [question, selectedIndex]);

  const handleNext = () => {
    if (selectedIdx !== null) {
      onAnswer(question, selectedIdx); // Pass index, NOT value
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-6 px-4 pb-20 print:hidden">
      <div className="w-full mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-[#00205b] uppercase tracking-wider">
            {AXES_CONFIG[question.axis].fullLabel}
          </span>
          <span className="text-xs font-bold text-gray-500">
            Question {currentIdx + 1} / {total}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-[#00b2fa] h-2 rounded-full transition-all duration-300 shadow-[0_0_10px_rgba(0,178,250,0.5)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-white p-5 md:p-8 rounded-2xl shadow-lg border-t-4 border-[#00b2fa] animate-fade-in">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6 leading-snug">
          {question.text}
        </h3>

        <div className="space-y-3">
          {question.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`w-full text-left p-4 rounded-xl border transition duration-200 flex items-start group ${
                selectedIdx === idx
                  ? "border-[#00205b] bg-blue-50 ring-1 ring-[#00205b]"
                  : "border-gray-200 hover:border-[#00b2fa] hover:bg-sky-50"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 font-bold text-xs shrink-0 mt-0.5 transition-colors ${
                  selectedIdx === idx
                    ? "bg-[#00205b] text-white"
                    : "bg-gray-100 text-gray-500 group-hover:bg-[#00205b] group-hover:text-white"
                }`}
              >
                {String.fromCharCode(65 + idx)}
              </div>
              <span
                className={`font-medium text-sm md:text-base ${
                  selectedIdx === idx
                    ? "text-[#00205b]"
                    : "text-gray-700 group-hover:text-[#00205b]"
                }`}
              >
                {opt.text}
              </span>
            </button>
          ))}
        </div>

        <div className="flex justify-between mt-8 pt-4 border-t border-gray-100">
          <button
            onClick={onBack}
            disabled={currentIdx === 0}
            className={`flex items-center px-4 py-2 text-sm font-bold rounded-lg transition-colors ${
              currentIdx === 0
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-600 hover:bg-gray-100 hover:text-[#00205b]"
            }`}
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Back
          </button>

          <button
            onClick={handleNext}
            disabled={selectedIdx === null}
            className={`flex items-center px-6 py-2.5 text-sm font-bold rounded-lg shadow-md transition-all ${
              selectedIdx === null
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#00205b] text-white hover:bg-[#001742] hover:shadow-lg transform hover:-translate-y-0.5"
            }`}
          >
            {currentIdx === total - 1 ? (
              <>
                Finish & View Report <ArrowRight className="w-4 h-4 ml-2" />
              </>
            ) : (
              <>
                Next Question <ChevronRight className="w-4 h-4 ml-2" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const PrintReportHeader = ({ user, scoreDate }) => (
  <div className="hidden print:block mb-6 border-b-2 border-[#00205b] pb-4">
    <div className="flex justify-between items-end">
      <div>
        <h1 className="text-3xl font-bold text-[#00205b]">
          DOPA Diagnostic Report
        </h1>
        <p className="text-sm text-gray-600">Winter Booster 2025 Initiative</p>
      </div>
      <div className="text-right">
        <p className="font-bold text-xl">{user.name}</p>
        <p className="text-sm text-gray-500">
          {user.institute === "dopa" ? "DOPA Student" : "Aspirant"}
        </p>
        <p className="text-xs text-gray-400">
          {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  </div>
);

const ResultPage = ({ answers, user, onReadMore }) => {
  const [chartData, setChartData] = useState([]);
  const [scores, setScores] = useState({});

  useEffect(() => {
    const newScores = {};
    const data = [];

    Object.keys(AXES_CONFIG).forEach((axisKey) => {
      const axisQuestions = QUESTIONS.filter((q) => q.axis === axisKey);

      const sum = axisQuestions.reduce((acc, q) => {
        const selectedIdx = answers[q.id];
        const val = q.options[selectedIdx]?.value || 0;
        return acc + val;
      }, 0);

      newScores[axisKey] = sum;

      data.push({
        subject: AXES_CONFIG[axisKey].label,
        A: 10, // Topper/Ideal
        B: sum, // Student
        fullMark: 10,
      });
    });

    setScores(newScores);
    setChartData(data);
  }, [answers]);

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919645302200?text=I%20want%20to%20join%20the%20MCQ%20Challenge",
      "_blank"
    );
  };

  const handleWebinarReg = () => {
    window.open(
      "https://wa.me/919645302200?text=I%20want%20to%20register%20for%20Medigate%20Webinar",
      "_blank"
    );
  };

  const handleYoutube = () => {
    window.open(
      "https://www.youtube.com/channel/UCrVRN3u6TG69Nht9Zm92jMQ",
      "_blank"
    );
  };

  const isDopaStudent = user.institute === "dopa";

  return (
    <div className="max-w-4xl mx-auto px-4 pb-20 animate-fade-in print:p-0 print:max-w-none">
      <PrintReportHeader user={user} />

      {/* Screen Header */}
      <div className="text-center mt-6 mb-6 print:hidden">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Your Diagnostic Result
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Generated for{" "}
          <span className="font-bold text-[#00205b] uppercase">
            {user.name}
          </span>
        </p>
      </div>

      {/* Spider Chart Section */}
      <div className="bg-white p-2 md:p-6 rounded-2xl shadow-lg mb-6 relative overflow-hidden border border-gray-100 break-inside-avoid">
        <div className="flex justify-center items-center space-x-6 mb-2 text-xs font-semibold pt-4">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-gray-200 rounded-full mr-1"></span>{" "}
            Ideal Benchmark
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-[#00b2fa] rounded-full mr-1"></span>{" "}
            Your Score
          </div>
        </div>
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fill: "#00205b", fontSize: 11, fontWeight: "bold" }}
              />
              <PolarRadiusAxis
                angle={30}
                domain={[0, 10]}
                tick={false}
                axisLine={false}
              />
              <Radar
                name="Topper"
                dataKey="A"
                stroke="#e5e7eb"
                fill="#e5e7eb"
                fillOpacity={0.5}
              />
              <Radar
                name="You"
                dataKey="B"
                stroke="#00b2fa"
                fill="#00b2fa"
                fillOpacity={0.5}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* --- 1. ASSESSMENT RESULT (SIMPLE LANGUAGE) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {Object.keys(AXES_CONFIG).map((axis) => {
          const feedback = getDetailedFeedback(axis, scores[axis] || 0);
          return (
            <div
              key={axis}
              className="bg-white border-l-4 border-[#00205b] p-4 rounded-lg shadow-sm break-inside-avoid"
            >
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-bold text-[#00205b] text-sm">
                  {AXES_CONFIG[axis].fullLabel}
                </h4>
              </div>
              <p className="text-xs font-semibold text-gray-800 mb-1">
                {feedback.status}
              </p>
              <p className="text-xs text-gray-500 pt-1 border-t border-dashed border-gray-200">
                <span className="font-bold text-[#00b2fa]">Action: </span>{" "}
                {feedback.action}
              </p>
            </div>
          );
        })}
      </div>

      {/* --- READ MORE BUTTON (PROMINENTLY PLACED) --- */}
      <div className="mb-8 text-center print:hidden">
        <button
          onClick={onReadMore}
          className="w-full md:w-auto bg-[#00205b] text-white font-bold py-4 px-8 rounded-full shadow-xl hover:bg-[#001742] transition transform hover:scale-105 flex items-center justify-center mx-auto"
        >
          <Info className="w-5 h-5 mr-2" />
          <span>
            Read The Full <b>December Protocol</b>
          </span>
        </button>
        <p className="text-xs text-gray-500 mt-2">
          Highly Recommended: Understand the "Mid-Year Pivot"
        </p>
      </div>

      {/* --- 3. MORNING MEET REMINDER --- */}
      <div className="bg-gradient-to-r from-red-50 to-white border border-red-100 p-4 rounded-xl shadow-sm mb-4 flex items-center justify-between break-inside-avoid">
        <div className="flex items-center">
          <div className="bg-red-100 p-2 rounded-full mr-3">
            <Youtube className="w-5 h-5 text-red-600" />
          </div>
          <div>
            <h4 className="font-bold text-gray-800 text-sm">
              Daily Morning Meeting
            </h4>
            <p className="text-xs text-gray-600">
              With Dr. Ashiq @ 8:45 AM on YouTube
            </p>
          </div>
        </div>
        <button
          onClick={handleYoutube}
          className="bg-red-600 text-white text-xs font-bold py-2 px-4 rounded hover:bg-red-700 transition flex items-center"
        >
          Visit Channel <ArrowRight className="w-3 h-3 ml-1" />
        </button>
      </div>

      {/* --- 4. JOIN MCQ CHALLENGE (WHATSAPP) --- */}
      <div className="bg-gradient-to-r from-green-50 to-white border border-green-100 p-4 rounded-xl shadow-sm mb-4 break-inside-avoid">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-2 md:mb-0">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <MessageCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-sm">
                Join MCQ Challenge
              </h4>
              <p className="text-xs text-gray-600">
                Contact: Kadeeja DOPA (Coordinator)
              </p>
              <p className="text-xs font-mono font-bold text-green-700 mt-1">
                +91 96453 02200
              </p>
            </div>
          </div>
          <button
            onClick={handleWhatsApp}
            className="w-full md:w-auto bg-green-500 text-white text-xs font-bold py-2 px-6 rounded-full hover:bg-green-600 transition shadow-md flex items-center justify-center"
          >
            <MessageCircle className="w-4 h-4 mr-2" /> Chat on WhatsApp
          </button>
        </div>
      </div>

      {/* --- 5. MEDIGATE WEBINAR --- */}
      <div className="bg-gradient-to-br from-indigo-900 to-[#00205b] text-white p-6 rounded-xl shadow-lg mb-6 relative overflow-hidden break-inside-avoid">
        <div className="relative z-10">
          <div className="flex items-center mb-2">
            <Video className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">
              Upcoming Live Event
            </span>
          </div>
          <h3 className="text-xl font-extrabold mb-1">MEDIGATE</h3>
          <p className="text-sm font-medium text-indigo-200 mb-3">
            NEET Exclusive Webinar
          </p>

          <div className="text-xs text-indigo-100 space-y-1 mb-4">
            <p className="flex items-center">
              <Calendar className="w-3 h-3 mr-2" /> Dec 27th, 7:30 PM
            </p>
            <p className="flex items-center">
              <Target className="w-3 h-3 mr-2" /> Must-know strategies for
              Dec-Jan
            </p>
          </div>

          <button
            onClick={handleWebinarReg}
            className="w-full bg-white text-[#00205b] text-xs font-bold py-2.5 rounded-lg hover:bg-indigo-50 transition shadow-md flex items-center justify-center"
          >
            Register via WhatsApp <ArrowRight className="w-3 h-3 ml-1" />
          </button>
        </div>
        {/* Decorative elements */}
        <div className="absolute -right-6 -bottom-10 w-32 h-32 bg-indigo-500 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400 rounded-full opacity-10 blur-xl"></div>
      </div>

      {/* --- 6. SIMPLE ACTIONABLE STEPS & VISIT DOPA --- */}
      <div className="bg-[#00205b] text-white rounded-2xl shadow-2xl relative overflow-hidden break-inside-avoid print:bg-white print:text-black print:border-2 print:border-[#00205b]">
        <div className="p-6 md:p-8 relative z-10">
          <div className="flex items-start space-x-3 mb-4">
            <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm border border-white/10 print:hidden">
              <Stethoscope className="w-6 h-6 text-[#00b2fa]" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Your Next Step</h3>
              <p className="text-sky-200 text-sm print:text-gray-500">
                Simple actions for big results.
              </p>
            </div>
          </div>

          <div className="bg-black/20 rounded-xl p-4 mb-6 backdrop-blur-sm border border-white/5 print:bg-gray-50">
            <ul className="text-sm space-y-2 text-sky-50 print:text-black">
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-[#00b2fa]" />{" "}
                <span>
                  Download the <b>Streak Master</b> below.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-[#00b2fa]" />{" "}
                <span>
                  Join the <b>Morning Meet</b> daily at 8:45 AM.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-[#00b2fa]" />{" "}
                <span>
                  <b>Visit DOPA</b> for a detailed personal session.
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-3 md:space-y-0 md:flex md:space-x-4 print:hidden">
            <button
              onClick={handlePrint}
              className="w-full bg-white text-[#00205b] py-3.5 px-6 rounded-lg font-bold text-sm md:text-base flex items-center justify-center hover:bg-gray-100 transition shadow-sm border border-gray-200"
            >
              <Printer className="w-4 h-4 mr-2 text-[#00b2fa]" /> Save Report
            </button>

            {isDopaStudent ? (
              <button className="w-full bg-[#00b2fa] text-white py-3.5 px-6 rounded-lg font-bold text-sm md:text-base flex items-center justify-center hover:bg-[#009ce0] transition shadow-lg animate-pulse">
                <User className="w-4 h-4 mr-2" /> Visit Mentor
              </button>
            ) : (
              <button className="w-full bg-red-600 text-white py-3.5 px-6 rounded-lg font-bold text-sm md:text-base flex items-center justify-center hover:bg-red-700 transition shadow-lg animate-pulse">
                <Stethoscope className="w-4 h-4 mr-2" /> Visit DOPA Office
              </button>
            )}
          </div>

          <div className="hidden print:block text-center mt-6 pt-4 border-t border-gray-300">
            <p className="text-sm font-bold text-[#00205b]">
              DOPA Coaching - Medical Entrance Experts
            </p>
            <p className="text-xs text-gray-500">
              Visit us at Calicut for a free detailed analysis of this report.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP CONTAINER ---

export default function App() {
  const [step, setStep] = useState("landing");
  const [user, setUser] = useState(null);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState({});
    const toast = useToast();
  const handleStart = () => setStep("form");

  const handleFormSubmit = async (userData) => {
    try {
      const response = await authenticatedStrapiInstance.post(
        "/api/neet-productivity-checks",
        {
          data: userData,
        }
      );
      if (response.status === 200) {
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
    }
    setUser(userData);
    setStep("quiz");
  };

  const handleAnswer = (question, index) => {
    // Corrected to store INDEX instead of value
    const newAnswers = { ...answers, [question.id]: index };
    setAnswers(newAnswers);

    if (currentQIndex < QUESTIONS.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
    } else {
      setStep("result");
    }
  };

  const handleBack = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex((prev) => prev - 1);
    }
  };

  const handleReadMore = () => {
    setStep("readmore");
  };

  const handleBackFromReadMore = () => {
    setStep("result");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-sky-100 selection:text-[#00205b]">
      {step !== "readmore" && <Header />}

      <main className="w-full">
        {step === "landing" && <LandingPage onStart={handleStart} />}
        {step === "form" && <UserForm onSubmit={handleFormSubmit} />}
        {step === "quiz" && (
          <QuestionCard
            question={QUESTIONS[currentQIndex]}
            onAnswer={handleAnswer}
            onBack={handleBack}
            currentIdx={currentQIndex}
            total={QUESTIONS.length}
            progress={((currentQIndex + 1) / QUESTIONS.length) * 100}
            selectedIndex={answers[QUESTIONS[currentQIndex].id]} // Pass index for pre-selection
          />
        )}
        {step === "result" && (
          <ResultPage
            answers={answers}
            user={user}
            onReadMore={handleReadMore}
          />
        )}
        {step === "readmore" && (
          <ReadMorePage onBack={handleBackFromReadMore} />
        )}
      </main>

      {/* Footer */}
      {step !== "readmore" && (
        <footer className="bg-white border-t border-gray-200 text-center py-6 mt-10 print:hidden">
          <p className="text-xs text-gray-400">
            © 2024 DOPA Coaching. <br />
            <span className="opacity-70">Empowering Medical Aspirants.</span>
          </p>
        </footer>
      )}
    </div>
  );
}
