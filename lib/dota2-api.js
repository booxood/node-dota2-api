/*!
 * dota2-api - lib/dota2-api.js
 *
 * Copyright(c) 2014 Liucw <liucw.mail@gmail.com>
 * MIT Licensed
 */

"use strict";

var url = require('url');

var request = require('request');
var _ = require('underscore')

var API_URL = 'https://api.steampowered.com/';

function Dota2Api(key) {
    if (!key) {
        throw new TypeError('required key (Get key from http://steamcommunity.com/dev/apikey)')
    }

    this.key = key;
}

Dota2Api.API_URL = API_URL;

Dota2Api.create = function(key) {
    return new Dota2Api(key);
};


Dota2Api.prototype.getMatchHistory = function(options, cb) {
    var validOptions = ['hero_id', 'game_mode', 'skill', 'min_players', 'account_id',
        'league_id', 'start_at_match_id', 'matches_requested', 'tournament_games_only'
    ];
    var path = 'IDOTA2Match_570/GetMatchHistory/V001';

    if (typeof options == 'function') {
        cb = options;
        options = {};
    }

    options = _.pick(options, validOptions);
    options['key'] = this.key;

    var uri = url.format({
        pathname: API_URL + path,
        query: options
    });

    request.get(uri, function(err, res, body) {
        return cb(err, body);
    });


};


module.exports = Dota2Api;