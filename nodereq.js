var request = require("request");

var formData = {
    template_id : "61579",
    username : "aleksei.kurichenko",
    password : "uuOXJ11",
    text0 : "i look displeased...",
    text1 : "but i have no idea what's going on"
};

request.post("https://api.imgflip.com/caption_image", {
    form : formData
}, function(error, response, body) {

    console.log(response);

    var meme = JSON.parse(body);

    if (!error && response.statusCode == 200) {
        console.log(meme);
    }

});

