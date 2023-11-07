const logger = require('../config/logger-config');
const { AirplaneRepository } = require('../repositories/index.js')

const airplaneRepo = new AirplaneRepository();

async function createPlane(data) {
    try {
        const airplane = await airplaneRepo.create(data);
        return airplane;
    } 
    catch(error) {
        logger.error("Something went wrong in AirplaneService: createPlane")
        throw error;
    }

}

module.exports = {
    createPlane
}

