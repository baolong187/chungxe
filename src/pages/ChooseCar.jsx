import React from 'react'
import {Link} from 'react-router-dom';

import { Heading } from '../components/Heading';

import { Footer } from '../components/Footer';

import {Selector} from '../components/Form';

import { Slide } from '../components/Slide';

import { CarList } from './Car';

export const ChooseCar = () => {
    return(
    <>
        <Heading />
        <Slide/>
        <br/>
        <div className="d-flex justify-content-center">
            <div className='container'>
                <div className='row'>
                    <div className="col-md-3">
                        <Selector/>
                    </div>
                     <div className="col-md-8">
                         <CarList/>
                    </div>
                </div>
              
                 

            </div>
        </div>
        <Footer />
    </>
    )
}

