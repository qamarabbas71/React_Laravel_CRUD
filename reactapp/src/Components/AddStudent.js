import React,{ useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import './AddStudent.css';

const AddStudent = () => {
   const [addStudent, setAddStudent] = useState({
      name: '',
      address: '',
      email: '',
      phone: '',
   })

   const handleInput = async (e) =>{
      // e.presist();
      setAddStudent({...addStudent, [e.target.name]: e.target.value});
   }

   const studentSubmit = async (e) => {
      e.preventDefault();

      const data = {
         name: addStudent.name,
         address: addStudent.address,
         email: addStudent.email,
         phone: addStudent.phone,
      }
      const res =await axios.post('http://127.0.0.1:8000/api/add-student', data);
      if (res.data.status === 200) 
         {
            
            swal({
               title: "Success!",
               text: res.data.message,
               icon: "success",
               button: "OK!",
            })
               setAddStudent({
                  name: '',
                  address: '',
                  email: '',
                  phone: '',
               })
         }
      }

  return (
    <div className="add_studend">
        <h2 className="heading">Student Form</h2>
        <form onSubmit={studentSubmit}>
        <div className="student">
               <label>Name:</label><br />
               <input type="text" name="name" onChange={handleInput} value={addStudent.name} /> 
            </div>
            <div className="student">
               <label>Address:</label><br />
               <input type="text" name="address" onChange={handleInput} value={addStudent.address} /> 
            </div> 
            <div className="student">
               <label>Email:</label><br />
               <input type="email" name="email" onChange={handleInput} value={addStudent.email} /> 
            </div>
            <div className="student">
               <label>Phone:</label><br />
               <input type="text" name="phone" onChange={handleInput} value={addStudent.phone} /> <br />
            </div>
            <div className="student_btn">
            <button type="submit" className="btn btn-primary btn-sm add_btn">Add Student</button>
            <button type="submit" className="btn btn-success btn-sm add_btn">Update </button>
            </div>
        </form>
        <span className="alt_msg"></span>

    </div> 
  )
}

export default AddStudent;