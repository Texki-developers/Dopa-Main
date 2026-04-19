"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FaGlobe, FaShieldAlt, FaArrowRight, FaArrowLeft, FaSpinner, FaComments } from 'react-icons/fa';
import { authenticatedStrapiInstance } from '../../config/strapiInstance';
import { useToast } from "@chakra-ui/react";

/* --- Assessment Data & i18n Engine --- */
const i18n = {
    en: {
        ui: {
            head_title: "DOPA | CEAT", head_subtitle: "Competitive Exam Aptitude Tool",
            step1_title: "Welcome to your Diagnostic", step1_desc: "Discover your genuine scientific aptitude and psychological readiness for the rigorous NEET/JEE journey.",
            trust_badge: "Secure & Private: Your data is only used for your CEAT report.",
            lbl_name: "Full Name", lbl_phone: "Contact Number", lbl_class: "Current Class", opt_class_def: "Select Class", opt_class_10: "Just completed 10th", opt_class_12: "Just completed 12th / Repeater",
            lbl_dist: "District", lbl_career: "Career Plan (Optional)", lbl_fam: "Are there Science Professionals (e.g., Doctors, Engineers) in your family? (Optional)",
            opt_fam_def: "Select Option", opt_fam_yes: "Yes, there are", opt_fam_no: "No, I am the first",
            step2_title: "Section A: Academic Aptitude", step2_desc: "Goal: Test troubleshooting logic and mathematical derivation.",
            step3_title: "Section B: Competitive Psychology", step3_desc: "Goal: Assess intrinsic motivation, resilience, and focus.",
            step4_title: "Section C: Foundation Knowledge", step4_desc: "Goal: Measure genuine enthusiasm and foundational science concepts.",
            load_title: "Analyzing Profile...", load_desc: "Evaluating academic aptitude and psychological resilience against the DOPA NEET/JEE standard.",
            res_title: "CEAT Diagnostic Report", res_sub: "Prepared exclusively for", card1_title: "1. Science & Academic Status", card2_title: "2. Competitive Fitness Verdict",
            cta_title: "Ready for the Next Step?", cta_desc: "To deeply understand these results, fix your focus areas, and map out the exact strategy for your career, book your free 1-on-1 Offline Counseling Session with our DOPA experts.",
            btn_wa1: "Chat with Hasna", btn_wa2: "Chat with Ayisha",
            btn_start: "Start Assessment →", btn_next: "Next Section →", btn_submit: "Submit Assessment", btn_prev: "← Previous",
            err_req: "Please complete all required fields.", err_ans: "Please answer all questions before proceeding.",
            
            fb_high_badg: "High Aptitude", fb_high_txt: "<strong>Excellent.</strong> You possess a strong 'Troubleshooting Brain' and solid foundational knowledge. You clearly understand scientific concepts deeply rather than just memorizing definitions.",
            fb_mod_badg: "Moderate Aptitude", fb_mod_txt: "<strong>Good start.</strong> You have a basic grasp of science, but rely a bit too much on rote memorization. We need to shift your focus towards active logical deduction.",
            fb_low_badg: "Low Aptitude / Gap", fb_low_txt: "<strong>Foundation required.</strong> Your current problem-solving skills show reliance on passive memorization. A foundational bridge course is strongly recommended before rigorous prep.",
            
            fit_badg: "FIT FOR PREPARATION", fit_txt: "<strong>Validation: Highly Resilient.</strong> You have great focus and an active learning method. You show the intrinsic motivation and psychological stamina required to survive the grueling NEET/JEE ecosystem. <em>Note: Keep refining your daily routines to prevent burnout.</em>",
            unfit_badg: "ATTENTION NEEDED", unfit_txt: "<strong>Warning: Silent Leaks Detected.</strong> This is not a failure, but a mismatch of current habits. Your ability to bounce back from setbacks is currently low, and you seem driven by external pressure. You need to heavily build your resilience and switch from passive reading to active recall before starting a full rigorous course."
        },
        qA: [
            { q: "You are using a scientific calculator, and it suddenly starts giving 'Error' for simple additions. Your first action is:", opts: ["A) Panic and assume you're bad at math.", "B) Check if the mode (Rad/Deg) or settings were changed accidentally.", "C) Stop using it and wait for a teacher to fix it.", "D) Buy a new one immediately."], logic: [0,1,0,0] },
            { q: "When you read that 'Water boils at 100°C,' which thought is more likely to cross your mind?", opts: ["A) 'I need to remember 100°C for the exam.'", "B) 'Does it boil at the same temperature on top of a mountain?'", "C) 'Is there a formula to convert this to Fahrenheit?'", "D) 'I hope this question isn't asked in the board exam.'"], logic: [0,1,0,0] },
            { q: "3, 8, 15, 24... What is the next number in this series?", opts: ["A) 32", "B) 35", "C) 36", "D) 40"], logic: [0,1,0,0] },
            { q: "You notice a plant in a dark corner growing towards a small window. You conclude:", opts: ["A) The plant is 'smart.'", "B) There is a biological mechanism reacting to a stimulus.", "C) It's just a coincidence.", "D) I don't see why this matters for my marks."], logic: [0,1,0,0] },
            { q: "You are given 5 pages of complex data. You are asked to find one specific trend. You:", opts: ["A) Read word for word from start to finish.", "B) Glance at the graphs and headers first to find the relevant section.", "C) Ask for a summary from someone else.", "D) Feel overwhelmed and give up."], logic: [0,1,0,0] },
            { q: "If you are told that 'friction produces heat,' how would you explain why we rub our hands in winter?", opts: ["A) It's a psychological reflex that distracts from the cold.", "B) Mechanical kinetic energy of motion is converted into thermal energy.", "C) Human hands contain specific thermal pockets that activate upon touch.", "D) Friction destroys the cold air particles around the hands."], logic: [0,1,0,0] },
            { q: "To see if a specific fertilizer works, you should:", opts: ["A) Put it on all your plants and see if they grow.", "B) Put it on one plant and compare it to a similar plant without fertilizer.", "C) Put different amounts on every plant you own.", "D) Just trust the packet label."], logic: [0,1,0,0] },
            { q: "If all doctors wear white coats, and Rahul is wearing a white coat, is Rahul a doctor?", opts: ["A) Yes, definitely.", "B) Not necessarily, as others besides doctors might wear white coats.", "C) Only if he is inside a hospital.", "D) Yes, because a white coat is proof of a medical degree."], logic: [0,1,0,0] },
            { q: "If you rotate a 3D 'L' shape 180 degrees mentally, what does it look like?", opts: ["A) An upside-down 'L' (like a '7').", "B) A mirror image of an 'L'.", "C) The exact same regular 'L'.", "D) A straight line."], logic: [1,0,0,0] },
            { q: "You are given a complex gadget you've never seen. You are most likely to:", opts: ["A) Put it aside; it's too complicated.", "B) Press buttons randomly to see what happens.", "C) Look for a 'How it works' video or manual immediately."], logic: [0,0,1] }
        ],
        qB: [
            { q: "Do you have a fixed time to wake up even on holidays?", opts: ["A) Yes, strictly.", "B) Usually, but it varies by 1-2 hours.", "C) No, I wake up whenever I feel like it."], weight: [4,2,1] },
            { q: "You score 40% on a surprise test you thought you were prepared for. You:", opts: ["A) Feel depressed and stop studying for two days.", "B) Analyze which specific topics you got wrong (Data Curiosity).", "C) Blame the teacher for giving a tough paper.", "D) Decide that science isn't for you."], weight: [1,4,2,1] },
            { q: "You encounter a very difficult question at the start of a paper. You:", opts: ["A) Spend 15 minutes trying to solve it, losing time for others.", "B) Skip it stoically and move to the ones you know.", "C) Start sweating and lose focus for the rest of the exam."], weight: [2,4,1] },
            { q: "Can you study a single subject for 3 hours straight without checking your phone?", opts: ["A) Easily.", "B) With effort.", "C) Impossible for me."], weight: [4,3,1] },
            { q: "When you 'study,' you are mostly:", opts: ["A) Re-reading notes or highlighting text (Passive).", "B) Solving problems and writing down summaries (Active Recall)."], weight: [1,4] },
            { q: "When a teacher returns a corrected paper, you:", opts: ["A) Only look at the total marks and hide the paper.", "B) Look at every mistake and try to understand the correct logic.", "C) Throw it away."], weight: [2,4,1] },
            { q: "Where is your phone while you study?", opts: ["A) In another room.", "B) On the desk, face down.", "C) In my hand or right next to me."], weight: [4,2,1] },
            { q: "Do you believe that 'Top Rankers' are born geniuses or just hard workers?", opts: ["A) Hard workers.", "B) Mixture of both.", "C) Born geniuses (Fixed mindset)."], weight: [4,3,1] },
            { q: "You have a headache but have a mock exam tomorrow. You:", opts: ["A) Take a nap, refresh, and study a lighter topic.", "B) Use it as an excuse to skip the exam.", "C) Force yourself to study 12 hours regardless of health."], weight: [4,1,2] },
            { q: "If your parents said they would be happy even if you chose Arts or Commerce, would you still want to be a Doctor/Engineer?", opts: ["A) Absolutely, it's my dream.", "B) I might reconsider other options.", "C) Honestly, I’d probably switch."], weight: [4,2,1] }
        ],
        qC: [
            { q: "Why do you see lightning before you hear the thunder?", opts: ["A) Light travels much faster than sound.", "B) Sound needs a medium, but light doesn't.", "C) Our eyes react faster than our ears.", "D) Thunder is produced after the lightning strike."], logic: [1,0,0,0] },
            { q: "What is the human body's primary source of instant energy?", opts: ["A) Proteins", "B) Fats", "C) Carbohydrates (Glucose)", "D) Vitamins"], logic: [0,0,1,0] },
            { q: "What happens to the temperature of boiling water if you keep adding more heat to it in an open pan?", opts: ["A) It keeps increasing indefinitely.", "B) It stays the same until all water becomes steam.", "C) It decreases slightly.", "D) It turns into plasma."], logic: [0,1,0,0] },
            { q: "If you drop a heavy iron ball and a light feather in a perfect vacuum at the same time, what happens?", opts: ["A) The iron ball hits the ground first.", "B) The feather hits the ground first.", "C) They both hit the ground at the exact same time.", "D) They float."], logic: [0,0,1,0] },
            { q: "What is the primary gas that plants absorb from the atmosphere for photosynthesis?", opts: ["A) Oxygen", "B) Nitrogen", "C) Carbon Dioxide", "D) Hydrogen"], logic: [0,0,1,0] },
            { q: "When an acid and a base are mixed in the right amounts, what do they primarily form?", opts: ["A) A stronger acid", "B) Salt and Water (Neutralization)", "C) Toxic gases", "D) Pure carbon"], logic: [0,1,0,0] },
            { q: "Why does the moon shine at night?", opts: ["A) It generates its own light like a star.", "B) It reflects light from the Sun.", "C) It reflects light from the Earth.", "D) It is covered in glowing minerals."], logic: [0,1,0,0] },
            { q: "How do vaccines generally work to protect the body?", opts: ["A) They directly kill the bacteria in the body.", "B) They train the immune system by introducing a harmless piece of the germ.", "C) They coat the stomach lining to prevent infections.", "D) They provide temporary artificial blood cells."], logic: [0,1,0,0] },
            { q: "Why does a massive steel ship float on water, while a small steel nail sinks?", opts: ["A) The ocean has a higher density than a bucket of water.", "B) The ship's shape displaces a volume of water equal to its massive weight.", "C) The ship is painted with waterproof material.", "D) The ship has engines pushing it up."], logic: [0,1,0,0] },
            { q: "Which element is known as the building block of all organic life on Earth?", opts: ["A) Oxygen", "B) Hydrogen", "C) Carbon", "D) Nitrogen"], logic: [0,0,1,0] }
        ]
    },
    ml: {
        ui: {
            head_title: "DOPA | CEAT", head_subtitle: "മത്സരപ്പരീക്ഷാ അഭിരുചി പരിശോധന (CEAT)",
            step1_title: "നിങ്ങളുടെ ഡയഗ്നോസ്റ്റിക് ടെസ്റ്റിലേക്ക് സ്വാഗതം", step1_desc: "കഠിനമായ NEET/JEE യാത്രയ്ക്കുള്ള നിങ്ങളുടെ യഥാർത്ഥ അഭിരുചിയും മാനസിക തയ്യാറെടുപ്പും കണ്ടെത്തുക.",
            trust_badge: "സുരക്ഷിതം & സ്വകാര്യം: നിങ്ങളുടെ വിവരങ്ങൾ CEAT റിപ്പോർട്ടിനായി മാത്രം ഉപയോഗിക്കുന്നു.",
            lbl_name: "മുഴുവൻ പേര്", lbl_phone: "ഫോൺ നമ്പർ", lbl_class: "പഠിക്കുന്ന ക്ലാസ്", opt_class_def: "ക്ലാസ് തിരഞ്ഞെടുക്കുക", opt_class_10: "10-ാം ക്ലാസ് കഴിഞ്ഞു", opt_class_12: "12-ാം ക്ലാസ് കഴിഞ്ഞു / റിപ്പീറ്റർ",
            lbl_dist: "ജില്ല", lbl_career: "കരിയർ പ്ലാൻ (ഓപ്ഷണൽ)", lbl_fam: "കുടുംബത്തിൽ സയൻസ് പ്രൊഫഷണലുകൾ (ഉദാ: ഡോക്ടർമാർ, എഞ്ചിനീയർമാർ) ഉണ്ടോ? (ഓപ്ഷണൽ)",
            opt_fam_def: "തിരഞ്ഞെടുക്കുക", opt_fam_yes: "ഉണ്ട്", opt_fam_no: "ഇല്ല, ഞാൻ ആദ്യമാണ്",
            step2_title: "സെക്ഷൻ A: അക്കാദമിക് അഭിരുചി", step2_desc: "ലക്ഷ്യം: ലോജിക്കൽ ചിന്താശേഷിയും കണക്കുകൂട്ടലുകളും പരിശോധിക്കുക.",
            step3_title: "സെക്ഷൻ B: മാനസിക തയ്യാറെടുപ്പ്", step3_desc: "ലക്ഷ്യം: നിങ്ങളുടെ ആത്മവിശ്വാസം, പഠനരീതി, ഏകാഗ്രത എന്നിവ വിലയിരുത്തുക.",
            step4_title: "സെക്ഷൻ C: അടിസ്ഥാന അറിവ്", step4_desc: "ലക്ഷ്യം: സയൻസിലുള്ള നിങ്ങളുടെ യഥാർത്ഥ താല്പര്യവും അടിസ്ഥാന അറിവും അളക്കുക.",
            load_title: "പ്രൊഫൈൽ വിലയിരുത്തുന്നു...", load_desc: "DOPA NEET/JEE മാനദണ്ഡങ്ങൾക്കനുസരിച്ച് നിങ്ങളുടെ അക്കാദമിക് നിലവാരവും മാനസിക തയ്യാറെടുപ്പും പരിശോധിക്കുന്നു.",
            res_title: "CEAT ഡയഗ്നോസ്റ്റിക് റിപ്പോർട്ട്", res_sub: "റിപ്പോർട്ട് തയ്യാറാക്കിയത്:", card1_title: "1. സയൻസ് & അക്കാദമിക് നിലവാരം", card2_title: "2. മത്സരപ്പരീക്ഷകൾക്കുള്ള തയ്യാറെടുപ്പ്",
            cta_title: "അടുത്ത പടി എന്താണ്?", cta_desc: "ഈ റിപ്പോർട്ട് കൃത്യമായി മനസ്സിലാക്കാനും, നിങ്ങളുടെ കരിയറിന് ആവശ്യമായ മികച്ച പ്ലാൻ തയ്യാറാക്കാനും DOPA എക്സ്പർട്ടുമായി ഒരു സൗജന്യ ഓഫ്‌ലൈൻ കൗൺസിലിംഗ് ബുക്ക് ചെയ്യുക.",
            btn_wa1: "ഹസ്നയുമായി സംസാരിക്കുക", btn_wa2: "ആയിഷയുമായി സംസാരിക്കുക",
            btn_start: "ടെസ്റ്റ് തുടങ്ങുക →", btn_next: "അടുത്ത സെക്ഷൻ →", btn_submit: "സമർപ്പിക്കുക", btn_prev: "← പുറകോട്ട്",
            err_req: "ദയവായി നിർബന്ധമായും പൂരിപ്പിക്കേണ്ട വിവരങ്ങൾ നൽകുക.", err_ans: "തുടരുന്നതിന് മുൻപായി എല്ലാ ചോദ്യങ്ങൾക്കും ഉത്തരം നൽകുക.",
            
            fb_high_badg: "മികച്ച അഭിരുചി", fb_high_txt: "<strong>മികച്ചത്.</strong> നിങ്ങൾക്ക് പ്രശ്നങ്ങൾ പരിഹരിക്കാനുള്ള മികച്ച കഴിവും (Troubleshooting Brain) നല്ല അടിസ്ഥാന വിവരങ്ങളുമുണ്ട്. വെറുതെ കാണാപ്പാഠം പഠിക്കുന്നതിലുപരി സയൻസ് ആശയങ്ങൾ നിങ്ങൾ വ്യക്തമായി മനസ്സിലാക്കുന്നുണ്ട്.",
            fb_mod_badg: "ശരാശരി അഭിരുചി", fb_mod_txt: "<strong>നല്ല തുടക്കം.</strong> നിങ്ങൾക്ക് സയൻസിൽ അടിസ്ഥാന അറിവുണ്ട്, എന്നാൽ കാണാപ്പാഠം പഠിക്കുന്ന രീതി അല്പം കൂടുതലാണ്. കൂടുതൽ ലോജിക്കലായി ചിന്തിച്ച് പഠിക്കാൻ ശ്രദ്ധിക്കേണ്ടതുണ്ട്.",
            fb_low_badg: "അടിസ്ഥാനം കുറവാണ്", fb_low_txt: "<strong>അടിസ്ഥാനം മെച്ചപ്പെടുത്തണം.</strong> നിങ്ങളുടെ ഇപ്പോഴത്തെ പഠനരീതി കാണാപ്പാഠം പഠിക്കുന്നതിനെ ആശ്രയിച്ചാണ്. കഠിനമായ കോഴ്സിലേക്ക് പോകുന്നതിന് മുൻപ് ഒരു അടിസ്ഥാന ബ്രിഡ്ജ് കോഴ്സ് (Foundation Bridge Course) ചെയ്യുന്നത് നല്ലതായിരിക്കും.",
            
            fit_badg: "യോഗ്യനാണ് (FIT)", fit_txt: "<strong>മികച്ച മാനസിക തയ്യാറെടുപ്പ്.</strong> മികച്ച ശ്രദ്ധയും പഠിക്കാനുള്ള ശരിയായ രീതിയും നിങ്ങൾക്കുണ്ട്. NEET/JEE പോലുള്ള കഠിനമായ പരീക്ഷകളെ നേരിടാനുള്ള മാനസിക കരുത്ത് നിങ്ങൾക്കുണ്ടെന്ന് ഈ ടെസ്റ്റ് വ്യക്തമാക്കുന്നു. <em>ശ്രദ്ധിക്കുക: അമിത സമ്മർദ്ദം ഒഴിവാക്കാൻ കൃത്യമായ ദിനചര്യ പിന്തുടരുക.</em>",
            unfit_badg: "ശ്രദ്ധിക്കുക", unfit_txt: "<strong>മുന്നറിയിപ്പ്: പഠനരീതി മാറ്റേണ്ടതുണ്ട്.</strong> ഇതൊരു പരാജയമല്ല, മറിച്ച് ഇപ്പോഴത്തെ നിങ്ങളുടെ ശീലങ്ങളിലെ പോരായ്മയാണ്. പരാജയങ്ങളിൽ നിന്ന് തിരികെ വരാനുള്ള കഴിവ് നിലവിൽ കുറവാണ്, മറ്റുള്ളവരുടെ നിർബന്ധപ്രകാരമാകാം നിങ്ങൾ ഇത് തിരഞ്ഞെടുക്കാൻ കാരണം. ഒരു വലിയ കോഴ്സിന് ചേരുന്നതിന് മുൻപായി വെറുതെ വായിച്ചുപഠിക്കുന്ന രീതിമാറ്റി സ്വന്തമായി കാര്യങ്ങൾ മനസ്സിലാക്കി (Active Recall) പഠിക്കാൻ ശ്രദ്ധിക്കുക."
        },
        qA: [
            { q: "നിങ്ങൾ ഒരു സയൻ്റിഫിക് കാൽക്കുലേറ്റർ ഉപയോഗിക്കുമ്പോൾ, ലളിതമായ കണക്കുകൾക്ക് പെട്ടെന്ന് 'Error' എന്ന് കാണിക്കുന്നു. നിങ്ങൾ ആദ്യം എന്ത് ചെയ്യും?", opts: ["A) പരിഭ്രാന്തനാവുകയും എനിക്ക് കണക്ക് അറിയില്ലെന്ന് കരുതുകയും ചെയ്യും.", "B) അബദ്ധത്തിൽ കാൽക്കുലേറ്ററിൻ്റെ മോഡ് (Rad/Deg) മാറിയതാണോ എന്ന് പരിശോധിക്കും.", "C) ഉപയോഗിക്കുന്നത് നിർത്തി, ഒരു അധ്യാപകൻ വന്ന് ശരിയാക്കാൻ കാത്തിരിക്കും.", "D) ഉടനടി പുതിയതൊന്ന് വാങ്ങും."], logic: [0,1,0,0] },
            { q: "'വെള്ളം 100°C-ൽ തിളക്കുന്നു' എന്ന് വായിക്കുമ്പോൾ, നിങ്ങളുടെ മനസ്സിൽ ആദ്യം വരുന്ന ചിന്ത എന്താണ്?", opts: ["A) 'പരീക്ഷയ്ക്ക് ഈ 100°C എന്ന സംഖ്യ ഓർത്തുവെക്കണം.'", "B) 'ഒരു മലമുകളിൽ വെച്ചാലും വെള്ളം ഇതേ താപനിലയിലാണോ തിളക്കുക?'", "C) 'ഇതിനെ ഫാരൻഹീറ്റിലേക്ക് മാറ്റാൻ എന്തെങ്കിലും ഫോർമുല ഉണ്ടോ?'", "D) 'ബോർഡ് പരീക്ഷയ്ക്ക് ഈ ചോദ്യം വരില്ലെന്ന് കരുതാം.'"], logic: [0,1,0,0] },
            { q: "3, 8, 15, 24... ഈ സംഖ്യാശ്രേണിയിലെ അടുത്ത സംഖ്യ ഏതാണ്?", opts: ["A) 32", "B) 35", "C) 36", "D) 40"], logic: [0,1,0,0] },
            { q: "ഇരുണ്ട മൂലയിലിരിക്കുന്ന ഒരു ചെടി ഒരു ചെറിയ ജനലിലൂടെ വരുന്ന വെളിച്ചത്തിന് നേരെ വളരുന്നത് നിങ്ങൾ കാണുന്നു. നിഗമനം എന്താണ്?", opts: ["A) ഈ ചെടിക്ക് 'ബുദ്ധി'യുണ്ട്.", "B) ഒരു പ്രത്യേക സാഹചര്യത്തോട് പ്രതികരിക്കുന്ന ജൈവികമായ ഒരു പ്രക്രിയയാണിത്.", "C) ഇതൊരു യാദൃശ്ചിക സംഭവം മാത്രമാണ്.", "D) എൻ്റെ മാർക്കിനെ ഇത് എങ്ങനെ ബാധിക്കാനാണ്."], logic: [0,1,0,0] },
            { q: "വളരെ സങ്കീർണ്ണമായ 5 പേജ് വിവരങ്ങൾ നിങ്ങൾക്ക് നൽകുകയും അതിൽ നിന്ന് ഒരു പ്രത്യേക കാര്യം കണ്ടെത്താൻ ആവശ്യപ്പെടുകയും ചെയ്യുന്നു. നിങ്ങൾ എന്ത് ചെയ്യും?", opts: ["A) തുടക്കം മുതൽ അവസാനം വരെ ഓരോ വാക്കും വായിക്കും.", "B) ആവശ്യമുള്ള ഭാഗം കണ്ടെത്താൻ ആദ്യം തലക്കെട്ടുകളും ഗ്രാഫുകളും വേഗത്തിൽ നോക്കും.", "C) മറ്റാരോടെങ്കിലും ഇതിൻ്റെ ചുരുക്കം ചോദിച്ചറിയും.", "D) ഇതൊന്നും എന്നെക്കൊണ്ട് കഴിയില്ലെന്ന് കരുതി ഉപേക്ഷിക്കും."], logic: [0,1,0,0] },
            { q: "'ഘർഷണം (friction) ചൂട് ഉത്പാദിപ്പിക്കുന്നു' എന്ന് നിങ്ങൾക്കറിയാം. അങ്ങനെയാണെങ്കിൽ തണുപ്പുകാലത്ത് നാം കൈകൾ തമ്മിൽ തിരുമ്മുന്നത് എന്തിനാണെന്ന് എങ്ങനെ വിശദീകരിക്കും?", opts: ["A) ഇതൊരു മനഃശാസ്ത്രപരമായ പ്രതികരണമാണ്, തണുപ്പിൽ നിന്നുള്ള ശ്രദ്ധ തിരിക്കാൻ ഇത് സഹായിക്കുന്നു.", "B) ചലനം മൂലമുണ്ടാകുന്ന കൈനറ്റിക് എനർജി താപോർജ്ജമായി മാറുന്നു.", "C) കൈകളിൽ പ്രത്യേക തരം 'തെർമൽ പോക്കറ്റുകൾ' ഉണ്ട്, തിരുമ്മുമ്പോൾ അവ ഉണരുന്നു.", "D) ഘർഷണം കൈകൾക്ക് ചുറ്റുമുള്ള തണുത്ത വായുവിനെ നശിപ്പിക്കുന്നു."], logic: [0,1,0,0] },
            { q: "ഒരു പ്രത്യേക വളം ഫലപ്രദമാണോ എന്ന് പരിശോധിക്കാൻ നിങ്ങൾ എന്ത് ചെയ്യണം?", opts: ["A) നിങ്ങളുടെ എല്ലാ ചെടികൾക്കും വളം നൽകി അവ വളരുന്നുണ്ടോ എന്ന് നോക്കുക.", "B) ഒരു ചെടിക്ക് മാത്രം വളം നൽകുകയും, വളം നൽകാത്ത മറ്റൊരു സമാന ചെടിയുമായി അതിൻ്റെ വളർച്ച താരതമ്യം ചെയ്യുകയും ചെയ്യുക.", "C) നിങ്ങളുടെ എല്ലാ ചെടികൾക്കും വ്യത്യസ്ത അളവിൽ വളം നൽകുക.", "D) പാക്കറ്റിൽ എഴുതിയിരിക്കുന്ന കാര്യങ്ങൾ വിശ്വസിക്കുക."], logic: [0,1,0,0] },
            { q: "എല്ലാ ഡോക്ടർമാരും വെള്ള കോട്ട് ധരിക്കുന്നു, രാഹുലും ഒരു വെള്ള കോട്ട് ധരിച്ചിട്ടുണ്ട്. എങ്കിൽ രാഹുൽ ഒരു ഡോക്ടറാണോ?", opts: ["A) അതെ, തീർച്ചയായും.", "B) ആയിരിക്കണമെന്നില്ല, ഡോക്ടർമാരല്ലാത്തവരും വെള്ള കോട്ട് ധരിച്ചേക്കാം.", "C) അവൻ ഒരു ആശുപത്രിക്ക് ഉള്ളിലാണെങ്കിൽ മാത്രം.", "D) അതെ, കാരണം വെള്ള കോട്ട് മെഡിക്കൽ ബിരുദത്തിൻ്റെ തെളിവാണ്."], logic: [0,1,0,0] },
            { q: "3D രൂപത്തിലുള്ള ഒരു 'L' അക്ഷരം മനസ്സിൽ സങ്കൽപ്പിച്ച് 180 ഡിഗ്രി തിരിക്കുക. അതിപ്പോൾ എങ്ങനെയിരിക്കും?", opts: ["A) തലകീഴായ ഒരു 'L' (ഏകദേശം '7' പോലെ).", "B) 'L' ൻ്റെ മിറർ ഇമേജ് (കണ്ണാടിയിലെ പ്രതിബിംബം).", "C) സാധാരണ 'L' പോലെ തന്നെ.", "D) ഒരു നേർരേഖ പോലെ."], logic: [1,0,0,0] },
            { q: "നിങ്ങൾ ഇതുവരെ കണ്ടിട്ടില്ലാത്ത സങ്കീർണ്ണമായ ഒരു പുതിയ ഉപകരണം നിങ്ങൾക്ക് ലഭിക്കുന്നു. നിങ്ങളെന്താണ് ചെയ്യാൻ സാധ്യത?", opts: ["A) വളരെ ബുദ്ധിമുട്ടാണെന്ന് കരുതി അത് മാറ്റിവെക്കും.", "B) എന്താണ് സംഭവിക്കുക എന്നറിയാൻ വെറുതെ ബട്ടണുകൾ അമർത്തി നോക്കും.", "C) ഇത് എങ്ങനെയാണ് പ്രവർത്തിക്കുന്നത് എന്ന് മനസ്സിലാക്കാൻ അതിൻ്റെ മാനുവൽ വായിക്കുകയോ വീഡിയോ കാണുകയോ ചെയ്യും."], logic: [0,0,1] }
        ],
        qB: [
            { q: "അവധി ദിവസങ്ങളിൽ പോലും നിങ്ങൾ രാവിലെ കൃത്യസമയത്ത് എഴുന്നേൽക്കാറുണ്ടോ?", opts: ["A) അതെ, കൃത്യമായി എഴുന്നേൽക്കും.", "B) മിക്കവാറും, എന്നാൽ ചിലപ്പോൾ 1-2 മണിക്കൂർ വൈകാറുണ്ട്.", "C) ഇല്ല, എനിക്ക് തോന്നുമ്പോഴാണ് ഞാൻ എഴുന്നേൽക്കുന്നത്."], weight: [4,2,1] },
            { q: "നിങ്ങൾ നന്നായി പഠിച്ചു എന്ന് കരുതിയ ഒരു സർപ്രൈസ് ടെസ്റ്റിൽ നിങ്ങൾക്ക് 40% മാർക്ക് മാത്രമേ ലഭിച്ചുള്ളൂ. നിങ്ങൾ എന്ത് ചെയ്യും?", opts: ["A) സങ്കടം തോന്നും, രണ്ടു ദിവസത്തേക്ക് പഠനം നിർത്തും.", "B) ഏത് വിഷയത്തിലാണ് എനിക്ക് തെറ്റ് പറ്റിയതെന്ന് കൃത്യമായി പരിശോധിക്കും.", "C) ബുദ്ധിമുട്ടുള്ള ചോദ്യപ്പേപ്പർ ഇട്ടതിന് അധ്യാപകനെ കുറ്റപ്പെടുത്തും.", "D) സയൻസ് എനിക്ക് പഠിക്കാൻ കഴിയില്ലെന്ന് തീരുമാനിക്കും."], weight: [1,4,2,1] },
            { q: "പരീക്ഷയുടെ തുടക്കത്തിൽ തന്നെ വളരെ ബുദ്ധിമുട്ടുള്ള ഒരു ചോദ്യം കണ്ടാൽ നിങ്ങൾ എന്ത് ചെയ്യും?", opts: ["A) ഉത്തരം കണ്ടെത്താൻ 15 മിനിറ്റ് ചെലവഴിക്കും, മറ്റ് ചോദ്യങ്ങൾക്കുള്ള സമയം നഷ്ടപ്പെടുത്തും.", "B) ആ ചോദ്യം തൽക്കാലം ഒഴിവാക്കി അറിയാവുന്ന ഉത്തരങ്ങൾ എഴുതാൻ തുടങ്ങും.", "C) വിയർക്കാൻ തുടങ്ങുകയും പരീക്ഷയുടെ ബാക്കി സമയം ശ്രദ്ധ നഷ്ടപ്പെടുകയും ചെയ്യും."], weight: [2,4,1] },
            { q: "നിങ്ങളുടെ ഫോൺ നോക്കാതെ ഒരു വിഷയം 3 മണിക്കൂർ തുടർച്ചയായി പഠിക്കാൻ നിങ്ങൾക്ക് കഴിയുമോ?", opts: ["A) എളുപ്പത്തിൽ കഴിയും.", "B) കുറച്ച് കഷ്ടപ്പെട്ടാൽ കഴിയും.", "C) എനിക്കത് അസാധ്യമാണ്."], weight: [4,3,1] },
            { q: "നിങ്ങൾ 'പഠിക്കുമ്പോൾ', കൂടുതലും ചെയ്യുന്നത് എന്താണ്?", opts: ["A) നോട്ട്സ് വീണ്ടും വീണ്ടും വായിക്കുക അല്ലെങ്കിൽ ഹൈലൈറ്റ് ചെയ്യുക (Passive).", "B) ചോദ്യങ്ങൾ സോൾവ് ചെയ്യുക, ഷോർട്ട് നോട്ട്സ് സ്വന്തമായി എഴുതിയുണ്ടാക്കുക (Active)."], weight: [1,4] },
            { q: "ഒരു പരീക്ഷാ പേപ്പർ നോക്കി അധ്യാപകൻ തിരികെ തരുമ്പോൾ, നിങ്ങൾ:", opts: ["A) ആകെ മാർക്ക് മാത്രം നോക്കി പേപ്പർ മാറ്റിവെക്കുന്നു.", "B) എൻ്റെ ഓരോ തെറ്റും നോക്കി മനസ്സിലാക്കുകയും ശരിയായ ഉത്തരം എന്താണെന്ന് കണ്ടെത്തുകയും ചെയ്യുന്നു.", "C) ആ പേപ്പർ വലിച്ചെറിയുന്നു."], weight: [2,4,1] },
            { q: "നിങ്ങൾ പഠിക്കുമ്പോൾ നിങ്ങളുടെ ഫോൺ എവിടെയായിരിക്കും?", opts: ["A) മറ്റൊരു മുറിയിൽ.", "B) എൻ്റെ മേശപ്പുറത്ത് കമിഴ്ത്തി വെച്ചിരിക്കും.", "C) എൻ്റെ കയ്യിലോ അല്ലെങ്കിൽ തൊട്ടടുത്തോ ഉണ്ടാകും."], weight: [4,2,1] },
            { q: "'ടോപ്പ് റാങ്ക്' നേടുന്നവർ ജന്മനാ ബുദ്ധിമാന്മാരാണെന്നാണോ അതോ കഠിനാധ്വാനികളാണെന്നാണോ നിങ്ങൾ വിശ്വസിക്കുന്നത്?", opts: ["A) കഠിനാധ്വാനികൾ.", "B) രണ്ടും കൂടിയതാണ്.", "C) ജന്മനാ ബുദ്ധിമാന്മാരാണ്."], weight: [4,3,1] },
            { q: "നിങ്ങൾക്ക് ചെറിയ തലവേദനയുണ്ട്, എന്നാൽ നാളെ ഒരു മോക്ക് എക്സാം ആണ്. നിങ്ങൾ:", opts: ["A) അല്പനേരം വിശ്രമിച്ച ശേഷം എളുപ്പമുള്ള വിഷയങ്ങൾ പഠിക്കും.", "B) തലവേദന ഒരു കാരണമായി പറഞ്ഞ് പരീക്ഷ ഒഴിവാക്കും.", "C) എൻ്റെ ആരോഗ്യം വകവെക്കാതെ 12 മണിക്കൂർ നിർബന്ധിച്ച് പഠിക്കും."], weight: [4,1,2] },
            { q: "നിങ്ങൾ ആർട്സ് അല്ലെങ്കിൽ കൊമേഴ്‌സ് തിരഞ്ഞെടുത്താലും സന്തോഷമേയുള്ളൂ എന്ന് നിങ്ങളുടെ മാതാപിതാക്കൾ പറഞ്ഞാൽ, നിങ്ങൾ പിന്നെയും ഒരു ഡോക്ടർ/എഞ്ചിനീയർ ആകാൻ ആഗ്രഹിക്കുമോ?", opts: ["A) തീർച്ചയായും, അതെൻ്റെ സ്വപ്നമാണ്.", "B) മറ്റ് സാധ്യതകളെക്കുറിച്ച് ഞാൻ ചിന്തിച്ചേക്കാം.", "C) സത്യത്തിൽ, ഞാൻ എൻ്റെ കോഴ്സ് മാറ്റാൻ സാധ്യതയുണ്ട്."], weight: [4,2,1] }
        ],
        qC: [
            { q: "എന്തുകൊണ്ടാണ് ഇടിമുഴക്കം കേൾക്കുന്നതിന് മുൻപ് നമ്മൾ മിന്നൽ കാണുന്നത്?", opts: ["A) ശബ്ദത്തേക്കാൾ വളരെ വേഗത്തിൽ പ്രകാശം സഞ്ചരിക്കുന്നത് കൊണ്ട്.", "B) ശബ്ദത്തിന് സഞ്ചരിക്കാൻ ഒരു മാധ്യമം വേണം, എന്നാൽ പ്രകാശത്തിന് അത് ആവശ്യമില്ല.", "C) നമ്മുടെ കാതുകളേക്കാൾ വേഗത്തിൽ കണ്ണുകൾ പ്രതികരിക്കുന്നതുകൊണ്ട്.", "D) മിന്നൽ ഉണ്ടായതിന് ശേഷമാണ് ഇടിമുഴക്കം ഉണ്ടാകുന്നത്."], logic: [1,0,0,0] },
            { q: "മനുഷ്യ ശരീരത്തിന് പെട്ടെന്ന് ഊർജ്ജം നൽകുന്ന പ്രധാന ഉറവിടം ഏതാണ്?", opts: ["A) പ്രോട്ടീനുകൾ (Proteins)", "B) കൊഴുപ്പുകൾ (Fats)", "C) അന്നജം (Carbohydrates/Glucose)", "D) ജീവകങ്ങൾ (Vitamins)"], logic: [0,0,1,0] },
            { q: "തുറന്ന പാത്രത്തിൽ തിളച്ചുകൊണ്ടിരിക്കുന്ന വെള്ളത്തിന് കൂടുതൽ ചൂട് നൽകിയാൽ അതിൻ്റെ താപനിലയ്ക്ക് എന്ത് സംഭവിക്കും?", opts: ["A) താപനില അനന്തമായി കൂടിക്കൊണ്ടിരിക്കും.", "B) വെള്ളം മുഴുവൻ ആവിയാകുന്നത് വരെ താപനില ഒരേപോലെ തുടരും.", "C) താപനില ചെറുതായി കുറയും.", "D) അത് പ്ലാസ്മയായി മാറും."], logic: [0,1,0,0] },
            { q: "വായുവില്ലാത്ത ഒരു ശൂന്യതയിൽ (perfect vacuum) ഒരേ സമയം ഒരു ഭാരമുള്ള ഇരുമ്പ് പന്തും ഒരു തൂവലും താഴേക്ക് ഇട്ടാൽ എന്ത് സംഭവിക്കും?", opts: ["A) ഇരുമ്പ് പന്ത് ആദ്യം താഴെ വീഴും.", "B) തൂവൽ ആദ്യം താഴെ വീഴും.", "C) രണ്ടും ഒരേ സമയം താഴെ വീഴും.", "D) അവ രണ്ടും ഒഴുകി നടക്കും."], logic: [0,0,1,0] },
            { q: "പ്രകാശസംശ്ലേഷണത്തിനായി (Photosynthesis) സസ്യങ്ങൾ അന്തരീക്ഷത്തിൽ നിന്ന് പ്രധാനമായും വലിച്ചെടുക്കുന്ന വാതകം ഏതാണ്?", opts: ["A) ഓക്സിജൻ (Oxygen)", "B) നൈട്രജൻ (Nitrogen)", "C) കാർബൺ ഡൈ ഓക്സൈഡ് (Carbon Dioxide)", "D) ഹൈഡ്രജൻ (Hydrogen)"], logic: [0,0,1,0] },
            { q: "ഒരു ആസിഡും ബേസും കൃത്യമായ അളവിൽ ചേരുമ്പോൾ പ്രധാനമായും എന്താണ് ഉണ്ടാകുന്നത്?", opts: ["A) വീര്യം കൂടിയ ഒരു ആസിഡ്", "B) ഉപ്പും വെള്ളവും (Neutralization)", "C) വിഷവാതകങ്ങൾ", "D) ശുദ്ധമായ കാർബൺ"], logic: [0,1,0,0] },
            { q: "എന്തുകൊണ്ടാണ് ചന്ദ്രൻ രാത്രിയിൽ പ്രകാശിക്കുന്നത്?", opts: ["A) നക്ഷത്രങ്ങളെപ്പോലെ ചന്ദ്രൻ സ്വന്തമായി പ്രകാശം ഉത്പാദിപ്പിക്കുന്നു.", "B) സൂര്യപ്രകാശം ചന്ദ്രനിൽ തട്ടി പ്രതിഫലിക്കുന്നത് കൊണ്ട്.", "C) ഭൂമിയിൽ നിന്നുള്ള പ്രകാശം പ്രതിഫലിക്കുന്നത് കൊണ്ട്.", "D) ചന്ദ്രൻ്റെ ഉപരിതലത്തിൽ പ്രകാശിക്കുന്ന ധാതുക്കൾ ഉള്ളതുകൊണ്ട്."], logic: [0,1,0,0] },
            { q: "ശരീരത്തെ സംരക്ഷിക്കാൻ വാക്സിനുകൾ പ്രധാനമായും എങ്ങനെയാണ് പ്രവർത്തിക്കുന്നത്?", opts: ["A) അവ ശരീരത്തിലെ ബാക്ടീരിയകളെ നേരിട്ട് കൊല്ലുന്നു.", "B) രോഗാണുവിൻ്റെ ദോഷകരമല്ലാത്ത ഒരു ഭാഗം ശരീരത്തിൽ കടത്തിവിട്ട് രോഗപ്രതിരോധ ശേഷിയെ പരിശീലിപ്പിക്കുന്നു.", "C) അണുബാധ തടയാൻ അവ ആമാശയത്തിൽ ഒരു ആവരണം ഉണ്ടാക്കുന്നു.", "D) അവ താത്കാലികമായി കൃത്രിമ രക്തകോശങ്ങൾ നൽകുന്നു."], logic: [0,1,0,0] },
            { q: "എന്തുകൊണ്ടാണ് വലിയൊരു സ്റ്റീൽ കപ്പൽ വെള്ളത്തിൽ പൊങ്ങിക്കിടക്കുന്നതും, എന്നാൽ ഒരു ചെറിയ സ്റ്റീൽ ആണി മുങ്ങിപ്പോകുന്നതും?", opts: ["A) ഒരു ബക്കറ്റിലെ വെള്ളത്തേക്കാൾ സാന്ദ്രത സമുദ്രജലത്തിന് കൂടുതലായതുകൊണ്ട്.", "B) കപ്പലിൻ്റെ രൂപം അതിൻ്റെ വലിയ ഭാരത്തിന് തുല്യമായ അളവിൽ വെള്ളം മാറ്റിനിർത്തുന്നു (Displacement).", "C) കപ്പലിൽ വെള്ളം കയറാത്ത പ്രത്യേക പെയിൻ്റ് ഉപയോഗിച്ചിട്ടുള്ളതുകൊണ്ട്.", "D) കപ്പലിനെ മുകളിലേക്ക് തള്ളാൻ അതിൽ എഞ്ചിനുകൾ ഉള്ളതുകൊണ്ട്."], logic: [0,1,0,0] },
            { q: "ഭൂമിയിലെ എല്ലാ ജൈവ ജീവജാലങ്ങളുടെയും അടിസ്ഥാന ഘടകം എന്നറിയപ്പെടുന്ന മൂലകം ഏതാണ്?", opts: ["A) ഓക്സിജൻ (Oxygen)", "B) ഹൈഡ്രജൻ (Hydrogen)", "C) കാർബൺ (Carbon)", "D) നൈട്രജൻ (Nitrogen)"], logic: [0,0,1,0] }
        ]
    }
};

export default function CeatAssesmentTool() {
    // Component State
    const [lang, setLang] = useState('en');
    const [step, setStep] = useState(1);
    
    const [formData, setFormData] = useState({ studentName: '', contactNumber: '', currentClass: '', district: '', careerPlan: '', familyPro: '' });
    
    // Store the option index instead of value
    const [answers, setAnswers] = useState({});
    const [errors, setErrors] = useState({});
    const [results, setResults] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    // Toast hook
    const toast = useToast();

    const totalSteps = 6;
    const totalQuestions = 30;
    
    // useRefs for scrolling to elements without using querySelector or getElementById
    const containerRef = useRef(null);
    const questionRefs = useRef({});

    const t = i18n[lang].ui;

    // Loading transition simulation
    useEffect(() => {
        if (step === 5) {
            const timer = setTimeout(() => {
                calculateResults();
                setStep(6);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 2800);
            return () => clearTimeout(timer);
        }
    }, [step]);

    const showToast = (messageKey) => {
        toast({
            title: t[messageKey] || messageKey,
            status: "error",
            duration: 3500,
            isClosable: true,
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        // Phone number validation - require exactly 10 digits
        if (name === 'contactNumber') {
            const phoneValue = value.replace(/\D/g, '').substring(0, 10);
            setFormData(prev => ({ ...prev, [name]: phoneValue }));
            if (errors[name]) setErrors(prev => ({ ...prev, [name]: false }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
            if (errors[name]) setErrors(prev => ({ ...prev, [name]: false }));
        }
    };

    const handleOptionChange = (section, index, optIndex) => {
        const key = `q_${section}_${index}`;
        
        // Save the index of the answer chosen
        setAnswers(prev => ({ ...prev, [key]: optIndex }));
        if (errors[key]) setErrors(prev => ({ ...prev, [key]: false }));

        // Auto scroll to next question logic using refs
        setTimeout(() => {
            const nextBlock = questionRefs.current[`block_${section}_${index + 1}`];
            if (nextBlock) {
                const y = nextBlock.getBoundingClientRect().top + window.scrollY - 120;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 250);
    };

    const validateCurrentStep = () => {
        let isValid = true;
        let newErrors = {};

        if (step === 1) {
            const requiredFields = ['studentName', 'contactNumber', 'currentClass', 'district'];
            requiredFields.forEach(field => {
                if (!formData[field].trim()) {
                    isValid = false;
                    newErrors[field] = true;
                }
                // Additional validation for phone number - require exactly 10 digits
                if (field === 'contactNumber' && formData[field].trim().length !== 10) {
                    isValid = false;
                    newErrors[field] = true;
                }
            });
            if (!isValid) showToast('err_req');
        }

        setErrors(newErrors);
        return isValid;
    };

    const nextStep = () => {
        if (!validateCurrentStep()) return;
        
        // If on step 1, submit the form data
        if (step === 1) {
            handleFormSubmit();
        } 
        // If on step 4 (last question section), calculate results and move to loading
        else if (step === 4) {
            calculateResults();
            setStep(5);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (step < totalSteps) {
            setStep(s => s + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const prevStep = () => {
        if (step > 1 && step < 5) {
            setStep(s => s - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Note: The logic calculation sets React state `results` instead of directly manipulating the DOM.
    // The UI handles rendering below in the JSX return.
    const calculateResults = () => {
        let scoreAC = 0;
        ['A', 'C'].forEach(sectionKey => {
            const questions = sectionKey === 'A' ? i18n.en.qA : i18n.en.qC;
            const numQs = questions.length;
            for (let i = 0; i < numQs; i++) {
                const optIndex = answers[`q_${sectionKey}_${i}`];
                if (optIndex !== undefined) {
                    const val = questions[i].logic[optIndex]; // Map index back to score logic
                    if (val == 1) scoreAC += 4;
                    else scoreAC -= 1;
                }
            }
        });

        let scoreB = 0;
        for (let i = 0; i < i18n.en.qB.length; i++) {
            const optIndex = answers[`q_B_${i}`];
            if (optIndex !== undefined) {
                const val = i18n.en.qB[i].weight[optIndex]; // Map index back to score weight
                scoreB += parseInt(val);
            }
            else scoreB += 1;
        }

        const finalScoreAC = Math.max(0, scoreAC);
        
        // Setting state triggers a React re-render.
        setResults({ scoreAC: finalScoreAC, scoreB });
    };

    const handleFormSubmit = async () => {
        try {
            setIsSubmitting(true);
            
            // Prepare submission data
            const submissionData = {
                name: formData.studentName,
                mobile: formData.contactNumber,
                class: formData.currentClass,
                district: formData.district,
                careerplan: formData.careerPlan,
                scienceprofessional: formData.familyPro
            };

            const response = await authenticatedStrapiInstance.post(
                "/api/ceat-dopa-aptitudes",
                {
                    data: submissionData,
                }
            );
            

            
            if (response.status === 200) {
                toast({
                    title: "Great!",
                    description: "Details submitted successfully!",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
                
                // If on step 1, proceed to assessment questions
                if (step === 1) {
                    setStep(s => s + 1);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    // Move to results step after final submission
                    setStep(5);
                }
            } else {
                toast({
                    title: "Ugh no!",
                    description: "Something went wrong!",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
        } catch (error) {
           
            toast({   
                title: "Ugh no!",
                description: `Something went wrong! ${error.response?.data?.error?.message || error.message}`,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const progressPercentage = step === 1 ? 0 : step >= 5 ? 100 : (Object.keys(answers).length / totalQuestions) * 100;

    const renderQuestionSection = (sectionKey, questions) => {
        return (
            <div className="space-y-6">
                {questions.map((q, qIndex) => {
                    const errorKey = `q_${sectionKey}_${qIndex}`;
                    const hasError = errors[errorKey];

                    return (
                        <div 
                            key={qIndex} 
                            ref={(el) => (questionRefs.current[`block_${sectionKey}_${qIndex}`] = el)}
                            className={`p-6 rounded-2xl border-2 shadow-sm transition-all duration-300 ${hasError ? 'border-red-400 bg-red-50/50' : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'}`}
                        >
                            <h3 className="font-bold text-lg text-[#000080] mb-5">{qIndex + 1}. {q.q}</h3>
                            <div className="space-y-3">
                                {q.opts.map((optText, optIndex) => {
                                    const isSelected = answers[errorKey] === optIndex;

                                    return (
                                        <label 
                                            key={optIndex}
                                            className={`flex items-center min-h-[52px] p-3 md:px-5 border-2 rounded-xl cursor-pointer transition-all ${isSelected ? 'border-[#00B7EB] bg-[#00B7EB]/10 text-[#000080] font-semibold shadow-sm -translate-y-[1px]' : 'bg-white border-slate-200 text-slate-600 font-medium hover:border-slate-300 hover:bg-slate-50'}`}
                                        >
                                            <input 
                                                type="radio" 
                                                name={errorKey} 
                                                value={optIndex} 
                                                checked={isSelected}
                                                onChange={() => handleOptionChange(sectionKey, qIndex, optIndex)}
                                                className="hidden" 
                                            />
                                            <div className={`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center shrink-0 transition-colors ${isSelected ? 'border-[#00B7EB]' : 'border-slate-300 bg-white'}`}>
                                                {isSelected && <div className="w-3 h-3 bg-[#00B7EB] rounded-full" />}
                                            </div>
                                            <span>{optText}</span>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 md:p-6" ref={containerRef}>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col min-h-[85vh] relative border border-slate-200">
                
                {/* Sticky Header */}
                <div className="sticky top-0 z-50 bg-white shadow-sm">
                    <header className="bg-gradient-to-br from-[#000080] to-[#000044] text-white p-6 md:p-8 text-center relative">
                        <button 
                            onClick={() => setLang(lang === 'en' ? 'ml' : 'en')}
                            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 backdrop-blur-sm active:scale-95"
                        >
                            <FaGlobe size={16} />
                            {lang === 'en' ? 'മലയാളം' : 'English'}
                        </button>
                        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-6 md:mt-2 mb-2">{t.head_title}</h1>
                        <p className="text-white/80 font-medium">{t.head_subtitle}</p>
                    </header>
                    
                    {/* Progress Bar */}
                    <div className="h-2 w-full bg-slate-200 overflow-hidden">
                        <div 
                            className="h-full bg-[#00B7EB] transition-all duration-700 ease-out relative animate-slide-up" 
                            style={{ width: `${progressPercentage}%` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer" />
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <main className="flex-grow p-6 md:p-10 transition-opacity duration-500">
                    
                    {/* Step 1: Lead Capture */}
                    {step === 1 && (
                        <>
                            <div className="animate-slide-up">
                            <div className="text-center mb-10">
                                <h2 className="text-[#000080] text-2xl md:text-3xl font-extrabold mb-3">{t.step1_title}</h2>
                                <p className="text-slate-500 max-w-lg mx-auto mb-5">{t.step1_desc}</p>
                                <div className="inline-flex items-center bg-[#00B7EB]/10 text-[#000080] px-4 py-2 rounded-full text-sm font-semibold border border-[#00B7EB]/20">
                                    <FaShieldAlt size={16} className="mr-2 shrink-0 text-[#00B7EB]" />
                                    {t.trust_badge}
                                </div>
                            </div>
                            
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-5" noValidate onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
                                <div className="md:col-span-2">
                                    <label className="block font-semibold mb-2">{t.lbl_name} <span className="text-red-500">*</span></label>
                                    <input type="text" name="studentName" value={formData.studentName} onChange={handleInputChange} placeholder="E.g. Haamid Rumi" className={`w-full min-h-[48px] p-3 border-2 rounded-xl text-base bg-slate-50 focus:outline-none focus:border-[#00B7EB] focus:ring-4 focus:ring-[#00B7EB]/10 transition-all ${errors.studentName ? 'border-red-400 bg-red-50 animate-pulse' : 'border-slate-200'}`} />
                                </div>
                                <div>
                                    <label className="block font-semibold mb-2">{t.lbl_phone} <span className="text-red-500">*</span></label>
                                    <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} placeholder="9876543210" pattern="\d{10}" maxLength="10" className={`w-full min-h-[48px] p-3 border-2 rounded-xl text-base bg-slate-50 focus:outline-none focus:border-[#00B7EB] focus:ring-4 focus:ring-[#00B7EB]/10 transition-all ${errors.contactNumber ? 'border-red-400 bg-red-50 animate-pulse' : 'border-slate-200'}`} />
                                </div>
                                <div>
                                    <label className="block font-semibold mb-2">{t.lbl_class} <span className="text-red-500">*</span></label>
                                    <select name="currentClass" value={formData.currentClass} onChange={handleInputChange} className={`w-full min-h-[48px] p-3 border-2 rounded-xl text-base bg-slate-50 focus:outline-none focus:border-[#00B7EB] focus:ring-4 focus:ring-[#00B7EB]/10 transition-all ${errors.currentClass ? 'border-red-400 bg-red-50 animate-pulse' : 'border-slate-200'}`}>
                                        <option value="">{t.opt_class_def}</option>
                                        <option value="10th">{t.opt_class_10}</option>
                                        <option value="12th">{t.opt_class_12}</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block font-semibold mb-2">{t.lbl_dist} <span className="text-red-500">*</span></label>
                                    <input type="text" name="district" value={formData.district} onChange={handleInputChange} placeholder="E.g. Kozhikode" className={`w-full min-h-[48px] p-3 border-2 rounded-xl text-base bg-slate-50 focus:outline-none focus:border-[#00B7EB] focus:ring-4 focus:ring-[#00B7EB]/10 transition-all ${errors.district ? 'border-red-400 bg-red-50 animate-pulse' : 'border-slate-200'}`} />
                                </div>
                                <div>
                                    <label className="block font-semibold mb-2">{t.lbl_career}</label>
                                    <input type="text" name="careerPlan" value={formData.careerPlan} onChange={handleInputChange} placeholder="Doctor, Engineer, Research..." className="w-full min-h-[48px] p-3 border-2 rounded-xl text-base bg-slate-50 border-slate-200 focus:outline-none focus:border-[#00B7EB] focus:ring-4 focus:ring-[#00B7EB]/10 transition-all" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block font-semibold mb-2">{t.lbl_fam}</label>
                                    <select name="familyPro" value={formData.familyPro} onChange={handleInputChange} className="w-full min-h-[48px] p-3 border-2 rounded-xl text-base bg-slate-50 border-slate-200 focus:outline-none focus:border-[#00B7EB] focus:ring-4 focus:ring-[#00B7EB]/10 transition-all">
                                        <option value="">{t.opt_fam_def}</option>
                                        <option value="Yes">{t.opt_fam_yes}</option>
                                        <option value="No">{t.opt_fam_no}</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <button type="submit" disabled={isSubmitting} className="w-full min-h-[54px] px-8 bg-[#000080] hover:bg-[#000055] disabled:bg-[#000040] disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 disabled:transform-none flex items-center justify-center gap-2">
                                        {isSubmitting ? (
                                            <>
                                                <FaSpinner size={20} className="animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                {t.btn_start}
                                                <FaArrowRight size={20} />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                        </>
                    )}

                    {/* Steps 2-4: Questions */}
                    {step === 2 && (
                        <div className="animate-slide-up">
                            <div className="text-center mb-10">
                                <h2 className="text-[#000080] text-2xl font-extrabold mb-3">{t.step2_title}</h2>
                                <p className="text-slate-500">{t.step2_desc}</p>
                            </div>
                            {renderQuestionSection('A', i18n[lang].qA)}
                        </div>
                    )}

                    {step === 3 && (
                        <div className="animate-slide-up">
                            <div className="text-center mb-10">
                                <h2 className="text-[#000080] text-2xl font-extrabold mb-3">{t.step3_title}</h2>
                                <p className="text-slate-500">{t.step3_desc}</p>
                            </div>
                            {renderQuestionSection('B', i18n[lang].qB)}
                        </div>
                    )}

                    {step === 4 && (
                        <div className="animate-slide-up">
                            <div className="text-center mb-10">
                                <h2 className="text-[#000080] text-2xl font-extrabold mb-3">{t.step4_title}</h2>
                                <p className="text-slate-500">{t.step4_desc}</p>
                            </div>
                            {renderQuestionSection('C', i18n[lang].qC)}
                        </div>
                    )}

                    {/* Step 5: Loading */}
                    {step === 5 && (
                        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center animate-fade-in">
                            <FaSpinner size={64} className="text-[#00B7EB] animate-spin mb-6" />
                            <h2 className="text-[#000080] text-2xl md:text-3xl font-extrabold mb-4">{t.load_title}</h2>
                            <p className="text-slate-500 max-w-md mx-auto">{t.load_desc}</p>
                        </div>
                    )}

                    {/* Step 6: Results */}
                    {step === 6 && results && (
                        <div className="animate-slide-up-slow">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl text-[#000080] font-extrabold mb-2">{t.res_title}</h2>
                                <p className="text-slate-600">{t.res_sub} <strong className="text-[#000080] text-lg">{formData.studentName.split(' ')[0] || 'Student'}</strong></p>
                            </div>

                            <div className="space-y-6 mb-10">
                                {/* Card AC */}
                                {/* JSX completely replaces cardAC.className assignments */}
                                <div className={`relative overflow-hidden bg-white border-2 rounded-2xl p-6 shadow-md ${results.scoreAC >= 64 ? 'border-emerald-200' : results.scoreAC >= 40 ? 'border-amber-200' : 'border-red-200'}`}>
                                    <div className={`absolute top-0 left-0 w-1.5 h-full ${results.scoreAC >= 64 ? 'bg-emerald-500' : results.scoreAC >= 40 ? 'bg-amber-500' : 'bg-red-500'}`} />
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-5">
                                        <div>
                                            <h3 className="font-bold text-xl text-slate-900 mb-2">{t.card1_title}</h3>
                                            <div className="flex items-baseline">
                                                <span className="text-4xl font-extrabold text-[#000080] tracking-tight">{results.scoreAC}</span>
                                                <span className="text-slate-400 font-semibold ml-1">/ 80</span>
                                            </div>
                                        </div>
                                        
                                        {/* JSX dynamic styling equivalent to badgeAC.className */}
                                        <div className={`px-4 py-1.5 rounded-full text-sm font-bold text-white shadow-sm uppercase tracking-wide ${results.scoreAC >= 64 ? 'bg-emerald-500 shadow-emerald-500/20' : results.scoreAC >= 40 ? 'bg-amber-500 shadow-amber-500/20' : 'bg-red-500 shadow-red-500/20'}`}>
                                            {/* JSX dynamic text equivalent to badgeAC.textContent */}
                                            {results.scoreAC >= 64 ? t.fb_high_badg : results.scoreAC >= 40 ? t.fb_mod_badg : t.fb_low_badg}
                                        </div>
                                    </div>
                                    
                                    {/* JSX dynamic text equivalent to feedbackAC.innerHTML */}
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-slate-600 leading-relaxed" 
                                         dangerouslySetInnerHTML={{ __html: results.scoreAC >= 64 ? t.fb_high_txt : results.scoreAC >= 40 ? t.fb_mod_txt : t.fb_low_txt }} 
                                    />
                                </div>

                                {/* Card B */}
                                {/* JSX completely replaces cardB.className assignments */}
                                <div className={`relative overflow-hidden bg-white border-2 rounded-2xl p-6 shadow-md ${results.scoreB >= 28 ? 'border-emerald-200' : 'border-red-200'}`}>
                                    <div className={`absolute top-0 left-0 w-1.5 h-full ${results.scoreB >= 28 ? 'bg-emerald-500' : 'bg-red-500'}`} />
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-5">
                                        <div>
                                            <h3 className="font-bold text-xl text-slate-900 mb-2">{t.card2_title}</h3>
                                            <div className="flex items-baseline">
                                                <span className="text-4xl font-extrabold text-[#000080] tracking-tight">{results.scoreB}</span>
                                                <span className="text-slate-400 font-semibold ml-1">/ 40</span>
                                            </div>
                                        </div>
                                        
                                        {/* JSX dynamic styling equivalent to badgeB.className */}
                                        <div className={`px-4 py-1.5 rounded-full text-sm font-bold text-white shadow-sm uppercase tracking-wide ${results.scoreB >= 28 ? 'bg-emerald-500 shadow-emerald-500/20' : 'bg-red-500 shadow-red-500/20'}`}>
                                            {/* JSX dynamic text equivalent to badgeB.textContent */}
                                            {results.scoreB >= 28 ? t.fit_badg : t.unfit_badg}
                                        </div>
                                    </div>
                                    
                                    {/* JSX dynamic text equivalent to feedbackB.innerHTML */}
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-slate-600 leading-relaxed" 
                                         dangerouslySetInnerHTML={{ __html: results.scoreB >= 28 ? t.fit_txt : t.unfit_txt }} 
                                    />
                                </div>
                            </div>

                            {/* CTA Box */}
                            <div className="bg-[#000080] text-white p-8 rounded-2xl shadow-xl text-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
                                <h3 className="text-2xl font-extrabold mb-3 relative z-10">{t.cta_title}</h3>
                                <p className="text-white/90 mb-8 relative z-10 max-w-xl mx-auto">{t.cta_desc}</p>
                                
                                <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                                    <a href="https://wa.me/919048712225?text=Hi,%20I%20just%20completed%20the%20CEAT%20test%20and%20would%20like%20to%20book%20an%20expert%20counseling%20session." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-[#25D366]/40 hover:-translate-y-1 w-full sm:w-auto">
                                        <FaComments size={24} />
                                        {t.btn_wa1}
                                    </a>
                                    <a href="https://wa.me/919207522200?text=Hi,%20I%20just%20completed%20the%20CEAT%20test%20and%20would%20like%20to%20book%20an%20expert%20counseling%20session." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-[#25D366]/40 hover:-translate-y-1 w-full sm:w-auto">
                                        <FaComments size={24} />
                                        {t.btn_wa2}
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </main>

                {/* Footer Navigation */}
                {step > 1 && step <= 4 && (
                    <footer className="bg-slate-50 border-t border-slate-200 p-5 md:px-10 md:py-6 flex flex-col-reverse md:flex-row gap-4 justify-between items-center z-10">
                        <button onClick={prevStep} className="flex items-center justify-center gap-2 w-full md:w-auto min-h-[54px] px-8 bg-white text-slate-500 border-2 border-slate-200 hover:border-slate-300 hover:text-slate-800 font-bold rounded-xl transition-colors active:scale-95">
                            <FaArrowLeft size={20} />
                            {t.btn_prev}
                        </button>
                        <button 
                            onClick={nextStep} 
                            disabled={isSubmitting}
                            className="flex items-center justify-center gap-2 w-full md:w-auto min-h-[54px] px-8 bg-[#000080] hover:bg-[#000055] disabled:bg-[#000040] disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 disabled:transform-none"
                        >
                            {isSubmitting && step === 4 ? (
                                <>
                                    <FaSpinner size={20} className="animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    {step === 4 ? t.btn_submit : t.btn_next}
                                    {step !== 4 && <FaArrowRight size={20} />}
                                </>
                            )}
                        </button>
                    </footer>
                )}

            </div>
            
            <style>{`
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
                @keyframes slideUpFade {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
                .animate-slide-up {
                    animation: slideUpFade 0.5s ease-out forwards;
                }
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out forwards;
                }
                .animate-slide-up-slow {
                    animation: slideUpFade 0.7s ease-out forwards;
                }
            `}</style>
        </div>
    );
}