const should = require('chai').should();
const expect = require('chai').expect;
const functions = require('../functions');
const dataFile = require('../data');

describe('Count', () => {
    it('Shoud return an non empty array', () => {
        functions.count().should.be.a('array').and.not.be.empty
    });
    it('Should return the same array size as datafile array', () => {
        const dataFileLength = dataFile.data.length;
        functions.count().should.be.a('array').and.have.lengthOf(dataFileLength);
    })
});