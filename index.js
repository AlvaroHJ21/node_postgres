const express = require('express');
const routerApi = require('./routes');
const morgan = require('morgan');
const cors = require('cors');

const {
  logErrors,
  errorHandler,
  boomErrorHabdled,
} = require('./middlewares/error.handle');

const app = express();

const port = process.env.PORT || '3000';

app.use(express.json());

app.use(morgan('tiny'));

const whiteList = [];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  },
};
// app.use(cors(options));
app.use(cors());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHabdled);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Corriendo en el puerto: ' + port);
});
