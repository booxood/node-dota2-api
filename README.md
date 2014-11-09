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
  da.getMatchHistory(function(err, result){
    if(!err)
      console.log(result);
  })
```


## API

### Dota2Api.create(key)
Create Dota2Api instance,require a key.(if no, see [here](http://steamcommunity.com/dev/apikey))
```javascript
  var da = Dota2Api.create('a key');
```

### Dota2Api.prototype.getMatchHistory([options], callback)

```javascript
  fd.readlines(filePath, function(err, lines){
      console.log(lines);
  });
```


## License
[The MIT License](https://github.com/booxood/node-dota2-api/blob/master/LICENSE)
