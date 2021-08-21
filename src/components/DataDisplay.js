import React from 'react';
import PropTypes from 'prop-types';

const DataDisplay = ({data}) => (
  <div>
    {data.map((item, index) => {
      const key = index + 1;
      return (
        <div key={key}>{item.name}</div>
      )
    })}
  </div>
);

DataDisplay.propTypes = {
  data: PropTypes.any.isRequired
};

export default DataDisplay;
