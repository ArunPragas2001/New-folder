import { useState } from "react";
/*export default function StudentCom(props){
return(
    <div>
    <h1>Student Information </h1>
    <p>Name:{props.name}</p>    
    <p>Course:{props.course}</p>
    </div>
);*/

import { useState } from "react";

export default function StudentCom({ name, course, age }) {
    const [studentName, setStudentName] = useState("");

    const showName = () => {
        setStudentName(name);
    };

    return (
        <div>
            <h1>Student Information</h1>

            <p>Name: {studentName}</p>
            <p>Course: {course}</p>
            <p>Age: {age}</p>

            <button onClick={showName}>Show Name</button>
        </div>
    );
}