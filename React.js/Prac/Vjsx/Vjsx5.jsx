import React from "react"
const Vjsx5 = ()=>{
    // return(
    //     <div className="dummyclass">
    //         <h4>Completing this Jsx</h4>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id:'bye',className:"dummyclass"},
        React.createElement('h1',null,'Completing this Jsx')
    )
}
export default Vjsx5