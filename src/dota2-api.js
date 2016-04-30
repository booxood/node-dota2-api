/*!
 * dota2-api - lib/dota2-api.js
 *
 * Copyright(c) 2014 Liucw <liucw.mail@gmail.com>
 * MIT Licensed
 */

require('es6-promise').polyfill();
require('es6-object-assign').polyfill();
require('isomorphic-fetch');

import pick from 'lodash.pick';
import url from 'url';
import registeredApiMethods from './registeredApiMethods';


const API_URL = 'https://api.steampowered.com/';

const AVAILABLE_IDS = [570, 816, 205790];

class Dota2Api {
    constructor(key, ID = AVAILABLE_IDS[0]) {
        if (!key) {
            throw new TypeError('required key (Get key from http://steamcommunity.com/dev/apikey)');
        }
        this.key = key;
        this.ID = AVAILABLE_IDS.indexOf(ID) === -1 ? AVAILABLE_IDS[0] : ID;
    }

    static create(key, ID) {
        return new Dota2Api(key, ID);
    }

    _request(path, validOptionKeys, options = {}) {
        const filteredOptions = pick(options, validOptionKeys);
        filteredOptions.key = this.key;

        const uri = url.format({
            pathname: API_URL + path,
            query: filteredOptions,
        });

        return fetch(uri).then(this._parseResponse);
    }

    _parseResponse(response) {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    }
}

Object.assign(Dota2Api.prototype, registeredApiMethods);

module.exports = Dota2Api;
