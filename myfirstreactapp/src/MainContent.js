import React from 'react'
import './MainContent.css'

function MainContent(){

    const styles = {

        fontSize : 5,
        backgroundcolor : "#ff6347"
    }

    return (

        <main style={{height:"400px" }}>
            <nav>
            <h1 styles={styles}>Hello</h1>
                 <a href='#'>Account</a><br/>
                 <a href='#'>Customer</a><br/>
                 <a href='#'>Details</a>
            </nav>
        </main>
    )
}

export default MainContent