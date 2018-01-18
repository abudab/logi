export default (state = false, action) => {
    const {payload} = action;
    switch (action.type) {
        case 'SHOW_POPUP': {
            return true;
        }
        case 'CLOSE_POPUP': {
            return false;
        }
        default:
            return state;
    }
}