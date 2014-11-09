'use strict'

var should = require('should');
var Dota2Api = require('../index.js');

describe('Dota2Api test case', function() {

    describe('Dota2Api.create', function() {
        before(function() {});

        it('should throw TypeError, create no key', function() {
            (function() {
                Dota2Api.create();
            }).should.throw(/^required key/);
        });

        it('should return Dota2Api instance, create no key', function() {
            var da = Dota2Api.create('a key');
            da.should.be.an.instanceof(Dota2Api);
        });
    });

    describe('Dota2Api prototype function', function() {
        var da
        before(function() {
            da = Dota2Api.create('a key');
        });

        it('should return , getMatchHistory', function(done) {
            da.getMatchHistory(function(err, result){
                should.not.exist(err);
                should.exist(result);
                done();
            });
        });

        it('should return Dota2Api instance, create no key', function() {
            var da = Dota2Api.create('a key');
            da.should.be.an.instanceof(Dota2Api);
        });
    });

});