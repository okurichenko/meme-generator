import createReducer from '../../lib/createReducer';

export const memes = createReducer({
  templates: [],
  filterLine: '',
}, {
  SET_FETCHED_MEMES: (state, action) => {
    return {
      ...state,
      templates: action.memes,
    };
  },
  SET_FILTER_LINE: (state, action) => {
    return {
      ...state,
      filterLine: action.filterLine,
    };
  },
});
