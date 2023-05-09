const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// modelo de dados para agenda
let schedules = [];

// middleware para analisar solicitações JSON
app.use(bodyParser.json());

// rota para criar uma nova agenda
app.post('/schedules', (req, res) => {
  const data = req.body;
  schedules.push(data);
  res.json({ message: 'Agenda criada com sucesso.' });
});

// rota para obter todas as agendas
app.get('/schedules', (req, res) => {
  res.json(schedules);
});

// rota para obter informações de uma agenda específica
app.get('/schedules/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const schedule = schedules.find(schedule => schedule.id === id);
  if (schedule) {
    res.json(schedule);
  } else {
    res.status(404).json({ message: 'Agenda não encontrada.' });
  }
});

// rota para atualizar as informações de uma agenda
app.put('/schedules/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const schedule = schedules.find(schedule => schedule.id === id);
  if (schedule) {
    const data = req.body;
    Object.assign(schedule, data);
    res.json({ message: 'Agenda atualizada com sucesso.' });
  } else {
    res.status(404).json({ message: 'Agenda não encontrada.' });
  }
});

// rota para excluir uma agenda
app.delete('/schedules/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = schedules.findIndex(schedule => schedule.id === id);
  if (index !== -1) {
    schedules.splice(index, 1);
    res.json({ message: 'Agenda excluída com sucesso.' });
  } else {
    res.status(404).json({ message: 'Agenda não encontrada.' });
  }
});

// porta do servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor em execução na porta ${PORT}.`);
});