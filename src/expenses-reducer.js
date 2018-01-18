export default (state = {}, action) => {
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
        case 'CHANGE_STATUS': {
            let newState = Object.assign({}, state[payload.id])
            newState.status = !newState.status
            return { ...state, [newState.id] : newState };
        }
        default:
            return state;
    }

}