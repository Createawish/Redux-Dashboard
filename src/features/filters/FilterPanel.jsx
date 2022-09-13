import { useDispatch, useSelector} from "react-redux";
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import {removeFilter,clearFilter,selectFilters} from './filter-slice';

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
    if(currentFilters.length === 0){
      return 0;
      }
console.log(currentFilters, 'curr')
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
       <Stack>
           {currentFilters.filter &&currentFilters.filter.map((filter) =>(
               <Badge  key={filter}
                       onClear={()=>dispatch(removeFilter(filter))}
                       variant="clearable">
                   {filter}
               </Badge>
           ))}
        </Stack>

        <button
            onClick={() => dispatch(clearFilter())}
            className='link'>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};
