import React, { useState } from "react";
import styles from "./AboutLanding.module.scss";
import DopaStudents from "../../../../public/Assets/about/about.png";
import DopaBg from "../../../../public/Assets/courses/foundation.png";
import { FiPlayCircle } from "react-icons/fi";

export default function AboutLanding() {
  const [isPlay, setisPlay] = useState(false);

  const handlePlay = () => {
    setisPlay(true);
    const video = document.getElementById("dopa-about-us-video");
    video.play();
  };

  const handlePause = () => {
    const video = document.getElementById("dopa-about-us-video");
    video.pause();
    setisPlay(false);
  };

  return (
    <div
      style={{
        background: `url(${DopaBg.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className={styles.aboutus_landing}
    >
      <div className={styles.about_header}>
        <h1>DOCTORS OWN PREP ACADEMY</h1>
        <p>BY THE DOCTORS...FOR DOCTORS TO BE..</p>
      </div>

      <img src={DopaStudents.src} alt="dopavideothumbnail" />
      {!isPlay && (
        <FiPlayCircle onClick={handlePlay} className={styles.play_button} />
      )}

      <div
        style={{ display: isPlay ? "block" : "none" }}
        className={styles.about_us_video_container}
      >
        <video
          onClick={handlePause}
          id="dopa-about-us-video"
          className={styles.poster_video}
        >
          <source src="/Assets/about/about.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
