const expect = require('expect');
const utils = require('./utils');

it('should add two numbers',() => {
  let res = utils.add(70, 6);
  // if(res !== 76) {
  //   throw new Error(`Expected 76, but got ${res}`);
  // }

  expect(res).toBe(76).toBeA('number');
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(70, 6, (sum) => {
    expect(sum).toBe(76).toBeA('number');
    done();
  });
});

it('should square a number', () => {
  let res = utils.square(3);
  // if (res !== 9) {
  //   throw new Error(`Expected 9, but got ${res}`);
  // }

  expect(res).toBe(9).toBeA('number');
});

it('should async square a number', (done) => {
  utils.asyncSquare(3, (squared) => {
    expect(squared).toBe(9).toBeA('number');
    done();
  });
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(12);
//   // expect({name: "Hinkie"}).toNotEqual({name: 'Colangelo'});
//   // expect([2,3,4].toExclude(1));
//   expect({
//     name: "Embiid",
//     age: 23,
//     location: "Philadelphia"
//   }).toExclude({
//     age: 20
//   });
// });

it('should verify first and last names are set', () => {
  let user = { firstName: 'Greatest', lastName: 'Ever', status: 'Processing' }
  let newUser = utils.setName(user, 'Ben Simmons');
  expect(newUser).toInclude({
    firstName: 'Ben',
    lastName: 'Simmons'
  });
});