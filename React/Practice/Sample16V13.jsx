import React from "react";

function Sample16 (){
    function SamButton (){
        document.write("Button Clicked")
    }
    return(
        <div>
            <button onClick={SamButton}>Click</button>
        </div>
    )
}
export default Sample16