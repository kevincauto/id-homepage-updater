import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

class App extends Component {
  constructor() {
    super()
    this.state = {
      showPopup: true,
      startDate: '2018-03-01',
      endDate: '2018-03-31',
      userName: '',
      password: '',
      channels:
        [{
          header: 'Featured Stories',
          headerLink: 'http://www.aegisdentalnetwork.com/id/feature-stories/',
          title1: '',
          subhead1: '',
          link1: '',
          img: '',
          title2: '',
          link2: '',
          title3: '',
          link3: ''
        },
        {
          header: 'Business Management',
          headerLink: 'http://www.aegisdentalnetwork.com/id/practice-management/',
          title1: '',
          subhead1: '',
          link1: '',
          img: '',
          title2: '',
          link2: '',
          title3: '',
          link3: ''
        },
        {
          header: 'Continuing Education',
          headerLink: 'http://www.aegisdentalnetwork.com/id/ce-articles/',
          title1: '',
          subhead1: '',
          link1: '',
          img: '',
          title2: '',
          link2: '',
          title3: '',
          link3: ''
        },
        {
          header: 'Opinion Pieces',
          headerLink: '',
          title1: '',
          subhead1: '',
          link1: '',
          img: '',
          title2: '',
          link2: '',
          title3: '',
          link3: ''
        },
        {
          header: 'Videos',
          headerLink: 'https://www.aegisdentalnetwork.com/id/videos',
          title1: '',
          subhead1: '',
          link1: '',
          img: '',
          title2: '',
          link2: '',
          title3: '',
          link3: ''
        },
        {
          header: 'Case Studies',
          headerLink: 'https://www.aegisdentalnetwork.com/id/case-studies',
          title1: '',
          subhead1: '',
          link1: '',
          img: '',
          title2: '',
          link2: '',
          title3: '',
          link3: ''
        },
        {
          header: 'Products & Innovations',
          headerLink: 'https://www.aegisdentalnetwork.com/id/products',
          title1: '',
          subhead1: '',
          link1: '',
          img: '',
          title2: '',
          link2: '',
          title3: '',
          link3: ''
        },
        {
          header: 'Diagnosis & Treatment Planning',
          headerLink: 'https://www.aegisdentalnetwork.com/id/diagnosis-and-treatment-planning',
          title1: '',
          subhead1: '',
          link1: '',
          img: '',
          title2: '',
          link2: '',
          title3: '',
          link3: ''
        },
        {
          header: 'Digital Dentistry',
          headerLink: 'https://www.aegisdentalnetwork.com/id/digital-imaging',
          title1: '',
          subhead1: '',
          link1: '',
          img: '',
          title2: '',
          link2: '',
          title3: '',
          link3: ''
        },
        {
          header: 'Materials',
          headerLink: 'https://www.aegisdentalnetwork.com/id/materials/',
          title1: '',
          subhead1: '',
          link1: '',
          img: '',
          title2: '',
          link2: '',
          title3: '',
          link3: ''
        },
        {
          header: 'Restorative',
          headerLink: 'https://www.aegisdentalnetwork.com/id/restorative-direct',
          title1: '',
          subhead1: '',
          link1: '',
          img: '',
          title2: '',
          link2: '',
          title3: '',
          link3: ''
        },
        {
          header: 'Endodontics',
          headerLink: 'https://www.aegisdentalnetwork.com/id/endodontics/',
          title1: '',
          subhead1: '',
          link1: '',
          img: '',
          title2: '',
          link2: '',
          title3: '',
          link3: ''
        },
        {
          header: 'Implantology',
          headerLink: 'https://www.aegisdentalnetwork.com/id/implants/',
          title1: '',
          subhead1: '',
          link1: '',
          img: '',
          title2: '',
          link2: '',
          title3: '',
          link3: ''
        },
        {
          header: 'Periodontics',
          headerLink: 'https://www.aegisdentalnetwork.com/id/periodontics/',
          title1: '',
          subhead1: '',
          link1: '',
          img: '',
          title2: '',
          link2: '',
          title3: '',
          link3: ''
        },
        {
          header: 'Prosthodontics',
          headerLink: 'https://www.aegisdentalnetwork.com/id/prosthodontics/',
          title1: '',
          subhead1: '',
          link1: '',
          img: '',
          title2: '',
          link2: '',
          title3: '',
          link3: ''
        },
        {
          header: 'Pediatric Dentistry',
          headerLink: 'https://www.aegisdentalnetwork.com/id/pediatric-dentistry/',
          title1: '',
          subhead1: '',
          link1: '',
          img: '',
          title2: '',
          link2: '',
          title3: '',
          link3: ''
        },
        {
          header: 'Pain Management',
          headerLink: 'https://www.aegisdentalnetwork.com/id/pain-management/',
          title1: '',
          subhead1: '',
          link1: '',
          img: '',
          title2: '',
          link2: '',
          title3: '',
          link3: ''
        },
        {
          header: 'Hot Topics',
          headerLink: '',
          title1: '',
          subhead1: '',
          link1: '',
          img: '',
          title2: '',
          link2: '',
          title3: '',
          link3: ''
        }]
    };
    this.togglePopup = this.togglePopup.bind(this);
  }


  componentDidUpdate() {
    console.log(this.state)
  }

  callApi = async () => {
    axios.post('/api/data-entry', this.state)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  handleChannelFieldChange(e, channelIndex) {
    let stateClone = _.cloneDeep(this.state)
    console.log(stateClone)
    stateClone.channels[channelIndex][e.target.name] = e.target.value;
    this.setState(stateClone);
  }
  togglePopup() {
    console.log("This is firing");
    this.setState({ showPopup: !this.state.showPopup })
  }
  handleUserName(e) {
    this.setState({ userName: e.target.value })
  }
  handlePassword(e) {
    this.setState({ password: e.target.value })
  }
  renderPopup() {
    return (
      <div className="popup" >
        <div className='popup_inner'>
          <p className="float-right" onClick={() => this.togglePopup()}>[x]</p>
          <img src="https://www.aegisdentalnetwork.com/img/layout/general/da-logo-large.png" width="200" />
          <p className="popup-para">
            Note: This process will take several minutes to complete.</p>
          <div className="form-group">
            <input className="form-control" placeholder="Username" value={this.state.userName} onChange={(e) => this.handleUserName(e)} />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={(e) => this.handlePassword(e)} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.callApi}>Submit</button>
        </div>
      </div>
    )
  }
  renderForm() {
    const form = [];
    for (let i = 0; i < 18; i++) {
      form.push(
        <div className="form-group channel-section" key={i}>
          <h3>Channel {i + 1}</h3>
          <input className="form-control" placeholder="Section Header" name="header" value={this.state.channels[i].header} onChange={(e) => this.handleChannelFieldChange(e, i)} />
          <input className="form-control" placeholder="Section Link" name="headerLink" value={this.state.channels[i].headerLink} onChange={(e) => this.handleChannelFieldChange(e, i)} />
          <input className="form-control" placeholder="Featured Article Title" name="title1" value={this.state.channels[i].title1} onChange={(e) => this.handleChannelFieldChange(e, i)} />
          <input className="form-control" placeholder="Author/Sub-Header" name="subhead1" value={this.state.channels[i].subhead1} onChange={(e) => this.handleChannelFieldChange(e, i)} />
          <input className="form-control" placeholder="Featured Article Link" name="link1" value={this.state.channels[i].link1} onChange={(e) => this.handleChannelFieldChange(e, i)} />
          <input className="form-control" placeholder="Image Source Link" name="img" value={this.state.channels[i].img} onChange={(e) => this.handleChannelFieldChange(e, i)} />
          <input className="form-control" placeholder="Second Article Title" name="title2" value={this.state.channels[i].title2} onChange={(e) => this.handleChannelFieldChange(e, i)} />
          <input className="form-control" placeholder="Second Article Link" name="link2" value={this.state.channels[i].link2} onChange={(e) => this.handleChannelFieldChange(e, i)} />
          <input className="form-control" placeholder="Third Article Title" name="title3" value={this.state.channels[i].title3} onChange={(e) => this.handleChannelFieldChange(e, i)} />
          <input className="form-control" placeholder="Third Article Link" name="link3" value={this.state.channels[i].link3} onChange={(e) => this.handleChannelFieldChange(e, i)} />
        </div>
      )

    }
    return form;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://www.aegisdentalnetwork.com/img/layout/general/id-logo-large.png" width="200" />
          <h1 className="App-title">Homepage Updater</h1>
        </header>
        <div className="form-group channel-section">
          <label>Start and End Dates (yyyy-mm-dd)</label>
          <input className="form-control" placeholder="Starting Date yyyy-mm-dd" value={this.state.startDate} onChange={(e) => this.handleStartDate(e)} />
          <input className="form-control" placeholder="End Date yyyy-mm-dd" value={this.state.endDate} onChange={(e) => this.handleEndDate(e)} />
        </div>
        {this.state.showPopup ? this.renderPopup() : null}
        {this.renderForm()}
        <button type="button" className="btn btn-danger" onClick={this.togglePopup}>Submit</button>
        {/* <button type="button" className="btn btn-primary float-right" >Download For Records</button> */}
      </div>
    );
  }
}

export default App;
