const aws = require("aws-sdk");

aws.config.loadFromPath(__dirname + "/config.json");
const queueUrl = "YOUR_URL";

async function sendMessageQueue() {
	const sqs = new aws.SQS();

	const params = {
		MessageBody: "Hello world!",
		QueueUrl: queueUrl,
		DelaySeconds: 0
	};

	try {
		const data = await sqs.sendMessage(params).promise();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}

sendMessageQueue();
