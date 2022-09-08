import {useSelector, useDispatch} from "react-redux";
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import {selectFilters} from "../store/filres/filters-selectors";
import {removeFilter, clearFilter} from "../store/filres/filtres-actions";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
    if(currentFilters.length === 0){
      return null
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
            onClick={() => dispatch(clearFilter)}
            className='link'>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};
