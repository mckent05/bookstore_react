import React from 'react';
import PropTypes from 'prop-types';

const Bookcontrols = ({ removeItem }) => (
  <section className="control">
    <div className="btn-cont d-flex  a-center">
      <button type="button" className="control-btn d-flex a-center">comment</button>
      <button type="button" className="control-btn d-flex a-center" onClick={removeItem}>remove</button>
      <button type="button" className="control-btn d-flex a-center">edit</button>
    </div>
  </section>
);

Bookcontrols.propTypes = {
  removeItem: PropTypes.func.isRequired,
};

export default Bookcontrols;
