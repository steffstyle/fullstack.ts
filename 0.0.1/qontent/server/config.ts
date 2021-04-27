/* 
MAIN CONFIGURATION FILE FOR SERVER
*/
//
export default {
  /* application default configuration */
  ENV: {
    STATIC: '/dist/client', // where to find static files (client)
    INDEX: '/index.html', // the client index file
    PORT: '54321', // server starting port
    CORS: true, // express.js usage of CORS
    LIMIT: 3, // express.js JSON maximum size (in KB)
    LOG: {
      FOLDER: 'server/logs', // folder to save the logs
      FILE: 'quick.log', // main log file
    },
  },
};
