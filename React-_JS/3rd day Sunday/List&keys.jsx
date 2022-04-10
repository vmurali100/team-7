import { component } from 'react'
export default class Sim extends component {
    constructor() {
        super()
        this.state = {
            Juice: {
                Bhadam: 'Bhadan',
                Fruitly: 'milkyFruity',
                Lemon:'Lemonjuice',
                Water:'water'
            }
        }
    }
    render() {

        let { Juice } = this.state
        return (
            <div>
                <ul>
                    {Object.values(Juice).map((val, i) => {
                        return <li key={i}>{val}</li>
                    })}
                </ul>
            </div>
        )
    }
}