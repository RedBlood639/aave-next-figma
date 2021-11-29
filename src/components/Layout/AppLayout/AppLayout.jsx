import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const AppLayout = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default AppLayout
