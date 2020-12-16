const should = require('chai').should();
const expect = require('chai').expect;
const dataFile = require('../data');
const functions = require('../functions')

describe('Filter', () => {
    it('Shoud return an non empty array', () => {
        functions.filter('').should.be.a('array').and.not.be.empty
    });

    it('Should return the dataFile array with the order kept intact', () => {
        [countryOriginal, peopleOriginal, animalOriginal] = [dataFile.data[0].name, dataFile.data[0].people[0].name, dataFile.data[0].people[0].animals[0].name];
        resultOfFilterFunction = functions.filter('');
        [countryFilter, peopleFilter, animalFilter] = [resultOfFilterFunction[0].name, resultOfFilterFunction[0].people[0].name, resultOfFilterFunction[0].people[0].animals[0].name];
        expect(countryOriginal).to.be.equal(countryFilter);
        expect(peopleOriginal).to.be.equal(peopleFilter);
        expect(animalOriginal).to.be.equal(animalFilter);
    })
});