import NeetDetailsForm from "@/Components/NeetDetailsForm";
import { starpiInstance } from "@/config/strapiInstance";
import React, { useState } from "react";

// --- DATA HUB ---
// This data is kept outside the component as it's static and doesn't change.
const rankPredictorData = [
  { score: 640, rank: 5 },
  { score: 625, rank: 10 },
  { score: 615, rank: 20 },
  { score: 600, rank: 80 },
  { score: 580, rank: 400 },
  { score: 560, rank: 850 },
  { score: 550, rank: 1100 },
  { score: 540, rank: 1500 },
  { score: 530, rank: 2000 },
  { score: 520, rank: 2700 },
  { score: 510, rank: 3500 },
  { score: 500, rank: 5000 },
  { score: 490, rank: 6300 },
  { score: 470, rank: 8500 },
  { score: 450, rank: 10500 },
  { score: 430, rank: 13000 },
  { score: 410, rank: 16500 },
  { score: 390, rank: 20000 },
  { score: 370, rank: 24000 },
  { score: 350, rank: 29000 },
  { score: 330, rank: 34000 },
  { score: 310, rank: 39000 },
  { score: 0, rank: 50000 },
];
const collegeData = [
  // MBBS Govt
  {
    name: "TD Govt. Medical College, Alappuzha",
    course: "MBBS_Govt",
    lastRanks: {
      SM: 849,
      EW: 2104,
      EZ: 1020,
      MU: 970,
      BH: 1332,
      LA: 2303,
      DV: 5549,
      VK: 1081,
      BX: 1341,
      SC: 10360,
      ST: 19501,
    },
  },
  {
    name: "Govt. Medical College, Ernakulam",
    course: "MBBS_Govt",
    lastRanks: {
      SM: 954,
      EW: 2347,
      EZ: 1267,
      MU: 1256,
      BH: 1595,
      LA: 2388,
      DV: 6423,
      VK: 1161,
      BX: 2251,
      SC: 10931,
      ST: 18594,
    },
  },
  {
    name: "Government Medical College Idukki",
    course: "MBBS_Govt",
    lastRanks: {
      EZ: 2483,
      MU: 1729,
      LA: 3101,
      DV: 8490,
      VK: 2185,
      BH: 2253,
      BX: 4070,
      SC: 14378,
      ST: 21907,
      EW: 3320,
    },
  },
  {
    name: "Govt. Medical College, Kozhikkode",
    course: "MBBS_Govt",
    lastRanks: {
      SM: 275,
      EW: 1252,
      EZ: 495,
      MU: 320,
      BH: 686,
      LA: 1294,
      DV: 3575,
      VK: 500,
      BX: 2223,
      SC: 7645,
      ST: 15108,
    },
  },
  {
    name: "Govt. Medical College, Kollam",
    course: "MBBS_Govt",
    lastRanks: {
      SM: 952,
      EW: 2330,
      EZ: 1521,
      MU: 1296,
      BH: 1567,
      LA: 2410,
      DV: 6380,
      VK: 1516,
      BX: 1662,
      SC: 11211,
      ST: 18739,
    },
  },
  {
    name: "Government Medical College Kannur",
    course: "MBBS_Govt",
    lastRanks: {
      SM: 947,
      EW: 2605,
      EZ: 1394,
      MU: 1269,
      BH: 1592,
      LA: 2608,
      DV: 6426,
      VK: 1389,
      BX: 2682,
      SC: 11369,
      ST: 21570,
    },
  },
  {
    name: "Govt. Medical College, Kottayam",
    course: "MBBS_Govt",
    lastRanks: {
      SM: 618,
      EW: 1715,
      EZ: 804,
      MU: 744,
      BH: 1099,
      LA: 1929,
      DV: 5041,
      VK: 899,
      BX: 1127,
      SC: 9341,
      ST: 18504,
    },
  },
  {
    name: "Govt. Medical College, Manjeri",
    course: "MBBS_Govt",
    lastRanks: {
      SM: 950,
      EW: 2576,
      EZ: 1311,
      MU: 1103,
      BH: 1640,
      LA: 2577,
      DV: 6242,
      VK: 1225,
      BX: 2685,
      SC: 10947,
      ST: 19778,
    },
  },
  {
    name: "Government Medical College, Palakkad",
    course: "MBBS_Govt",
    lastRanks: {
      EZ: 1624,
      MU: 1349,
      LA: 2827,
      DV: 6753,
      VK: 1699,
      BH: 1670,
      BX: 2376,
      SC: 14549,
      ST: 22304,
      EW: 2871,
    },
  },
  {
    name: "Government Medical College, Konni",
    course: "MBBS_Govt",
    lastRanks: {
      EZ: 2329,
      MU: 1558,
      LA: 2692,
      VK: 2197,
      BH: 2236,
      SC: 13268,
      ST: 20402,
      EW: 2683,
    },
  },
  {
    name: "Govt. Medical College, Thrissur",
    course: "MBBS_Govt",
    lastRanks: {
      SM: 632,
      EW: 1798,
      EZ: 859,
      MU: 691,
      BH: 1193,
      LA: 2097,
      DV: 4611,
      VK: 1006,
      BX: 1305,
      SC: 9810,
      ST: 20679,
    },
  },
  {
    name: "Govt. Medical College, Thiruvananthapuram",
    course: "MBBS_Govt",
    lastRanks: {
      SM: 428,
      EW: 1482,
      EZ: 690,
      MU: 492,
      BH: 872,
      LA: 1651,
      DV: 4170,
      VK: 610,
      BX: 795,
      SC: 8892,
      ST: 18775,
    },
  },
  // MBBS Self
  {
    name: "Al-Azhar, Thodupuzha",
    course: "MBBS_Self",
    lastRanks: {
      SM: 9551,
      EW: 23389,
      EZ: 10186,
      MU: 10619,
      LA: 11526,
      DV: 10467,
      VK: 12854,
      BH: 9607,
      BX: 10295,
      SC: 18913,
      ST: 16608,
    },
  },
  {
    name: "Amala, Thrissur",
    course: "MBBS_Self",
    lastRanks: { SM: 2671, EZ: 2796, MU: 2856, LA: 3348, BH: 2822, SC: 11997 },
  },
  {
    name: "Azeezia, Kollam",
    course: "MBBS_Self",
    lastRanks: {
      SM: 8239,
      EZ: 8795,
      MU: 8353,
      LA: 10417,
      VK: 10151,
      SC: 16100,
      ST: 24719,
    },
  },
  {
    name: "Believers Church, Thiruvalla",
    course: "MBBS_Self",
    lastRanks: { SM: 3584, EZ: 3952, MU: 3734, LA: 4389, SC: 14328, ST: 21826 },
  },
  {
    name: "Dr. Moopen's, Wayanad",
    course: "MBBS_Self",
    lastRanks: {
      SM: 9183,
      EW: 16957,
      EZ: 9999,
      MU: 10140,
      LA: 13073,
      DV: 11228,
      VK: 12265,
      BH: 9439,
      BX: 12605,
      SC: 16562,
      ST: 24173,
    },
  },
  {
    name: "MES, Perinthalmanna",
    course: "MBBS_Self",
    lastRanks: {
      SM: 3409,
      EZ: 4543,
      MU: 3615,
      LA: 10175,
      DV: 8350,
      VK: 5599,
      BH: 3741,
      SC: 15121,
      ST: 21842,
    },
  },
  {
    name: "Sree Gokulam, TVPM",
    course: "MBBS_Self",
    lastRanks: {
      SM: 3997,
      EW: 6990,
      EZ: 4378,
      MU: 5400,
      LA: 9944,
      DV: 8263,
      VK: 5884,
      BH: 4171,
      BX: 5216,
      SC: 15657,
      ST: 24018,
    },
  },
  {
    name: "Jubilee Mission, Thrissur",
    course: "MBBS_Self",
    lastRanks: { SM: 2471, EZ: 2505, MU: 2539, VK: 2703, SC: 14501, ST: 21645 },
  },
  {
    name: "KMCT, Kozhikkode",
    course: "MBBS_Self",
    lastRanks: {
      SM: 6467,
      EZ: 7587,
      MU: 6798,
      LA: 12387,
      DV: 8604,
      VK: 8042,
      BH: 6989,
      BX: 10790,
      SC: 15712,
      ST: 21851,
    },
  },
  {
    name: "PK Das, Palakkad",
    course: "MBBS_Self",
    lastRanks: {
      SM: 8311,
      EW: 14104,
      EZ: 9646,
      MU: 9222,
      LA: 11977,
      DV: 11137,
      VK: 11432,
      BH: 8576,
      BX: 8351,
      SC: 16582,
      ST: 25359,
    },
  },
  {
    name: "Karuna, Palakkad",
    course: "MBBS_Self",
    lastRanks: {
      SM: 8869,
      EZ: 9660,
      MU: 9225,
      LA: 12818,
      VK: 9177,
      SC: 16040,
      ST: 22278,
    },
  },
  {
    name: "Malankara Orthodox, Kolenchery",
    course: "MBBS_Self",
    lastRanks: { SM: 3153, EZ: 3618, MU: 3523, DV: 8017, BH: 3201, SC: 13069 },
  },
  {
    name: "Malabar, Kozhikkode",
    course: "MBBS_Self",
    lastRanks: {
      SM: 5966,
      EW: 10286,
      EZ: 7314,
      MU: 7032,
      LA: 11456,
      DV: 8731,
      VK: 7369,
      BH: 6232,
      BX: 11911,
      SC: 15753,
      ST: 23446,
    },
  },
  {
    name: "Mount Zion, Pathanamthitta",
    course: "MBBS_Self",
    lastRanks: {
      SM: 9020,
      EZ: 9647,
      MU: 11184,
      LA: 9455,
      DV: 10412,
      VK: 10761,
      BH: 9207,
      BX: 11272,
      SC: 16256,
      ST: 24801,
    },
  },
  {
    name: "Palakkad Institute of Medical Sciences",
    course: "MBBS_Self",
    lastRanks: {
      SM: 10095,
      EW: 16916,
      EZ: 10510,
      MU: 11694,
      BH: 10157,
      LA: 13192,
      DV: 11155,
      VK: 12587,
      BX: 10478,
      SC: 16710,
      ST: 25507,
    },
  },
  {
    name: "Pushpagiri, Thiruvalla",
    course: "MBBS_Self",
    lastRanks: { SM: 3342, EZ: 3780, MU: 3482, DV: 8215, VK: 3451, SC: 13541 },
  },
  {
    name: "Sree Narayana, Ernakulam",
    course: "MBBS_Self",
    lastRanks: {
      SM: 8182,
      EW: 14329,
      EZ: 9267,
      MU: 10318,
      BH: 8445,
      LA: 11540,
      DV: 10176,
      VK: 10734,
      BX: 12075,
      SC: 16147,
      ST: 24012,
    },
  },
  {
    name: "Dr. Somervell (CSI), Karakonam",
    course: "MBBS_Self",
    lastRanks: {
      SM: 6897,
      EZ: 7434,
      MU: 9367,
      LA: 9293,
      VK: 7358,
      BH: 9854,
      SC: 14766,
      ST: 20292,
    },
  },
  {
    name: "SUT, Thiruvananthapuram",
    course: "MBBS_Self",
    lastRanks: {
      SM: 7591,
      EW: 11085,
      EZ: 8212,
      MU: 9719,
      BH: 7834,
      LA: 9648,
      DV: 10145,
      VK: 10796,
      BX: 7953,
      SC: 16536,
      ST: 24150,
    },
  },
  {
    name: "Travancore, Kollam",
    course: "MBBS_Self",
    lastRanks: {
      SM: 5026,
      EZ: 5265,
      MU: 5395,
      LA: 9545,
      DV: 6596,
      VK: 6810,
      BH: 5241,
      SC: 14420,
      ST: 22791,
    },
  },
  // BDS Govt
  {
    name: "Govt. Dental College, Alappuzha",
    course: "BDS_Govt",
    lastRanks: {
      SM: 4364,
      EW: 10342,
      EZ: 6080,
      MU: 5037,
      BH: 10244,
      LA: 9454,
      DV: 15820,
      VK: 8815,
      SC: 18180,
      ST: 25982,
    },
  },
  {
    name: "Govt. Dental College, Kozhikkode",
    course: "BDS_Govt",
    lastRanks: {
      SM: 2933,
      EW: 5916,
      EZ: 3475,
      MU: 3189,
      BH: 4783,
      LA: 4411,
      DV: 15005,
      VK: 4166,
      SC: 15493,
      ST: 26730,
    },
  },
  {
    name: "Govt. Dental College, Kannur",
    course: "BDS_Govt",
    lastRanks: {
      SM: 4446,
      EW: 10900,
      EZ: 6653,
      MU: 4992,
      BH: 10485,
      LA: 11780,
      DV: 15323,
      VK: 8095,
      BX: 15930,
      SC: 18191,
      ST: 27074,
    },
  },
  {
    name: "Govt. Dental College, Kottayam",
    course: "BDS_Govt",
    lastRanks: {
      SM: 4006,
      EW: 7968,
      EZ: 4832,
      MU: 4158,
      BH: 11689,
      LA: 6774,
      VK: 8298,
      BX: 16465,
      SC: 17095,
    },
  },
  {
    name: "Govt. Dental College, Thrissur",
    course: "BDS_Govt",
    lastRanks: {
      SM: 4168,
      EW: 5988,
      EZ: 5109,
      MU: 4267,
      BH: 9024,
      LA: 9580,
      DV: 17137,
      VK: 4399,
      SC: 17215,
      ST: 25942,
    },
  },
  {
    name: "Govt. Dental College, Thiruvananthapuram",
    course: "BDS_Govt",
    lastRanks: {
      SM: 3558,
      EW: 7043,
      EZ: 4632,
      MU: 3749,
      BH: 6218,
      LA: 7375,
      DV: 13222,
      VK: 3825,
      BX: 14202,
      SC: 16818,
      ST: 26611,
    },
  },
  // BDS Self
  {
    name: "Annoor, Muvattupuzha",
    course: "BDS_Self",
    lastRanks: {
      SM: 23724,
      EW: 37817,
      EZ: 25175,
      MU: 25752,
      LA: 37021,
      DV: 30897,
      VK: 23907,
      BH: 27725,
      BX: 34493,
      SC: 26569,
    },
  },
  {
    name: "Sree Anjaneya, Kozhikode",
    course: "BDS_Self",
    lastRanks: {
      SM: 35848,
      EW: 37628,
      EZ: 38001,
      MU: 37493,
      DV: 36362,
      VK: 36009,
      BH: 36041,
      SC: 36761,
    },
  },
  {
    name: "Azeezia, Kollam",
    course: "BDS_Self",
    lastRanks: { SM: 37825, EZ: 38407, MU: 38164 },
  },
  {
    name: "Century, Kasaragod",
    course: "BDS_Self",
    lastRanks: { SM: 25035, EZ: 28830, MU: 28310, SC: 31650, EW: 38416 },
  },
  {
    name: "Educare, Malappuram",
    course: "BDS_Self",
    lastRanks: {
      SM: 35874,
      EZ: 38112,
      MU: 37629,
      VK: 36696,
      BH: 36561,
      BX: 35894,
      SC: 37248,
    },
  },
  {
    name: "Indira Gandhi, Kothamangalam",
    course: "BDS_Self",
    lastRanks: {
      SM: 32177,
      EW: 36240,
      EZ: 35916,
      MU: 34562,
      VK: 34045,
      BH: 35697,
      SC: 35384,
    },
  },
  {
    name: "Kannur Dental College",
    course: "BDS_Self",
    lastRanks: {
      SM: 16368,
      EW: 26053,
      EZ: 20040,
      MU: 18520,
      LA: 21323,
      DV: 18636,
      VK: 19688,
      BH: 17953,
      BX: 24043,
      SC: 21820,
    },
  },
  {
    name: "KMCT, Kozhikode",
    course: "BDS_Self",
    lastRanks: {
      SM: 20375,
      EZ: 24773,
      MU: 24265,
      LA: 27596,
      DV: 23313,
      VK: 31721,
      BH: 22046,
      BX: 29285,
      SC: 23420,
      ST: 28759,
    },
  },
  {
    name: "Malabar, Edappal",
    course: "BDS_Self",
    lastRanks: {
      SM: 35056,
      EZ: 37574,
      MU: 37255,
      LA: 37049,
      DV: 37521,
      BH: 35623,
    },
  },
  {
    name: "MES, Perinthalmanna",
    course: "BDS_Self",
    lastRanks: {
      SM: 26437,
      EZ: 31477,
      MU: 30119,
      LA: 37207,
      DV: 35067,
      VK: 29392,
      BH: 31981,
      BX: 31262,
      SC: 34975,
    },
  },
  {
    name: "Noorul Islam, TVM",
    course: "BDS_Self",
    lastRanks: { SM: 36323, EZ: 37782, MU: 37731, SC: 36767 },
  },
  {
    name: "Pushpagiri, Thiruvalla",
    course: "BDS_Self",
    lastRanks: {
      SM: 12431,
      EZ: 15348,
      MU: 14780,
      LA: 18415,
      VK: 15044,
      SC: 18958,
    },
  },
  {
    name: "PMS, Vattappara",
    course: "BDS_Self",
    lastRanks: {
      SM: 20118,
      EW: 26058,
      EZ: 23837,
      MU: 22255,
      LA: 23298,
      DV: 25226,
      VK: 30059,
      BH: 22108,
      BX: 20800,
      SC: 27548,
    },
  },
  {
    name: "PSM, Akkikavu",
    course: "BDS_Self",
    lastRanks: {
      SM: 31737,
      EW: 35140,
      EZ: 35222,
      MU: 34745,
      DV: 35071,
      VK: 33810,
      BH: 32902,
      SC: 34509,
    },
  },
  {
    name: "Royal, Chalissery",
    course: "BDS_Self",
    lastRanks: {
      SM: 26117,
      EZ: 28549,
      MU: 28003,
      LA: 34451,
      DV: 28383,
      VK: 26402,
      BH: 31406,
      BX: 34707,
      SC: 32174,
      ST: 34690,
    },
  },
  {
    name: "St. Gregorios, Kothamangalam",
    course: "BDS_Self",
    lastRanks: {
      SM: 23858,
      EZ: 28656,
      MU: 25662,
      LA: 28328,
      DV: 29610,
      VK: 26094,
      BH: 24630,
      BX: 24425,
      SC: 32413,
    },
  },
  {
    name: "Sri Sankara, Varkala",
    course: "BDS_Self",
    lastRanks: {
      SM: 30739,
      EW: 37012,
      EZ: 34538,
      MU: 35649,
      DV: 31435,
      VK: 31427,
      BH: 31398,
      SC: 32961,
    },
  },
  // Vet
  {
    name: "College of Vet. & Animal Sc, Mannuthy, Thrissur",
    course: "BVSc_Govt",
    lastRanks: {
      SM: 4075,
      EW: 5273,
      EZ: 5310,
      MU: 5031,
      LA: 8627,
      DV: 12758,
      VK: 6851,
      BH: 5766,
      BX: 16404,
      SC: 17026,
      ST: 25511,
    },
  },
  {
    name: "College of Vet. & Animal Sc, Wayanad",
    course: "BVSc_Govt",
    lastRanks: {
      SM: 5313,
      EW: 9493,
      EZ: 6621,
      MU: 6514,
      LA: 10120,
      DV: 8431,
      VK: 12656,
      BH: 8815,
      BX: 7487,
      SC: 17394,
      ST: 25410,
    },
  },
  // Agri
  {
    name: "College of Agriculture, Vellayani",
    course: "Agri_Govt",
    lastRanks: {
      SM: 8671,
      EW: 12050,
      EZ: 10876,
      MU: 10567,
      LA: 13871,
      BH: 11033,
      DV: 16694,
      VK: 11535,
      BX: 9129,
      SC: 20222,
      ST: 25783,
    },
  },
  {
    name: "College of Agriculture, Padannakkad",
    course: "Agri_Govt",
    lastRanks: {
      SM: 10016,
      EW: 16594,
      EZ: 13080,
      MU: 12875,
      LA: 17788,
      BH: 12454,
      DV: 17791,
      VK: 14311,
      BX: 19878,
      SC: 21814,
      ST: 26135,
    },
  },
  {
    name: "College of Agriculture, Ambalavayal",
    course: "Agri_Govt",
    lastRanks: {
      SM: 9864,
      EW: 17738,
      EZ: 12704,
      MU: 12812,
      LA: 19414,
      BH: 13437,
      DV: 14016,
      VK: 11980,
      BX: 20842,
      SC: 21295,
      ST: 22702,
    },
  },
  // Other Allied
  {
    name: "College of Co-operation, Thrissur (Banking)",
    course: "Other_Govt",
    lastRanks: {
      SM: 22091,
      EZ: 23542,
      MU: 24874,
      LA: 27495,
      BH: 23170,
      DV: 36290,
      VK: 23329,
      SC: 28899,
      ST: 36630,
    },
  },
  {
    name: "College of Climate Change, Thrissur",
    course: "Other_Govt",
    lastRanks: {
      SM: 18586,
      EW: 35796,
      EZ: 22470,
      MU: 20207,
      LA: 21846,
      BH: 20140,
      DV: 32996,
      VK: 18941,
      SC: 25398,
    },
  },
  {
    name: "KUFOS, Panangad (Fisheries)",
    course: "Other_Govt",
    lastRanks: {
      SM: 15828,
      EW: 26303,
      EZ: 18177,
      MU: 18000,
      LA: 18120,
      BH: 17988,
      DV: 16286,
      VK: 18011,
      SC: 23615,
      ST: 25975,
    },
  },
  {
    name: "KUFOS, Payyannur (Fisheries)",
    course: "Other_Govt",
    lastRanks: {
      SM: 18162,
      EW: 35105,
      EZ: 21217,
      MU: 19765,
      LA: 26269,
      BH: 22331,
      DV: 22383,
      VK: 22800,
      SC: 25235,
      ST: 26688,
    },
  },
  {
    name: "College of Forestry, Vellanikkara",
    course: "Other_Govt",
    lastRanks: {
      SM: 15512,
      EW: 19635,
      EZ: 15782,
      MU: 16065,
      BH: 17505,
      LA: 20077,
      DV: 21308,
      VK: 17448,
      SC: 23984,
      ST: 25885,
    },
  },
  {
    name: "College of Horticulture, Vellanikkara",
    course: "Other_Govt",
    lastRanks: {
      SM: 5724,
      EW: 10608,
      EZ: 7757,
      MU: 6390,
      BH: 10560,
      LA: 10540,
      DV: 11938,
      VK: 11458,
      SC: 18800,
      ST: 24009,
    },
  },
  // AYUSH Govt
  {
    name: "Ayurveda College, Pariyaram",
    course: "BAMS_Govt",
    lastRanks: {
      SM: 13155,
      EW: 22153,
      EZ: 17517,
      MU: 16228,
      LA: 21492,
      DV: 24516,
      VK: 15212,
      BH: 15579,
      BX: 17658,
      SC: 22832,
      ST: 27443,
    },
  },
  {
    name: "VPSV Ayurveda College, Kottakkal",
    course: "BAMS_Govt",
    lastRanks: {
      SM: 11124,
      EW: 18624,
      EZ: 13447,
      MU: 12032,
      LA: 15157,
      DV: 18696,
      VK: 11905,
      BH: 12363,
      SC: 24907,
      ST: 28416,
    },
  },
  {
    name: "Govt. Homoeopathic College, Kozhikkode",
    course: "BHMS_Govt",
    lastRanks: {
      SM: 11602,
      EW: 23811,
      EZ: 15881,
      MU: 12665,
      LA: 21192,
      DV: 23916,
      VK: 16371,
      BH: 15384,
      SC: 26084,
      ST: 26726,
    },
  },
];

const courseTitles = {
  MBBS_Govt: "MBBS (Govt.)",
  MBBS_Self: "MBBS (Self-Financing)",
  BDS_Govt: "BDS (Govt.)",
  BDS_Self: "BDS (Self-Financing)",
  BVSc_Govt: "B.V.Sc (Veterinary)",
  Agri_Govt: "B.Sc (Hons.) Agriculture",
  Other_Govt: "Other Allied Sciences",
  BAMS_Govt: "BAMS (Govt. Ayurveda)",
  BHMS_Govt: "BHMS (Homoeopathy - Govt.)",
};

// --- Helper Functions ---
const predictRankFromScore = (score) => {
  const data = rankPredictorData;
  if (score >= data[0].score) return data[0].rank;
  if (score <= data[data.length - 1].score) return data[data.length - 1].rank;
  let upperBracket, lowerBracket;
  for (let i = 0; i < data.length - 1; i++) {
    if (data[i].score === score) return data[i].rank;
    if (data[i].score > score && score >= data[i + 1].score) {
      upperBracket = data[i];
      lowerBracket = data[i + 1];
      break;
    }
  }
  if (!upperBracket) return data[data.length - 1].rank;
  const scoreRange = upperBracket.score - lowerBracket.score;
  if (scoreRange === 0) return upperBracket.rank;
  const rankRange = lowerBracket.rank - upperBracket.rank;
  const scoreProgress = score - lowerBracket.score;
  const percentage = scoreProgress / scoreRange;
  const interpolatedRank = lowerBracket.rank - percentage * rankRange;
  return Math.round(interpolatedRank);
};

const getChance = (cutoff, rank) => {
  if (rank > 0 && cutoff) {
    if (rank <= cutoff)
      return {
        text: "High Chance",
        class: "bg-green-100 text-green-800",
        order: 1,
      };
    if (rank <= cutoff * 1.15)
      return {
        text: "Borderline",
        class: "bg-yellow-100 text-yellow-800",
        order: 2,
      };
  }
  return { text: "Low Chance", class: "bg-red-100 text-red-800", order: 3 };
};

// --- Sub-Components ---
const CollegeList = ({ colleges, rank, category }) => {
  if (colleges.length === 0) {
    return (
      <p className="text-sm text-slate-500">
        No data available for this course and category.
      </p>
    );
  }

  const sortedColleges = [...colleges].sort(
    (a, b) =>
      a.chance.order - b.chance.order ||
      a.lastRanks[category] - b.lastRanks[category]
  );

  let lastOrder = 0;

  return (
    <ul className="space-y-2">
      {sortedColleges.map((college, index) => {
        const cutoff = college.lastRanks[category];
        if (!cutoff) return null;
        const chance = getChance(cutoff, rank);
        const showHeader = chance.order !== lastOrder;
        lastOrder = chance.order;

        return (
          <React.Fragment key={index}>
            {showHeader && (
              <h4
                className={`font-semibold text-sm mt-3 mb-1 ${chance.class
                  .replace("bg-", "text-")
                  .replace("-100", "-800")}`}
              >
                {chance.text}
              </h4>
            )}
            <li className="flex items-center justify-between text-sm">
              <span className="flex-1 pr-4">{college.name}</span>
              <span className="text-xs font-medium text-slate-500">
                Cutoff: {cutoff}
              </span>
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

const AccordionItem = ({
  courseKey,
  title,
  colleges,
  rank,
  category,
  openAccordion,
  setOpenAccordion,
}) => {
  const isOpen = openAccordion === courseKey;

  const collegesWithChance = colleges.map((college) => ({
    ...college,
    chance: getChance(college.lastRanks[category], rank),
  }));

  const overallChanceOrder = Math.min(
    ...collegesWithChance.map((c) => c.chance.order),
    3
  );
  const overallChance =
    overallChanceOrder === 1
      ? getChance(1, 1)
      : overallChanceOrder === 2
      ? getChance(1, 1.1)
      : getChance(1, 2);

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        onClick={() => setOpenAccordion(isOpen ? null : courseKey)}
        className="w-full flex items-center justify-between p-4 text-left font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors"
      >
        <span>{title}</span>
        <span
          className={`px-3 py-1 text-sm rounded-full ${overallChance.class}`}
        >
          {overallChance.text}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-white p-4 border-t border-gray-200">
          <CollegeList
            colleges={collegesWithChance}
            rank={rank}
            category={category}
          />
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function collegePrediction() {
  const [score, setScore] = useState("");
  const [category, setCategory] = useState("");
  const [results, setResults] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isShow, setShow] = useState(false);

  const handlePredict = () => {
    const numScore = parseInt(score);
    if (isNaN(numScore) || numScore < 1 || numScore > 720) {
      alert("Please enter a valid NEET score.");
      return;
    }
    if (!category) {
      alert("Please select your category.");
      return;
    }

    const predictedRank = predictRankFromScore(numScore);
    setResults({
      score: numScore,
      rank: predictedRank,
      category: category,
    });
    setOpenAccordion(null); // Reset accordion on new prediction
  };

  const onFormSubmission = async (data) => {
    console.log(data);
    setLoading(true);
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
        setShow(true);
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
    <div className="bg-slate-50 min-h-screen font-sans">
      {!isShow ? (
        <NeetDetailsForm onSubmit={onFormSubmission} isLoading={loading} />
      ) : (
        <></>
      )}
      {isShow && (
        <>
          <div className="container mx-auto p-4 sm:p-8 max-w-4xl">
            <header className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-sky-800">
                DOPA Kerala College Predictor
              </h1>
              <p className="text-slate-600 mt-2">
                Enter your NEET 2025 score to predict your admission chances in
                Kerala.
              </p>
            </header>

            {/* Input Section */}
            <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label
                    htmlFor="neet_score"
                    className="block text-sm font-medium text-slate-700"
                  >
                    NEET Score*
                  </label>
                  <input
                    type="number"
                    id="neet_score"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                    placeholder="Enter your score (1-720)"
                    className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="student_category"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Kerala Category*
                  </label>
                  <select
                    id="student_category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-sky-500 focus:border-sky-500"
                  >
                    <option value="">Select Category</option>
                    <option value="SM">SM</option>
                    <option value="EW">EWS</option>
                    <option value="EZ">Ezhava</option>
                    <option value="MU">Muslim</option>
                    <option value="BH">BH</option>
                    <option value="LA">LA</option>
                    <option value="DV">DV</option>
                    <option value="VK">VK</option>
                    <option value="BX">BX</option>
                    <option value="KN">KN</option>
                    <option value="KU">KU</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                  </select>
                </div>
                <div className="md:self-end">
                  <button
                    onClick={handlePredict}
                    className="w-full bg-sky-600 text-white font-bold py-2.5 px-4 rounded-lg hover:bg-sky-700 transition-colors shadow-md"
                  >
                    Predict My Chances
                  </button>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div>
              {!results && (
                <div className="text-center text-slate-500 p-8 bg-white rounded-xl shadow-md">
                  <p>
                    Enter your score and category to see your personalized
                    admission possibilities.
                  </p>
                </div>
              )}

              {results && (
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="text-center border-b pb-4 mb-4">
                    <h2 className="text-2xl font-bold text-slate-800">
                      Your Personalized Report
                    </h2>
                    <p className="text-slate-600">
                      Based on a NEET score of{" "}
                      <strong className="text-sky-700">{results.score}</strong>
                    </p>
                    <p className="mt-2 text-lg">
                      Predicted Kerala Rank:{" "}
                      <strong className="text-sky-700">~{results.rank}</strong>
                    </p>
                  </div>
                  <div className="space-y-2">
                    {Object.entries(courseTitles).map(([courseKey, title]) => {
                      const collegesForCourse = collegeData.filter(
                        (c) => c.course === courseKey
                      );
                      return (
                        <AccordionItem
                          key={courseKey}
                          courseKey={courseKey}
                          title={title}
                          colleges={collegesForCourse}
                          rank={results.rank}
                          category={results.category}
                          openAccordion={openAccordion}
                          setOpenAccordion={setOpenAccordion}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
