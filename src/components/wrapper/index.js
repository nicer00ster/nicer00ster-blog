import React from 'react';
import svg from '../../svg.js';
import TextLoop from 'react-text-loop';
import Navbar from '../navbar';

const wordArray = [
  'Passion',
  'Inspiration',
  'Purpose',
  'Desire',
  'Motive',
  'Drive'
];

const svgImages = [
  svg.Javascript,
  svg.Node,
  svg.Html,
  svg.React,
  svg.Redux,
  svg.Python,
  svg.MongoDB,
  svg.Django,
  svg.Es6,
  svg.Firebase,
  svg.Bootstrap,
  svg.Sketch,
  svg.Aws,
  svg.Webpack,
  svg.Babel,
  svg.Github,
  svg.NextJS,
  svg.Sass
];

const Wrapper = ({ heading, subHeading, content, subContent, url, page }) => {
  return (
    <>
    <Navbar />
      <div className="wrapper">
        {/* <LazyLoad height={400}> */}
        <div className={`wrapper__image--${page}`}>
          <img src={require(`../../images/photos/${page}-img.png`)} alt="nicer00ster"/>
        </div>
        <div className={`wrapper__${page}`}>
          <div className={`wrapper__${page}--header`}>
            <div className={`wrapper__${page}--header-text`}>
              <h1>{heading}</h1>
              <h5>{subHeading}</h5>
            </div>
          </div>
          <div className={`wrapper__${page}--content`}>
            <h2>{content}<br/>{subContent}<br/>{url}</h2>
          </div>
        </div>
        <div className={`wrapper__${page}--skill`}>
          <div className={`wrapper__${page}--skill-heading`}>
            <h2>This is my</h2>
            <TextLoop children={wordArray} springConfig={{ stiffness: 180, damping: 8 }} />
          </div>
          <ul>
            {svgImages.map((image, key) =>
              <li key={key} className={`wrapper__${page}--skill-item`}>
                {image}
              </li>
            )}
          </ul>
          </div>
        {/* </LazyLoad> */}
      </div>
    </>
  )
}

export default Wrapper;
