const xkcd = require('xkcd-api');
const process = require('process');

xkcd.random(function(error, response) {
    if (error) {
        console.error('Error', error);
        process.exit(1);
    } else {
        console.log(`## ${response.title}`)
        console.log(`[![${response.alt}](${response.img})](https://xkcd.com/${response.num}/)`)
        console.log('');
        console.log('Your daily random xkcd')
    }
});
