export default function Mydata(){ 
    var Details={
        fname:"Surya",
        lname:"SP",
        age:"23",
        gender:"Male",
        City:"Chittoor",
        Number:"7385938913883",
        Email:"suri@gmail.com",
        ID:"2007"
    }   
    return(
        <div>
            {Object.keys(Details).map((da,i)=>{
                return(
                    <ul>
                        <li key={i}>{da}</li>
                    </ul>
                )
            })}
        </div>
    )
}