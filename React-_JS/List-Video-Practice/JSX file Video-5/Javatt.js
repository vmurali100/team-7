import React from "react";

const Welcome =() =>{
    return(
        <div>
            <b>Hello Sunline IT instustions ALL are Welcome </b>
        </div>
    );
}
export default Welcome;


export const going =()=>{
    return React.createElement('div',null, React.createElement('h1',null,'Hii Good Morning..!!'))
}
// null is nothing but in thal null place we have attributes example like ID ,Class,ClassNames like that we will use null
// {id="",class="", className}