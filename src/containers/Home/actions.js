import Api from '../../lib/api';

export function addRecipe() {
  return {
    type: 'ADD_RECIPE',
  }
}

export function fetchMemes() {
  return (dispatch, getState) => {
    return Api.get('/get_memes').then(resp => {
      dispatch(setFetchedMemes(resp.data.memes));
    }).catch(ex => console.log(ex))
  }
}

export function setFetchedMemes(memes) {
  return {
    type: 'SET_FETCHED_MEMES',
    memes,
  }
}
