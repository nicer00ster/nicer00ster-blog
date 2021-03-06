import React from 'react';
import { connect } from 'react-redux';
import Typing from 'react-typing-animation';
import Cursor from './Cursor';
import Progress from './Progress';
import { toggleTerminal } from '../../actions';

class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstSegment: false,
      secondSegment: false,
      thirdSegment: false,
      fourthSegment: false,
      fifthSegment: false,
      sixthSegment: false
    }
  }
  nextText(segment) {
    this.setState({ [segment]: true });
  }
  render() {
    const {
      firstSegment,
      secondSegment,
      thirdSegment,
      fourthSegment,
      fifthSegment,
      sixthSegment } = this.state;
    return (
      <div className="hypertext">
        <Typing onFinishedTyping={() => this.nextText('firstSegment')} startDelay={1000} cursor={<Cursor />} className="hypertext__line" speed={45} >
          <Typing.Delay ms={2000} />
          <ul>
            <li>
              <span className="hypertext__span">
                <span className="hypertext__line">$ >></span>{' '}
                <span className="hypertext__line">npm install -g nicer00ster</span>
              </span>
            </li>
          </ul>
            <Typing.Delay ms={500} />
          </Typing>
          {firstSegment && (
            <Typing onFinishedTyping={() => this.nextText('secondSegment')} cursor={<Cursor />} className="hypertext__line" speed={20} >
            <Typing.Delay ms={500} />
            <ul>
              <li>
                <span className="hypertext__span">
                  <span className="hypertext__line"> $ >></span>{' '}
                  JavaScript: [&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9633;&#9633;] <Progress num={85}/>
                </span>
              </li>
            </ul>
            <Typing.Delay ms={500} />
          </Typing>
          )}
          {secondSegment && (
            <Typing onFinishedTyping={() => this.nextText('thirdSegment')} cursor={<Cursor />} className="hypertext__line" speed={20} >
            <Typing.Delay ms={500} />
            <ul>
              <li>
                <span className="hypertext__span">
                  <span className="hypertext__line"> $ >></span>{' '}
                  React: [&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9633;&#9633;&#9633;] <Progress num={80}/>
                </span>
              </li>
            </ul>
            <Typing.Delay ms={500} />
          </Typing>
          )}
          {thirdSegment && (
            <Typing onFinishedTyping={() => this.nextText('fourthSegment')} cursor={<Cursor />} className="hypertext__line" speed={20} >
            <Typing.Delay ms={500} />
            <ul>
              <li>
                <span className="hypertext__span">
                  <span className="hypertext__line"> $ >></span>{' '}
                  NodeJS: [&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9633;&#9633;&#9633;&#9633;] <Progress num={70}/>
                </span>
              </li>
            </ul>
            <Typing.Delay ms={500} />
          </Typing>
          )}
          {fourthSegment && (
            <Typing onFinishedTyping={() => this.nextText('fifthSegment')} cursor={<Cursor />} className="hypertext__line" speed={20} >
            <Typing.Delay ms={500} />
            <ul>
              <li>
                <span className="hypertext__span">
                  <span className="hypertext__line"> $ >></span>{' '}
                  Sketch: [&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9633;&#9633;&#9633;&#9633;] <Progress num={65}/>
                </span>
              </li>
            </ul>
            <Typing.Delay loop cursor={<Cursor />} ms={500} />
          </Typing>
          )}
          {fifthSegment && (
            <Typing onFinishedTyping={() => this.nextText('sixthSegment')} cursor={<Cursor />} className="hypertext__line" speed={20} >
            <Typing.Delay ms={500} />
            <ul>
              <li>
                <span className="hypertext__span">
                  <span className="hypertext__line"> $ >></span>{' '}
                  Python/Django: [&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9633;&#9633;&#9633;&#9633;] <Progress num={70}/>
                </span>
              </li>
            </ul>
            <Typing.Delay ms={500} />
          </Typing>
          )}
          {sixthSegment && (
            <Typing cursor={<Cursor />} className="hypertext__line" speed={20}>
            <Typing.Delay ms={500} />
            <ul>
              <li>
                <span className="hypertext__span">
                  <span className="hypertext__line"> $ >></span>{' '}
                  Cooking: [&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;&#9632;] <Progress num={99.9}/>
                </span>
              </li>
            </ul>
            <Typing.Delay ms={500} />
          </Typing>
          )}
      </div>
    )
  }
}

export default connect(function(state) {
  return {}, { toggleTerminal }
})(Terminal);
