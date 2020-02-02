const expect = require('chai').expect;
const request = require('request');

const url = {
  date: 'https://cankaya-food.herokuapp.com/date',
  all: 'https://cankaya-food.herokuapp.com/all'
}

describe("Date API", () => {
  it("returns status 200", (done) => {
    request(url.date, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});

describe("All API", () => {
  it('returns status 200', (done) => {
    request(url.all, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    })
  })
})