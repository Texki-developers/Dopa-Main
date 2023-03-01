import React from "react";
import styles from "../../../styles/courses/neet.module.scss";
import DopaBg from "../../../../public/Assets/courses/foundation.png";
import dopaTeacher from "../../../../public/Assets/courses/dopaStudent.png";
import CourseFeatures from "@/Components/CourseComponents/courseFeatures/CourseFeatures";
// import education from "../../../../public/Assets/courses/education.png";
// import live from "../../../../public/Assets/courses/livechat.png";
import potential from "../../../../public/Assets/courses/dopaNeetPotential.png";
import Pricing from "@/Components/CourseComponents/Pricing/Pricing";
import dopaDoctor from "../../../../public/Assets/courses/dopadoctor.png";
import MaximisePotential from "@/Components/CourseComponents/Banners/MaximisePotential/MaximisePotential";
import Landing from "@/Components/CourseComponents/Landing/Landing";
import MainLayout from "@/Layouts/MainLayout";
export default function index() {
  console.log(DopaBg, "image");

  // let DataArray = [
  //   {
  //     image: education,
  //     title: "DOPA <br/> library",
  //   },
  //   {
  //     image: live,
  //     title: "Hostel <br/> facility",
  //   },
  //   {
  //     image: live,
  //     title: "Study <br/> Room",
  //   },
  //   {
  //     image: live,
  //     title: "DOPA App<br/> Subscription",
  //   },
  //   {
  //     image: education,
  //     title: "DOPA <br/> Notes",
  //   },
  // ];

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

  let p1 = [true, true, true, true, true, true, true, true, true, true];
  let p2 = [true, true, true, true, true, true, true, true, true, true];

  let p3 = [false, true, true, true, true, true, true, true, true, true];

  let paraArray = ["OFFLINE CLASSES", "DOPA LIBRARY", "HOSTEL FACILITY"];

  return (
    <MainLayout>
      <main className={styles.neet_container}>
        <Landing
          image={dopaTeacher}
          bg={DopaBg}
          head="DOPA <br/> FOUNDATION COURSE"
          para={paraArray}
        />

        {/* <CourseFeatures data={DataArray} /> */}
        <div className={styles.pricing}>
          <Pricing
            features={features}
            courseName="FOUNDATION BATCH"
            subjects={"Aptitude  Physics  Chemistry  Biology"}
            className={"For 8th,9th,10th"}
            p1={p1}
            p2={p2}
            p3={p3}
            p1name="Spider 8 (3 year Program)"
            p2name="Hybrid Classes"
            p3name="Online Classes"
            price1={42000}
            price2={1000}
            price3={4000}
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
