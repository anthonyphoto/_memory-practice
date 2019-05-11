import React from 'react';
import {connect} from 'react-redux';
import GridCell from './grid-cell';
import {setTime, updateElapsed} from '../actions';


export class LandingPage extends React.Component{

    componentDidMount() {
        // this.timer = setInterval(()=>{
        //     this.props.dispatch(updateElapsed());
        // }, 1000);

        // clearInterval(this.timer);  //

        // console.log("start", this.props.startTime);
    }

    componentDidUpdate() {
        if (this.props.timeOut) {
            this.props.dispatch(setTime());
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer); 

    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(1, e.target.player.value);

    }
    handleChange(e) {
        e.preventDefault();
        console.log(1, e.target.value);
    }

    
    render() {
        const {grid, score, elapsed} = this.props;
        const cellJsx = [];
        for (let i = 0; i < grid.length; i++) {
            cellJsx.push(<GridCell key={i} index={i} content={grid[i].content} status={grid[i].status} />);
        }

        return (
            <main className='al-c'>
                <h1>Memory Game</h1>
                <h2>Score: {score}  Time: {elapsed}</h2>
                <form onSubmit={e=>this.handleSubmit(e)}>
                    <label htmlFor='player'>Name</label>
                    <input onChange={e => this.handleChange(e)} type='text' id='player' name='player' />
                    <button className='al-c'>Start Game</button>
                </form>
                <div className='grid-box'>
                    {cellJsx}
                </div>

            </main>
        );
    }
}

const mapStateToProps = state => {
    console.log("pick", state.demo.pick)
    console.log("grid", state.demo.grid)
    console.log("state", state.demo)
    return {
        grid: state.demo.grid,
        score: state.demo.score,
        pick: state.demo.pick,
        timeOut: state.demo.timeOut,
        startTime: state.demo.startTime,
        elapsed: state.demo.elapsed
    };
}

export default connect(mapStateToProps)(LandingPage);