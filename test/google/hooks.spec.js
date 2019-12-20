const logger = require('../../utils/log.util');

before('before', async() =>{
    logger.info('Test run started');
})

after('after', async() =>{
    logger.info('Test run finished');
})

beforeEach('before', async() =>{
    logger.info('Test started');
})

afterEach('after', async() =>{
    logger.info('Test finished');
})