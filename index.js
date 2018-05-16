const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
	axios.get('http://tut-service-two:8080/')
		.then(response => {
			res.send(response.data);
		})
		.catch(error => {
			res.send(error)
		})
})

app.listen(8080, () => console.log('Example app listening on port 3000!'))
