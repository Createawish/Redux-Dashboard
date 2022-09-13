export const selectAllPositions = (state) => state.positions;

export const selectVisiblePositions = (state, filters = []) => {
    if(filters.length === 0) return state.positions;

    return state.positions.filter(pos => {
        const posFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);

<<<<<<< HEAD

=======
>>>>>>> d6fc856000b563e727f98c8c7a2a8efc620a2d88
        return filters.every(filter => posFilters.includes(filter))
    })

}

