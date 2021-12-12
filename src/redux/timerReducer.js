const SET_STATUS = "SET_STATUS";

let initialState = {
    status: "stop",
};

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS:
            return { ...state, status: action.status }
        default:
            return state;
    }
};

export const setStatus = (status) => ({ type: SET_STATUS, status });



export default timerReducer;