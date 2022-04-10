import React, { Component } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';
import MemoComp from './MemoComp';

class ParentComp extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'monroe',
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'monroe'
            })
        }, 2000);
    }
    render() {
        console.log('parent component render');
        return (
            <div>
                Parent Component.
                {/* <Memo name={this.state.name}/> */}
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        );
    }
}

export default ParentComp;