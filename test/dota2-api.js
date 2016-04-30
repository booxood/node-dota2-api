'use strict'

var should = require('should'); // eslint-disable-line no-unused-vars
var Dota2Api = require('../index.js');

describe('Dota2Api test case', function() {

    describe('Dota2Api.create', function() {
        before(function() {});

        it('should throw TypeError, create no key', function() {
            (function() {
                Dota2Api.create();
            }).should.throw(/required key/);
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

        it('should return , getLeagueListing', function(done) {
            da.getLeagueListing().then(null, function(result){
                result.should.match(/Forbidden/);
                done();
            });
        });

        it('should return , getLiveLeagueGames', function(done) {
            da.getLiveLeagueGames().then(null, function(result){
                result.should.match(/Forbidden/);
                done();
            });
        });

        it('should return , getMatchDetails', function(done) {
            da.getMatchDetails({match_id: 'match id'}).then(null, function(result){
                result.should.match(/Forbidden/);
                done();
            });
        });

        it('should return , getMatchHistory', function(done) {
            da.getMatchHistory().then(null, function(result){
                result.should.match(/Forbidden/);
                done();
            });
        });

        it('should return , getMatchHistoryBySequenceNum', function(done) {
            da.getMatchHistoryBySequenceNum({start_at_match_seq_num: 'seq num'}).then(null, function(result){
                result.should.match(/Forbidden/);
                done();
            });
        });

        it('should return , getScheduledLeagueGames', function(done) {
            da.getScheduledLeagueGames({date_min: '', date_max: ''}).then(null, function(result){
                result.should.match(/Forbidden/);
                done();
            });
        });

        it('should return , getTeamInfoByTeamID', function(done) {
            da.getTeamInfoByTeamID().then(null, function(result){
                result.should.match(/Forbidden/);
                done();
            });
        });

        // it('should return , getTournamentPlayerStats', function(done) {
        //     da.getTournamentPlayerStats({account_id: 87691567}).then(function(result){
        //         should.exist(result);
        //         done();
        //     });
        // });

        it('should return , getGameItems', function(done) {
            da.getGameItems({language: 'zh'}).then(null, function(result){
                result.should.match(/Forbidden/);
                done();
            });
        });

        it('should return , getItemIconPath', function(done) {
            da.getItemIconPath({iconname: 'x'}).then(null, function(result){
                result.should.match(/Forbidden/);
                done();
            });
        });

        it('should return , getRarities', function(done) {
            da.getRarities({language: 'zh'}).then(null, function(result){
                result.should.match(/Forbidden/);
                done();
            });
        });

        it('should return , getHeroes', function(done) {
            da.getHeroes({language: 'zh'}).then(null, function(result){
                result.should.match(/Forbidden/);
                done();
            });
        });

        it('should return , getTournamentPrizePool', function(done) {
            da.getTournamentPrizePool().then(null, function(result){
                result.should.match(/Forbidden/);
                done();
            });
        });


    });

});

