import React from 'react';
import NProgress from 'nprogress';
import { Link } from 'react-router-dom';

import Divider from '../../divider';
import Footer from '../../footer';
import Wrapper from '../../wrapper';

class Blog extends React.Component {
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
        page="blog"
        heading="Blog"
        subHeading="My thoughts"
        content="I enjoy sharing the things I've learned over the years, here's where you'll be able to find em!."
        // subContent={"Giving \"user-friendly\" a new name."}
        // url={<Link to="/contact"><a className="wrapper__work--content_url">Let's talk.</a></Link>}
      />
      <Divider />
      <div className="blog__wrapper">
        <div className="blog__wrapper--container">
          
        </div>
      </div>
      <Divider />
      <Footer />
      </>
    )
  }
}

export default Blog;
