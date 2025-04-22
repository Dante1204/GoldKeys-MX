const sequelize = require('./config/db');

async function init() {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida con MySQL');
    await sequelize.sync({ force: true });
    console.log('Modelos sincronizados con la base de datos');
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
  }
}

init();