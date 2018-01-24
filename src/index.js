import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {expenses  as initialExpensesData} from "./data";
import expensesReducer from './expenses-reducer';
import selectedReducer from './select-reducer'
import popupReducer from './popup-reducer'

const uberReducer = combineReducers({
    expenses: expensesReducer,
    selected: selectedReducer,
    app: popupReducer
})

const initialExAsMap = initialExpensesData.reduce((acc, e) => {
    acc[e.id] = e;
    return acc
}, {});

const initialExpenses = {
    expenses: {
        expenses: initialExAsMap,
        sorting:
            {order: "asc", column: ""},
        sortedExpenses: Object.values(initialExAsMap),
        filter:
            [{column: "description", name: ""},
                {column: "category", name: ""}]
    },
    selected: initialExpensesData[0].id,
    app: false
}

const store = createStore(uberReducer, initialExpenses);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
