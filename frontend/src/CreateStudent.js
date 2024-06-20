import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateStudent.css';

function CreateStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8081/create', { name, email })
      .then(res => {
        console.log(res);
        navigate("/");
      }).catch(err => console.log(err));
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Add Student</h2>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreateStudent;
