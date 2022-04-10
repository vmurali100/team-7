import React, { Component } from 'react';
import LifecycleB from './LifecycleB';
import PropTypes from 'prop-types';

class LifeCycleA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'anthony',
        }
        console.log('LifecycleA constructor');

    }

    // componentWillMount() {

    // }

    // componentDidMount() {

    // }

    // componentWillReceiveProps(nextProps) {

    // }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    // componentWillUpdate(nextProps, nextState) {

    // }

    // componentDidUpdate(prevProps, prevState) {

    // }

    // componentWillUnmount() {

    // }
    static getDerivedStateFromProps(){
        console.log('LifecycleA getDerivedStateFromProps');
        return null;
    }
    componentDidMount(){
        console.log('LifecycleA componentDidMount');
    }

    render() {
        console.log('LifecycleA');
        return (
            
            <div>
                LifecycleA
                <LifecycleB/>
            </div>
        );
    }
}

// LifeCycleA.propTypes = {

// };

export default LifeCycleA;