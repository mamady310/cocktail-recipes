import React from 'react';
import { Link } from 'react-router-dom';
import booze from '../pages/booze.jpg';


export const Error = () => {
    return (
       <section className='error-page section'>
        <div className='error-container'>
            <h1>Drinks Not Found</h1>
            <img className='booze'src={booze} alt="no booze"/>
            <h1>Go</h1>
            <Link to='/' className='btn btn-primary'>
                HOME
            </Link>

        </div>
       </section>
    )
}

export default Error;