import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Card = props =>
    <div className="card">
      <div className="card__image">
        <img className={props.imageClass} src={props.imageUrl} alt={props.imageAlt} />
      </div>
      <div className="card__content">
        <div className="card__content--title">
          {props.title}
        </div>
        <div className="card__content--text">
          {props.desc}
        </div>
        <div className="card__content--tags">
          {props.tags}
        </div>
        <a target="_blank" rel="noopener"  href={props.href} className="card__content--button">
          <p className="card__content--button-text">
            {props.buttonText}
          </p>
        </a>
      </div>
    </div>

export default Card;
