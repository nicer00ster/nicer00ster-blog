import React from 'react';
import NProgress from 'nprogress';

import Wrapper from '../../wrapper';
import Form from '../../form';
import Footer from '../../footer';
import Divider from '../../divider';

class Contact extends React.Component {
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
        page="connect"
        heading="Questions?"
        subHeading="You've came to the right place."
        content="Want to get in touch? Fill out the form below to drop me a line!" />
      <Divider />
      <div className="connect__wrapper">
        <div className="connect__wrapper--form">
          <div className="connect__wrapper--form-header">
            <h2 className="connect__wrapper--form-header_text">Get In Touch!</h2>
          </div>
          <Form />
        </div>
        {/* <div className="connect__wrapper--self"> */}
          {/* <LazyLoad height={200}>
            <img src="../static/images/photos/portland_beach.jpg" alt="nicer00ster"/>
          </LazyLoad> */}
        {/* </div> */}
      </div>
      <Divider />
      <Footer />
      </>
    )
  }
}

export default Contact;
