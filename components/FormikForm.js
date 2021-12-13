import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Cleave from 'cleave.js/react';
import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/FormikForm.module.scss';

const brand = 'Corona';

const dobInput = ({ field, form: { touched, errors }, ...props }) => {
  return <Cleave {...field} {...props} options={{ date: true }} />;
};

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
        firstName: Yup.string().required('Required').max(50, 'Must be 50 characters or less'),
        lastName: Yup.string().required('Required').max(50, 'Must be 50 characters or less'),
        address1: Yup.string().required('Required').max(50, 'Must be 50 characters or less'),
        city: Yup.string().required('Required').max(50, 'Must be 50 characters or less'),
        state: Yup.string().required('Required'),
        zip: Yup.string().required('Required'),
        email: Yup.string().required('Required').email('Invalid email address'),
        dob: Yup.string().required('Required').matches(/\d\d\/\d\d\/\d\d\d\d/, 'Must follow this format: MM/DD/YYYY'),
        agreeRules: Yup.boolean().required('Required'),
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
          <ErrorMessage className={styles.error} name="firstName" component="div" />
        </div>

        {/* Last name —————————— */}
        <div className={styles.formControl}>
          <label htmlFor="last-name">Last Name</label>
          <Field id="last-name" type="text" name="lastName" />
          <ErrorMessage className={styles.error} name="lastName" component="div" />
        </div>

        {/* Address 1 —————————— */}
        <div className={styles.formControl}>
          <label htmlFor="address1">Address 1</label>
          <Field id="address1" type="text" name="address1" />
          <ErrorMessage className={styles.error} name="address1" component="div" />
        </div>

        {/* Address 2 —————————— */}
        <div className={styles.formControl}>
          <label htmlFor="address2">Address 2</label>
          <Field id="address2" type="text" name="address2" />
          <ErrorMessage className={styles.error} name="address2" component="div" />
        </div>

        {/* City —————————— */}
        <div className={styles.formControl}>
          <label htmlFor="city">City</label>
          <Field id="city" type="text" name="city" />
          <ErrorMessage className={styles.error} name="city" component="div" />
        </div>

        {/* State —————————— */}
        <div className={styles.formControl}>
          <label htmlFor="state">State</label>
          <Field as="select" id="state" name="state">
            <option value="" disabled>
              Select one
            </option>
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
          <ErrorMessage className={styles.error} name="state" component="div" />
        </div>

        {/* Zip code —————————— */}
        <div className={styles.formControl}>
          <label htmlFor="zip">Zip Code</label>
          <Field id="zip" type="text" name="zip" />
          <ErrorMessage className={styles.error} name="zip" component="div" />
        </div>

        {/* Email —————————— */}
        <div className={styles.formControl}>
          <label htmlFor="email">Email</label>
          <Field id="email" type="email" name="email" />
          <ErrorMessage className={styles.error} name="email" component="div" />
        </div>

        {/* Date of birth —————————— */}
        <div className={styles.formControl}>
          <label htmlFor="dob">Date of Birth</label>
          <Field id="dob" name="dob" placeholder="MM/DD/YYYY" component={dobInput} />
          <ErrorMessage className={styles.error} name="dob" component="div" />
        </div>

        {/* Agree to rules —————————— */}
        <div className={`${styles.formControl} ${styles.checkbox}`}>
          <label className={styles.checkboxLabel} htmlFor="agree-rules">
            <Field id="agree-rules" type="checkbox" name="agreeRules" />
            <span>I have read and agree to the Official Rules.</span>
          </label>
          <ErrorMessage className={styles.error} name="agreeRules" component="div" />
        </div>

        {/* Agree to terms and conditions —————————— */}
        <div className={`${styles.formControl} ${styles.checkbox}`}>
          <label className={styles.checkboxLabel} htmlFor="agree-terms">
            <Field id="agree-terms" type="checkbox" name="agreeTerms" />
            <span>
              I have read and agree to {brand}&apos;s Privacy Policy and Terms and Conditions, and consent to {brand}&apos;s use of my personal information for marketing and analytics purposes, including receiving marketing and promotional communications.
            </span>
          </label>
          <ErrorMessage className={styles.error} name="agreeTerms" component="div" />
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
