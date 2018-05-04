const Chalk = require('chalk');
const Hapi = require('hapi');
const Routes = require('./routes');
const Configuration = require('./config');

const connection = {
    host: Configuration.server.host,
    port: Configuration.server.port
};

async function setup() {
    const server = Hapi.server(connection);
    await server.route(Routes);
    await server.start();

    console.log(
        `${Chalk.blue('onitama-server')}` +
        ` is running at ` +
        `${Chalk.yellow(server.info.uri)}!`
    );
}

setup();