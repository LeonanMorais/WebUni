//Curso de Engenharia de Software - UniEVANGÉLICA 
//Disciplina de Programação Web 
//Dev: Leonan Dias De Morais - 2110744
//DATA: 09/05/2023

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// modelo de dados para pacientes
let patients = [];

// middleware para analisar solicitações JSON
app.use(bodyParser.json());

// rota para criar um novo paciente
app.post('/patients', (req, res) => {
  const data = req.body;
  patients.push(data);
  res.json({ message: 'Paciente criado com sucesso.' });
});

// rota para obter todos os pacientes
app.get('/patients', (req, res) => {
  res.json(patients);
});

// rota para obter informações de um paciente específico
app.get('/patients/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const patient = patients.find(patient => patient.id === id);
  if (patient) {
    res.json(patient);
  } else {
    res.status(404).json({ message: 'Paciente não encontrado.' });
  }
});

// rota para atualizar as informações de um paciente
app.put('/patients/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const patient = patients.find(patient => patient.id === id);
  if (patient) {
    const data = req.body;
    Object.assign(patient, data);
    res.json({ message: 'Paciente atualizado com sucesso.' });
  } else {
    res.status(404).json({ message: 'Paciente não encontrado.' });
  }
});

// rota para excluir um paciente
app.delete('/patients/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = patients.findIndex(patient => patient.id === id);
  if (index !== -1) {
    patients.splice(index, 1);
    res.json({ message: 'Paciente excluído com sucesso.' });
  } else {
    res.status(404).json({ message: 'Paciente não encontrado.' });
  }
});

// porta do servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor em execução na porta ${PORT}.`);
});