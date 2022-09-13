
import { useSelector} from "react-redux";


import {addPositions, selectVisiblePositions} from "./position-slice";

import {selectFilters} from "../filters/filter-slice";


export const usePosition = () => {
    const currentFilters = useSelector(selectFilters)
    const positions = useSelector((state => selectVisiblePositions(state, currentFilters)));

return positions;
}