import React from 'react'

const styling={
    text:{
        textAlign: 'center',
        margin: 'auto',

    }
}


function NoMatch(){
    return(
        <div style={styling.text}>
            <h1><strong>Oops.....</strong></h1>
            <h2><strong>404</strong></h2>
            <h3> Page not found</h3>
            <h5>We apologies about the inconvenience. The page you are looking for doesn't seem to exist.</h5>
            <h5> Please check for errors, or click below for the homepage.</h5>
            <a href='/'>Back to home &rarr; </a>

        </div>
    )
}

export default NoMatch