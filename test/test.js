var chai = require('chai');
var chaiHttp = require('chai-http');
var express = require('express');
var should = chai.should();
//var sinon = require('sinon');


describe('unitTest', () => {

    it('Main page status', function (done) {
        chai.request('http://localhost:8080').get('/')
        //chai.request('https://peaceful-mountain-88307.herokuapp.com/articles', function (error, response, body) {
        expect(request.method).to.Be(GET)  
        expect(response.statusCode).to.equal(200);
            done();
        });
    });
});