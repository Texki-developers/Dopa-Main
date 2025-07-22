import NeetDetailsForm from '@/Components/NeetDetailsForm';
import { starpiInstance } from '@/config/strapiInstance';
import React, { useState } from 'react';
import { useToast } from "@chakra-ui/react";



// --- DATA HUB (kept outside components for performance) ---
const collegeData = [
    // MBBS Govt
    { name: 'TD Govt. Medical College, Alappuzha', course: 'MBBS_Govt', lastRanks: { SM: 849, EW: 2104, EZ: 1020, MU: 970, BH: 1332, LA: 2303, DV: 5549, VK: 1081, BX: 1341, SC: 10360, ST: 19501 } },
    { name: 'Govt. Medical College, Ernakulam', course: 'MBBS_Govt', lastRanks: { SM: 954, EW: 2347, EZ: 1267, MU: 1256, BH: 1595, LA: 2388, DV: 6423, VK: 1161, BX: 2251, SC: 10931, ST: 18594 } },
    { name: 'Government Medical College Idukki', course: 'MBBS_Govt', lastRanks: { EZ: 2483, MU: 1729, LA: 3101, DV: 8490, VK: 2185, BH: 2253, BX: 4070, SC: 14378, ST: 21907, EW: 3320 } },
    { name: 'Govt. Medical College, Kozhikkode', course: 'MBBS_Govt', lastRanks: { SM: 275, EW: 1252, EZ: 495, MU: 320, BH: 686, LA: 1294, DV: 3575, VK: 500, BX: 2223, SC: 7645, ST: 15108 } },
    { name: 'Govt. Medical College, Kollam', course: 'MBBS_Govt', lastRanks: { SM: 952, EW: 2330, EZ: 1521, MU: 1296, BH: 1567, LA: 2410, DV: 6380, VK: 1516, BX: 1662, SC: 11211, ST: 18739 } },
    { name: 'Government Medical College Kannur', course: 'MBBS_Govt', lastRanks: { SM: 947, EW: 2605, EZ: 1394, MU: 1269, BH: 1592, LA: 2608, DV: 6426, VK: 1389, BX: 2682, SC: 11369, ST: 21570 } },
    { name: 'Govt. Medical College, Kottayam', course: 'MBBS_Govt', lastRanks: { SM: 618, EW: 1715, EZ: 804, MU: 744, BH: 1099, LA: 1929, DV: 5041, VK: 899, BX: 1127, SC: 9341, ST: 18504 } },
    { name: 'Govt. Medical College, Manjeri', course: 'MBBS_Govt', lastRanks: { SM: 950, EW: 2576, EZ: 1311, MU: 1103, BH: 1640, LA: 2577, DV: 6242, VK: 1225, BX: 2685, SC: 10947, ST: 19778 } },
    { name: 'Government Medical College, Palakkad', course: 'MBBS_Govt', lastRanks: { EZ: 1624, MU: 1349, LA: 2827, DV: 6753, VK: 1699, BH: 1670, BX: 2376, SC: 14549, ST: 22304, EW: 2871 } },
    { name: 'Government Medical College, Konni', course: 'MBBS_Govt', lastRanks: { EZ: 2329, MU: 1558, LA: 2692, VK: 2197, BH: 2236, SC: 13268, ST: 20402, EW: 2683 } },
    { name: 'Govt. Medical College, Thrissur', course: 'MBBS_Govt', lastRanks: { SM: 632, EW: 1798, EZ: 859, MU: 691, BH: 1193, LA: 2097, DV: 4611, VK: 1006, BX: 1305, SC: 9810, ST: 20679 } },
    { name: 'Govt. Medical College, Thiruvananthapuram', course: 'MBBS_Govt', lastRanks: { SM: 428, EW: 1482, EZ: 690, MU: 492, BH: 872, LA: 1651, DV: 4170, VK: 610, BX: 795, SC: 8892, ST: 18775 } },
    // MBBS Self
    { name: 'Al-Azhar, Thodupuzha', course: 'MBBS_Self', lastRanks: { SM: 9551, EW: 23389, EZ: 10186, MU: 10619, LA: 11526, DV: 10467, VK: 12854, BH: 9607, BX: 10295, SC: 18913, ST: 16608 } },
    { name: 'Amala, Thrissur', course: 'MBBS_Self', lastRanks: { SM: 2671, EZ: 2796, MU: 2856, LA: 3348, BH: 2822, SC: 11997 } },
    { name: 'Azeezia, Kollam', course: 'MBBS_Self', lastRanks: { SM: 8239, EZ: 8795, MU: 8353, LA: 10417, VK: 10151, SC: 16100, ST: 24719 } },
    { name: 'Believers Church, Thiruvalla', course: 'MBBS_Self', lastRanks: { SM: 3584, EZ: 3952, MU: 3734, LA: 4389, SC: 14328, ST: 21826 } },
    { name: 'Dr. Moopen\'s, Wayanad', course: 'MBBS_Self', lastRanks: { SM: 9183, EW: 16957, EZ: 9999, MU: 10140, LA: 13073, DV: 11228, VK: 12265, BH: 9439, BX: 12605, SC: 16562, ST: 24173 } },
    { name: 'MES, Perinthalmanna', course: 'MBBS_Self', lastRanks: { SM: 3409, EZ: 4543, MU: 3615, LA: 10175, DV: 8350, VK: 5599, BH: 3741, SC: 15121, ST: 21842 } },
    { name: 'Sree Gokulam, TVPM', course: 'MBBS_Self', lastRanks: { SM: 3997, EW: 6990, EZ: 4378, MU: 5400, LA: 9944, DV: 8263, VK: 5884, BH: 4171, BX: 5216, SC: 15657, ST: 24018 } },
    { name: 'Jubilee Mission, Thrissur', course: 'MBBS_Self', lastRanks: { SM: 2471, EZ: 2505, MU: 2539, VK: 2703, SC: 14501, ST: 21645 } },
    { name: 'KMCT, Kozhikkode', course: 'MBBS_Self', lastRanks: { SM: 6467, EZ: 7587, MU: 6798, LA: 12387, DV: 8604, VK: 8042, BH: 6989, BX: 10790, SC: 15712, ST: 21851 } },
    { name: 'PK Das, Palakkad', course: 'MBBS_Self', lastRanks: { SM: 8311, EW: 14104, EZ: 9646, MU: 9222, LA: 11977, DV: 11137, VK: 11432, BH: 8576, BX: 8351, SC: 16582, ST: 25359 } },
    { name: 'Karuna, Palakkad', course: 'MBBS_Self', lastRanks: { SM: 8869, EZ: 9660, MU: 9225, LA: 12818, VK: 9177, SC: 16040, ST: 22278 } },
    { name: 'Malankara Orthodox, Kolenchery', course: 'MBBS_Self', lastRanks: { SM: 3153, EZ: 3618, MU: 3523, DV: 8017, BH: 3201, SC: 13069 } },
    { name: 'Malabar, Kozhikode', course: 'MBBS_Self', lastRanks: { SM: 5966, EW: 10286, EZ: 7314, MU: 7032, LA: 11456, DV: 8731, VK: 7369, BH: 6232, BX: 11911, SC: 15753, ST: 23446 } },
    { name: 'Mount Zion, Pathanamthitta', course: 'MBBS_Self', lastRanks: { SM: 9020, EZ: 9647, MU: 11184, LA: 9455, DV: 10412, VK: 10761, BH: 9207, BX: 11272, SC: 16256, ST: 24801 } },
    { name: 'Palakkad Institute of Medical Sciences', course: 'MBBS_Self', lastRanks: { SM: 10095, EW: 16916, EZ: 10510, MU: 11694, BH: 10157, LA: 13192, DV: 11155, VK: 12587, BX: 10478, SC: 16710, ST: 25507 } },
    { name: 'Pushpagiri, Thiruvalla', course: 'MBBS_Self', lastRanks: { SM: 3342, EZ: 3780, MU: 3482, DV: 8215, VK: 3451, SC: 13541 } },
    { name: 'Sree Narayana, Ernakulam', course: 'MBBS_Self', lastRanks: { SM: 8182, EW: 14329, EZ: 9267, MU: 10318, BH: 8445, LA: 11540, DV: 10176, VK: 10734, BX: 12075, SC: 16147, ST: 24012 } },
    { name: 'Dr. Somervell (CSI), Karakonam', course: 'MBBS_Self', lastRanks: { SM: 6897, EZ: 7434, MU: 9367, LA: 9293, VK: 7358, BH: 9854, SC: 14766, ST: 20292 } },
    { name: 'SUT, Thiruvananthapuram', course: 'MBBS_Self', lastRanks: { SM: 7591, EW: 11085, EZ: 8212, MU: 9719, BH: 7834, LA: 9648, DV: 10145, VK: 10796, BX: 7953, SC: 16536, ST: 24150 } },
    { name: 'Travancore, Kollam', course: 'MBBS_Self', lastRanks: { SM: 5026, EZ: 5265, MU: 5395, LA: 9545, DV: 6596, VK: 6810, BH: 5241, SC: 14420, ST: 22791 } },
     // BDS Govt
    { name: 'Govt. Dental College, Alappuzha', course: 'BDS_Govt', lastRanks: { SM: 4364, EW: 10342, EZ: 6080, MU: 5037, BH: 10244, LA: 9454, DV: 15820, VK: 8815, SC: 18180, ST: 25982 } },
    { name: 'Govt. Dental College, Kozhikkode', course: 'BDS_Govt', lastRanks: { SM: 2933, EW: 5916, EZ: 3475, MU: 3189, BH: 4783, LA: 4411, DV: 15005, VK: 4166, SC: 15493, ST: 26730 } },
    { name: 'Govt. Dental College, Kannur', course: 'BDS_Govt', lastRanks: { SM: 4446, EW: 10900, EZ: 6653, MU: 4992, BH: 10485, LA: 11780, DV: 15323, VK: 8095, BX: 15930, SC: 18191, ST: 27074 } },
    { name: 'Govt. Dental College, Kottayam', course: 'BDS_Govt', lastRanks: { SM: 4006, EW: 7968, EZ: 4832, MU: 4158, BH: 11689, LA: 6774, VK: 8298, BX: 16465, SC: 17095 } },
    { name: 'Govt. Dental College, Thrissur', course: 'BDS_Govt', lastRanks: { SM: 4168, EW: 5988, EZ: 5109, MU: 4267, BH: 9024, LA: 9580, DV: 17137, VK: 4399, SC: 17215, ST: 25942 } },
    { name: 'Govt. Dental College, Thiruvananthapuram', course: 'BDS_Govt', lastRanks: { SM: 3558, EW: 7043, EZ: 4632, MU: 3749, BH: 6218, LA: 7375, DV: 13222, VK: 3825, BX: 14202, SC: 16818, ST: 26611 } },
    // BDS Self (NEW DATA)
    { name: 'Al Azhar Dental College, Thodupuzha', course: 'BDS_Self', lastRanks: { SM: 28522, EZ: 35734, MU: 35647, LA: 32031, DV: 29600, BH: 37056, BX: 34929, KN: 30820, KU: 28596, SC: 31627, ST: 37979 } },
    { name: 'Annoor Dental College, Muvattupuzha', course: 'BDS_Self', lastRanks: { SM: 20403, EZ: 27648, MU: 21058, LA: 20946, DV: 24917, BH: 22133, SC: 21386, EW: 37817 } },
    { name: 'Sree Anjaneya Institute of Dental Sciences, Kozhikode', course: 'BDS_Self', lastRanks: { SM: 33297, EZ: 37322, MU: 37117, LA: 37568, DV: 35847, VK: 37549, BH: 37864, BX: 34601, SC: 35386, EW: 37628 } },
    { name: 'Azeezia College of Dental Science, Kollam', course: 'BDS_Self', lastRanks: { SM: 27511, EZ: 35526, MU: 34387, LA: 29467, DV: 27637, VK: 29385, BH: 29564, BX: 30840, KN: 28175, SC: 31540, ST: 31595 } },
    { name: 'Century International Inst for Dental Sciences, Kasaragod', course: 'BDS_Self', lastRanks: { SM: 38001 } },
    { name: 'Educare Institute of Dental Sciences, Malappuram', course: 'BDS_Self', lastRanks: { SM: 32022, EZ: 37296, MU: 36997, LA: 35142, DV: 36144, VK: 36616, BH: 37139, BX: 36904, KN: 35270, SC: 34395, ST: 35684 } },
    { name: 'Indira Gandhi Institute of Dental Sciences, Kothamangalam', course: 'BDS_Self', lastRanks: { SM: 29544, EZ: 37629, MU: 36235, LA: 37503, DV: 34196, BH: 37841, BX: 35101, KN: 35845, SC: 34359, ST: 31762, EW: 35681 } },
    { name: 'Kannur Dental College, Anjarakandy', course: 'BDS_Self', lastRanks: { SM: 34205, EZ: 36818, MU: 37385, LA: 37491, DV: 35118, BH: 35486, SC: 35580, ST: 36658 } },
    { name: 'KMCT Dental College, Kozhikode', course: 'BDS_Self', lastRanks: { SM: 20375, EZ: 24773, MU: 24265, LA: 27596, DV: 23313, VK: 31721, BH: 22046, BX: 29285, KU: 27917, SC: 23420, ST: 28759 } },
    { name: 'Mar Baselious Dental College, Kothamangalam', course: 'BDS_Self', lastRanks: { SM: 16550, EZ: 23229, MU: 18837, LA: 16617, DV: 17577, VK: 19548, BH: 17417, SC: 19553, ST: 31153 } },
    { name: 'MES Dental College, Perinthalmanna', course: 'BDS_Self', lastRanks: { SM: 26437, EZ: 31477, MU: 30119, LA: 37207, DV: 35067, VK: 29392, BH: 31981, BX: 31262, KU: 31506, SC: 34975 } },
    { name: 'Malabar Dental College, Edappal', course: 'BDS_Self', lastRanks: { SM: 30083, EZ: 35094, MU: 35229, LA: 30768, DV: 32191, BH: 34794, BX: 36112, KU: 32908, SC: 32332, ST: 31617, EW: 36431 } },
    { name: 'Noorul Islam College of Dental Science, Neyyattinkara', course: 'BDS_Self', lastRanks: { SM: 31134, EZ: 32745, MU: 37716, LA: 32166, DV: 34681, BH: 34198, SC: 32085, EW: 33865 } },
    { name: 'Pushpagiri College of Dental Science, Thiruvalla', course: 'BDS_Self', lastRanks: { SM: 12431, EZ: 15348, MU: 14780, LA: 18415, VK: 15044, SC: 18958 } },
    { name: 'PMS College of Dental Sciences, Vattappara', course: 'BDS_Self', lastRanks: { SM: 20118, EZ: 23837, MU: 22255, LA: 23298, DV: 25226, VK: 30059, BH: 22108, BX: 20800, KN: 21185, KU: 25155, SC: 21383, ST: 27548 } },
    { name: 'PSM College of Dental Sciences, Thrissur', course: 'BDS_Self', lastRanks: { SM: 29870, EZ: 37021, MU: 34734, LA: 30069, DV: 31716, VK: 37859, BH: 35220, BX: 34178, KN: 35022, KU: 37937, SC: 33295 } },
    { name: 'Royal Dental College, Palakkad', course: 'BDS_Self', lastRanks: { SM: 27004, EZ: 34639, MU: 35870, LA: 36282, DV: 27900, BH: 36564, SC: 30655 } },
    { name: 'St. Gregorios Dental College, Kothamangalam', course: 'BDS_Self', lastRanks: { SM: 23858, EZ: 28656, MU: 25662, LA: 28328, DV: 29610, VK: 26094, BH: 24630, BX: 24425, SC: 25006, ST: 32413 } },
    { name: 'Sri Sankara Dental College, Varkala', course: 'BDS_Self', lastRanks: { SM: 36593, EZ: 37742, MU: 37284, DV: 37709, BH: 36863, SC: 37388 } },
    { name: 'Travancore Dental College, Kollam', course: 'BDS_Self', lastRanks: { SM: 28950, EZ: 36901, MU: 31919, LA: 35976, DV: 33184, BH: 29093, SC: 31991 } },
    // Vet
    { name: 'College of Vet. & Animal Sc, Mannuthy, Thrissur', course: 'BVSc_Govt', lastRanks: { SM: 4075, EW: 5273, EZ: 5310, MU: 5031, LA: 8627, DV: 12758, VK: 6851, BH: 5766, BX: 16404, SC: 17026, ST: 25511 } },
    { name: 'College of Vet. & Animal Sc, Wayanad', course: 'BVSc_Govt', lastRanks: { SM: 5313, EW: 9493, EZ: 6621, MU: 6514, LA: 10120, DV: 8431, VK: 12656, BH: 8815, BX: 7487, SC: 17394, ST: 25410 } },
    // Agri
    { name: 'College of Agriculture, Vellayani', course: 'Agri_Govt', lastRanks: { SM: 8671, EW: 12050, EZ: 10876, MU: 10567, LA: 13871, BH: 11033, DV: 16694, VK: 11535, SC: 20222, ST: 25783 } },
    // Other Allied
    { name: 'College of Horticulture, Vellanikkara', course: 'Other_Govt', lastRanks: { SM: 5724, EW: 10608, EZ: 7757, MU: 6390, BH: 10560, LA: 10540, DV: 11938, VK: 11458, SC: 18800, ST: 24009 } },
    { name: 'College of Forestry, Vellanikkara', course: 'Other_Govt', lastRanks: { SM: 15512, EW: 19635, EZ: 15782, MU: 16065, BH: 17505, LA: 20077, DV: 21308, VK: 17448, SC: 23984, ST: 25885 } },
    { name: 'KUFOS, Panangad (Fisheries)', course: 'Other_Govt', lastRanks: { SM: 15828, EW: 26303, EZ: 18177, MU: 18000, LA: 18120, BH: 17988, DV: 16286, VK: 18011, SC: 23615, ST: 25975 } },
    { name: 'KUFOS, Payyannur (Fisheries)', course: 'Other_Govt', lastRanks: { SM: 18162, EW: 35105, EZ: 21217, MU: 19765, LA: 26269, BH: 22331, DV: 22383, VK: 22800, SC: 25235, ST: 26688 } },
    { name: 'B.Tech Biotechnology, Vellayani', course: 'Other_Govt', lastRanks: { SM: 13624, EW: 16566, EZ: 16844, MU: 16890, LA: 19973, DV: 16943, BH: 14134, BX: 22364, SC: 22363, ST: 26929 } },
    { name: 'College of Co-operation & Banking, Thrissur', course: 'Other_Govt', lastRanks: { SM: 22091, EZ: 23542, MU: 24874, LA: 27495, DV: 36290, VK: 23329, BH: 23170, SC: 28899, ST: 36630 } },
    { name: 'College of Climate Change, Thrissur', course: 'Other_Govt', lastRanks: { SM: 18586, EW: 35796, EZ: 22470, MU: 20207, LA: 21846, DV: 32996, VK: 18941, BH: 20140, SC: 25398 } },
    // AYUSH Govt
    { name: 'Ayurveda College, Pariyaram', course: 'BAMS_Govt', lastRanks: { SM: 13155, EW: 22153, EZ: 17517, MU: 16228, LA: 21492, DV: 24516, VK: 15212, BH: 15579, BX: 17658, SC: 22832, ST: 27443 } },
    { name: 'Govt. Homoeopathic College, Kozhikkode', course: 'BHMS_Govt', lastRanks: { SM: 11602, EW: 23811, EZ: 15881, MU: 12665, LA: 21192, DV: 23916, VK: 16371, BH: 15384, SC: 26084, ST: 26726 } },
    { name: 'Markaz Unani Medical College, Kozhikode', course: 'BUMS_Self', lastRanks: { SM: 37966, MU: 39187 } },
    { name: 'Santhigiri Siddha College, TVPM', course: 'BSMS_Self', lastRanks: { EZ: 39185 } },
];

const courseTitles = {
    MBBS_Govt: 'MBBS (Govt.)', MBBS_Self: 'MBBS (Self-Financing)',
    BDS_Govt: 'BDS (Govt.)', BDS_Self: 'BDS (Self-Financing)',
    BVSc_Govt: 'B.V.Sc (Veterinary)', Agri_Govt: 'B.Sc (Hons.) Agriculture',
    BAMS_Govt: 'BAMS (Govt. Ayurveda)', BHMS_Govt: 'BHMS (Homoeopathy - Govt.)',
    BUMS_Self: 'BUMS (Unani - Self)', BSMS_Self: 'BSMS (Siddha - Self)',
    Other_Govt: 'Other Allied Sciences'
};




// ====================================================================
// 2. THE COLLEGE PREDICTOR COMPONENT
// This contains the main logic and UI for the predictor.
// ====================================================================
const CollegePredictor = () => {
    const [rank, setRank] = useState('');
    const [category, setCategory] = useState('');
    const [results, setResults] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const handlePredict = () => {
        const rankNum = parseInt(rank);
        if (isNaN(rankNum) || rankNum < 1) {
            alert('Please enter a valid Kerala Rank.');
            return;
        }
        if (!category) {
            alert('Please select your category.');
            return;
        }
        
        const getChance = (cutoff, currentRank) => {
            if (currentRank > 0 && cutoff) {
                if (currentRank <= cutoff) return { text: 'High Chance', class: 'chance-high', order: 1 };
                if (currentRank <= cutoff * 1.15) return { text: 'Borderline', class: 'chance-borderline', order: 2 };
            }
            return { text: 'Low Chance', class: 'chance-low', order: 3 };
        };

        const processedResults = Object.keys(courseTitles).map(courseKey => {
            const collegesForCourse = collegeData.filter(c => c.course === courseKey);
            
            const collegesWithChance = collegesForCourse.map(college => {
                const cutoff = college.lastRanks[category] || college.lastRanks['SM'];
                const chance = getChance(cutoff, rankNum);
                return { 
                    ...college, 
                    chance, 
                    displayCutoff: cutoff, 
                    displayCategory: college.lastRanks[category] ? category : 'SM' 
                };
            }).sort((a, b) => a.chance.order - b.chance.order || a.displayCutoff - b.displayCutoff);

            const overallChanceOrder = collegesWithChance.length > 0
                ? Math.min(...collegesWithChance.map(c => c.chance.order))
                : 3;
            
            const overallChance = getChance(1, overallChanceOrder === 1 ? 1 : (overallChanceOrder === 2 ? 1.1 : 2));

            return {
                courseKey,
                title: courseTitles[courseKey],
                colleges: collegesWithChance,
                overallChance,
            };
        });
        
        setResults(processedResults);
        setActiveAccordion(null);
    };

    const toggleAccordion = (courseKey) => {
        setActiveAccordion(activeAccordion === courseKey ? null : courseKey);
    };

    return (
        <div className="container mx-auto p-4 sm:p-8 max-w-4xl">
            <header className="text-center mb-8">
                 <svg className="mx-auto h-12 w-auto text-sky-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8v-2h3V7h2v4h3v2h-3v4h-2z"/>
                </svg>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mt-4">DOPA Kerala College Predictor</h1>
                <p className="text-slate-600 mt-2">Enter your official KEAM 2025 Rank to predict your admission chances in Kerala.</p>
            </header>

            {/* Input Section */}
            <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label htmlFor="kerala_rank" className="block text-sm font-medium text-slate-700">Kerala State Rank*</label>
                        <input type="number" id="kerala_rank" value={rank} onChange={(e) => setRank(e.target.value)} placeholder="Enter your official rank" className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500" />
                    </div>
                    <div>
                        <label htmlFor="student_category" className="block text-sm font-medium text-slate-700">Kerala Category*</label>
                        <select id="student_category" value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500">
                            <option value="">Select Category</option>
                            <option value="SM">State Merit (SM)</option>
                            <option value="EW">EWS (EW)</option>
                            <option value="EZ">Ezhava (EZ)</option>
                            <option value="MU">Muslim (MU)</option>
                            <option value="BH">Other Backward Hindu (BH)</option>
                            <option value="LA">Latin Catholic & Anglo Indian (LA)</option>
                            <option value="DV">Dheevara (DV)</option>
                            <option value="VK">Viswakarma (VK)</option>
                            <option value="BX">Other Backward Christian (BX)</option>
                            <option value="KN">Kusavan (KN)</option>
                            <option value="KU">Kudumbi (KU)</option>
                            <option value="SC">Scheduled Caste (SC)</option>
                            <option value="ST">Scheduled Tribe (ST)</option>
                        </select>
                    </div>
                    <div className="md:self-end">
                        <button onClick={handlePredict} className="w-full bg-sky-600 text-white font-bold py-2.5 px-4 rounded-lg hover:bg-sky-700 transition-colors shadow-md">Predict My Chances</button>
                    </div>
                </div>
            </div>

            {/* Results Section */}
            {!results && (
                 <div className="text-center text-slate-500 p-8 bg-white rounded-xl shadow-md">
                    <p>Enter your rank and category to see your personalized admission possibilities.</p>
                </div>
            )}

            {results && (
                 <div className="bg-white p-6 rounded-xl shadow-md results-fade-in">
                    <div className="text-center border-b pb-4 mb-4">
                        <h2 className="text-2xl font-bold text-slate-800">Your Personalized Report</h2>
                        <p className="text-slate-600">Based on a Kerala Rank of <strong className="text-sky-700">{rank}</strong></p>
                    </div>
                    <div className="space-y-2">
                        {results.map(result => (
                             <div key={result.courseKey} className="border border-gray-200 rounded-lg">
                                <button onClick={() => toggleAccordion(result.courseKey)} className="w-full flex items-center justify-between p-4 text-left font-semibold text-slate-800 bg-slate-50 hover:bg-slate-100 transition-colors">
                                    <span>{result.title}</span>
                                    <span className={`px-3 py-1 text-sm rounded-full ${result.overallChance.class}`}>{result.overallChance.text}</span>
                                </button>
                                <div className={`accordion-content bg-white p-4 border-t border-gray-200 ${activeAccordion === result.courseKey ? 'open' : ''}`}>
                                     <ul className="space-y-3">
                                        {result.colleges.length > 0 ? (
                                            result.colleges.map(college => (
                                                 <li key={college.name} className="flex items-center justify-between text-sm p-3 rounded-md border border-slate-200">
                                                    <span className="flex-1 pr-4 font-medium text-slate-700">{college.name}</span>
                                                    <div className="text-right">
                                                        <span className={`text-xs font-semibold ${college.chance.class}`}>{college.chance.text}</span>
                                                        <span className="block text-xs text-slate-500 font-normal">Cutoff ({college.displayCategory}): {college.displayCutoff}</span>
                                                    </div>
                                                </li>
                                            ))
                                        ) : ( <p className="text-sm text-slate-500 p-3">No data available for this course and category.</p> )}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
             {/* Next Steps Section */}
            {results && (
                <div className="mt-12 results-fade-in">
                     <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
                        <h2 className="text-3xl font-bold text-center text-sky-800">What&apos;s Your Next Step?</h2>
                        
                        <div className="mt-8 border-t pt-6">
                            <h3 className="text-xl font-bold text-slate-800">For DOPA Students</h3>
                            <div className="mt-2 bg-sky-50 border-l-4 border-sky-500 text-sky-800 p-4 rounded-r-lg">
                                <p className="font-semibold">Your personalized allotment support is ready. Please contact your respective DOPA coordinator for one-on-one guidance to build your final, winning choice list.</p>
                            </div>
                        </div>

                        <div className="mt-8 border-t pt-6">
                            <h3 className="text-xl font-bold text-slate-800">Considering a Re-Attempt?</h3>
                            <p className="mt-2 text-slate-600">If you&apos;re thinking about a repeat year, a strategic plan is everything. Don&apos;t guess about your potential. Use our <strong>DOPA Re-Attempt Analysis Tool</strong> to get a detailed breakdown of your academic and preparation strengths.</p>
                            <p className="mt-2 text-slate-600 font-semibold">We strongly advise you to walk in for a detailed, one-on-one NEET strategy session with our doctor-mentors.</p>
                        </div>

                        <div className="mt-8 border-t pt-6">
                            <h3 className="text-xl font-bold text-slate-800">DOPA Scholarship Schemes</h3>
                            <p className="mt-2 text-slate-600 mb-4">We reward hard work. Check your eligibility for our scholarship programs.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-semibold text-slate-700">Based on NEET Score</h4>
                                    <ul className="mt-2 text-sm text-slate-600 space-y-1 list-disc list-inside">
                                        <li><strong>500 and above:</strong> Full Free (100% Academic + Mess Fee)</li>
                                        <li><strong>490 – 499:</strong> 100% Academic Fee (Hostel applicable)</li>
                                        <li><strong>480 – 489:</strong> 90% Academic Fee</li>
                                        <li><strong>470 – 479:</strong> 75% Academic Fee</li>
                                        <li><strong>430 – 469:</strong> 50% Academic Fee</li>
                                        <li><strong>400 – 429:</strong> 25% Academic Fee</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-700">Based on 12th Science Marks (out of 600)</h4>
                                    <ul className="mt-2 text-sm text-slate-600 space-y-1 list-disc list-inside">
                                        <li><strong>600:</strong> Full Free (100% Academic + Mess Fee)</li>
                                        <li><strong>598 – 599:</strong> 100% Academic Fee (Hostel applicable)</li>
                                        <li><strong>597:</strong> 90% Academic Fee</li>
                                        <li><strong>595 – 596:</strong> 80% Academic Fee</li>
                                        <li><strong>594:</strong> 70% Academic Fee</li>
                                        <li><strong>580 - 593:</strong> 5% - 60% (Contact office for details)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 border-t pt-6 text-center">
                            <h3 className="text-xl font-bold text-slate-800">Take the Next Step</h3>
                            <p className="mt-2 text-slate-600">Contact our expert team to discuss your results, scholarships, and personalized strategy.</p>
                            <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-8">
                                <div className="text-center">
                                    <p className="font-semibold text-gray-700">For North Kerala Students</p>
                                    <a href="tel:9645202200" className="mt-2 inline-block bg-sky-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-sky-700 transition-colors">Call Calicut Office: 964 520 2200</a>
                                </div>
                                <div className="text-center">
                                    <p className="font-semibold text-gray-700">For South Kerala Students</p>
                                    <a href="tel:9207802200" className="mt-2 inline-block bg-sky-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-sky-700 transition-colors">Call Thrissur Office: 920 780 2200</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}



// ====================================================================
export default function collegePrediction() {
  // This state controls which component is visible.
  const [isPredictorUnlocked, setIsPredictorUnlocked] = useState(false);
  const toast = useToast();
  
  const handlePreFormSuccess = async (data) => {
            try {
              starpiInstance.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${process.env.NEXT_PUBLIC_STRAPIE_TOKEN}`;
              starpiInstance.defaults.headers.common["Content-Type"] =
                "application/json";
        
              const response = await starpiInstance.post(
                "/api/college-prection-neet-scores",
                {
                  data: data,
                }
              );
              if (response.status === 200) {
                setIsPredictorUnlocked(true);
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
          };

  return (
    <div className="bg-slate-100 min-h-screen py-12 font-sans w-full">
      <main >
        {isPredictorUnlocked ? (
          <CollegePredictor />
        ) : (
          
          <NeetDetailsForm rank title="DOPA College Predictor" subheading="Enter your NEET details to predict colleges" btn="Predict Colleges" onSubmit={handlePreFormSuccess}/>
        )}
      </main>

      
    </div>
  );
}
