// leagueid (Optional) (int)
//     The ID of the league to get the prize pool of.
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

// match_id (string)
//     Match id
export function getMatchDetails(options) {
    const validOptionKeys = ['match_id'];
    const path = `IDOTA2Match_${this.ID}/GetMatchDetails/V001`;

    return this._request(path, validOptionKeys, options);
}

// hero_id (Optional) (uint32)
//     A list of hero IDs can be found via the GetHeroes method.
// game_mode (Optional) (uint32)
//     0 - None
//     1 - All Pick
//     2 - Captain's Mode
//     3 - Random Draft
//     4 - Single Draft
//     5 - All Random
//     6 - Intro
//     7 - Diretide
//     8 - Reverse Captain's Mode
//     9 - The Greeviling
//     10 - Tutorial
//     11 - Mid Only
//     12 - Least Played
//     13 - New Player Pool
//     14 - Compendium Matchmaking
//     16 - Captain's Draft
// skill (Optional) (uint32)
//     Skill bracket for the matches (Ignored if an account ID is specified).
//     0 - Any
//     1 - Normal
//     2 - High
//     3 - Very High
// date_min (Optional) (uint32)
//     Minimum date range for returned matches (unix timestamp, rounded to the nearest day).
// date_max (Optional) (uint32)
//     Maximum date range for returned matches (unix timestamp, rounded to the nearest day).
// min_players (Optional) (string)
//     Minimum amount of players in a match for the match to be returned.
// account_id (Optional) (string)
//     32-bit account ID.
// league_id (Optional) (string)
//     Only return matches from this league.
//     A list of league IDs can be found via the GetLeagueListing method.
// start_at_match_id (Optional) (string)
//     Start searching for matches equal to or older than this match ID.
// matches_requested (Optional) (number)
//     Amount of matches to include in results (default: 25).
// tournament_games_only (Optional) (string)
//     Whether to limit results to tournament matches. (0 = false, 1 = true)
export function getMatchHistory(options) {
    const validOptionKeys = ['hero_id', 'game_mode', 'skill', 'min_players', 'account_id',
        'league_id', 'start_at_match_id', 'matches_requested', 'tournament_games_only'];
    const path = `IDOTA2Match_${this.ID}/GetMatchHistory/V001`;

    return this._request(path, validOptionKeys, options);
}

// start_at_match_seq_num (Optional) (uint64)
//     The match sequence number to start returning results from.
// matches_requested (Optional) (uint32)
//     The amount of matches to return.
export function getMatchHistoryBySequenceNum(options) {
    const validOptionKeys = ['start_at_match_seq_num', 'matches_requested'];
    const path = `IDOTA2Match_${this.ID}/GetMatchHistoryBySequenceNum/v0001/`;

    return this._request(path, validOptionKeys, options);
}

// date_min (Optional) (uint32)
//     Unix timestamp
// date_max (Optional) (uint32)
//     Unix timestamp
export function getScheduledLeagueGames(options) {
    const validOptionKeys = ['date_min', 'date_max'];
    const path = `IDOTA2Match_${this.ID}/GetScheduledLeagueGames/v1`;

    return this._request(path, validOptionKeys, options);
}

// start_at_team_id (Optional) (uint64)
//     The team id to start returning results from.
// teams_requested (Optional) (uint32)
//     The amount of teams to return.
export function getTeamInfoByTeamID(options) {
    const validOptionKeys = ['start_at_team_id', 'teams_requested'];
    const path = `IDOTA2Match_${this.ID}/GetTeamInfoByTeamID/v1`;

    return this._request(path, validOptionKeys, options);
}

// // account_id (string)
// //  32-bit account ID.
// // league_id (Optional) (string)
// //  A list of league IDs can be found via the GetLeagueListing method. Will return status 8
// //  - only supports tournament 65006 (The International) unless you provide 65006.
// // hero_id (Optional) (string)
// //  A list of hero IDs can be found via the GetHeroes method.
// // time_frame (Optional) (string)
// //  Only return stats between this time frame (parameter format not yet known).
// export function getTournamentPlayerStats(options) {
//     const validOptionKeys = ['account_id', 'league_id', 'hero_id', 'time_frame'];
//     const path = `IDOTA2Match_${this.ID}/GetTournamentPlayerStats/v1`;

//     return this._request(path, validOptionKeys, options);
// }

// TODO: check method GetTopLiveGame

// IEconDOTA2_<ID> part

// language (Optional) (string)
//     The language to provide hero names in.
export function getGameItems(options) {
    const validOptionKeys = ['language'];
    const path = `IEconDOTA2_${this.ID}/GetGameItems/v1`;

    return this._request(path, validOptionKeys, options);
}

// iconname (string)
//      The item icon name to get the CDN path of
// icontype (Optional) (uint32)
//      The type of image you want.
//      0 = normal
//      1 = large
//      2 = ingame
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

// TODO: check boolean type
// language (Optional) (string)
//     The language to provide hero names in.
// itemizedonly (Optional) (bool)
//     Return a list of itemized heroes only.
export function getHeroes(options) {
    const validOptionKeys = ['language', 'itemizedonly'];
    const path = `IEconDOTA2_${this.ID}/GetHeroes/v1`;

    return this._request(path, validOptionKeys, options);
}

// leagueid (Optional) (int)
//     The ID of the league to get the prize pool of.
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
    // getTournamentPlayerStats,
    getGameItems,
    getItemIconPath,
    getRarities,
    getHeroes,
    getTournamentPrizePool,
};
