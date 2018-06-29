import React from 'react';
import {Images} from '../Images/Images';
import './MoreinthisSeries.css';


const MoreinthisSeries = () => {
    return (
        <div class="container mt-5 pt-5">
        <div class="row">

          {/* Heading */}
          <div class="col-lg-4 col-md-4 "> 
            <hr className="d-none d-md-block d-lg-block" />
          </div>
          <div class="col-lg-4 col-md-4 "> 
            <h3 className="text-center">More in this Series</h3>
          </div>
          <div class="col-lg-4 col-md-4 ">
            <hr class="d-none d-md-block d-lg-block" />
          </div>

          {/* Content */}
          <div id="items" className="pt-3">
            <div id="item1" className="d-flex">
              <div>
                <img src={Images[8].item1} alt="item1" />
              </div>
              <div className="pl-3">
                <h2>Nullam vitae ex turpis</h2>
                <p className="font-weight-normal">Vivamus feugiat placerat dolor. Sed nisl turpis, 
                  sagittis hendrerit risus non, congue venenatis orci, 
                  Nullam vitae ex turpis.
                </p>
              </div>
            </div>
                                
            <div id="item2" className="d-flex mt-3">
              <div>
                <img src={Images[9].item2} alt="item2" />
              </div>
              <div className="pl-3">
                <h2>congue venenatis orci</h2>
                <p className="font-weight-normal">Vivamus feugiat placerat dolor. Sed nisl turpis, 
                  sagittis hendrerit risus non, congue venenatis orci, 
                  Nullam vitae ex turpis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}

export default MoreinthisSeries;