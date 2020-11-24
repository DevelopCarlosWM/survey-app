import { createStore, combineReducers } from 'redux'
import survey from './reducers/survey'
const reducer = combineReducers({
    survey
})
const store = createStore( reducer )

export default store