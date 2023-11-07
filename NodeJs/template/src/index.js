const express = require('express');
const { serverConfig,loggerConfig:logger } = require('./config/index')
const apiRouter = require('./routes/index') 


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', apiRouter);

app.listen(serverConfig.PORT,function exec(){
    logger.info(`server is running fine on port ${serverConfig.PORT}`)
})
