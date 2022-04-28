// === imports == //
import express from 'express';
import bodyParser from 'body-parser';
import { router } from './routers';

// === initialisation == //
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/", router);

// === run app == //
app.listen(8000, () => console.log(`Example app running!`));