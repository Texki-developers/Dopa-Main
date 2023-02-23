import React from "react";
import styles from "../../../styles/courses/neet.module.scss";
import DopaBg from "../../../../public/Assets/courses/dopacapsule.png";
import dopaTeacher from "../../../../public/Assets/courses/capsule.png";
import CourseFeatures from "@/Components/CourseComponents/courseFeatures/CourseFeatures";
import education from "../../../../public/Assets/courses/education.png";
import live from "../../../../public/Assets/courses/livechat.png";
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
      title: "DOPA <br/> library",
    },
    {
      image: live,
      title: "Hostel <br/> facility",
    },
    {
      image: live,
      title: "Study <br/> Room",
    },
    {
      image: live,
      title: "DOPA App<br/> Subscription",
    },
    {
      image: education,
      title: "DOPA <br/> Notes",
    },
  ];

  let coursePlans = [];

  let paraArray = ["OFFLINE CLASSES","DOPA LIBRARY","HOSTEL FACILITY"];

  return (
    <MainLayout>
      <main className={styles.neet_container}>
        <Landing
          image={dopaTeacher}
          bg={DopaBg}
          head="CAPSULE 3.0"
          para={paraArray}
        />

        <CourseFeatures data={DataArray} />
        <div className={styles.pricing}>
          <Pricing coursePlans={coursePlans} />
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
