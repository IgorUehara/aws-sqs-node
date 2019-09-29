const aws = require("aws-sdk");

aws.config.loadFromPath(__dirname + "/config.json");

async function createQueue() {
	const sqs = new aws.SQS();

	const params = {
		QueueName: "MySecondQueue"
	};

	try {
		const data = await sqs.createQueue(params).promise();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}

createQueue();
