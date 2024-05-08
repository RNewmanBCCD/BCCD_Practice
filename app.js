// const http = require('http');
// const routes = require('./routes');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./util/path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/errors');
const app = express();

app.set('view engine', 'pug'); //Pug engine
// app.engine('handlebars', expressHbs);
// app.set('view engine', 'handlebars'); //handlebars engine
app.set('views', 'views');



/**
 * Middleware functions
 */

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use('/', shopRoutes);

app.use(errorController.error404);


/**
 * Server creation
 */

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);