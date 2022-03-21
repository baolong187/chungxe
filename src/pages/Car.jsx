
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
                                    <div className="col"><img src="https://icons.iconarchive.com/icons/icons8/android/512/Editing-Bg-Color-icon.png" style={{width : "20px", margin:"10px"}}/>Màu {item.color}</div>
                                    <div className="col"><img src="https://cdn-icons-png.flaticon.com/512/290/290081.png" style={{width : "30px", margin:"10px"}}/>Biển {item.licensePlate}</div>
                                    <div className="w-100"></div>
                                    <div className="col"><img src="https://www.seekpng.com/png/detail/787-7877997_png-file-seat-icon-png.png" style={{width : "20px", margin:"10px"}}/>{item.seatNumber} Chỗ</div>
                                    <div className="col"><img src="https://www.seekpng.com/png/detail/91-919510_sedan-svg-png-icon-free-download-sedan-car.png" style={{width : "40px", margin:"10px"}}/>Hạng {item.carCategory.name}</div>
                                     <div className="w-100"></div>
                                    <div className='col'> <img src={item.image} alt="Generic placeholder image" className="ml-lg-5 order-1 order-lg-2"/></div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-1">
                                    <h6 className="font-weight-bold my-2 item-price">600.000₫/ngày</h6>
                                </div>
                                <a className="list-btn" href={"/detail/"+item.id}>Chi tiết</a>
                            </div>
                           
                        </div> 
                    </li> 
                )}
                </ul> 
            </div>
        </div>
    </main>

       
    )
}