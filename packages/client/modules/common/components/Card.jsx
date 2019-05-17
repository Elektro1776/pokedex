import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ pokemon, idx }) => {
  return (
    <div key={idx} className="cardlist__card">
      <div className="cardlist__card__item">
        <p>
          <span>Number:</span>
          {pokemon.num}
        </p>

        <p>
          <span>Name:</span>
          {pokemon.name}
        </p>
        <p>
          <span>Type:</span>
          {pokemon.type}
        </p>

        <ul>
          <span>Weaknesses:</span>
          <div>
            {pokemon.weaknesses.map((weakness, idx) => {
              return <li key={idx}>{weakness}</li>;
            })}
          </div>
        </ul>
      </div>
    </div>
  );
};
Card.propTypes = {
  pokemon: PropTypes.object,
  idx: PropTypes.number
};
export default Card;
