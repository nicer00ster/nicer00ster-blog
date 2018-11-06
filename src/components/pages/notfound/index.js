import React from 'react'
import TextLoop from 'react-text-loop';

const fourOhFour = ['Something went wrong!', 'Are you sure the URL is correct?', 'Try again soon.', 'Sorry for the inconvenience!'];

const NotFound = () =>
  <div className="fourohfour__wrapper">
    <div>
      <div className='rabbit'></div>
      <div className='clouds'></div>
      <div className='error__text'>
        404
        <TextLoop children={fourOhFour} springConfig={{ stiffness: 180, damping: 8 }} />
      </div>
    </div>
  </div>

export default NotFound;
