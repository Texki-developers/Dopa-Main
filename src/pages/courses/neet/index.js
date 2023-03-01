import React from "react";
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
export default function index() {
  console.log(DopaBg, "image");

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

  let p1 = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    "DOPA Tab - ₹12,000",
    "Capsule - ₹2,000",
  ];
  let p2 = [
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    "DOPA Notes - ₹3,500",
    "DOPA Tab - ₹12,000",
    "Capsule - ₹2,000",
  ];
  let paraArray = ["ONLINE & OFFLINE CLASSES", "MENTORSHIP BY DOCTORS"];

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
            features={features}
            courseName="NEET COACHING"
            subjects={"Physics  Chemistry  Biology  Mathematics"}
            className={"Class11 and 12"}
            p1={p1}
            p2={p2}
            p1name="DOPA offline"
            p2name="DOPA Online"
            p3name="DOPA Online"
            price1={52500}
            price2={9999}
            price3={9999}
          />
        </div>
    
        <MaximisePotential
          width="18%"
          icon={potential}
          para="Maximize your NEET potential with <br/> personalized coaching from a doctor"
          btn="Download"
          bg="#ffff"
        />
        <MaximisePotential
          width="10%"
          icon={dopaDoctor}
          para="Take your NEET preparation to the next level"
          btn="Book a Free Trial"
          bg="#e2faf8;
"
        />
      </main>
    </MainLayout>
  );
}
