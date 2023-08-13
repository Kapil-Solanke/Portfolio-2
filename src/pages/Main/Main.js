import React from 'react'
import { Helmet } from 'react-helmet'
import { Navbar, Landing, About, Skills,  Education,Experience, Contacts, Projects, Achievement ,Services} from '../../components'
import { headerData } from '../../data/headerData'
import Footer from '../../components/Footer/Footer'
function Main() {
    return (
        <div className='container'>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>
            <Landing />
            <Navbar />        
            <About />
            <Skills />
            <Education />            
            <Projects />
            <Experience />
            <Achievement />
            <Services />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
