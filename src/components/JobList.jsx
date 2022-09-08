import {useSelector,useDispatch} from "react-redux";
import { JobPosition } from './JobPosition';
import {selectAllPositions} from "../store/position/position-selector";
import {addFilter} from "../store/filres/filtres-actions";

const JobList = () => {
  const positions = useSelector(selectAllPositions);
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