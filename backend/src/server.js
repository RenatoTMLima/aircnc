const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const mongoose = require('mongoose');

const app = express();

//colocar conexão de banco aqui

app.use(cors());

app.use(express.json());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(routes);

app.listen(3333);