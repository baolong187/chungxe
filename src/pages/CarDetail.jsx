import React from 'react';

import '../components/CarDetail.css';

export const CarDetail = () => {
    
    return(
        <>
            <main classNameName="flex-container">
                <div className="main-content row">
                    <div className="top-content">
                        <img className="pro-img" src="./image/vinfast-fadil-mau-trang.png" alt="vinfast-fadil-mau-trang"/>
                        <div className="pro-info">
                            <h2>VINFAST FADIL</h2>
                            <div className="info-list">
                                <div className="info-list-item"><i className="fa fa-solid fa-gear"></i>Số tự động</div>
                                <div className="info-list-item"><i className="fa fa-solid fa-gas-pump"></i>Xăng</div>
                                <div className="info-list-item"><i className="fa fa-solid fa-oil-can"></i>61/100km</div>
                                <div className="info-list-item"><i className="fa fa-solid fa-wrench"></i>Sản xuất 2021</div>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-content">
                        <div className="bottom-content-item">
                            <h2>TÍNH NĂNG</h2>
                            <div className="item-list">
                                <div className="item-list-col">
                                    <p><i className="fa fa-solid fa-check"></i>Điều hòa (A/C)</p>
                                    <p><i className="fa fa-solid fa-check"></i>Khe cắm USB</p>
                                </div>
                                <div className="item-list-col">
                                    <p><i className="fa fa-solid fa-check"></i>Định vị (GPS)</p>
                                </div>
                                <div className="item-list-col">
                                    <p><i className="fa fa-solid fa-check"></i>Bluetooth</p>
                                </div>
                            </div>
                        </div>

                        <div className="bottom-content-item">
                            <h2>CHẤP NHẬN THANH TOÁN</h2>
                            <div className="item-list">
                                <div className="item-list-col">
                                    <p><i className="fa fa-regular fa-money-bill"></i>Thanh toán bằng tiền mặt</p>
                                    <p><i className="fa fa-duotone fa-credit-card"></i>Thanh toán qua chuyển khoản ngân hàng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <aside className="main-sidebar row">
                    <div className="rent-time">
                        <h2>Thời gian thuê xe</h2>
                        <p>Ngày bắt đầu</p>
                        <p>Ngày kết thúc</p>
                    </div>

                    <div className="rent-method">
                        <h2>Phương thức thanh toán</h2>
                        
                    </div>

                    <div className="rent-price">
                        <h2>Chi tiết giá</h2>
                        <p>Đơn giá</p>
                        <p>Thời gian thuê</p>
                        <p>Tổng tiền</p>
                    </div>
                    
                    <div className="button">
                        <a className="button" href="">ĐẶT NGAY</a>
                    </div>           
                </aside>
            </main>
        </>
    )
}