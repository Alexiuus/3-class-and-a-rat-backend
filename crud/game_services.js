const crypto = require('crypto');

function id_game(username){
    const bytes = crypto.randomBytes(8);
    return username + '_' + bytes.toString('hex');
}

module.exports = {
    id_game: id_game
}