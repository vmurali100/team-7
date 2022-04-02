import { useState } from "react"

export default function FuncCompState() {
    const [myName, setMyName] = useState("");
    const [person, setPerson] = useState({  });
    const [students, setStudents] = useState(["Murali"])

    const changeMyName = () => {
        setMyName("Murali Krishna")
    }

    const showPerson = () => {
        setPerson({
            fname: "Murali",
            lname: "Krishna",
            email: "murali@gmail.com"
        })
    }

    const showStudents = () => {
        setStudents(["Raju", "Surya", "Rahman", "Deena", "Sadik"])
    }
    return <div>
        <button onClick={changeMyName}>Change My Name </button>
        {myName.length > 0 && <h2>Default Name is : {myName}</h2>}
        <hr />


        <button onClick={showPerson}>Show Person</button>
        <ul>
            {Object.values(person).length === 0 &&  <h2>Person Detaisl will Come Here</h2> }
            {Object.values(person).map((val, i) => {
                console.log(i)
                return <li key={i}>{val}</li>
            })}
        </ul>

        <hr />

        <button onClick={showStudents}>Show Students</button>
        <ul>
            {students.map((std, i) => {
                return <li key={i}>{std}</li>
            })}
        </ul>

    </div>
}