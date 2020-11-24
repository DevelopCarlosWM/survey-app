import React from 'react'
import moment from 'moment'
import {
    TextField,
    InputLabel,
    FormGroup,
    FormControlLabel,
    Checkbox,
    RadioGroup,
    Radio,
    Select,
    MenuItem
} from '@material-ui/core'
import FormItem from '../../ui-components/form-item'
const FormBody = ( handleChange, survey_questions, answers, sendData ) => {
    return(
        <>
        { survey_questions.map(( question, key ) => 
            <>
                <FormItem key={ key }>
                    { question.type === 'text' ? (
                        <>
                            <InputLabel style={{ marginBottom: 10, marginTop: 10 }}> { question.question } </InputLabel>
                            <TextField 
                                placeholder='Answer the question' 
                                style={{ width: '80%' }}
                                value={answers[question.id] === undefined ? '' : answers[question.id].value }
                                onChange={ e => handleChange( question, e.target.value ) }
                            />
                        </>
                    ) : null}
                    { question.type === 'hour-init' ? (
                        <>
                            <InputLabel style={{ marginBottom: 10, marginTop: 10 }}> { question.question } </InputLabel>
                            <TextField
                                disabled
                                defaultValue={ moment().format('LTS') }
                                
                            />
                        </>
                    ): null }
                    { question.type === 'checkbox' ? (
                        <>
                            <InputLabel style={{ marginBottom: 10, marginTop: 10 }}> { question.question } </InputLabel>
                            <FormGroup row>
                                { question.options.map(( option, key ) => 
                                    <FormControlLabel
                                        key={ key }
                                        control={<Checkbox  name={ option } />}
                                        onChange={ e => handleChange( question, e.target.checked, e.target.name )}
                                        label={ option }
                                    />
                                ) }
                            </FormGroup>
                        </>
                    ): null }
                    { question.type === 'radio' ? (
                        <>
                            <InputLabel style={{ marginBottom: 10, marginTop: 10 }}> { question.question } </InputLabel>
                            <RadioGroup aria-label="gender" name="gender1" onChange={ e => handleChange( question, e.target.value ) } >
                                { question.options.map(( option, key ) => 
                                    <FormControlLabel key={ key } value={ option } control={<Radio />} label={ option } />
                                ) }
                            </RadioGroup>
                        </>
                    ): null }
                    { question.type === 'select' ? (
                        <>
                            <InputLabel style={{ marginBottom: 10, marginTop: 10 }}> { question.question } </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onChange={ e => handleChange( question, e.target.value ) }
                            >
                                { question.options.map(( option, key ) => 
                                    <MenuItem value={ option } key={ key } >{ option }</MenuItem>
                                ) }
                            </Select>
                        </>
                    ): null }
                </FormItem>
            </>
        ) }
        <FormItem>
            <div style={{ display:'flex', alignItems: 'center', justifyContent: 'center' }}>
                <a className='neon-button'> Enviar </a>
            </div>
        </FormItem>
    </>
    )
}

export default FormBody