import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div>
            <Link to="/country"><div>Country</div></Link> 
            <Link to="/state"><div>State</div></Link> 
        </div>
    )
}

export default Home
