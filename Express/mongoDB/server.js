const express = require("express");
const app = express();
const port = 8000;

reuires("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

require("./server/routes/rock.routes")(app);

app.listen(port, ()=> console.log(`Running on ${port}! Is the way I like to be!`));