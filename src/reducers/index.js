import * as actions from '../actions';

function initGrid() {
    const arr = [];

    arr.push({ content: 'A', status: false });
    arr.push({ content: 'A', status: false });
    arr.push({ content: 'B', status: false });
    arr.push({ content: 'B', status: false });
    arr.push({ content: 'C', status: false });
    arr.push({ content: 'C', status: false });
    arr.push({ content: 'D', status: false });
    arr.push({ content: 'D', status: false });
    arr.push({ content: 'E', status: false });
    arr.push({ content: 'E', status: false });
    arr.push({ content: 'F', status: false });
    arr.push({ content: 'F', status: false });
    arr.push({ content: 'G', status: false });
    arr.push({ content: 'G', status: false });
    arr.push({ content: 'H', status: false });
    arr.push({ content: 'H', status: false });

    arr.sort((a, b) => (Math.random() - 0.5));

    return arr;
}

const initialState = {
    loading: false,
    error: null,
    data: {},
    grid: initGrid(),
    score: 0,
    pick: [-1, -1],
    timeOut: false,
    startTime: Date.now(),
    elapsed: 0
}
  

export default function reducer (state = initialState, action) {
    switch(action.type) {

        case actions.PICK_CELL:
            const arr = [...state.pick];
            const index = action.index;
            arr[0] === -1 ? arr[0] = index : arr[1] = index;
            
            // state.loading = true;
            state.grid[index].status = true;
            // console.log(1, state.grid[index].status);

            if (arr[1] !== -1) {
                if (state.grid[arr[0]].content === state.grid[arr[1]].content) {

                    return Object.assign({}, state, {
                        pick: [-1, -1],
                        score: state.score + 1
                    });
                }
                else {
                    // new Promise(resolve => {
                    //     setTimeout(() => {
                    // state.grid[arr[0]].status = false;
                    // state.grid[arr[1]].status = false;
                    // console.log("here");

                            return Object.assign({}, state, {
                                pick: arr,
                                timeOut: true
                            })
        
                        // }, 3000);
                    // })

                }

            }

            return Object.assign({}, state, {
                pick: arr
            });

        case actions.END_TIME:
            if (state.pick[0] !== -1) {
                state.grid[state.pick[0]].status = false;
                state.grid[state.pick[1]].status = false;
            }
                return Object.assign({}, state, {
                pick: [-1, -1],
                timeOut: false
            });

        case actions.UPDATE_ELAPSED:
            return Object.assign({}, state, {
                elapsed: Math.floor((Date.now() - state.startTime)/1000)
            });


        case actions.FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                error: null
            });

        case actions.FETCH_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: action.err
            });

        case actions.FETCH_DATA_SUCCESS:
            return Object.assign({}, state, {
                data: action.data,
                loading: false,
                error: null
            });
        
        default:
            return state;
    }

}