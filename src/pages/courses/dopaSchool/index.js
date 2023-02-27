import React from "react";
import styles from "../../../styles/courses/neet.module.scss";
import DopaBg from "../../../../public/Assets/courses/dopaneet school.png";
import dopaTeacher from "../../../../public/Assets/courses/dopaSchool.png";
import CourseFeatures from "@/Components/CourseComponents/courseFeatures/CourseFeatures";
import library from "../../../../public/Assets/courses/capsule/library.png";
import hostel from "../../../../public/Assets/courses/capsule/hotel.png";
import room from "../../../../public/Assets/courses/capsule/studyroom.png";
import dopaapp from "../../../../public/Assets/courses/capsule/dopaapp.png";
import dopanotes from "../../../../public/Assets/courses/capsule/dopanotes.png";
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

 let  features=[
"Offline Lectures by Elite teachers",
"LIVE Classes & in-class doubt solving",
"Dopa quizzes and leader board",
"DOPA Exclusive Test series",
"LIVE Discussions",
"Mentorship by Doctors",
"24x7 Doubt Clearance",
"Hostel facility and Food",
"DOPA Notes ",
"DOPA Tab",
"DOPA Exclusive Crash - CAPSULE",
"DOPA App Premium Subscription"
 ]

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
    true,

  ];

  let paraArray = ["OFFLINE CLASSES","DOPA LIBRARY","HOSTEL FACILITY"];

  return (
    <MainLayout>
      <main className={styles.neet_container}>
        <Landing
          image={dopaTeacher}
          bg={DopaBg}
          head="DOPA <br/> NEET SCHOOL"
          para={paraArray}
        />

        <CourseFeatures data={DataArray} />
        <div className={styles.pricing}>
          <Pricing    features={features}
            courseName="NEET SCHOOL"
            subjects={"Physics  Chemistry  Biology"}
            className={"+1,+2 Integrated NEET school"}
            p1={p1} 
            p1name="NEET SCHOOL (2 YEARS)"
            price1="1,25,000"
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
