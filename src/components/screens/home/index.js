import React from 'react'
import Header from '../../sections/header-home'
import Navbar from '../../sections/Navbar'
import TestDetails from '../../sections/test-details'
import Banner from '../../sections/banner'
import Footer from '../../sections/footer'
import TechnologiesSummary from '../../sections/technologies-summary'
class Home extends React.Component {
    constructor( props ) {
        super( props )
        this.navigate = this.navigate.bind( this )
    }
    navigate( path, e ) {
        e.preventDefault()
        this.props.history.push( path )
    }
    render() {
        return(
            <>
                <Header/>
                <Navbar title='Welcome' navigate={ this.navigate } />
                <TestDetails navigate={ this.navigate } />
                <Banner url='https://www.imaginaformacion.com/wp-content/uploads/2017/01/banner-react-f.png'/>
                <TechnologiesSummary />
                <Footer />
            </>
        )
    }
}
export default Home