import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import Partners from './components/Partners'
import JsonData from './data/data.json';
import Fade from "react-reveal/Fade";

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Fade>
        <Header data={this.state.landingPageData.Header} />
        </Fade>
        {/* <Fade>
        <Features data={this.state.landingPageData.Features} />
        </Fade> */}
        <About data={this.state.landingPageData.About} />
        <Fade>
        <Team data={this.state.landingPageData.Team} />
        </Fade>
        <Fade>
        <Services data={this.state.landingPageData.Services} />
        </Fade>
        <Fade>
        <Partners />
        </Fade>
        {/* <Fade>
        <Testimonials data={this.state.landingPageData.Testimonials} />
        </Fade> */}
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
