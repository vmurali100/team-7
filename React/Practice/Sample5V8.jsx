import React from "react"

const Sample5 = () => {
    // return (
    //     <div>
    //         <h2>I am From React js In JSX</h2>
    //     </div>
    // )

    return React.createElement(
        "div",{id:"Hello"},
        React.createElement("h1",null,"I am From React js In JS")
    )
}
export default Sample5