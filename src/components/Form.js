import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

import "./Form.css";


export const Selector = () => {

    // var carCompany = ['Mazda','Suzuki','Audi'];
    // var carType = ['4 cho','7 cho','Ban tai'];
    // var carNumber = ['So san', 'Tu dong'];
    // const [value,setValue]=useState('Chon Hang xe');
    // const [value1,setValue1]=useState('Chon Loai xe');
    // const [value2,setValue2]=useState('Chon Loai hop so');

    // const handleSelect=(e)=>{
    //     for(var i = carCompany.length; i--;) {
    //         if(e === carCompany[i]) {
    //             console.log(e);
    //             setValue(e) 
    //         }
    //     }
    //     for(var i = carType.length; i--;) {
    //         if(e === carType[i]) {
    //             console.log(e);
    //             setValue1(e) 
    //         }
    //     }
        
    //     for(var i = carNumber.length; i--;) {
    //         if(e === carNumber[i]) {
    //             console.log(e);
    //             setValue2(e) 
    //         }
    //     }
    // }

  return (
    <>
            <div id="booking" class="section">
                <div class="section-center">
                    <div class="container" >
                        <div class="row">
                            <div class="booking-form">
                                <div class="form-header">
                                    <h1>Chọn xe ngay thôi</h1>
                                </div>
                                <form>
                                    <div class="form-group">
                                        <input class="form-control" type="text" placeholder="Địa chỉ"/>
                                        <span class="form-label">Destination</span>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <select class="form-control" required>
                                                    <option value="" selected hidden>Loại xe</option>
                                                    <option>4 chỗ</option>
                                                    <option>7 chỗ</option>
                                                    <option>Bán tải</option>
                                                </select>
                                            <span class="select-arrow"></span>
                                            <span class="form-label">Rooms</span>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <select class="form-control" required>
                                                <option value="" selected hidden>Hãng xe</option>
                                                <option>Audi</option>
                                                <option>Suzuki</option>
                                                <option>Honda</option>
                                            </select>
                                            <span class="select-arrow"></span>
                                            <span class="form-label">Adults</span>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <select class="form-control" required>
                                                <option value="" selected hidden>Hộp số</option>
                                                <option>Số sàn</option>
                                                <option>Số tự động</option>
                                            </select>
                                            <span class="select-arrow"></span>
                                            <span class="form-label">Children</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input class="form-control" type="email" placeholder="Email"/>
                                            <span class="form-label">Email</span>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input class="form-control" type="tel" placeholder="Số điện thoại"/>
                                            <span class="form-label">Phone</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-btn">
                                    <button class="submit-btn">Book Ngay</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </>
  );
}

