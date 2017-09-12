import Api from '../../lib/api';

export function setSelectedTemplate(template) {
  return {
    type: 'SET_SELECTED_TEMPLATE',
    template,
  }
}

export function setText0(text) {
  return {
    type: 'SET_MEME_TEXT_0',
    text,
  }
}

export function setText1(text) {
  return {
    type: 'SET_MEME_TEXT_1',
    text,
  }
}

export function generateMeme() {
  return (dispatch, getState) => {
    const state = getState().generator;
    return Api.post('/caption_image', {
      template_id: state.template.id,
      text0: state.text0.toUpperCase(),
      text1: state.text1.toUpperCase(),
      username: 'aleksei.kurichenko',
      password: 'uuOXJ11',
    }).then((response) => {
      dispatch(setGeneratedMemeUrl(response.data.url));
      return Promise.resolve();
    })
  }
}

export function setGeneratedMemeUrl(generatedMemeUrl) {
  return {
    type: 'SET_GENERATED_MEME_URL',
    generatedMemeUrl,
  }
}
