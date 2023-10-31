require('dotenv').config({path:__dirname.replaceAll('\\' , '/')+'/../../.env'});;


module.exports = {
    PORT:process.env.PORT
}