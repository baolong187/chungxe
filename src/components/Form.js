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
            <div id="booking" className="section">
                <div className="section">
                    <div className="container" >
                        <div className="row">
                            <div className="booking-form">
                                <div className="form-header">
                                    <h1>Chọn xe ngay thôi</h1>
                                </div>
                                <form>
                                    <div className="form-group">
                                        <input className="form-control" type="text" placeholder="Tên xe"/>
                                        <span className="form-label">Destination</span>
                                    </div>
                                    
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <select className="form-control" required>
                                                    <option value="" selected hidden>Loại xe</option>
                                                    <option>4 chỗ</option>
                                                    <option>7 chỗ</option>
                                                    <option>Bán tải</option>
                                                </select>
                                            <span className="select-arrow"></span>
                                            <span className="form-label">Rooms</span>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <select className="form-control" required>
                                                <option value="" selected hidden>Hãng xe</option>
                                                <option>Audi</option>
                                                <option>Suzuki</option>
                                                <option>Honda</option>
                                            </select>
                                            <span className="select-arrow"></span>
                                            <span className="form-label">Adults</span>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <select className="form-control" required>
                                                <option value="" selected hidden>Hộp số</option>
                                                <option>Số sàn</option>
                                                <option>Số tự động</option>
                                            </select>
                                            <span className="select-arrow"></span>
                                            <span className="form-label">Children</span>
                                        </div>
                                    </div>
                                
                                <div className="form-btn">
                                    <button className="submit-btn">Tìm xe</button>
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

