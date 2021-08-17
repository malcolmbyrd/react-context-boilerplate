// Write API calls in this file
import ServiceHelper from './serviceHelper';
import DataMock from '../mock/dataMock';

const fetchData = async (itemId) => {
  try {
    const url = `http://localhost:3000/${itemId}`;
    return await fetch(url, { method: 'GET' }).then((res) => res.json());
  } catch (e) {
    if (ServiceHelper.isLocalHost) {
      return DataMock.getMockData;
    }

    return `Error: ${e}`;
  }
};

const DataService = { fetchData };

export default DataService;
