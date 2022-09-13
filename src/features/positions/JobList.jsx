import {useDispatch} from "react-redux";
import { JobPosition } from './JobPosition';
import {addFilter} from "../../store/filres/filtres-actions";
import {usePosition} from "./usePosition";
import {useFetchPositions} from "./useFetchPositions";

const JobList = () => {
  const {positions} = usePosition();
  useFetchPositions();

  const dispatch = useDispatch();
  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition
            handleAddFilter = {handleAddFilter}
            key={item.id}
            {...item} />
      ))}
    </div>
  )
}

export {JobList};
