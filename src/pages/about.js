import AboutLanding from "@/Components/AboutusComponents/AboutLanding/AboutLanding";
import CourseFeatures from "@/Components/CourseComponents/courseFeatures/CourseFeatures";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";
import aboutUs from "@/JSON_DB/aboutUs";
import styles from "../styles/about/about.module.scss";
import { data, features, gallery } from "../JSON_DB/aboutUs";
import Missioncard from "@/Components/AboutusComponents/missionCard/Missioncard";
import mission from "../../public/Assets/about/mission.png";
import vision from "../../public/Assets/about/view.png";
import FreeTrialComponent from "@/Components/FreeTrialComponent/FreeTrialComponent";
import Image from "next/image";

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
        <FreeTrialComponent />
        <div className={styles.dopa_work_conatainer}>
          <h1>DOPA AT WORK</h1>

          <div className={styles.dopa_work_content_container}>
            <div className={styles.dopa_image_gallery}>
              {gallery &&
                gallery.map((items) => (
                  <div className={styles.gallery_images_container}>
                    <img
                      className={styles.gallery_images}
                      src={items.src}
                      alt="dopa_About_us"
                    />
                  </div>
                ))}
            </div>

            <div className={styles.about_contact_container}>
              <h2>Join with us</h2>
              <h2>info@dopacoaching.com</h2>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
