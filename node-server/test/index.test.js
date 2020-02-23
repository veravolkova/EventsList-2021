const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const should = chai.should();

chai.use(chaiHttp);

describe('Events', function() {
    it('should list ALL events on /api/events/ GET', function(done) {
        chai.request(server)
          .get('/api/events/')
          .end(function(err, res){
            res.should.have.status(200);
            done();
          });
      }).timeout(30000);

});