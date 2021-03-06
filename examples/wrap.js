var log4js = require('log4js');

log4js.setGlobalLogLevel('TRACE');

var log4jsNested = require('../wrap')(log4js, 'main');

var testLogger = log4jsNested.getLogger('test');

testLogger.trace('test');
testLogger.debug('test');
testLogger.info('test');
testLogger.warn('test');
testLogger.error('test');
testLogger.fatal('test');

console.log('===');

var nextLevelLogger = testLogger.getLogger('next');

nextLevelLogger.trace('test');
nextLevelLogger.debug('test');
nextLevelLogger.info('test');
nextLevelLogger.warn('test');
nextLevelLogger.error('test');
nextLevelLogger.fatal('test');

console.log('===');

var deeperLogger = nextLevelLogger.getLogger('deeper');

deeperLogger.trace('test');
deeperLogger.debug('test');
deeperLogger.info('test');
deeperLogger.warn('test');
deeperLogger.error('test');
deeperLogger.fatal('test');