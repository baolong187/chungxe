import React from 'react'
import {Link} from 'react-router-dom';

import { Heading } from '../components/Heading';

import { Footer } from '../components/Footer';

import {Selector} from '../components/Form';

import { Slide } from '../components/Slide';

export const ChooseCar = () => {
    return(
    <>
        <Heading />
        <Slide/>
        <br/>
        <div className="d-flex justify-content-center">
            <div className='container' style={{backgroundColor:'rgba(0, 0, 0, 0.05)'}}>

                <div className="d-flex justify-content-center">
                 <h1><strong>Chon xe</strong></h1>
                </div>

                <br/>
                <div className='container-fluid' style={{backgroundColor:'rgba(0, 0, 0, 0.05)'}}>
                    <Selector/>
                </div>
            </div>
        </div>
        <Footer />
    </>
    )
}

