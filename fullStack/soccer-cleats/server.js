const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

require("./server/config/mongoose.config");

app.use(cors());
app.use(express.json(), express.urlencoded({extended: true}));

require("./server/routes/soccer-cleats.routes")(app);

app.listen(port, ()=> console.log(`port ${port} is working and running`));
