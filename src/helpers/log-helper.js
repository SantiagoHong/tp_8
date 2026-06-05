import 'dotenv/config' 
import fs from 'fs';  


class LogHelper {     
        
    constructor() 
    {         
        this.filePath            = process.env.LOG_FILE_PATH;         
        this.fileName            = process.env.LOG_FILE_NAME;         
        this.logToFileEnabled    = process.env.LOG_TO_FILE_ENABLED.toLowerCase() === 'true';         
        this.logToConsoleEnabled = process.env.LOG_TO_CONSOLE_ENABLED.toLowerCase() === 'true';     
    }      
    /**
     * Este método almacena en un archivo de texto y/o por muestra consola información del Error.     
     * @param {*} errorObject
     */     
    
    logError = (errorObject) => {        
        const logText = `[${new Date().toISOString()}] ${errorObject.message}`
        
        if (this.logToConsoleEnabled){
            console.log(logText)
        }

        if (this.logToFileEnabled) {
            if (!fs.existsSync(this.filePath)) {
                fs.mkdirSync(this.filePath, { recursive: true });
            }
            fs.appendFileSync(this.filePath + this.fileName, logText + '\n');
        }
    }   
} 

export default new LogHelper();