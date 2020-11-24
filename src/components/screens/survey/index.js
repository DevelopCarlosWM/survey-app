import React from 'react'
import { connect } from 'react-redux'
import Header from '../../sections/header-home'
import Navbar from '../../sections/Navbar'
import survey from '../../../survey'
import findSurvey from '../../../redux/actions/findSurvey'
import moment from 'moment'
import swal from 'sweetalert'
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
import Form from '../../sections/form'
import FormItem from '../../ui-components/form-item'
import Footer from '../../sections/footer'
class Survey extends React.Component {
    constructor( props ) {
        super( props )
        this.state = {
            answers: {}
        }
        this.navigate = this.navigate.bind( this )
        this.handleChange = this.handleChange.bind( this )
        this.sendData = this.sendData.bind( this )

    }
    componentDidMount() {
        document.title = 'Survey'
        this.props.findSurvey( survey )
    }    
    sendData( e ) {
        e.preventDefault()
        const send = this.validateData()
        if ( !send ) {
            swal({
                title: "Good job!",
                text: "Data was sent",
                icon: "success",
            }).then(() => {
                this.setState({ answers: {} })
                this.props.history.replace('/home')
            })
        } else {
            swal({
                title: "Ooops",
                text: "All data is required",
                icon: "info",
            });
        }
    }
    navigate( path, e ) {
        e.preventDefault()
        this.props.history.push( path )
    }
    handleChange( item, value, name ) {
        let answers = {}
        answers[item.id] = [] 
        if( name ) {
            let checked = {}
            if( this.state.answers[item.id] !== undefined ) {
                if( Object.keys(this.state.answers[item.id][0].checked).length > 0 ) {
                    checked = { ...this.state.answers[item.id][0].checked, [name]: value  }
                }
            }
            checked[name] = value
            const question_answer = { question: item.question, checked }
            answers[item.id].push( question_answer )
            this.setState({ answers: { ...this.state.answers, ...answers} })
        }else {
            const question_answer = { question: item.question, value }
            answers[item.id].push( question_answer )
            this.setState({ answers: { ...this.state.answers, ...answers} })
        }
    }
    validateData() {
        let error
        for ( let i = 0; i < this.props.survey.survey_questions.length; i ++ ) {
            if( this.state.answers[i] !== undefined ) {
                if( this.state.answers[i].value !== '' ||  this.state.answers[i].checked !== undefined ){
                    error = false
                } else {
                    error = true
                }
            } else {
                error = true
            }
        }
        return error
    }
    render() {
        return(
            <>
                <Header />
                <Navbar title={ this.props.survey.survey_name } navigate={ this.navigate } />
                <Form>
                    { this.props.survey.survey_questions !== undefined ? (
                        <>
                            { this.props.survey.survey_questions.map(( question, key ) => 
                                <div key={ key }>
                                    <FormItem>
                                        { question.type === 'text' ? (
                                            <>
                                                <InputLabel style={{ marginBottom: 10, marginTop: 10 }}> { question.question } </InputLabel>
                                                <TextField 
                                                    placeholder='Answer the question' 
                                                    style={{ width: '80%' }}
                                                    value={this.state.answers[question.id] === undefined ? '' : this.state.answers[question.id].value }
                                                    onChange={ e => this.handleChange( question, e.target.value ) }
                                                />
                                            </>
                                        ) : null}
                                        { question.type === 'hour-init' ? (
                                            <>
                                                <InputLabel style={{ marginBottom: 10, marginTop: 10 }}> { question.question } </InputLabel>
                                                <TextField
                                                    defaultValue={ moment().format('LTS') }
                                                    value={ moment().format('LTS') }
                                                    onChange={() => this.handleChange( question, moment().format('LTS') ) }
                                                    onFocus={() => this.handleChange( question, moment().format('LTS') ) }
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
                                                            onChange={ e => this.handleChange( question, e.target.checked, e.target.name )}
                                                            label={ option }
                                                        />
                                                    ) }
                                                </FormGroup>
                                            </>
                                        ): null }
                                        { question.type === 'radio' ? (
                                            <>
                                                <InputLabel style={{ marginBottom: 10, marginTop: 10 }}> { question.question } </InputLabel>
                                                <RadioGroup onChange={ e => this.handleChange( question, e.target.value ) } >
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
                                                    onChange={ e => this.handleChange( question, e.target.value ) }
                                                >
                                                    { question.options.map(( option, key ) => 
                                                        <MenuItem value={ option } key={ key } >{ option }</MenuItem>
                                                    ) }
                                                </Select>
                                            </>
                                        ): null }
                                    </FormItem>
                                </div>
                            ) }
                            <FormItem>
                                <div style={{ display:'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <a href='#' className='neon-button' onClick={ e => this.sendData( e )}> Enviar </a>
                                </div>
                            </FormItem>
                        </>
                    ): null }
                </Form>
                <Footer/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return({
        survey: state.survey
    })
}

const mapDispatchToProps = {
    findSurvey
}

export default connect( mapStateToProps, mapDispatchToProps ) ( Survey )