export default (state = null, action) => {
    const {payload} = action;
    switch (action.type) {
        case 'SELECTED_EXPENSE': {
            return payload
        }
        default:
            return state;
    }
}