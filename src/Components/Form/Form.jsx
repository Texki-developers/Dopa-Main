import React, { useRef, useState } from "react";
import Inputs from "./inputs/Inputs";
import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";
import { GoogleSpreadsheet } from "google-spreadsheet";

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [response, setResponse] = useState(false);
  const [err, setErr] = useState(false);
  const [errmsg, setErrmsg] = useState("Please Fill All the Fields");

  const doc = new GoogleSpreadsheet(process.env.NEXT_PUBLIC_SHEET_ID);

  const appendSpreadsheet = async (row) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
        private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY,
      });
      const docInfo = await doc.loadInfo();
      const sheet = doc.sheetsById["0"];
      const result = await sheet.addRow(row);
      return result;
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  const classes = [
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Plus one",
    "Plus two",
  ];

  const districts = [
    "UAE",
    "Alappuzha",
    "Ernakulam",
    "Idukki",
    "Kannur",
    "Kollam",
    "Kottayam",
    "Kozhikode",
    "Kasaragod",
    "Thiruvananthapuram",
    "Wayanad",
    "Malappuram",
    "Palakkad",
    "Pathanamthitta",
    "Thiruvananthapuram",
    "Thrissur",
  ];

  const onSubmit = (data) => {
    console.log(data);
    if (
      data["Whatsapp Number"].length > 0 &&
      data.Name.length > 0 &&
      data.class.length > 0 
    ) {
      appendSpreadsheet(data);
      setErr(false);
      setResponse(true);
      reset();
      return setTimeout(() => {
        setResponse(false);
      }, 5000);
    } else {
      setErr(true);
      setErrmsg("Please fill All the fields");
    }

    return;
  };

  let styleselect = `${styles["select-container"]} ${styles.class}`;
  let districtstyle = `${styles["select-container"]} ${styles.district}`;

  return (
    <div id="form" className={styles["dopa-form-container"]}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Inputs register={register} name="Name" />
        <div className={styles["input-container"]}>
          <div className={styleselect}>
            <label>Class</label>
            <select {...register("class")} name="class">
              <option name="class" selected disabled>
                Select your class
              </option>

              {classes &&
                classes.map((item) => <option value={item}>{item}</option>)}
            </select>
          </div>
          <div className={districtstyle}>
            <label>District</label>
            <select {...register("district")} name="district">
              <option name="district" selected disabled>
                Select your District
              </option>
              {districts &&
                districts.map((items) => (
                  <option value={items}>{items}</option>
                ))}
            </select>
          </div>
        </div>
        <Inputs register={register} name="Whatsapp Number" />
        <Inputs register={register} name="Guardian Number" />
        <Inputs register={register} name="Email" />
        <Inputs register={register} name="State" />
        <Inputs register={register} name="Country" />
        <Inputs register={register} name="School" />
        <Inputs register={register} name="Which course are you looking for?" />
        <Inputs register={register} name="Enquiry" />
        <button type="submit">Submit</button>
        {
          response ? <p style={{color:"green"}}>Successfully Submitted your Enquiry</p> : ""
        }
        {errors.Name || errors["Whatsapp Number"] || errors.School || err ? (
          <p style={{ color: "red", fontSize: "0.9rem", textAlign: "center" }}>
            {errmsg}{" "}
          </p>
        ) : null}
      </form>
    </div>
  );
}
