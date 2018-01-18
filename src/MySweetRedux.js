const createStore = (reducer, initialState = {}) => {
    let state = initialState;
    const listeners= [];
    return {
        getState: () => {
            return {...this.state};
        },
        dispatch: (action) => {
            state = reducer(this.state,action);
            listeners.forEach((fun)=>fun());
        },
        subscribe: (listener) => {
            listeners.push(listener);
            return () => {
                listeners.filter((l) => { return l !== listener});
            }
        },
    }
}
export default createStore