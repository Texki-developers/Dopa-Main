import PrimaryButton from "@/Components/Buttons/PrimaryButton/PrimaryButton";
import React, { useState } from "react";
import { MdOutlineDone } from "react-icons/md";
import styles from "./Pricing.module.scss";
import { VscChromeClose } from "react-icons/vsc";
export default function Pricing({
  features,
  p1,
  p2,
  p3,
  p1name,
  p2name,
  p3name,
  price1,
  price2,
  price3,
  className,
  courseName,
  subjects,
}) {
  const [active, setActive] = useState(0);

  let valueBoxClassNames = `${styles.features_container} ${styles.features_mobile}`;
  return (
    <div className={styles.pricing_main_container}>
      <div className={styles.pricing_header_container}>
        <p>{className}</p>
        <h1>{courseName}</h1>
      </div>

      <div className={styles.subject_details_wrapper}>
        <div className={styles.languages}>
          <h4>Language</h4>
          <p>English & Malayalam</p>
        </div>
        <div className={styles.subject}>
          <h4>Subject Covered</h4>
          <p>{subjects}</p>
        </div>
      </div>
      <div className={styles.feature_header}>
        <h3>Course Plans</h3>
      </div>
      <div className={styles.course_details_wrapper}>
        <div className={styles.features_container}>
          {features &&
            features?.map((features, index) => (
              <div className={styles.features_wrapper}>
                {index === 0 ? (
                  <h3 className={styles.featuremain_head}>Features</h3>
                ) : (
                  ""
                )}
                <div className={styles.feature_fields}>
                  <p>{features}</p>
                </div>
              </div>
            ))}
        </div>
        {/* first pricing */}
        {p1 ? (
          <div
            onClick={() => setActive(0)}
            style={{ border: active === 0 ? "3px solid #70D4FF" : "" }}
            className={valueBoxClassNames}
          >
            {p1 &&
              p1?.map((features, index) => (
                <div className={styles.features_wrapper}>
                  {index === 0 ? <h3>{p1name}</h3> : ""}
                  <div className={styles.feature_fields_tick}>
                    {features === true ? (
                      <MdOutlineDone
                        style={{
                          fontSize: "1.5rem",
                          color: active === 0 ? "#00CAFF" : "#000000",
                        }}
                      />
                    ) : features === false ? (
                      <VscChromeClose
                        style={{
                          fontSize: "1.5rem",
                          color: active === 0 ? "#00CAFF" : "#000000",
                        }}
                      />
                    ) : features === "box" ? (
                      <input type="checkbox" />
                    ) : (
                      <div
                        className={
                          features !== true ? styles.feature_fields_items : ""
                        }
                      >
                        <input type="checkbox" />
                        <div>
                          {" "}
                          <p className={styles.feature_fields_head}>
                            {features}
                          </p>
                          {features === "Capsule - ₹2,000" ? (
                            <p className={styles.feature_fields_para}>
                              Books,Classes are complimentary
                            </p>
                          ) : features === "DOPA Notes - ₹3,500" ? (
                            <p className={styles.feature_fields_para}>
                              for One year
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            <div
              onClick={() => setActive(0)}
              className={styles.features_final_prices}
            >
              <h3
                style={{
                  color: active == 0 ? "#6E2AAD" : "#000000",
                  textAlign: "center",
                }}
              >
                Total <br /> ₹ {price1} + GST
              </h3>
              {active === 0 && <p>Few seats Left</p>}
              <PrimaryButton
                children="Buy Now"
                bgColor={`${active === 0 ? "#1BBCEE" : "#ffff"}`}
                color={`${active === 0 ? "#ffff" : "#000000"}`}
                addon="buy-now"
              />
            </div>
          </div>
        ) : (
          ""
        )}

        {/* second pricing */}
        {p2 ? (
          <div
            style={{ border: active === 1 ? "3px solid #70D4FF" : "" }}
            className={valueBoxClassNames}
          >
            {p2 &&
              p2?.map((features, index) => (
                <div
                  onClick={() => setActive(1)}
                  className={styles.features_wrapper}
                >
                  {index === 0 ? <h3>{p2name}</h3> : ""}
                  <div className={styles.feature_fields_tick}>
                    {features === true ? (
                      <MdOutlineDone
                        style={{
                          fontSize: "1.5rem",
                          color: active === 1 ? "#00CAFF" : "#000000",
                        }}
                      />
                    ) : features === false ? (
                      <VscChromeClose
                        style={{
                          fontSize: "1.5rem",
                          color: active === 1 ? "#00CAFF" : "#000000",
                        }}
                      />
                    ) : features === "box" ? (
                      <input type="checkbox" />
                    ) : (
                      <div
                        className={
                          features !== true ? styles.feature_fields_items : ""
                        }
                      >
                        <input type="checkbox" />
                        <div>
                          {" "}
                          <p className={styles.feature_fields_head}>
                            {features}
                          </p>
                          {features === "Capsule - ₹2,000" ? (
                            <p className={styles.feature_fields_para}>
                              Books,Classes are complimentary
                            </p>
                          ) : features === "DOPA Notes - ₹3,500" ? (
                            <p className={styles.feature_fields_para}>
                              for One year
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            <div
              onClick={() => setActive(1)}
              className={styles.features_final_prices}
            >
              <h3
                style={{
                  color: active == 1 ? "#6E2AAD" : "#000000",
                  textAlign: "center",
                }}
              >
                Total <br /> ₹ {price2} + GST
              </h3>
              {active === 1 && <p>Few seats Left</p>}
              <PrimaryButton
                children="Buy Now"
                bgColor={`${active === 1 ? "#1BBCEE" : "#ffff"}`}
                color={`${active === 1 ? "#ffff" : "#000000"}`}
                addon="buy-now"
              />
            </div>
          </div>
        ) : (
          ""
        )}

        {/* third pricing */}
        {p3 ? (
          <div
            onClick={() => setActive(2)}
            style={{ border: active === 2 ? "3px solid #70D4FF" : "" }}
            className={valueBoxClassNames}
          >
            {p3 &&
              p3?.map((features, index) => (
                <div className={styles.features_wrapper}>
                  {index === 0 ? <h3>{p3name}</h3> : ""}
                  <div className={styles.feature_fields_tick}>
                    {features === true ? (
                      <MdOutlineDone
                        style={{
                          fontSize: "1.5rem",
                          color: active === 2 ? "#00CAFF" : "#000000",
                        }}
                      />
                    ) : features === false ? (
                      <VscChromeClose
                        style={{
                          fontSize: "1.5rem",
                          color: active === 2 ? "#00CAFF" : "#000000",
                        }}
                      />
                    ) : features === "box" ? (
                      <input type="checkbox" />
                    ) : (
                      <div
                        className={
                          features !== true ? styles.feature_fields_items : ""
                        }
                      >
                        <input type="checkbox" />
                        <div>
                          {" "}
                          <p className={styles.feature_fields_head}>
                            {features}
                          </p>
                          {features === "Capsule - ₹2,000" ? (
                            <p className={styles.feature_fields_para}>
                              Books,Classes are complimentary
                            </p>
                          ) : features === "DOPA Notes - ₹3,500" ? (
                            <p className={styles.feature_fields_para}>
                              for One year
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}

            <div
              onClick={() => setActive(2)}
              className={styles.features_final_prices}
            >
              <h3
                style={{
                  color: active == 2 ? "#6E2AAD" : "#000000",
                  textAlign: "center",
                }}
              >
                Total <br /> ₹ {price3} + GST
              </h3>
              {active === 2 && <p>Few seats Left</p>}
              <PrimaryButton
                children="Buy Now"
                bgColor={`${active === 2 ? "#1BBCEE" : "#ffff"}`}
                color={`${active === 2 ? "#ffff" : "#000000"}`}
                addon="buy-now"
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
