export const type = 'findSurvey'
const findSurvey = survey => ( {
    type,
    payload: survey
} )
export default findSurvey