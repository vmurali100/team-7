import React, { Component } from 'react';

class LifecycleB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'anthony villa',
        }
        console.log('LifecycleB constructor');

    }
    static getDerivedStateFromProps(){
        console.log('LifecycleB getDerivedStateFromProps');
        return null;
    }
    componentDidMount(){
        console.log('LifecycleB componentDidMount');
    }
    render() {
        return (
            <div>
                LifecycleB.
            </div>
        );
    }
}

export default LifecycleB;