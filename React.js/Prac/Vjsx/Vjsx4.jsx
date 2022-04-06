import React from "react";
const Vjsx4 = ()=>{
    // return(
    //     <div className="dummyclass">
    //         <p>This is using with Jsx</p>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id:'hai',className:"dummyclass"},
        React.createElement('h1',null,'This is not  using with Jsx')
    )
}
export default Vjsx4