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

function Dota2Api(key, ID) {
    if (!key) {
        throw new TypeError('required key (Get key from http://steamcommunity.com/dev/apikey)')
    }

    this.key = key;
    this.ID = ID && ID in [570, 816, 205790] ? ID : 570;
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

// Methods relating to Dota 2 matches.

Dota2Api.prototype.getLeagueListing = function(options, cb) {
    this.validOptions = ['language'];
    this.path = 'IDOTA2Match_' + this.ID + '/GetLeagueListing/v1';

    this._request(options, cb);
}

Dota2Api.prototype.getLiveLeagueGames = function(options, cb) {
    this.validOptions = [''];
    this.path = 'IDOTA2Match_' + this.ID + '/GetLiveLeagueGames/v1';

    this._request(options, cb);
}

Dota2Api.prototype.getMatchDetails = function(options, cb) {
    this.validOptions = ['match_id'];
    this.path = 'IDOTA2Match_' + this.ID + '/GetMatchDetails/V001';

    this._request(options, cb);
}

Dota2Api.prototype.getMatchHistory = function(options, cb) {
    this.validOptions = ['hero_id', 'game_mode', 'skill', 'min_players', 'account_id',
        'league_id', 'start_at_match_id', 'matches_requested', 'tournament_games_only'
    ];
    this.path = 'IDOTA2Match_' + this.ID + '/GetMatchHistory/V001';

    this._request(options, cb);
};

Dota2Api.prototype.getMatchHistoryBySequenceNum = function(options, cb) {
    this.validOptions = ['start_at_match_seq_num', 'matches_requested'];
    this.path = 'IDOTA2Match_' + this.ID + '/GetMatchHistoryBySequenceNum/v0001/';

    this._request(options, cb);
}

Dota2Api.prototype.getScheduledLeagueGames = function(options, cb) {
    this.validOptions = ['date_min', 'date_max'];
    this.path = 'IDOTA2Match_' + this.ID + '/GetScheduledLeagueGames/v1';

    this._request(options, cb);
}

Dota2Api.prototype.getTeamInfoByTeamID = function(options, cb) {
    this.validOptions = ['start_at_team_id', 'teams_requested'];
    this.path = 'IDOTA2Match_' + this.ID + '/GetTeamInfoByTeamID/v1';

    this._request(options, cb);
}

Dota2Api.prototype.getTournamentPlayerStats = function(options, cb) {
    this.validOptions = ['account_id', 'league_id', 'hero_id', 'time_frame'];
    this.path = 'IDOTA2Match_' + this.ID + '/GetTournamentPlayerStats/v1';

    this._request(options, cb);
}

// Methods relating to Dota 2.

Dota2Api.prototype.getRarities = function(options, cb) {
    this.validOptions = ['language'];
    this.path = 'IEconDOTA2_' + this.ID + '/GetRarities/v1';

    this._request(options, cb);
}

Dota2Api.prototype.getHeroes = function(options, cb) {
    this.validOptions = ['language', 'itemizedonly'];
    this.path = 'IEconDOTA2_' + this.ID + '/GetHeroes/v1';

    this._request(options, cb);
}

Dota2Api.prototype.getTournamentPrizePool = function(options, cb) {
    this.validOptions = ['leagueid'];
    this.path = 'IEconDOTA2_' + this.ID + '/GetTournamentPrizePool/v0001';

    this._request(options, cb);
}


module.exports = Dota2Api;


