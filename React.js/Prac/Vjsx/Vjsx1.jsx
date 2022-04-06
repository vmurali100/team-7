import React from "react";

const Vjsx1 = () => {
    // return (
    //     <div className = "dummyClass">
    //         <p>Hello React-Js </p>
    //     </div>
    // )


    return React.createElement(
        'div',
        {id: 'hello',className: 'dummyClass'},
        React.createElement('h1',null,'Hello React-Js')
    ) 
}
export default Vjsx1