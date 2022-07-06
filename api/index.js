
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {cargarTypes} = require('./src/controllers/type.controller.js');


// Syncing all the models at once.
conn.sync().then(() => {
  server.listen(3001, () => {
    cargarTypes();
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
