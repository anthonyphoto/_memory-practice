import React from 'react';
import {connect} from 'react-redux';

export default class Intro2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            key: null
        }

    }
    handleChange(e) {
        e.preventDefault();
        this.setState(Object.assign({}, this.state, {
            key: e.target.value
        }))
        // console.log(e.target.value);
    }

    render() {
        return (
            <div>

                Key: {this.state.key}
                <form>
                    <input onChange={e=>this.handleChange(e)} type='text' id='search' name='search' />
                </form>
            </div>
        );
    }
}