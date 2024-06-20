import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Student.css';

function Student() {
    const [stu, setStudent] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => {
                console.log(res.data);
                setStudent(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const handleDelete = async (val) => {
        try {
            await axios.delete("http://localhost:8081/delete/" + val);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="container">
            <Link to="/create" className="add-button">Add +</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>PName</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {stu.map((data, i) => (
                        <tr key={i}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>
                                <Link to={`update/${data.id}`} className='btn btn-primary'>Update</Link>
                                <button className='btn btn-danger ms-2' onClick={() => handleDelete(data.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Student;
