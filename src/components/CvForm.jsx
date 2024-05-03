import React from "react";

import "./Cvform.css";
import { useState } from "react";
export const CvForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [address, setAddress] = useState("");
  const [birth, setBirth] = useState("");
  const [checkbox, setCheckbox] = useState("");
  const [workExperience, setWorkExperience] = useState({
    numberOfExperience: "",
    periodStart: "",
    periodEnd: "",
    place: "",
    workAddress: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      contact,
      selectedOption,
      selectedOption1,
      selectedOption2,
      address,
      birth
    );
    // Add your form submission logic here
    if (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      contact.trim() !== "" &&
      selectedOption !== "" &&
      selectedOption1 !== "" &&
      selectedOption2 !== "" &&
      address.trim() !== "" &&
      birth.trim() !== ""
    ) {
      if (checkbox !== "on") {
        alert("Make sure the checkbox is ticked");
      } else if (
        selectedOption === "option" ||
        !Object.values(workExperience).some((value) => value !== "")
      ) {
        alert("Ensure preferred languages and work experience are not empty");
      } else {
        alert("Form submitted");
      }
    } else {
      alert("Please fill in all required fields");
    }
    const formattedData = {
      fullName: `${firstName} ${lastName}`,
      age: calculateAge(birth),
      isActive: checkbox === "on",
      nationality: selectedOption1,
      employmentStatus: selectedOption2,
      termsAndConditions: checkbox === "on",
      preferredLanguages: Array.isArray(selectedOption)
        ? selectedOption
        : [selectedOption],
      workExperience: {
        place: workExperience.place,
        address: workExperience.workAddress,
        numberOfExperience: parseInt(workExperience.numberOfExperience),
        periodStart: workExperience.periodStart,
        periodEnd: workExperience.periodEnd,
      },
    };
    // Inside handleSubmit function, after formatting the data
    localStorage.setItem("formData", JSON.stringify(formattedData));
  };

  const handleReset = () => {
    // Reset all state variables here
    setFirstName("");
    setLastName("");
    setContact("");
    setSelectedOption("");
    setSelectedOption1("");
    setSelectedOption2("");
    setAddress("");
    setBirth("");
    setCheckbox("");
    setWorkExperience({
      numberOfExperience: "",
      periodStart: "",
      periodEnd: "",
      place: "",
      workAddress: "",
    });
  };

  return (
    <div className="container">
      <h1>Form for CV Generation</h1>
      <fieldset>
        <form>
          <label htmlFor="firstname">First Name*</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
          />
          <label htmlFor="lastname">Last Name*</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            required
          />

          <label htmlFor="tel">Phone Number*</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Mobile number"
            required
          />
          <label htmlFor="datepicker">Date of Birth*</label>
          <input
            type="date"
            name="datepicker"
            id="datepicker"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
            required
          />
          <div style={{ textAlign: "left", padding: "10px 0" }}>
            <label htmlFor="switch" style={{ display: "inline" }}>
              Is Active*
            </label>
            <input type="checkbox" name="switch" id="switch" required />
          </div>

          <label>Prefered Langauges</label>
          <select
            name="select"
            id="select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <optgroup label="Languages">
              <option value="option">Option</option>
              <option value="1">English</option>
              <option value="2">Sinhala</option>
              <option value="3">Tamil</option>
              <option value="4">German</option>
            </optgroup>
          </select>

          <label>Nationality</label>
          <select
            name="select"
            id="nationality"
            value={selectedOption1}
            onChange={(e) => setSelectedOption1(e.target.value)}
          >
            <optgroup label="Nationality">
              <option value="option">Option</option>
              <option value="1">Sri Lanka</option>
              <option value="2">United Kingdom</option>
              <option value="3">United States of America</option>
              <option value="5">Denmark</option>
              <option value="6">Australia</option>
              <option value="7">New Zealand</option>
              <option value="8">Sweden</option>
              <option value="9">Norway</option>
              <option value="10">Canada</option>
              <option value="11">Germany</option>
            </optgroup>
          </select>

          <label>Employment Status</label>
          <select
            name="select"
            id="employment"
            value={selectedOption2}
            onChange={(e) => setSelectedOption2(e.target.value)}
          >
            <optgroup label="Employment Status">
              <option value="option">Option</option>

              <option value="1">Employed</option>
              <option value="2">UnEmployed</option>
            </optgroup>
          </select>
          <label htmlFor="about">Address</label>
          <textarea
            style={{ padding: "5px" }}
            name="about"
            id="about"
            cols="30"
            rows="10"
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter Your Address"
            required
          ></textarea>

          <h3>Work Experience</h3>
          <label htmlFor="expernumb">Number of experiences</label>
          <input
            type="number"
            name="expernumb"
            id="expernumb"
            value={workExperience.numberOfExperience}
            onChange={(e) =>
              setWorkExperience((prevState) => ({
                ...prevState,
                numberOfExperience: e.target.value,
              }))
            }
          />
          <label htmlFor="periodStart">Period Start</label>
          <input
            type="date"
            name="periodStart"
            id="periodStart"
            value={workExperience.periodStart}
            onChange={(e) =>
              setWorkExperience((prevState) => ({
                ...prevState,
                periodStart: e.target.value,
              }))
            }
          />
          <label htmlFor="periodEnd">Period End</label>
          <input
            type="date"
            name="periodEnd"
            id="periodEnd"
            value={workExperience.periodEnd}
            onChange={(e) =>
              setWorkExperience((prevState) => ({
                ...prevState,
                periodEnd: e.target.value,
              }))
            }
          />
          <label htmlFor="place">Place</label>
          <input
            type="text"
            id="place"
            value={workExperience.place}
            onChange={(e) =>
              setWorkExperience((prevState) => ({
                ...prevState,
                place: e.target.value,
              }))
            }
          />
          <label htmlFor="workAddress">Work Address</label>
          <input
            type="text"
            id="workAddress"
            value={workExperience.workAddress}
            onChange={(e) =>
              setWorkExperience((prevState) => ({
                ...prevState,
                workAddress: e.target.value,
              }))
            }
          />

          <div style={{ textAlign: "left", padding: "10px 0" }}>
            <input
              type="checkbox"
              name="switch1"
              id="switch1"
              onChange={(e) => setCheckbox(e.target.value)}
              required
            />

            <label htmlFor="switch1" style={{ display: "inline" }}>
              Terms & Conditions
            </label>
          </div>
          <button type="reset" value="reset" onClick={() => handleReset()}>
            Reset
          </button>
          <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
};
