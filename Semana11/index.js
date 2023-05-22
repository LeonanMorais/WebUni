/* Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Leonan Dias - 2110744
DATA: 15/05/2023 */

// Importa o módulo express e cria uma instância do mesmo
const express = require('express');
const app = express();

// Define o uso do middleware json e urlencoded do express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cria a classe BolsaModel que contém um array de objetos
// e métodos para realizar operações CRUD no array
class BolsaModel {
  constructor() {
    this.BolsaModel = [
      { id: 1, name: 'OVG', quantity: 2 },
      { id: 2, name: 'Fies', quantity: 1 },
    ];
  }

  getAllItems() {
    return this.BolsaModel;
  }

  getItemById(id) {
    return this.BolsaModel.find((item) => item.id === parseInt(id));
  }

  addItem(item) {
    const id = this.Bolsa.length + 1;
    const newItem = { id, ...item };
    this.Bolsa.push(newItem);
    return newItem;
  }

  updateItem(id, item) {
    const index = this.Bolsa.findIndex((item) => item.id === parseInt(id));
    if (index === -1) return null;
    const updatedItem = { id: parseInt(id), ...item };
    this.Bolsa[index] = updatedItem;
    return updatedItem;
  }

  deleteItem(id) {
    const index = this.Bolsa.findIndex((item) => item.id === parseInt(id));
    if (index === -1) return null;
    const deletedItem = this.Bolsa[index];
    this.Bolsa.splice(index, 1);
    return deletedItem;
  }
}

// Cria a classe BolsaController que contém métodos que serão
// utilizados nas rotas para executar as operações CRUD
class BolsaController {
  constructor(model) {
    this.model = model;
  }

  getAllItems(req, res) {
    const items = this.model.getAllItems();
    res.send(items);
  }

  getItemById(req, res) {
    const { id } = req.params;
    const item = this.model.getItemById(id);
    if (!item) return res.status(404).send({ message: 'Item não encontrado' });
    res.send(item);
  }

  addItem(req, res) {
    const { name, quantity } = req.body;
    const item = { name, quantity };
    const newItem = this.model.addItem(item);
    res.send({ message: 'Item adicionado com sucesso!', inputs: newItem });
  }

  updateItem(req, res) {
    const { id } = req.params;
    const { name, quantity } = req.body;
    const updatedItem = this.model.updateItem(id, { name, quantity });
    if (!updatedItem) return res.status(404).send({ message: 'Item não encontrado' });
    res.send({ message: 'Item atualizado com sucesso!', inputs: updatedItem });
  }

  deleteItem(req, res) {
    const { id } = req.params;
    const deletedItem = this.model.deleteItem(id);
    if (!deletedItem) return res.status(404).send({ message: 'Item não encontrado' });
    res.send({ message: 'Item excluído com sucesso!', inputs: deletedItem });
  }
}

// Cria uma instância da classe BolsaModel e da classe BolsaController
const BolsaModel     = new BolsaModel();
// Define as rotas para as operações CRUD utilizando os métodos da classe 
const BolsaController = new BolsaController(BolsaModel);

app.get('/api/Bolsa', BolsaController.getAllItems.bind(BolsaController));
app.get('/api/Bolsa/:id', BolsaController.getItemById.bind(BolsaController));
app.post('/api/Bolsa', BolsaController.addItem.bind(BolsaController));
app.put('/api/Bolsa/:id', BolsaController.updateItem.bind(BolsaController));
app.delete('/api/Bolsa/:id', BolsaController.deleteItem.bind(BolsaController));

// Define uma rota padrão para a página inicial do inventário
app.get('/', (req, res) => {
  res.send('Bem-vindo ao inventário familiar!');
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000!');
});