// Import React
import React, { Component } from 'react';

// Import Components
import Card from './components/Card/card';
import Modal from './components/Modal/modal';
import Navbar from './components/Navbar/navbar';
import Section from './components/Section/section';
import Splitter from './components/Splitter/splitter';
import Steps from './components/Steps/steps';

// Import Stylesheets
import './App.css';
import './fonts/font.css';
import './components/Card/card.css';
import './components/Modal/modal.css';
import './components/Navbar/navbar.css';
import './components/Section/section.css';
import './components/Splitter/splitter.css';
import './components/Steps/steps.css';

// Define & Export Component
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: []
    };
  }

  // Fetch JSON
  componentDidMount() {
    const url = "https://raw.githubusercontent.com/Naxes/CurrencyFair-Challenge/master/details.json";

    // AJAX
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          details: data
        });
      })
  }

  // Show Modal
  showModal = () => {  
    this.setState({
      ...this.state,
      show: !this.state.show
    })
  }

  // Implement Render
  render() {
    return (      
      <div className="container">
        <Navbar />
        <div className="grid">        
          <div className="left-section">

            {/* Steps Component */}
            <div className="spacer-m"></div>            
            <div className="grid">
              <div className="col-xs"></div>
              <div className="col-m">
                <Steps />
              </div>
            </div>

            {/* Section Component */}
            <div className="spacer-s"></div>
            <div className="grid">
              <div className="col-xs"></div>
                <div className="col-m">
                  <h4>Let’s set up your transaction!</h4>
                  <p className="font-s grey">Specify the amount to be sent or received.</p>
                </div>
            </div>
            
            <div className="spacer-s"></div>
            <div className="grid">
              <div className="col-xs"></div>
              <div className="col-m">
                {this.state.details.map((details) => {                
                  return <Section details={details}/>
                })}
              </div>
            </div>

            {/* Next Button */}
            <div className="spacer-m"></div>
            <div className="grid">
              <div className="col-xs"></div>
              <div className="col-m">
                <button onClick={this.showModal.bind(this)} className="button-m primary"><span className="font-m">Next</span></button>
              </div>
            </div>

            {/* Splitter Component */}
            <div className="spacer-l"></div>
            <div className="grid">
              <div className="col-xs"></div>
              <div className="col-m">
                <Splitter />
              </div>
            </div>

            {/* Footer */}
            <div className="grid">
              <div className="col-xs"></div>
              <div className="col-m">
                <div className="grid footer">
                  <div className="col-s">
                    <p className="font-s grey">© 2016 CurrencyFair</p>
                  </div>
                  <div className="col-s">
                    <div className="grid footer align-right">
                      <div className="col-m">
                        <p className="font-s">
                          <a href="/">Help & Support</a>
                        </p>
                      </div>
                      <div className="col-s">
                        <p className="font-s">
                          <a href="/">Legal Stuff</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>                                
          </div>

          {/* Card Component */}
          <div className="right-section">
            <div className="spacer-m"></div>
            {this.state.details.map((details) => {
              return <Card details={details} />
            })}
          </div>

          {/* Modal Component */}
          {this.state.details.map((details) => {
            return <Modal details={details} show={this.state.show} onClose={this.showModal} />          
          })}
        </div>
      </div>
    );
  }
}
