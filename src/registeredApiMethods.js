export function getLeagueListing(options) {
    const validOptionKeys = ['language'];
    const path = `IDOTA2Match_${this.ID}/GetLeagueListing/v1`;

    return this._request(path, validOptionKeys, options);
}

export function getLiveLeagueGames(options) {
    const validOptionKeys = [];
    const path = `IDOTA2Match_${this.ID}/GetLiveLeagueGames/v1`;

    return this._request(path, validOptionKeys, options);
}

export function getMatchDetails(options) {
    const validOptionKeys = ['match_id'];
    const path = `IDOTA2Match_${this.ID}/GetMatchDetails/V001`;

    return this._request(path, validOptionKeys, options);
}

export function getMatchHistory(options) {
    const validOptionKeys = ['hero_id', 'game_mode', 'skill', 'min_players', 'account_id',
        'league_id', 'start_at_match_id', 'matches_requested', 'tournament_games_only'];
    const path = `IDOTA2Match_${this.ID}/GetMatchHistory/V001`;

    return this._request(path, validOptionKeys, options);
}

export function getMatchHistoryBySequenceNum(options) {
    const validOptionKeys = ['start_at_match_seq_num', 'matches_requested'];
    const path = `IDOTA2Match_${this.ID}/GetMatchHistoryBySequenceNum/v0001/`;

    return this._request(path, validOptionKeys, options);
}

export function getScheduledLeagueGames(options) {
    const validOptionKeys = ['date_min', 'date_max'];
    const path = `IDOTA2Match_${this.ID}/GetScheduledLeagueGames/v1`;

    return this._request(path, validOptionKeys, options);
}

export function getTeamInfoByTeamID(options) {
    const validOptionKeys = ['start_at_team_id', 'teams_requested'];
    const path = `IDOTA2Match_${this.ID}/GetTeamInfoByTeamID/v1`;

    return this._request(path, validOptionKeys, options);
}

export function getTournamentPlayerStats(options) {
    const validOptionKeys = ['account_id', 'league_id', 'hero_id', 'time_frame'];
    const path = `IDOTA2Match_${this.ID}/GetTournamentPlayerStats/v2`;

    return this._request(path, validOptionKeys, options);
}

export function getTopLiveGame(options) {
    const validOptionKeys = ['partner'];
    const path = `IDOTA2Match_${this.ID}/GetTopLiveGame/v1`;

    return this._request(path, validOptionKeys, options);
}

// IEconDOTA2_<ID> part

export function getGameItems(options) {
    const validOptionKeys = ['language'];
    const path = `IEconDOTA2_${this.ID}/GetGameItems/v1`;

    return this._request(path, validOptionKeys, options);
}

export function getItemIconPath(options) {
    const validOptionKeys = ['iconname', 'icontype'];
    const path = `IEconDOTA2_${this.ID}/GetItemIconPath/v1`;

    return this._request(path, validOptionKeys, options);
}

export function getRarities(options) {
    const validOptionKeys = ['language'];
    const path = `IEconDOTA2_${this.ID}/GetRarities/v1`;

    return this._request(path, validOptionKeys, options);
}

export function getHeroes(options) {
    const validOptionKeys = ['language', 'itemizedonly'];
    const path = `IEconDOTA2_${this.ID}/GetHeroes/v1`;

    return this._request(path, validOptionKeys, options);
}

export function getTournamentPrizePool(options) {
    const validOptionKeys = ['leagueid'];
    const path = `IEconDOTA2_${this.ID}/GetTournamentPrizePool/v0001`;

    return this._request(path, validOptionKeys, options);
}

export default {
    getLeagueListing,
    getLiveLeagueGames,
    getMatchDetails,
    getMatchHistory,
    getMatchHistoryBySequenceNum,
    getScheduledLeagueGames,
    getTeamInfoByTeamID,
    getTournamentPlayerStats,
    getTopLiveGame,
    getGameItems,
    getItemIconPath,
    getRarities,
    getHeroes,
    getTournamentPrizePool,
};
