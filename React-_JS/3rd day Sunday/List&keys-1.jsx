import { component } from 'react'
export default class List extends component {
    constructor(){
        super()
        this.state = {
            Food: ["Biriyani", "White Rice", "Kuska", "Pongal"]
        }
    }
    render() {
        let { Food } = this.state
        return (
            <div>
                <ul>
                    {Food.map((foods, i) => {
                        return <li key={i}>{foods}</li>
                    })}
                </ul>
            </div>
        )
    }
}