import React, { useEffect, useState } from "react";
import styles from "../../../styles/courses/neet.module.scss";
import DopaBg from "../../../../public/Assets/courses/repeterbg.png";
import dopaTeacher from "../../../../public/Assets/courses/repeater.png";
import CourseFeatures from "@/Components/CourseComponents/courseFeatures/CourseFeatures";
import library from "../../../../public/Assets/courses/capsule/library.png";
import hostel from "../../../../public/Assets/courses/capsule/hotel.png";
import room from "../../../../public/Assets/courses/capsule/studyroom.png";
import dopaapp from "../../../../public/Assets/courses/capsule/dopaapp.png";
import dopanotes from "../../../../public/Assets/courses/capsule/dopanotes.png";
import Pricing from "@/Components/CourseComponents/Pricing/Pricing";
import potential from "../../../../public/Assets/courses/dopaNeetPotential.png";
import dopaDoctor from "../../../../public/Assets/courses/dopadoctor.png";
import MaximisePotential from "@/Components/CourseComponents/Banners/MaximisePotential/MaximisePotential";
import Landing from "@/Components/CourseComponents/Landing/Landing";
import MainLayout from "@/Layouts/MainLayout";
import EliteTutorsSection from "@/Components/EliteTutorsSectino/EliteTutorsSection";
import ResultBanner from "@/Components/CourseComponents/Banners/resultBanner/ResultBanner";
import { Carousel } from "@/Components/Carousel/Carousel";
import result1 from "../../../../public/Assets/courses/results/result1.png";
import result2 from "../../../../public/Assets/courses/results/result2.png";

export default function index() {
  console.log(DopaBg, "image");
  const [isMobile, setMobile] = useState(false);
  const [isTab, setTab] = useState(false);
  const [tutorNavigator, setTutorNavigator] = useState(0);
  const handleNavigation = (dir, type) => {
    setTutorNavigator(dir);
    setTimeout(() => {
      setTutorNavigator(0);
    }, 100);
  };

  useEffect(() => {
    if (window.innerWidth < 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    if (window.innerWidth < 769) {
      setTab(true);
    } else {
      setTab(false);
    }
  }, []);
  let images = [result1, result2];
  

  let DataArray = [
    {
      image: library,
      title: "DOPA <br/> library",
    },
    {
      image: hostel,
      title: "Hostel <br/> facility",
    },
    {
      image: room,
      title: "Study <br/> Room",
    },
    {
      image: dopaapp,
      title: "DOPA App<br/> Subscription",
    },
    {
      image: dopanotes,
      title: "DOPA <br/> Notes",
    },
  ];
  let features = [
    " Offline Lectures by Elite teachers",
    "   LIVE Classes & in-class doubt solving",
    "Dopa quizzes and leader board",
    " DOPA Exclusive Test series",
    " LIVE Discussions",
    "Mentorship by Doctors",
    "  24x7 Doubt Clearance",
    "    DOPA Material ",
    "DOPA Tab",
    "DOPA Exclusive Crash - CAPSULE",
    "DOPA App Premium Subscription",
  ];

  let p1 = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ];
  let p2 = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
   true,
    "DOPA Tab - ₹15,000",
    true,
    true,
  ];
  let p3 = [
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    "DOPA Material - ₹5,000",
    "DOPA Tab - ₹15,000",
    true,
    true,
  ];

  let paraArray = ["OFFLINE CLASSES", "DOPA LIBRARY", "HOSTEL FACILITY","ONLINE CLASSES","RESIDENTIAL CLASSES"];

  return (
    <MainLayout>
      <main className={styles.neet_container}>
        <Landing
          image={dopaTeacher}
          bg={DopaBg}
          head="DOPA <br/> REPEATERS PROGRAM"
          para={paraArray}
        />

        <CourseFeatures data={DataArray} />
        <div className={styles.pricing}>
          <Pricing
            features={features}
            p1={p1}
            p2={p2}
            p3={p3}
            className=""
            courseName="REPEATERS PROGRAMS"
            subjects="Physics  Chemistry  Biology"
            p1name={"RESIDENTIAL PROGRAM"}
            p2name="OFFLINE"
            p3name="ONLINE"
            price1={68500}
            price2={54000}
            price3={24599}
            Notes={`*Hostel facility and Food have separate fees <br/>
            DOPA TAB  -  ₹ 15000 <br/>
            DOPA Material  - ₹ 5000 `}
          />
        </div>
        <ResultBanner />
        <MaximisePotential
          width="18%"
          icon={potential}
          para="Maximize your NEET potential with <br/> personalized coaching from a doctor"
          btn="Download"
          bg="#ffff"
        />
        <div className={styles.our_results_container}>
          <div className={styles.our_results_header}>
            <h1>Our Results</h1>
          </div>

          <Carousel
            itemsPerWindow={isMobile ? 1 : isTab ? 2 : 2}
            navigator={tutorNavigator}
            setNavigator={setTutorNavigator}
          >
            {images && images.map((img) => <img src={img.src} alt="" />)}
          </Carousel>
        </div>
        <MaximisePotential
          width="10%"
          icon={dopaDoctor}
          para="Take your NEET preparation to the next level"
          btn="Book a Free Trial"
          bg="#e2faf8;
"
        />
        <div className={styles.elite_tutor_wrapper}>
          <EliteTutorsSection isHideSubHeading={true} />
        </div>
      </main>
    </MainLayout>
  );
}
