import { Component } from "react";

export  class Clacom extends Component{
    render(){
        return <p style={{'font-Size':'30px'}}>Wwe superstar John cena</p>
    }
}
export class Double extends Component{
    render(){
        return <div>
            <h2>Tamil film is super movies</h2>
            <p>Natural history is a domain of inquiry involving organisms,
                 including animals, fungi, and plants, in their natural 
                 environment, leaning more towards observational than 
                 experimental methods of study. A person who studies natural 
                 history is called a naturalist or natural historian.
            </p>
            <img src="https://images-na.ssl-images-amazon.com/images/I/91aHSl0GVGL.jpg" style={{width:'300px',height:"300px"}}></img>
        </div>
    }
}
export class Cons extends Component{
    constructor(){
        super()
        this.state={
            Cenima:'Vijay',
            Cricket:'Virat',
            Sports:"Wwe",
            Entertainment:"Manjuvirattu"
        }
    }
    render(){
        return <>
           <h1>My Favourate</h1>
           <h3>Cenima: {this.state.Cenima}</h3>
           <h3>Cricket: {this.state.Cricket}</h3>
           <h3>Sports: {this.state.Sports}</h3>
           <h3>Entertainment: {this.state.Entertainment}</h3>
        </>
    }
}