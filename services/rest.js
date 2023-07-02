const usersRoutes = require('../apps/users/routes');

module.exports = () => {
	const express = require('express');
	const app = express();
	app.use([usersRoutes]);
	return new Promise(resolve => {
		const server = app.listen(8002, () => {resolve(server);});
	});
	
};
