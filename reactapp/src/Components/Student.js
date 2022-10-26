import axios from 'axios';
// import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import swal from 'sweetalert';
import './Student.css';

const Student = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/student')
      .then(response =>{
        setData(response.data);
      })

    }, [])

    const deleteStudent = async (e , id) => {
        const pageRefresh = e.currentTarget;
        pageRefresh.innerText = "Deleting";
        const res = await axios.delete(`http://127.0.0.1:8000/api/delete-student/${id}`);
        if (res.data.status === 200)
        {
            pageRefresh.closest("tr").remove();
            swal({
               title: "Success!",
               text: res.data.message,
               icon: "success",
               button: "OK!",
            })
        }

    }
        
     
  return (
      <div className="student_table">
        <table className="table">
            <thead className="table-info">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>phone</th>
                    <th>Opration</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(items =>{
                        return(
                                    <tr key={items.id}>
                                        <td>{items.id}</td>
                                        <td>{items.name}</td>
                                        <td>{items.address}</td>
                                        <td>{items.email}</td>
                                        <td>{items.phone}</td>
                                        <td>
                                            <div className="set_btn">
                                            {/* <Link to={'/'} className="btn btn-success btn-sm">Edit</Link> */}
                                            <button className="btn btn-success btn-sm">Edit</button>
                                            <button type='button' onClick={(e) => deleteStudent(e, items.id)} className="btn btn-danger btn-sm">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                               )  
                    })
                }
            </tbody>

        </table>
      </div>
  )
}

export default Student;