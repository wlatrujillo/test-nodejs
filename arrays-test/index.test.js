const {describe, it} = require('node:test');
const  assert  = require('node:assert');

const { filterRepeated } = require('./index');

describe('Tests', () => {

    it('Should filter repeated items', () => {

        const arr = [{name: 'John', selected: true}, {name: 'John', selected: true}, {name: 'Doe', selected: false}, {name: 'Doe', selected: true}, {name: 'Doe', selected: false}];

        assert.deepEqual(filterRepeated(arr), [{name: 'John', selected: true}, {name: 'Doe', selected: true}]);
    });

});

