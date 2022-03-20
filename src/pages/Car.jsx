
import React,{useState,useEffect} from 'react';
import {Table} from 'react-bootstrap';
import '../components/Car.css';
export const CarList = () =>
{
    const [data,setData] = useState([]);
    useEffect( async () => {
        let result = await fetch("http://localhost:8080/api/v1/cars");
        result = await result.json();
        setData(result);
    },[])

    console.warn(data);
    return (
         <main>
        <div className="row">
            <div className="col-lg-11 mx-auto">
             
                <ul className="list-group shadow">
                    {
                        data.map((item) => 

                       
                    <li className="list-group-item">
                
                        <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                            <div className="media-body order-2 order-lg-1">
                                <a className="mt-0 font-weight-bold mb-2" href="#">{item.name}</a>
                                <div className="row">
                                    <div className="col"><i className="fa fa-solid fa-gear"></i>Màu {item.color}</div>
                                    <div className="col"><i className="fa fa-solid fa-gas-pump"></i>Biển {item.licensePlate}</div>
                                    <div className="w-100"></div>
                                    <div className="col"><i className="fa fa-solid fa-oil-can"></i>{item.seatNumber} Chỗ</div>
                                    <div className="col"><i className="fa fa-solid fa-wrench"></i></div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-1">
                                    <h6 className="font-weight-bold my-2 item-price">600.000₫/ngày</h6>
                                </div>
                                <a className="list-btn" href="#">Chi tiết</a>
                            </div>
                            <img src={item.image} alt="Generic placeholder image" width="200"
                                className="ml-lg-5 order-1 order-lg-2"/>
                        </div> 
                    </li> 
                )}
                </ul> 
            </div>
        </div>
    </main>

       
    )
}