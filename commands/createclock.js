//FS is needed for saving/loading
const fs = require('fs');

module.exports = {
	name: 'createclock',
	description: 'Creates a timer for a depth!',
	execute(message, args) {
		console.log("Executed " + args);
	},
};
