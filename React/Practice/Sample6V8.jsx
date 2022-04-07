import React from "react";

export const Sample6 = () => {
    // return(
    //     <div>
    //         <h1>Lion</h1>
    //         <p>The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular.</p>
    //         <img src="https://www.krugerpark.co.za/images/black-maned-lion-shem-compion-786x500.jpg" alt="" />
    //         <a href="https://en.wikipedia.org/wiki/Lion">Read more...</a>
    //     </div>
    // )

    return React.createElement(
        "div", null,
        React.createElement("h1", null, "Lion"),
        React.createElement("p", null, "The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular."),
        React.createElement("img", { src: "https://www.krugerpark.co.za/images/black-maned-lion-shem-compion-786x500.jpg" }),
        React.createElement("a", { herf: "https://en.wikipedia.org/wiki/Lion" }, "Read more...")
    )
}