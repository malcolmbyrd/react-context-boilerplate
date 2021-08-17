import React from 'react';
import PropTypes from 'prop-types';

const DataDisplay = ({ data }) => (
  <div>{data}</div>
);

DataDisplay.propTypes = {
  data: PropTypes.any.isRequired
};

export default DataDisplay;
