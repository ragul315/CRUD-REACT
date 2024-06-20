import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './UpdateStudent.css';

function UpdateStudent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios
            .put("http://localhost:8081/update/" + id, { name, email })
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Update Student</h2>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button>Update</button>
            </form>
        </div>
    );
}

export default UpdateStudent;
