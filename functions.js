const dataFile = require('./data');

const filter = (pattern) => {
    const copyDataFile = [...dataFile.data];

    return copyDataFile.filter(country => {
        country.people = country.people.filter(people => {
            people.animals = people.animals.filter(animal => {
                return animal.name.toLowerCase().includes(pattern.toLowerCase());
            });
            return people.animals.length !== 0;
        });
        return country.people.length !== 0;
    });
};

const count = () => {
    const copyDataFile = [...dataFile.data];
    
    return copyDataFile.map(country => {
        country.name += ` [${country.people.length}]`;
        country.people.map(people => {
            people.name += ` [${people.animals.length}]`;
            return people;
        });
        return country;
    });
};

module.exports = {
    filter,
    count
}