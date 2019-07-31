const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

const data = [
    {
        yaer: 2019,
        region: 'West',
        annual_income: 57.000,
        expensies: 6000
    },
    {
        yaer: 1998,
        region: 'Mid West',
        annual_income: 34.000,
        expensies: 5400
    },
    {
        yaer: 2018,
        region: 'North East',
        annual_income: 27.000,
        expensies: 3600
    },
    {
        yaer: 1995,
        region: 'South West',
        annual_income: 37.000,
        expensies: 5400
    },
    {
        yaer: 2000,
        region: 'South East',
        annual_income: 20.000,
        expensies: 5200
    },
];

app.get('/api/data', (req, res) => {
    res.send(data);
});

app.post('/api/data', (req, res) => {
    if (req.body.id !== undefined) data.push(req.body);
    res.status(201).json(data);
});

app.listen(5000, () => {
    console.log('Server listening on port 5000');
});