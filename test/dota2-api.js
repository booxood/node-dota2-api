'use strict'

var should = require('should');
var Dota2Api = require('../index.js');

var API_KEY = 'fake_key';


describe('Dota2Api test case', function() {

    describe('Dota2Api.create', function() {
        before(function() {});

        it('should throw TypeError, create no key', function() {
            (function() {
                Dota2Api.create();
            }).should.throw(/required key/);
        });

        it('should return Dota2Api instance, create no key', function() {
            var da = Dota2Api.create(API_KEY);
            da.should.be.an.instanceof(Dota2Api);
        });
    });

    // IMPORTANT API_KEY is not real steam key and it doesn't works.
    // But when we do right API calls with all required parameters and this key,
    // STeam returns HTML with test:
    // ---------------
    //    Forbidden
    //    Access is denied. Retrying will not help. Please verify your
    //    key=
    //    parameter.
    // ---------------
    // So this tests are based on this behavior.
    // They do not guarantee that everything works correctly
    describe('Dota2Api prototype function return text "Forbidden" (better look at comment inside tests code)', function() {
        var da;
        before(function() {
            da = Dota2Api.create(API_KEY);
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

        it('should return , getTournamentPlayerStats', function(done) {
            da.getTournamentPlayerStats({account_id: 2}).then(null, function(result){
                should.exist(result);
                done();
            });
        });

        it('should return , GetTopLiveGame', function(done) {
            da.getTopLiveGame({partner: 1}).then(null, function(result){
                should.exist(result);
                done();
            });
        });

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

