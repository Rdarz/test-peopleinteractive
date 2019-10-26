import React, { Component } from 'react';
import Select from 'react-dropdown-select'
import Slider from "react-slick"
import Modal from 'react-awesome-modal'
import './../../App.css'
import './style.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: 0,
      userSelection: [],
      visible : false
    }
  }

  openModal() {
    this.setState({
        visible : true
    });
  }

  closeModal() {
    this.setState({
        visible : false
    });
  }

  onSelect = (opt) => {
    console.log(opt[0].value)
    const {userSelection} = this.state
    const updatedValue = userSelection
    if(!updatedValue.includes(opt[0].value)){
      updatedValue.push(opt[0].value)
      this.setState({
        slides: opt[0].value,
        userSelection: updatedValue
      })  
    }else{
      this.setState({
        slides: opt[0].value
      })  
    }
  }

  onSubmit = () => {
    console.log('userSelection', this.state.userSelection)
    this.openModal()
  }

  render() {
    const { slides, visible, userSelection } = this.state
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      cssEase: "linear"
    }
    console.log('slides====>>>', slides)
    return (
      <div className="home">
        <div className="header">
          <h2>Select Slides</h2>
          <div className='select-box'>
            <Select
              className="select"
              style={{
                height: '20px',
                'padding': '0 10px'
              }}
              options={[
                { label: '1', value: 1 },
                { label: '2', value: 2 },
                { label: '3', value: 3 },
                { label: '4', value: 4 },
                { label: '5', value: 5 },
                { label: '6', value: 6 },
                { label: '7', value: 7 },
                { label: '8', value: 8 },
                { label: '9', value: 9 },
                { label: '10', value: 10 }

              ]}
              values={[]}
              onChange={(value) => this.onSelect(value)}
            />
          </div>
        </div>
        <div className="slider-box">
          {
            slides > 0 &&
            <React.Fragment>
              <Slider {...settings}>
                {
                  Array.from(Array(slides), (e, i) => {
                    return <div className="content-slide" key={i}><h1>{'Slide' + (i+1)}</h1></div>
                  })
                }
              </Slider>
              <div className="footer">
                <button className="finish-btn" type="button" onClick={this.onSubmit} >Finish</button>
              </div>
            </React.Fragment>
          }
        </div>
        <Modal visible={visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
            <div className="modal-body">
              <h1>User selected numbers:</h1>
              {
                userSelection && userSelection.length > 0 
                ? userSelection.map((num) => <h3>{'Number - ' + num}</h3>)
                : <h3>Number - 0</h3>
              }
              <button className="finish-btn" type="button" onClick={() => this.closeModal()} >Close</button>
            </div>
        </Modal>
      </div>
    );
  }
}

export default Home
