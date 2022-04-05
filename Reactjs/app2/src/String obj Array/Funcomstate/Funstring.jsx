import {usestate} from 'react'

export default function Funstring(){
    const [myname,setmyname]= usestate("");
    const changemyname=()=>{
        setmyname("Balaji Kidambi")
    }
    return<>
        <button onClick={changemyname}>My Name</button>
        <h2>Full Name is :{myname}</h2>
    </>
}