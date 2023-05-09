import React, { useEffect, useState } from "react";
import styles from "../../../styles/courses/neet.module.scss";
import DopaBg from "../../../../public/Assets/courses/dopabg.png";
import dopaTeacher from "../../../../public/Assets/courses/dopa_neet.png";
import question from "../../../../public/Assets/home/test series.png";
import CourseFeatures from "@/Components/CourseComponents/courseFeatures/CourseFeatures";
import education from "../../../../public/Assets/home/video lecture.png";
import live from "../../../../public/Assets/home/live class.png";
import bank from "../../../../public/Assets/home/question bank.png";
import quiz from "../../../../public/Assets/home/dopa quiz.png";
import potential from "../../../../public/Assets/courses/dopaNeetPotential.png";
import Pricing from "@/Components/CourseComponents/Pricing/Pricing";
import dopaDoctor from "../../../../public/Assets/courses/dopadoctor.png";
import MaximisePotential from "@/Components/CourseComponents/Banners/MaximisePotential/MaximisePotential";
import Landing from "@/Components/CourseComponents/Landing/Landing";
import MainLayout from "@/Layouts/MainLayout";
import EliteTutorsSection from "@/Components/EliteTutorsSectino/EliteTutorsSection";
import ResultBanner from "@/Components/CourseComponents/Banners/resultBanner/ResultBanner";
import { Carousel } from "@/Components/Carousel/Carousel";
import result1 from "../../../../public/Assets/courses/results/result1.png";
import result2 from "../../../../public/Assets/courses/results/result2.png";
import { useRouter } from "next/router";
export default function index() {
  const [isMobile, setMobile] = useState(false);
  const [isTab, setTab] = useState(false);
  const [classes, setClasses] = useState(0);
  const [offline, setOffline] = useState(0);
  const [tutorNavigator, setTutorNavigator] = useState(0);
  const handleNavigation = (dir, type) => {
    setTutorNavigator(dir);
    setTimeout(() => {
      setTutorNavigator(0);
    }, 100);
  };

  let className;
  useEffect(() => {
    className = localStorage.getItem("class");

    switch (className) {
      case "plusOne":
        setClasses(16000);
        break;
      case "plusTwo":
        setClasses(17500);
        break;
      case "plusOne&plustwo":
        setClasses(25999);

        break;
      default:
        break;
    }

    switch (className) {
      case "plusOne":
        setOffline(32000);
        break;
      case "plusTwo":
        setOffline(33500);
        break;
      case "plusOne&plustwo":
        setOffline(52500);
        break;
      default:
        break;
    }

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
  }, [className,classes]);

  let DataArray = [
    {
      image: education,
      title: "video <br/> Lectures",
    },
    {
      image: live,
      title: "Live <br/> Classes",
    },
    {
      image: question,
      title: "Test <br/> Series",
    },
    {
      image: bank,
      title: "Question <br/> Bank",
    },
    {
      image: quiz,
      title: "Dopa <br/> quizzes",
    },
  ];



  let features = [
    " Lectures by Elite teachers",
    "LIVE Classes & in-class doubt solving",
    "Dopa quizzes and leader board",
    "DOPA Exclusive Test series",
    "LIVE Discussions",
    "Mentorship by Doctors",
    "24x7 Doubt Clearance",
    "Assignments and class notes",
    "Study Materials",
    "DOPA App Premium Subscription",
  ];

  let features1 = [
    " Lectures by Elite teachers",
    "LIVE Classes & in-class doubt solving",
    "Dopa quizzes and leader board",
    "DOPA Exclusive Test series",
    "LIVE Discussions",
    "Mentorship by Doctors",
    "24x7 Doubt Clearance",
    "Assignments and class notes",
    "Study Materials",
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
    "DOPA Tab - ₹15,000",
    "Capsule - ₹2,000",
  ];

  let p11 = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    "DOPA Tab - ₹15,000",
  ];

  let p2 = [
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    "DOPA Material - ₹3,000",
    "DOPA Tab - ₹15,000",
    "Capsule - ₹2,000",
  ];

  let p22 = [
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    "DOPA Material - ₹3,000",
    "DOPA Tab - ₹15,000",
  ];
  let paraArray = ["ONLINE & OFFLINE CLASSES", "MENTORSHIP BY DOCTORS"];

 
  let images = [result1, result2];
  return (
    <MainLayout>
      <main className={styles.neet_container}>
        <Landing
          image={dopaTeacher}
          bg={DopaBg}
          head="+1/+2  NEET COACHING"
          para={paraArray}
        />

        <CourseFeatures data={DataArray} />
        <div className={styles.pricing}>
          <Pricing
            features={offline == "32000"  ? features1 : features}
            courseName="NEET COACHING"
            subjects={"Physics  Chemistry  Biology  Mathematics"}
            className={"Class11 and 12"}
            p1={offline == "32000" ? p11 : p1}
            p2={offline == "32000" ?  p22 : p2}
            p1name="DOPA offline"
            p2name="DOPA Online"
            price1={offline}
            price2={classes}
        
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
          bg="#e2faf8;"
        />
        <div className={styles.elite_tutor_wrapper}>
          <EliteTutorsSection isHideSubHeading={true} />
        </div>
      </main>
    </MainLayout>
  );
}
