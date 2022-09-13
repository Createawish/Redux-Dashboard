import { FilterPanel } from 'features/filters/FilterPanel';
import { JobList } from 'features/positions/JobList';
import { TheHeader } from 'components/TheHeader';
import {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {addPositions} from "./store/position/position-actions";
import data from './mock/data.json'
function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addPositions(data))
    })


  return (
    <>
     <TheHeader />
     <div className='container'>
      <FilterPanel />
      {/*<JobList />*/}
     </div>
    </>
  );
}

export default App;
