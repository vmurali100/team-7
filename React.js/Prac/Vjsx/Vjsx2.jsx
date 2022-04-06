import React from "react"
const Vjsx2 = ()=>{
    // return(
    //     <div className="dummyclass">
    //         <p>Hai Html,Css,JavaScript,ReactJs</p>
    //     </div>
    // )

        return React.createElement(
            'div',
            {id: 'hello',className:'dummyclass'},
            React.createElement('h1',null,'Hai Html,Css,JavaScript,ReactJs')
        )
}
export default Vjsx2