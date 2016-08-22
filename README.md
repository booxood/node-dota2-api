# Dota2 Web Api


[![Build Status](https://travis-ci.org/booxood/node-dota2-api.svg?branch=master)](https://travis-ci.org/booxood/node-dota2-api)
[![Coverage Status](https://coveralls.io/repos/booxood/node-dota2-api/badge.svg)](https://coveralls.io/r/booxood/node-dota2-api)


**IMPORTANT: API is based on promises from v0.2.0**

Dota2 web api node.js version.See detail [here](https://wiki.teamfortress.com/wiki/WebAPI#Dota_2)

## Install

```
npm install dota2-api
```


Example:
```javascript
  const Dota2Api = require('dota2-api');

  const da = Dota2Api.create('a key');

  const options = {game_mode: 1};
  da.getMatchHistory(options).then((result) => {
      console.log(result);
  }, (errorResponseStatusText) => {
      console.log(errorResponseStatusText);
  });
```


## API

**Methods relating to Dota 2 matches.**

### Dota2Api.create(key, [ID])
Create Dota2Api instance,require a key.(if no, see [here](http://steamcommunity.com/dev/apikey))

List of IDs:
- 570 Dota 2 (**default**)
- 816 Dota 2 internal test
- 205790 Dota 2 (beta) test

```javascript
  const da = Dota2Api.create('a key', 570);
```

### Dota2Api.prototype.getLeagueListing([options])
Information about DotaTV-supported leagues.
Options:
  - **leagueid (Optional) (int)** – The ID of the league to get the prize pool of.

### Dota2Api.prototype.getLiveLeagueGames()
A list of in-progress league matches, as well as details of that match as it unfolds.

### Dota2Api.prototype.getMatchDetails([options])
Information about a particular match.
Options:
  - **match_id (string)** – Match id

### Dota2Api.prototype.getMatchHistory([options])
A list of matches, filterable by various parameters.
Options:
  - **hero_id (Optional) (uint32)** – A list of hero IDs can be found via the GetHeroes method.
  - **game_mode (Optional) (uint32)**
      - 0 - None
      - 1 - All Pick
      - 2 - Captain's Mode
      - 3 - Random Draft
      - 4 - Single Draft
      - 5 - All Random
      - 6 - Intro
      - 7 - Diretide
      - 8 - Reverse Captain's Mode
      - 9 - The Greeviling
      - 10 - Tutorial
      - 11 - Mid Only
      - 12 - Least Played
      - 13 - New Player Pool
      - 14 - Compendium Matchmaking
      - 16 - Captain's Draft
  - **skill (Optional) (uint32)** – Skill bracket for the matches (Ignored if an account ID is specified).
      - 0 - Any
      - 1 - Normal
      - 2 - High
      - 3 - Very High
  - **date_min (Optional) (uint32)** – Minimum date range for returned matches (unix timestamp, rounded to the nearest day).
  - **date_max (Optional) (uint32)** – Maximum date range for returned matches (unix timestamp, rounded to the nearest day).
  - **min_players (Optional) (string)** – Minimum amount of players in a match for the match to be returned.
  - **account_id (Optional) (string)** – 32-bit account ID.
  - **league_id (Optional) (string)** – Only return matches from this league. A list of league IDs can be found via the GetLeagueListing method.
  - **start_at_match_id (Optional) (string)** - Start searching for matches equal to or older than this match ID.
  - **matches_requested (Optional) (number)** – Amount of matches to include in results (default: 25).
  - **tournament_games_only (Optional) (string)** – Whether to limit results to tournament matches. (0 = false, 1 = true)

### Dota2Api.prototype.getMatchHistoryBySequenceNum([options])
A list of matches ordered by their sequence num.
Options:
  - **start_at_match_seq_num (Optional) (uint64)** – The match sequence number to start returning results from.
  - **matches_requested (Optional) (uint32)** – The amount of matches to return.

### Dota2Api.prototype.getScheduledLeagueGames([options])
A list of scheduled league games coming up.
Options:
  - **date_min (Optional) (uint32)** – Unix timestamp
  - **date_max (Optional) (uint32)** – Unix timestamp

### Dota2Api.prototype.getTeamInfoByTeamID([options])
A list of all the teams set up in-game.
Options:
  - **start_at_team_id (Optional) (uint64)** – The team id to start returning results from.
  - **teams_requested (Optional) (uint32)** – The amount of teams to return.

### Dota2Api.prototype.getTournamentPlayerStats([options])
Stats about a particular player within a tournament.
Options:
  - **account_id (string)** – 32-bit account ID.
  - **league_id (Optional) (string)** – A list of league IDs can be found via the GetLeagueListing method. Will return status 8 - only supports tournament 65006 (The International) unless you provide 65006.
  - **hero_id (Optional) (string)** – A list of hero IDs can be found via the GetHeroes method.
  - **time_frame (Optional) (string)** – Only return stats between this time frame (parameter format not yet known).

### Dota2Api.prototype.getTopLiveGame([options])
Options:
  - **partner (int32)** – Which partner's games to use.

**Methods relating to Dota 2.**

### Dota2Api.prototype.getGameItems([options])
Dota 2 In-game items
Options:
  - **language (Optional) (string)** – The language to provide hero names in.

### Dota2Api.prototype.getItemIconPath([options])
Options:
  - **iconname (string)** – The item icon name to get the CDN path of
  - **icontype (Optional) (uint32)** – The type of image you want.
      - 0 = normal
      - 1 = large
      - 2 = ingame

### Dota2Api.prototype.getRarities([options])
Dota 2 item rarity list.
Options:
  - **language (Optional) (string)** – The language to provide hero names in.

### Dota2Api.prototype.getHeroes([options])
A list of heroes within Dota 2.
Options:
  - **language (Optional) (string)** – The language to provide hero names in.
  - **itemizedonly (Optional) (bool)** – Return a list of itemized heroes only.

### Dota2Api.prototype.getTournamentPrizePool([options])
The current prizepool for specific tournaments.
Options:
  - **leagueid (Optional) (int)** – The ID of the league to get the prize pool of.


## TODO:
Implement this methods(https://wiki.teamfortress.com/wiki/WebAPI#Dota_2):

IEconDOTA2_<ID>
- GetEventStatsForAccount

IDOTA2MatchStats_<ID>
- GetRealtimeStats

IDOTA2Fantasy_<ID>
- GetFantasyPlayerStats
- GetPlayerOfficialInfo

IDOTA2StreamSystem_<ID>
- GetBroadcasterInfo

IDOTA2Teams_<ID>
- GetTeamInfo

IDOTA2AutomatedTourney_<ID>
- GetActiveTournamentList

IDOTA2Ticket_<ID>
- SetSteamAccountPurchased
- SteamAccountValidForEvent

## License
[The MIT License](https://github.com/booxood/node-dota2-api/blob/master/LICENSE)

