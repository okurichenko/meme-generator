import createReducer from '../../lib/createReducer';

export const recipes = createReducer({
  recipesCount: 0,
}, {
  ADD_RECIPE: (state) => {
    return {
      ...state,
      recipesCount: state.recipesCount + 1
    };
  }
});

export const memeTemplates = createReducer({}, {
  SET_FETCHED_MEMES: (state, action) => {
    return action.memes;
  }
});
