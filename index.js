const express = require('express')

// Put this statement near the top of your module
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 4001 // this should be automatically set on heroku

const webhook = (req, res) => {
	console.log(req.body)
	res.status(200).json({ message: 'ok' })
}

app.post('/hi', webhook);
app.listen(port, () => console.log(`Listening on port ${port}!`))