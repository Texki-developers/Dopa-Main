import Image from "next/image";
import React from "react";
import styles from "./InnovativeApproach.module.scss";
import downloadAppStore from "../../../../public/Assets/home/download-appstore.png";
import downloadPlayStore from "../../../../public/Assets/home/download-playstore.png";
import innovativePhone from "../../../../public/Assets/home/innovative phone.png";
import videoLecture from "../../../../public/Assets/home/video lecture.png";
import liveClass from "../../../../public/Assets/home/live class.png";
import testSeries from "../../../../public/Assets/home/test series.png";
import dopaQuiz from "../../../../public/Assets/home/dopa quiz.png";
import questionBank from "../../../../public/Assets/home/question bank.png";
import doubtClearance from "../../../../public/Assets/home/doubt clearance.png";
import discussionPanel from "../../../../public/Assets/home/discussion panel.png";
import dopaMine from "../../../../public/Assets/home/dopa mine.png";
import InnovativeApproachPoints from "../InnovativeApproachPoints/InnovativeApproachPoints";

export default function InnovativeApproach() {
  return (
    <>
      <div className={styles["carousel-item"]}>
        <div className={styles["innovative-conatiner-1"]}>
          <div className={styles["innovative-text"]}>
            <div>
              <h4 className="banner-subtitle font-[600]">
                Adaptive Learning <br />
                with Our Coaching App
              </h4>
            </div>
            <p>
              The DOPA app helps you prepare for the NEET exam with personalized
              lessons and support. Whether you're new to the exam or have
              experience, the app gives you the tools you need to succeed.
              <br />
              <br />
              Elevate your NEET preparation with our comprehensive and
              interactive app.
            </p>
            <div className={styles["downloads-wrapper"]}>
              <Image
                src={downloadAppStore}
                className={styles["download-img"]}
                alt="Download Dopa appstore"
              />
              <Image
                src={downloadPlayStore}
                className={styles["download-img"]}
                alt="Download Dopa playstore"
              />
            </div>
          </div>
          <div className={styles["phone-img-wrapper"]}>
            <Image
              src={innovativePhone}
              className={styles["phone-img"]}
              alt="Innovative approches DOPA"
            />
          </div>
        </div>
      </div>

      <div className={styles["carousel-item"]}>
        <div className={styles["innovative-container-2"]}>
          <div>
            <h4>A comprehensive learning solution</h4>
            <h3>Experience the Features</h3>
          </div>
          <div className={styles["grid-1-1"]}>
            <InnovativeApproachPoints
              icon={videoLecture}
              title="Video Lectures"
              description="Enhance your NEET exam preparation with DOPA’s Elite tutors, personalized learning, flexible learning and in-depth coverage of important topics."
            />
            <InnovativeApproachPoints
              icon={liveClass}
              title="Live Classes"
              description="Help with NEET exam preparation by providing immediate clarification, personalized guidance, peer interaction, and flexibility."
            />
            <InnovativeApproachPoints
              icon={dopaQuiz}
              title="DOPA Quizzes"
              description="A brief assessment helps you to be more familiar with the questions; test your Knowledge and measure the growth."
            />
            <InnovativeApproachPoints
              icon={testSeries}
              title="Test Series"
              description="Regular tests and mock exams can help track progress and boost confidence for the NEET exam"
            />
          </div>
        </div>
      </div>

      <div className={styles["carousel-item"]}>
        <div className={styles["innovative-container-2"]}>
          <div>
            <h4>A comprehensive learning solution</h4>
            <h3>Experience the Features</h3>
          </div>
          <div className={styles["grid-1-1"]}>
            <InnovativeApproachPoints
              icon={questionBank}
              title="Question Bank"
              description="An invaluable tool for success helps students prepare for exams and improve their knowledge and reinforce their understanding of key concepts."
            />
            <InnovativeApproachPoints
              icon={doubtClearance}
              title="24x7 Doubt Clearance"
              description="Get your doubts cleared instantly by DOPA subject experts anytime and make your learning hassle-free"
            />
            <InnovativeApproachPoints
              icon={discussionPanel}
              title="Discussion Panel"
              description="A dynamic classroom where students are actively participating in discussions that foster critical thinking and a deeper understanding of the concepts."
            />
            <InnovativeApproachPoints
              icon={dopaMine}
              title="DOPA Mine"
              description="DOPA Mines are visual guides to help students easily memorize NCERT concepts. "
            />
          </div>
        </div>
      </div>
    </>
  );
}
