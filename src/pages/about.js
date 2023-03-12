import AboutLanding from "@/Components/AboutusComponents/AboutLanding/AboutLanding";
import CourseFeatures from "@/Components/CourseComponents/courseFeatures/CourseFeatures";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";
import aboutUs from "@/JSON_DB/aboutUs";
import styles from "../styles/about/about.module.scss";
import { data, features } from "../JSON_DB/aboutUs";
import Missioncard from "@/Components/AboutusComponents/missionCard/Missioncard";
import mission from "../../public/Assets/about/mission.png";
import vision from "../../public/Assets/about/view.png";

export default function about() {
  console.log(mission, "dat");
  return (
    <MainLayout>
      <main className={styles.about_container}>
        <AboutLanding />

        <CourseFeatures type={1} data={features} />

        <div className={styles.path_to_success_container}>
          <h1>
            Your Path to Medical Success Starts Here: <br /> NEET Coaching and
            Mentorship from DOPA
          </h1>
          <div className={styles.path_to_success_content_container}>
            {data &&
              data?.map((item) => (
                <div className={styles.path_to_success_content}>
                  <img src={item.image.src} alt="DopaVideoLectures" />
                  <h4
                    dangerouslySetInnerHTML={{
                      __html: item.title.replace(/\n/g, "<br>"),
                    }}
                  ></h4>
                </div>
              ))}
          </div>
        </div>

        <div className={styles.mission_vision_container}>
          <Missioncard
            logo={mission}
            head={"MISSION"}
            mainHead="A positive route to Success"
            para="Redefining the prevailing medical entrance culture by substituting it with our most efficient and smart way of learning. DOPA delivers excellent medical entrance coaching that can be accessed anytime, anywhere irrespective of socio-economic backgrounds."
          />
          <Missioncard
            logo={vision}
            head={"VISION"}
            mainHead="Let learning dispel the darkness"
            para="We aim to train the young brains and help them grow into successful medical health professionals by grooming their scientific temper and building the curiosity inside them."
          />
        </div>
      </main>
    </MainLayout>
  );
}
