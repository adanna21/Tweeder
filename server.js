/* setting up express */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

/* setting up port & listen */
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

/* setting up logger */
app.use(logger('dev'));
/* setting up body parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/* setting routes */
/* ====================== INDEX ROUTE ========= */
// add routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

/* tweeds API route */
const tweedRoutes = require('./routes/tweedroutes');
app.use('/api/tweeds', tweedRoutes);

/* handling 404 */
app.get('*', function(req, res) {
  res.status(404).send({message: 'Oops! Not found.'});
});