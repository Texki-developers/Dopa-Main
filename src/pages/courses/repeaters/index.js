import React from "react";
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
  let features = [
   " Offline Lectures by Elite teachers",
 "   LIVE Classes & in-class doubt solving",
    "Dopa quizzes and leader board",
   " DOPA Exclusive Test series",
   " LIVE Discussions",
    "Mentorship by Doctors",
  "  24x7 Doubt Clearance",
    "Hostel facility and Food ",
"    DOPA Notes ",
"DOPA Tab",
"DOPA Exclusive Crash - CAPSULE",
"DOPA App Premium Subscription"
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
    false,
    "box",
    "box",
    true,
    true
  ]
  ;
  let p3 = [
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    "box",
    "box",
    true,
    true
  ];

  let paraArray = ["OFFLINE CLASSES","DOPA LIBRARY","HOSTEL FACILITY"];

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
          <Pricing features={features}  p1={p1} p2={p2} p3={p3} className="" courseName="REPEATERS PROGRAMS" subjects="Physics  Chemistry  Biology"  p1name={'RESIDENTIAL PROGRAM'}  p2name="OFFLINE" p3name="ONLINE" price1={"65,500"} price2="54,000" price3={"24599"}/>
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
