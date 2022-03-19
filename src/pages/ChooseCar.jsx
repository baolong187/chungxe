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
                <Selector/>
                <hr/>
                  <div className = "container">
                        <div className="row featurette">
                            <div className="col-md-7">
                                <h2 className="featurette-heading"  style={{fontFamily:'Courier New'}}>Đặt xe</h2>
                                <p className="lead" style={{fontFamily:'Courier New'}}>Nhanh chóng đặt một chiếc xe ưng ý thông qua Website hoặc Ứng dụng (App) của chúng tôi</p>
                            </div>
                            <div className="col-md-5">
                                <img className="featurette-image img-fluid mx-auto"  alt="500x500" style={{width:'350px', height: '250px'}} src="https://chungxe.vn/assets/images/icon/step1.webp"/>
                            </div>
                        </div>
                        <hr/>
                        <div className="row featurette">
                            <div className="col-md-7 order-md-2">
                                <h2 className="featurette-heading" style={{fontFamily:'Courier New'}}>Nhận xe</h2>
                                <p className="lead" style={{fontFamily:'Courier New'}}>Nhận xe tại nhà hoặc các đại lý trong khu vực của chúng tôi</p>
                            </div>
                            <div className="col-md-5 order-md-1">
                                <img className="featurette-image img-fluid mx-auto" alt="500x500" style={{width:'350px', height: '250px'}} src="https://chungxe.vn/assets/images/icon/step2.webp"/>
                            </div>
                        </div>
                        <hr/>
                        <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading" style={{fontFamily:'Courier New'}}>Tận hưởng</h2>
                            <p className="lead" style={{fontFamily:'Courier New'}}>Tất cả các phương tiện của chúng tôi đều đạt chuẩn an toàn</p>
                        </div>
                        <div className="col-md-5">
                            <img className="featurette-image img-fluid mx-auto"  alt="500x500" style={{width:'350px', height: '250px'}} src="https://chungxe.vn/assets/images/icon/step3.webp"/>
                        </div>
                    </div>
                    </div>
                
            </div>

            
        </div>
        <Footer />
    </>
    )
}

