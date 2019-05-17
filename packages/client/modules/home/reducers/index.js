const defaultState = {
  pokemon: [],
  filters: ['type', 'weakness'],
  activeFilters: []
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'POKEMON_RECIEVED': {
      const updated = Object.assign({}, state, { pokemon: action.pokemon});
      return updated;
    };
    case 'FILTERS_SELECTED': {
      console.log('Action:::', state);
      if (state.activeFilters.length == 0) {
        return Object.assign({}, state, { activeFilters: [...state.activeFilters, action.filters] });
      }
      console.log('WHY::');
      const updateFilters = state.activeFilters.filter(filter => {
        console.log('HELLO ', filter, action.filters);
        if (filter === action.filters) {
          return
        }
      });
      console.log('UPDATED FILTERS;:::', updateFilters);
    };
    case 'RESET_FILTERS': {

      return Object.assign({}, state, { activeFilters: [...state.activeFilters] })
    }
    default:
      return state;
  }
}
