import React from "react"
 const Vjsx3 = ()=>{
    // return (
    //     <div className="dummyclass">
    //         <h4>How are you...!!!!</h4>
    //     </div>
    // )
        return React.createElement(
            'div',
            {id:'hai',className:'dummyclass'},
            React.createElement('h1',null,'How are you...!!!!')
        )
}
export default Vjsx3