import React, {useState, useEffect} from 'react';
// import {connect} from 'react-redux';
// import {pickCell} from '../actions';
// import {fetchData} from '../actions';



export default function Intro(props) {
    const [key, setKey] = useState("");
    
    function handleChange(e) {
        e.preventDefault();
        setKey(e.target.value);
        // console.log(1, e.target.value);
    }
    
    return (
        <div>
            <h1>Intro to Memory Game</h1> 
            {key}

            <form>
                <input onChange={e=>handleChange(e)} type='text' name='search' id='search' />
            </form>
        </div>

    );
}

// const mapStateToProps = state => {
//     return {
//         grid: state.demo.grid,
//         score: state.demo.score
//     };
// }

// export default connect(mapStateToProps)(GridCell);