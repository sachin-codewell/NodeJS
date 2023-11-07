const logger = require("../config/logger-config");

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data){
        try {
            const response = await this.model.create(data)
            return response;
        } 
        catch(error) {
            logger.error("Something went wrong in crud repo: create")    
            throw error;
        }
    }

    
}

module.exports = CrudRepository;
