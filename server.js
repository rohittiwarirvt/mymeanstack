// Start Server on Specified Port
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: `${__dirname}/config.env` });

const app = require('./app');

const DB = process.env.DB_CLOUD_CONN_STRING.replace(
  '<password>',
  process.env.DB_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  // eslint-disable-next-line no-console
  .then(() => console.log(`Db connection successfully`));

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
  // eslint-disable-next-line no-console
  console.log(`Server Started and Listening on Port: ${PORT}`);
});
