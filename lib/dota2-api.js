'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash.pick');

var _lodash2 = _interopRequireDefault(_lodash);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _registeredApiMethods = require('./registeredApiMethods');

var _registeredApiMethods2 = _interopRequireDefault(_registeredApiMethods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*!
 * dota2-api - lib/dota2-api.js
 *
 * Copyright(c) 2014 Liucw <liucw.mail@gmail.com>
 * MIT Licensed
 */

require('es6-promise').polyfill();
require('es6-object-assign').polyfill();
require('isomorphic-fetch');

var API_URL = 'https://api.steampowered.com/';

var AVAILABLE_IDS = [570, 816, 205790];

var Dota2Api = function () {
    function Dota2Api(key) {
        var ID = arguments.length <= 1 || arguments[1] === undefined ? AVAILABLE_IDS[0] : arguments[1];

        _classCallCheck(this, Dota2Api);

        if (!key) {
            throw new TypeError('required key (Get key from http://steamcommunity.com/dev/apikey)');
        }
        this.key = key;
        this.ID = AVAILABLE_IDS.indexOf(ID) === -1 ? AVAILABLE_IDS[0] : ID;
    }

    _createClass(Dota2Api, [{
        key: '_request',
        value: function _request(path, validOptionKeys) {
            var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

            var filteredOptions = (0, _lodash2.default)(options, validOptionKeys);
            filteredOptions.key = this.key;

            var uri = _url2.default.format({
                pathname: API_URL + path,
                query: filteredOptions
            });

            return fetch(uri).then(this._parseResponse);
        }
    }, {
        key: '_parseResponse',
        value: function _parseResponse(response) {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        }
    }], [{
        key: 'create',
        value: function create(key, ID) {
            return new Dota2Api(key, ID);
        }
    }]);

    return Dota2Api;
}();

Object.assign(Dota2Api.prototype, _registeredApiMethods2.default);

module.exports = Dota2Api;