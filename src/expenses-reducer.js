import _ from 'lodash';

export default (state = {}, action) => {
    const {payload} = action;

    switch (action.type) {
        case 'ADD_EXPENSE': {
            let newState = {...state.expenses};
            newState[payload.id] = payload;
            return {...state, expenses:{...newState}};
        }
        // case 'REMOVE_EXPENSE': {
        //     let newState = {...state};
        //     delete newState[payload.id];
        //     return newState;
        // }
        case 'CHANGE_STATUS': {
            let newState = Object.assign({}, state.expenses[payload.id])
            newState.status = !newState.status
            let newExpenses = {...state.expenses};
            newExpenses[payload.id] = newState
            return {...state, expenses: {...newExpenses}};
        }
        case 'SORTandFILTER' : {
            let sorted = {...Object.values(state.expenses)}
            const filter = payload.filter || state.filter;
            const sorting = payload.sorting || state.sorting;
            sorted = _.orderBy(filterWith(sorted, filter), sorting.column, sorting.order);
            return {...state, sortedExpenses: sorted, filter: filter, sorting: sorting};
        }
        default:
            return state;
    }

}

const filterWith = (filtered, filteredArr) => {
    filteredArr.forEach(function (fel) {
        filtered = _.filter(filtered, function (el) {
            return el[fel.column].includes(fel.name);
        });
    })
    return filtered;
}
