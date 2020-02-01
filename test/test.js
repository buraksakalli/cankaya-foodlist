const expect = require('chai').expect;
const request = require('request');

const url = {
  date: 'http://localhost:3001/date',
  all: 'http://localhost:3001/all'
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