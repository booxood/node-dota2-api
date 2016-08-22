'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getLeagueListing = getLeagueListing;
exports.getLiveLeagueGames = getLiveLeagueGames;
exports.getMatchDetails = getMatchDetails;
exports.getMatchHistory = getMatchHistory;
exports.getMatchHistoryBySequenceNum = getMatchHistoryBySequenceNum;
exports.getScheduledLeagueGames = getScheduledLeagueGames;
exports.getTeamInfoByTeamID = getTeamInfoByTeamID;
exports.getTournamentPlayerStats = getTournamentPlayerStats;
exports.getTopLiveGame = getTopLiveGame;
exports.getGameItems = getGameItems;
exports.getItemIconPath = getItemIconPath;
exports.getRarities = getRarities;
exports.getHeroes = getHeroes;
exports.getTournamentPrizePool = getTournamentPrizePool;
function getLeagueListing(options) {
    var validOptionKeys = ['language'];
    var path = 'IDOTA2Match_' + this.ID + '/GetLeagueListing/v1';

    return this._request(path, validOptionKeys, options);
}

function getLiveLeagueGames(options) {
    var validOptionKeys = [];
    var path = 'IDOTA2Match_' + this.ID + '/GetLiveLeagueGames/v1';

    return this._request(path, validOptionKeys, options);
}

function getMatchDetails(options) {
    var validOptionKeys = ['match_id'];
    var path = 'IDOTA2Match_' + this.ID + '/GetMatchDetails/V001';

    return this._request(path, validOptionKeys, options);
}

function getMatchHistory(options) {
    var validOptionKeys = ['hero_id', 'game_mode', 'skill', 'min_players', 'account_id', 'league_id', 'start_at_match_id', 'matches_requested', 'tournament_games_only'];
    var path = 'IDOTA2Match_' + this.ID + '/GetMatchHistory/V001';

    return this._request(path, validOptionKeys, options);
}

function getMatchHistoryBySequenceNum(options) {
    var validOptionKeys = ['start_at_match_seq_num', 'matches_requested'];
    var path = 'IDOTA2Match_' + this.ID + '/GetMatchHistoryBySequenceNum/v0001/';

    return this._request(path, validOptionKeys, options);
}

function getScheduledLeagueGames(options) {
    var validOptionKeys = ['date_min', 'date_max'];
    var path = 'IDOTA2Match_' + this.ID + '/GetScheduledLeagueGames/v1';

    return this._request(path, validOptionKeys, options);
}

function getTeamInfoByTeamID(options) {
    var validOptionKeys = ['start_at_team_id', 'teams_requested'];
    var path = 'IDOTA2Match_' + this.ID + '/GetTeamInfoByTeamID/v1';

    return this._request(path, validOptionKeys, options);
}

function getTournamentPlayerStats(options) {
    var validOptionKeys = ['account_id', 'league_id', 'hero_id', 'time_frame'];
    var path = 'IDOTA2Match_' + this.ID + '/GetTournamentPlayerStats/v2';

    return this._request(path, validOptionKeys, options);
}

function getTopLiveGame(options) {
    var validOptionKeys = ['partner'];
    var path = 'IDOTA2Match_' + this.ID + '/GetTopLiveGame/v1';

    return this._request(path, validOptionKeys, options);
}

// IEconDOTA2_<ID> part

function getGameItems(options) {
    var validOptionKeys = ['language'];
    var path = 'IEconDOTA2_' + this.ID + '/GetGameItems/v1';

    return this._request(path, validOptionKeys, options);
}

function getItemIconPath(options) {
    var validOptionKeys = ['iconname', 'icontype'];
    var path = 'IEconDOTA2_' + this.ID + '/GetItemIconPath/v1';

    return this._request(path, validOptionKeys, options);
}

function getRarities(options) {
    var validOptionKeys = ['language'];
    var path = 'IEconDOTA2_' + this.ID + '/GetRarities/v1';

    return this._request(path, validOptionKeys, options);
}

function getHeroes(options) {
    var validOptionKeys = ['language', 'itemizedonly'];
    var path = 'IEconDOTA2_' + this.ID + '/GetHeroes/v1';

    return this._request(path, validOptionKeys, options);
}

function getTournamentPrizePool(options) {
    var validOptionKeys = ['leagueid'];
    var path = 'IEconDOTA2_' + this.ID + '/GetTournamentPrizePool/v0001';

    return this._request(path, validOptionKeys, options);
}

exports.default = {
    getLeagueListing: getLeagueListing,
    getLiveLeagueGames: getLiveLeagueGames,
    getMatchDetails: getMatchDetails,
    getMatchHistory: getMatchHistory,
    getMatchHistoryBySequenceNum: getMatchHistoryBySequenceNum,
    getScheduledLeagueGames: getScheduledLeagueGames,
    getTeamInfoByTeamID: getTeamInfoByTeamID,
    getTournamentPlayerStats: getTournamentPlayerStats,
    getTopLiveGame: getTopLiveGame,
    getGameItems: getGameItems,
    getItemIconPath: getItemIconPath,
    getRarities: getRarities,
    getHeroes: getHeroes,
    getTournamentPrizePool: getTournamentPrizePool
};