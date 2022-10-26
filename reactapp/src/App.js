import React from "react";
import './App.css';
import AddStudent from "./Components/AddStudent";
import Student from "./Components/Student";



function App(){
    return(
        <div>
            <div className="student-view">
                <div className="add-student">
                <AddStudent />
                </div> 
                <div className="student-data">
                <Student />
                </div>
            </div>
        </div>
        
        );
}

export default App;