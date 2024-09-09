import express from 'express';
import { createServer } from 'http';
import { handler } from './build-node/handler.js';
import { log } from 'console';
import cron from 'node-cron';
import { run } from './modules/main.js';
import middlewares from './modules/middlewares/index.js';

const port =  3000;
const app = express();
const server = createServer(app);


app.use(`/uploads`, express.static("uploads"));
middlewares(app, import.meta.dirname);

app.use(handler);

cron.schedule('0 0 2 * * *', async () => {
    fetchInstagramData()
});


const fetchInstagramData = async()=>{
    console.log("Fetching started")
    await run()
    console.log("Fetch ended")
}


fetchInstagramData()


server.listen(port, () => {
  log('listening on port', port);
});

