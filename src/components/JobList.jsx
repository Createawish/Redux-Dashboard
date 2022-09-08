import {useSelector,useDispatch} from "react-redux";
import { JobPosition } from './JobPosition';
import {selectVisiblePositions} from "../store/position/position-selector";
import {addFilter} from "../store/filres/filtres-actions";
import {selectFilters} from "../store/filres/filters-selectors";

const JobList = () => {
  const positions = useSelector((state => selectVisiblePositions(state, currentFilters)));
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters)
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