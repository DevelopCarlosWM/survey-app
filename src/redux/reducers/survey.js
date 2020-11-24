import { type } from '../actions/findSurvey'
const initial_state = {}
const reducer = ( state = initial_state, action  ) => {
    switch ( action.type ) {
        case type: {
            const survey = action.payload
            return survey
        }
        default:
            return state
    }
}
export default reducer