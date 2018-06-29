import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import HomeSection from './Components/HomeSection/HomeSection';
import {Images} from './Components/Images/Images';
import Paragraph from './Components/Paragraphs/Paragraph';
import SideColumn from './Components/SideColumn/SideColumn';
import MoreinthisSeries from './Components/MoreinthisSeries/MoreinthisSeries';
import ReadArticles from './Components/ReadArticles/ReadArticles';
import Footer from './Components/Footer/Footer';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <section id="homeSection" style={{"backgroundImage":`url(${Images[0].homesectionimg})`}} className="py-5">
            <div className="primaryOverlay text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 text-left">
                          <HomeSection />
                        </div>
                        <div className='col-lg-8 d-none d-md-block d-lg-block'>
                        </div> 
                    </div>
                </div>
            </div>
      </section>
      
      <section id="id" className=" py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <Paragraph />
              <MoreinthisSeries />
            </div>
            <div className='col-lg-3'>
              <SideColumn />
            </div>
          </div>
        </div>
      </section> 
      
      
      
      <section id="ArticleSection">
        <div className="container mt-2">
          <div className="row">
            <ReadArticles />
          </div>
        </div>
      </section>

      <section id="ArticleSection">
            <Footer />
      </section>
                        


    </div>
    );
  }
}

export default App;
