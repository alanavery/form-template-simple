import { useState } from 'react';
import axios from 'axios';

// const apiToken = '_dbmbPDT;YypAt2NUN-RD$CHENg&+JPW25^'

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`My name is ${firstName} ${lastName}.`);

    const djaData = new FormData();
    djaData.append('first_name', firstName);
    djaData.append('last_name', lastName);

    axios
      .post(process.env.NEXT_PUBLIC_API_URL, djaData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
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

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
