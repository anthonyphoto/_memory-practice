import {API_BASE_URL} from '../config';

export const PICK_CELL = 'PICK_CELL';
export const pickCell = (index) => ({
    type: PICK_CELL,
    index
});

export const END_TIME = 'END_TIME';
export const endTime = () => ({
    type: END_TIME,
});

export const UPDATE_ELAPSED = 'UPDATE_ELAPSED';
export const updateElapsed = () => ({
    type: UPDATE_ELAPSED,
});


export const FETCH_REQUEST = 'FETCH_REQUEST';
export const fetchRequest = () => ({
    type: FETCH_REQUEST
});

export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchError = err => ({
    type: FETCH_ERROR,
    err
})

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const fetchDataSuccess = data => ({
    type: FETCH_DATA_SUCCESS,
    data

});

export const setTime = () => dispatch => {
    return new Promise(resolve => {
        setTimeout(() => {
            // resolve();
            dispatch(endTime());
        }, 2000)
    })
    // .then(()=> {
    //     console.log("ere");
    // })

}



// export const setTime = () => dispatch => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//           resolve('resolved');
//         }, 2000);
//       });
    
// }

export const fetchData = () => dispatch => {
    dispatch(fetchRequest());

    return fetch(`${API_BASE_URL}/`)
     .then(res => {
        if (!res.ok) {
            return Promise.reject({
                status: res.status,
                message: res.statusText
            });
        }
        return res.json();
    })
    .then(data => {
        console.log(data);
        dispatch(fetchDataSuccess(data));
    })
    .catch(err => dispatch(fetchError(err)));
}
