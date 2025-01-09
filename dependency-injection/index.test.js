const {describe, it} = require('node:test');
const  assert  = require('node:assert');

const { DI } = require('./index');

describe('Tests', () => {

    it('Should test dependency injection', () => {
    
        var deps = {
          'dep1': function () {return 'this is dep1';},
          'dep2': function () {return 'this is dep2';},
          'dep3': function () {return 'this is dep3';},
          'dep4': function () {return 'this is dep4';}
        };
          
        var di = new DI(deps);

        var myFunc = di.inject(function (dep3, dep1, dep2) {
          return [dep1(), dep2(), dep3()].join(' -> ');
        });

        assert.equal(myFunc(), 'this is dep1 -> this is dep2 -> this is dep3');

    });


});

