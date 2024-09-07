import express from 'express';
import { createServer } from 'http';
import { handler } from './build-node/handler.js';
import { log } from 'console';
import cron from 'node-cron';
import { fetchInstagramLatestData } from './modules/main.js';


const port =  3000;
const app = express();
const server = createServer(app);

app.use(`/uploads`, express.static("uploads"));
app.use(handler);

cron.schedule('0 0 2 * * *', async () => {
    run()
});


const run = async()=>{
    console.log("Fetching started")
    await fetchInstagramLatestData()
    console.log("Fetch ended")
}

run()

server.listen(port, () => {
  log('listening on port', port);
});

