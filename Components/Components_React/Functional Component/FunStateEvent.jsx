import { useState } from "react"

export default function FuncCompState() {

    const [myData, setmyData] = useState("");
    const [Details, setDetails] = useState({});
    const [MyFriends, setMyFriends] = useState([""])

    const changemyData = () => {
        setmyData("This is Surya Sp From Sunline IT Instustions ,In a Chittoor Branch.Iam UI deloveloper in So On Comapany")
    }

    const ViewDetails = () => {
        setDetails({
            fname: "Surya",
            lname: "SP",
            age: "23",
            gender: "Male",
            City: "Chittoor",
            Number: "7385938913883",
            Email: "suri@gmail.com",
            ID: "2007"
        })
    }

    const ViewMyFriends = () => {
        setMyFriends(["Raju", "Deena", "Rehaman", "sadik", "Balaji", "Rahul", "Kunal", "Surya"])
    }
    return (
        <div>
            <button onClick={changemyData}>Change My Name </button>
            {myData.length > 0 && <h2>Default Name is : {myData}</h2>}
            <hr />


            <button onClick={ViewDetails}>View Details</button>
            <ul>
                {Object.values(Details).length === 0 && <h2>Details Detaisl will Come Here</h2>}
                {Object.values(Details).map((val, i) => {                  
                    return <li key={i}>{val}</li>
                })}
            </ul>

            <hr />

            <button onClick={ViewMyFriends}>View MyFriends</button>
            <ul>
                {MyFriends.map((frd, i) => {
                    return <li key={i}>{frd}</li>
                })}
            </ul>

        </div>
    )
}