import React from "react";
import { UserConsumer } from "../Context";
export const Child = (props) => {
    return (
        <div>
            <UserConsumer>
                {(Fullname) => {
                    console.log("Recived Full Name", fullname)
                    return <h2>Fullname recived from props drill down :{fullname}</h2>

                }}
            </UserConsumer>
        </div>
    )
}
