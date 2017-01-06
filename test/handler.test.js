'use strict';
/* jshint expr: true */
const expect = require( 'chai' ).expect;
const LambdaTester = require( 'lambda-tester' );
const proxyquire = require( 'proxyquire' ).noCallThru();
const sinon = require( 'sinon' );
var lambda = proxyquire( '../handler', {
});
describe( 'index', function() {
    describe( '.handler', function() {
         it( 'dummy test', function() {
             return LambdaTester(lambda.hello)
             .event({
                 testId: "1"
             })
             .expectResult( (r) => {
                 expect(JSON.parse(r.body).message).to.eql("Go Serverless v1.0! Your function executed successfully!")
             })
         })
    })
})