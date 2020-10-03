const express = require('express');
const fs = require('fs');
const { Parser } = require('json2csv');

const app = express();
const querys = require('./querys.js')

app.get("/java", async (req, res) => {
	let fileCsv = '';
	const response = await querys.java()
	console.log(response)
	const parser = new Parser(response);
	console.log(response.data.search.nodes)
	const csv = parser.parse(response.data.search.nodes);
	fileCsv += csv
	fs.writeFile('./csv/java.csv', fileCsv, function (err) {
    if (err) return console.log(err);		
	  console.log('CSV salvo com sucesso');
	  res.send('CSV salvo com sucesso')
	})
});

app.get("/python", async (req, res) => {
	let fileCsv = '';
	const response = await querys.python()
	console.log(response)
	const parser = new Parser(response);
	console.log(response.data.search.nodes)
	const csv = parser.parse(response.data.search.nodes);
	fileCsv += csv
	fs.writeFile('./csv/python.csv', fileCsv, function (err) {
    if (err) return console.log(err);		
	  console.log('CSV salvo com sucesso');
	  res.send('CSV salvo com sucesso')
	})
});


app.listen(3001);

console.log('Running a API server at http://localhost:3001/');