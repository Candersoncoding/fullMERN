const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

require("./server/config/mongoose.config");

app.use(cors());
app.use(express.json(), express.urlencoded({extended: true}));

require("./server/routes/movie.routes")(app);

app.listen(port, ()=> console.log(`port ${port} is working and running`));
