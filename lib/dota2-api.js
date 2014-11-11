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

Dota2Api.prototype._request = function(options, cb){
    if (typeof options == 'function') {
        cb = options;
        options = {};
    }

    options = _.pick(options, this.validOptions);
    options['key'] = this.key;

    var uri = url.format({
        pathname: API_URL + this.path,
        query: options
    });

    request.get(uri, function(err, res, body) {
        return cb(err, body);
    });
}

Dota2Api.prototype.getMatchHistory = function(options, cb) {
    this.validOptions = ['hero_id', 'game_mode', 'skill', 'min_players', 'account_id',
        'league_id', 'start_at_match_id', 'matches_requested', 'tournament_games_only'
    ];
    this.path = 'IDOTA2Match_570/GetMatchHistory/V001';

    this._request(options, cb);
};

Dota2Api.prototype.getMatchDetails = function(options, cb) {
    this.validOptions = ['match_id'];
    this.path = 'IDOTA2Match_570/GetMatchDetails/V001';

    this._request(options, cb);
}

module.exports = Dota2Api;


