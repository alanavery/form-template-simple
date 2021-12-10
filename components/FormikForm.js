import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/FormikForm.module.scss';

const brand = 'Corona';

const FormikForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        email: '',
        dob: '',
        agreeRules: '',
        agreeTerms: '',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required('Required')
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className={styles.form}>
        {/* First name —————————— */}
        <div className={styles.formControl}>
          <label htmlFor="first-name">First Name</label>
          <Field id="first-name" type="text" name="firstName" />
        </div>

        {/* Last name —————————— */}
        <div className={styles.formControl}>
          <label htmlFor="last-name">Last Name</label>
          <Field id="last-name" type="text" name="lastName" />
        </div>

        {/* Address 1 —————————— */}
        <div className={styles.formControl}>
          <label htmlFor="address1">Address 1</label>
          <Field id="address1" type="text" name="address1" />
        </div>

        {/* Address 2 —————————— */}
        <div className={styles.formControl}>
          <label htmlFor="address2">Address 2</label>
          <Field id="address2" type="text" name="address2" />
        </div>

        {/* City —————————— */}
        <div className={styles.formControl}>
          <label htmlFor="city">City</label>
          <Field id="city" type="text" name="city" />
        </div>

        {/* State —————————— */}
        <div className={styles.formControl}>
          <label htmlFor="state">State</label>
          <Field as="select" id="state" name="state">
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
          </Field>
        </div>

        {/* Zip code —————————— */}
        <div className={styles.formControl}>
          <label htmlFor="zip">Zip Code</label>
          <Field id="zip" type="text" name="zip" />
        </div>

        {/* Email —————————— */}
        <div className={styles.formControl}>
          <label htmlFor="email">Email</label>
          <Field id="email" type="email" name="email" />
        </div>

        {/* Date of birth —————————— */}
        <div className={styles.formControl}>
          <label htmlFor="dob">Date of Birth</label>
          <Field id="dob" type="date" name="dob" />
        </div>

        {/* Agree to rules —————————— */}
        <div className={`${styles.formControl} ${styles.checkbox}`}>
          <label className={styles.checkboxLabel} htmlFor="agree-rules">
            <Field id="agree-rules" type="checkbox" name="agreeRules" />
            <span>I have read and agree to the Official Rules.</span>
          </label>
        </div>

        {/* Agree to terms and conditions —————————— */}
        <div className={`${styles.formControl} ${styles.checkbox}`}>
          <label className={styles.checkboxLabel} htmlFor="agree-terms">
            <Field id="agree-terms" type="checkbox" name="agreeTerms" />
            <span>
              I have read and agree to {brand}&apos;s Privacy Policy and Terms and Conditions, and consent to {brand}&apos;s use of my personal information for marketing and analytics purposes, including receiving marketing and promotional communications.
            </span>
          </label>
        </div>

        {/* reCAPTCHA —————————— */}

        {/* Submit button —————————— */}
        <div className={styles.formControl}>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormikForm;
