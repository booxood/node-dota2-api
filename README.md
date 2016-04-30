# Dota2 Web Api


[![Build Status](https://travis-ci.org/booxood/node-dota2-api.png?branch=master)](https://travis-ci.org/booxood/node-dota2-api)

Dota2 web api node.js version.See detail [here](https://wiki.teamfortress.com/wiki/WebAPI#Dota_2)

## Install

```
npm install dota2-api
```


Example:
```javascript
  var Dota2Api = require('dota2-api');
  var da = Dota2Api.create('a key');
  da.getMatchHistory().then(function(result) {
      console.log(result);
  })
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
  var da = Dota2Api.create('a key', 570);
```

### Dota2Api.prototype.getLeagueListing([options])
Information about DotaTV-supported leagues.
```javascript
  da.getLeagueListing({language: 'zh'}).then(function(result) {
      console.log(result);
  })
```

### Dota2Api.prototype.getLiveLeagueGames(callback)
A list of in-progress league matches, as well as details of that match as it unfolds.
```javascript
  da.getLiveLeagueGames().then(function(result) {
      console.log(result);
  })
```

### Dota2Api.prototype.getMatchDetails([options])
Information about a particular match.
```javascript
  da.getMatchDetails({match_id: 'xxx'}).then(function(result) {
      console.log(result);
  })
```

### Dota2Api.prototype.getMatchHistory([options])
A list of matches, filterable by various parameters.
```javascript
  da.getMatchHistory().then(function(result) {
      console.log(result);
  })
```

### Dota2Api.prototype.getMatchHistoryBySequenceNum([options])
A list of matches ordered by their sequence num.
```javascript
  da.getMatchHistoryBySequenceNum().then(function(result) {
      console.log(result);
  })
```

### Dota2Api.prototype.getScheduledLeagueGames([options])
A list of scheduled league games coming up.
```javascript
  da.getScheduledLeagueGames().then(function(result) {
      console.log(result);
  })
```

### Dota2Api.prototype.getTeamInfoByTeamID([options])
A list of all the teams set up in-game.
```javascript
  da.getTeamInfoByTeamID().then(function(result) {
      console.log(result);
  })
```

### Dota2Api.prototype.getTournamentPlayerStats([options])
Stats about a particular player within a tournament.
```javascript
  da.getTournamentPlayerStats({account_id: 'xxx'}).then(function(result) {
      console.log(result);
  })
```

**Methods relating to Dota 2.**

### Dota2Api.prototype.getRarities([options])
Dota 2 item rarity list.
```javascript
  da.getRarities({language: 'zh'}).then(function(result) {
      console.log(result);
  })
```

### Dota2Api.prototype.getHeroes([options])
A list of heroes within Dota 2.
```javascript
  da.getHeroes({language: 'zh'}).then(function(result) {
      console.log(result);
  })
```

### Dota2Api.prototype.getTournamentPrizePool([options])
The current prizepool for specific tournaments.
```javascript
  da.getTournamentPrizePool().then(function(result) {
      console.log(result);
  })
```


## License
[The MIT License](https://github.com/booxood/node-dota2-api/blob/master/LICENSE)
