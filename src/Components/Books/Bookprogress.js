import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

const Bookprogress = ({ progress }) => (
  <article>
    <span className="book-progress">
      <CircularProgress className="circle" variant="determinate" value={progress} />
      <div>
        <h3>
          {progress}
          %
        </h3>
        <p>completed</p>
      </div>
    </span>

  </article>
);

Bookprogress.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Bookprogress;
