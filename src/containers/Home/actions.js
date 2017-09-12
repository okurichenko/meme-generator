import Api from '../../lib/api';

export function fetchMemes() {
  return (dispatch, getState) => {
    return Api.get('/get_memes').then(resp => {
      dispatch(setFetchedMemes(resp.data.memes));
    }).catch(ex => console.log(ex))
  }
}

export function setFilterLine(filterLine) {
  return {
    type: 'SET_FILTER_LINE',
    filterLine,
  }
}

export function setFetchedMemes(memes) {
  return {
    type: 'SET_FETCHED_MEMES',
    memes,
  }
}
