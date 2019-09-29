const aws = require("aws-sdk");

aws.config.loadFromPath(__dirname + "/config.json");
const queueUrl = "YOUR_URL";

async function receiveQueue() {
	const sqs = new aws.SQS();

	const params = {
		QueueUrl: queueUrl,
		VisibilityTimeout: 600
	};

	try {
		const data = await sqs.receiveMessage(params).promise();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}

receiveQueue();
