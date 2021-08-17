import React, { useContext } from 'react';
import { Context } from '../store';
import DataService from '../services/apiService';
import DataDisplay from './DataDisplay';

const Content = () => {
  const [state, dispatch] = useContext(Context);

  const getData = () => {
    DataService.fetchData('1').then((r) => {
      dispatch({ type: 'SET_DATA', payload: r });
      return 'Complete';
    });
    return 'Error';
  };

  return (
    <div className="main-content">
      <button type="button" onClick={() => getData()}>Get Data</button>
      {state.data.length > 0 && (
        <div>Howdy</div>
      )}
    </div>
  );
};

export default Content;
