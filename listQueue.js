const aws = require("aws-sdk");

aws.config.loadFromPath(__dirname + "/config.json");

async function listQueue() {
	const sqs = new aws.SQS();

	try {
		const data = await sqs.listQueues().promise();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}

listQueue();
