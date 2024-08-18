import 'dotenv/config';
import express from 'express';
import { grantRoutes } from './grant-routes.mjs';
import { userRoutes } from './user-routes.mjs';

const PORT = process.env.PORT;
const app = express();
//app.use(express.json());

app.use('/user', userRoutes)
app.use('/grants', grantRoutes)


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
