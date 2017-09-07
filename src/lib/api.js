class Api {
  static headers() {
    return {};
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST');
  }

  static generateData(params) {
    const data = [];
    for(let name in params) {
      data.push(`${name}=${params[name]}`);
    }

    return data.join("&");
  }

  static xhr(route, params, verb) {
    const host = 'https://api.imgflip.com';
    const url = `${host}${route}`;

    let options = Object.assign({ method: verb }, params? { body: Api.generateData(params) } : null);
    options.headers = Api.headers();

    if (verb === 'POST') {
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    return fetch(url, options).then( resp => {
      let json = resp.json();
      if (resp.ok) {
        return json;
      }
      return json.then(err => {throw err});
    });
  }
}

export default Api;
