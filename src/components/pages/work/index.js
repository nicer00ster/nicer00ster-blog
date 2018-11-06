import React from 'react';
import NProgress from 'nprogress';
import { Link } from 'react-router-dom';
import svg from '../../../svg.js';

import Divider from '../../divider';
import Footer from '../../footer';
import Card from '../../card';
import Wrapper from '../../wrapper';

class Work extends React.Component {
  componentWillMount() {
    NProgress.start();
  }
  componentDidMount() {
    NProgress.done();
  }
  render() {
    return (
      <>
      <Wrapper
        page="work"
        heading="Work"
        subHeading="Projects and Contributions"
        content="Recognized for developing robust back-end structures and producing accessible, responsive designs."
        subContent={"Giving \"user-friendly\" a new name."}
        url={<Link to="/contact"><a className="wrapper__work--content_url">Let's talk.</a></Link>} />
      <Divider />
      <div className="work__wrapper">
        <div className="work__wrapper--cards">
         {/* <LazyLoad height={200}> */}
         <Card
           imageUrl="http://ddnvci6v3n3lw.cloudfront.net/alex/card-i2m.png"
           imageAlt="Application to assist I2M clients."
           href="https://github.com/nicer00ster/i2m-mobile-app"
           title="I2M Mobile App"
           desc="Mobile application built for the company I currently work for."
           tags={[svg.Javascript, svg.React, svg.Firebase, svg.Aws]}
           buttonText="REPO 👀"
         />
         <Card
           imageUrl="http://ddnvci6v3n3lw.cloudfront.net/alex/card-coconutcash.png"
           imageAlt="Application to help manage finances."
           href="https://github.com/nicer00ster/icon-project-nicer00ster"
           title="Coconut Cash"
           desc="Internship project done for a company in Switzerland."
           tags={[svg.Javascript, svg.React, svg.Firebase]}
           buttonText="REPO 👀"
         />
         <Card
           imageUrl="http://ddnvci6v3n3lw.cloudfront.net/alex/card-reactrecipes.png"
           imageAlt="My beginners course on React"
           href="https://www.youtube.com/channel/UC7jI5rJsn7TmlCpb-RPwdvg?view_as=subscriber"
           title="React Recipes!"
           desc="My beginners course on React, using the Edamam API."
           tags={[svg.Javascript, svg.React, svg.Firebase  ]}
           buttonText="YouTube 👀"
         />
         <Card
           imageUrl="http://ddnvci6v3n3lw.cloudfront.net/alex/card-oldblog.png"
           imageAlt="Flowers"
           imageClass="work__wrapper--cards-oldblog"
           href="https://alexanderbusch.com"
           title="My Old Blog"
           desc="Blog I built when I first began programming. Compare and contrast to what you're seeing now!"
           tags={[svg.Javascript, svg.Python, svg.Django, svg.Bootstrap]}
           buttonText="LINK 👀"
         />
       {/* </LazyLoad> */}
        </div>
      </div>
      <Divider />
      <Footer />
      </>
    )
  }
}

export default Work;
