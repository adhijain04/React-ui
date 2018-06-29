import React from 'react';
import {Images} from '../Images/Images';
import './ReadArticles.css';

const ReadArticles = () => {
    return (
        <React.Fragment>
            
            {/* Heading */}
            <div className="col-lg-4 col-md-4 ">
                <hr className="d-none d-md-block d-lg-block" />
                </div>
                <div className="col-lg-4 col-md-4 ">
                <h3 className="text-center">Related Articles</h3>
                </div>
                <div className="col-lg-4 col-md-4 ">
                <hr class="d-none d-md-block d-lg-block" />
            </div>

            {/* content */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card  mt-5">
                            <img className="card-img-top" src={Images[3].img1} alt="Card image cap" />
                                <div id="article" className="card-body">
                                    <h2 className="card-title">Nulla eget feugiat erat, in fringilla</h2>
                                    <p className="card-text">Vivamus quis gravida sapien. Aliquam erat volutpat. Sed lacinia purus quis arcu hendrerit scelerisque.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card  mt-5">
                            <img className="card-img-top" src={Images[4].img2} alt="Card image cap" />
                                <div id="article" className="card-body">
                                    <h2 className="card-title">Vivamus mollis mollis massa</h2>
                                    <p className="card-text">Vivamus quis gravida sapien. Aliquam erat volutpat. Sed lacinia purus quis arcu hendrerit scelerisque.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card  mt-5">
                            <img className="card-img-top" src={Images[5].img3} alt="Card image cap" />
                                <div id="article" className="card-body">
                                    <h2 className="card-title">Curabitur pulvinar non lacus nec</h2>
                                    <p className="card-text">Vivamus quis gravida sapien. Aliquam erat volutpat. Sed lacinia purus quis arcu hendrerit scelerisque.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card mt-5">
                            <img className="card-img-top" src={Images[6].img4} alt="Card image cap" />
                                <div id="article" className="card-body">
                                    <h2 className="card-title">Praesent sit amet mi vitae</h2>
                                    <p className="card-text">Vivamus quis gravida sapien. Aliquam erat volutpat. Sed lacinia purus quis arcu hendrerit scelerisque.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card mt-5">
                            <img className="card-img-top" src={Images[7].img5} alt="Card image cap" />
                                <div id="article" className="card-body">
                                    <h2 className="card-title">Praesent sit amet mi vitae</h2>
                                    <p className="card-text">Vivamus quis gravida sapien. Aliquam erat volutpat. Sed lacinia purus quis arcu hendrerit scelerisque.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    );
}

export default ReadArticles;