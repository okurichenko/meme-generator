import createReducer from '../../lib/createReducer';

export const generator = createReducer({
  text0: '',
  text1: '',
  template: null,
  generatedMemeUrl: null,
}, {
  SET_SELECTED_TEMPLATE: (state, action) => {
    return {
      ...state,
      template: action.template,
    };
  },
  SET_MEME_TEXT_0: (state, action) => {
    return {
      ...state,
      text0: action.text,
    };
  },
  SET_MEME_TEXT_1: (state, action) => {
    return {
      ...state,
      text1: action.text,
    };
  },
  SET_GENERATED_MEME_URL: (state, action) => {
    return {
      ...state,
      generatedMemeUrl: action.generatedMemeUrl,
    };
  },
});
