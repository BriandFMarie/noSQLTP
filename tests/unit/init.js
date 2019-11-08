// load Chai Expect
global.chai = require('chai');
global.expect = require('chai').expect;
global.sinon = require('sinon');
global.sinonChai = require('sinon-chai');
global.mockRequire = require('mock-require');

chai.use(sinonChai);
