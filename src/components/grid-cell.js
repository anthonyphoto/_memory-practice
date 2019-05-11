import React from 'react';
import {connect} from 'react-redux';
import {pickCell} from '../actions';
// import {fetchData} from '../actions';

function handleClick(e, index, dispatch) {
    e.preventDefault();
   
    dispatch(pickCell(index));

    console.log("clicked");
}


export function GridCell(props) {
    const {index, content, status} = props;

    return (
        <div className='cell'>
            {
                status === true ? 
                    <div>{content}</div>
                :
                    <a href="" onClick={e=>handleClick(e, index, props.dispatch)}>
                        {index} <span className='small'>{content}</span>
                    </a>

            }
        </div>

    );
}

const mapStateToProps = state => {
    return {
        grid: state.demo.grid,
        score: state.demo.score
    };
}

export default connect(mapStateToProps)(GridCell);