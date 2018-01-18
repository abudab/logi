const reducer = (state = {}, action) => {
    const {payload} = action;

    switch (action.type) {
        case 'ADD_EXPENSE': {
            let newState = {...state};
            newState[payload.id] = payload;
            return newState;
        }
        case 'REMOVE_EXPENSE': {
            let newState = {...state};
            delete newState[payload.id];
            return newState;
        }
        default:
            return state;
    }


}



