const Greet1 = (props)=>{
    return(
        <div>
            <h2>previously it was winter season{props.name}{props.superhero}</h2>
            <h1>{props.children}</h1>
            <h2>previously it was winter season{props.name}{props.superhero}</h2>
            {props.children}
            <h2>previously it was winter season{props.name}{props.superhero}</h2>
            
        </div>
    )
}
export default Greet1;