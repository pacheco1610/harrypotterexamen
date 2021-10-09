import { createStore, combineReducers } from 'redux'
import charatersReducer from './reducer'

const reducers = combineReducers({
    charatersReducer
})

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store