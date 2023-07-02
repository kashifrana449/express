const cluster = require('cluster')
const os = require('os')
const fs = require('fs')

if (cluster.isMaster) {
	let numCPUs = os.cpus().length;
	numCPUs = (numCPUs < 2) ? 2 : numCPUs;
	for (let i = 0; i < numCPUs; i++) {
		console.log(`slave process: ${i}`);
		cluster.fork();
	};

	cluster.on('exit', (worker, code, signal) => {
		console.log(`LoggingService worker process killed: ${worker.process.pid}`);
	});
}
else {
	const rest = require('./services/rest')();
	return Promise.all([rest]);
}

