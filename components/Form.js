import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Form.module.css';

const brand = 'Corona';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [agreeRules, setAgreeRules] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      zip: zip,
      email: email,
      dob: dob,
      agreeRules: agreeRules,
      agreeTerms: agreeTerms,
    };
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} action="" method="">
      {/* First name —————————— */}
      <div className={styles.formControl}>
        <label htmlFor="first-name">First Name</label>
        <input
          id="first-name"
          type="text"
          name="first-name"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
      </div>

      {/* Last name —————————— */}
      <div className={styles.formControl}>
        <label htmlFor="last-name">Last Name</label>
        <input
          id="last-name"
          type="text"
          name="last-name"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
      </div>

      {/* Address 1 —————————— */}
      <div className={styles.formControl}>
        <label htmlFor="address1">Address 1</label>
        <input
          id="address1"
          type="text"
          name="address1"
          value={address1}
          onChange={(event) => {
            setAddress1(event.target.value);
          }}
        />
      </div>

      {/* Address 2 —————————— */}
      <div className={styles.formControl}>
        <label htmlFor="address2">Address 2</label>
        <input
          id="address2"
          type="text"
          name="address2"
          value={address2}
          onChange={(event) => {
            setAddress2(event.target.value);
          }}
        />
      </div>

      {/* City —————————— */}
      <div className={styles.formControl}>
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          name="city"
          value={city}
          onChange={(event) => {
            setCity(event.target.value);
          }}
        />
      </div>

      {/* State —————————— */}
      <div className={styles.formControl}>
        <label htmlFor="state">State</label>
        <select
          id="state"
          name="state"
          value={state}
          onChange={(event) => {
            setState(event.target.value);
          }}
        >
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </div>

      {/* Zip code —————————— */}
      <div className={styles.formControl}>
        <label htmlFor="zip">Zip Code</label>
        <input
          id="zip"
          type="text"
          name="zip"
          value={zip}
          onChange={(event) => {
            setZip(event.target.value);
          }}
        />
      </div>

      {/* Email —————————— */}
      <div className={styles.formControl}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>

      {/* Date of birth —————————— */}
      <div className={styles.formControl}>
        <label htmlFor="dob">Date of Birth</label>
        <input
          id="dob"
          type="date"
          name="dob"
          value={dob}
          onChange={(event) => {
            setDob(event.target.value);
          }}
        />
      </div>

      {/* Agree to rules —————————— */}
      <div className={styles.formControl}>
        <label className={styles.checkboxLabel} htmlFor="agree-rules">
          <input
            id="agree-rules"
            type="checkbox"
            name="agreeRules"
            value={agreeRules}
            onChange={(event) => {
              if (event.target.checked) {
                setAgreeRules(true);
              } else {
                setAgreeRules(false);
              }
            }}
          />
          <span>I have read and agree to the Official Rules.</span>
        </label>
      </div>

      {/* Agree to terms and conditions —————————— */}
      <div className={styles.formControl}>
        <label className={styles.checkboxLabel} htmlFor="agree-terms">
          <input
            id="agree-terms"
            type="checkbox"
            name="agreeTerms"
            value={agreeTerms}
            onChange={(event) => {
              if (event.target.checked) {
                setAgreeTerms(true);
              } else {
                setAgreeTerms(false);
              }
            }}
          />
          <span>
            I have read and agree to {brand}&apos;s Privacy Policy and Terms and Conditions, and consent to {brand}&apos;s use of my personal information for marketing and analytics purposes, including receiving marketing and promotional communications.
          </span>
        </label>
      </div>

      {/* reCAPTCHA —————————— */}

      {/* Submit button —————————— */}
      <div className={styles.formControl}>
        {/* <button type="submit">Submit</button> */}

        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default Form;
