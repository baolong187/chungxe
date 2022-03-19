import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

// import "./styles.css";


export const Selector = () => {

    var carCompany = ['Mazda','Suzuki','Audi'];
    var carType = ['4 cho','7 cho','Ban tai'];
    var carNumber = ['So san', 'Tu dong'];
    const [value,setValue]=useState('Chon Hang xe');
    const [value1,setValue1]=useState('Chon Loai xe');
    const [value2,setValue2]=useState('Chon Loai hop so');

    const handleSelect=(e)=>{
        for(var i = carCompany.length; i--;) {
            if(e === carCompany[i]) {
                console.log(e);
                setValue(e) 
            }
        }
        for(var i = carType.length; i--;) {
            if(e === carType[i]) {
                console.log(e);
                setValue1(e) 
            }
        }
        
        for(var i = carNumber.length; i--;) {
            if(e === carNumber[i]) {
                console.log(e);
                setValue2(e) 
            }
        }
    }

  return (
    <>
        
       
            <div className="row">
                <div className="d-flex justify-content-center">
                    <div className="col-md-1">
                        <img src="https://i.pinimg.com/originals/c0/0b/69/c00b692e9820c3970e907eae9bf2be25.png" width="50" height="50"></img>
                    </div>

                <div className="col-md-1">
                    <DropdownButton variant="secondary"  title={value} id="dropdown-menu-align-right" onSelect={handleSelect}>
                        <Dropdown.Item eventKey={carCompany[0]}>{carCompany[0]}</Dropdown.Item>
                        <Dropdown.Item eventKey={carCompany[1]}>{carCompany[1]}</Dropdown.Item>
                        <Dropdown.Item eventKey={carCompany[2]}>{carCompany[2]}</Dropdown.Item>
                    </DropdownButton>
                </div>
                
                </div>  
            </div>

     
            <div className="row">
                <div className="d-flex justify-content-center">
                    <div className="col-md-1">
                        <img src="https://i.pinimg.com/originals/c0/0b/69/c00b692e9820c3970e907eae9bf2be25.png" width="50" height="50"></img>
                    </div>
                    <div className="col-md-1">
                        <DropdownButton variant="secondary"  title={value1} id="dropdown-menu-align-right" onSelect={handleSelect}>
                            <Dropdown.Item eventKey={carType[0]}>{carType[0]}</Dropdown.Item>
                            <Dropdown.Item eventKey={carType[1]}>{carType[1]}</Dropdown.Item>
                            <Dropdown.Item eventKey={carType[2]}>{carType[2]}</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>   
            </div>

            <div className="row">
                <div className="d-flex justify-content-center">
                    <div className="col-md-1">
                        <img src="https://i.pinimg.com/originals/c0/0b/69/c00b692e9820c3970e907eae9bf2be25.png" width="50" height="50"></img>
                    </div>
                    <div className="col-md-1">
                        <DropdownButton variant="secondary"  title={value2} id="dropdown-menu-align-right" onSelect={handleSelect}>
                            <Dropdown.Item eventKey={carNumber[0]}>{carNumber[0]}</Dropdown.Item>
                            <Dropdown.Item eventKey={carNumber[1]}>{carNumber[1]}</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>   
            </div>
       
    </>
  );
}

