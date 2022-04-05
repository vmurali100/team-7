import React, { useState } from 'react'

export default function FuncCopmState() {
    const [MyName, setMyName] = useState("");
    const [person, setPerson] = useState({});
    const [students, setStudent] = useState([" "])

    const changeMyName = () => {
        setMyName("Thala Deena")
    }
    const showPerson = () => {
        setPerson({
            fname: "Thala",
            lname: "Deena",
            email: "deenav0003@gamil.com",
            city: "chittoor",
            phone: "9874561230"
        })
    }
    const showStudents = () => {
        setStudent(["raju", "sai", "naveen", "surya"])
    }

    return <div>
        <button onClick={changeMyName}>changeMyName</button>
        {MyName.length > 0 && <h2>Full Name is :{MyName}</h2>}
        <hr />

        <button onClick={showPerson}>showPerson</button>
        <ul>
            {Object.values(person).length === 0 && <h2>this is deena</h2>}
            {Object.values(person).map((val, i) => {
                console.log(i)
                return <li key={i}>{val}</li>
            })}
        </ul>
        <hr />
        <button onClick={showStudents}>showStudents</button>
        <ul>
            {students.map((std, i) => {
                return <li key={i}>{std}</li>
            })}
        </ul>
    </div>
} 