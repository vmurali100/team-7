import React from "react";

const Yes = () => {
    // return (
    //     <div className = 'dummyClass'>
    //         <p>Hello React </p>
    //     </div>
    // )


    return React.createElement(
        'div',
        {id: 'hello',className: 'dummyClass'},
        React.createElement('h1',null,'Hello React')
    ) 
}
export default Yes