import { v4 as uuidv4 } from 'uuid'
// const { v4:uuidv4 } = require('uuid');
import items from '../Items.js';
// let items = require('../Items');

export const getItems = (req, res) => {
  res.send(items)
}

export const getItem = (req, res) => {
  const {id} = req.params;

  const item = items.find(item => item.id === id)

  res.send(item)
};

export const addItem = (req, res) => {
  const {name} = req.body
  const item = {
    id: uuidv4(),
    name
  }

  items = [...items, item];

  res.code(201).send(item)
}

export const deleteItem = (req, res) => {
  const {id} = req.params;

  items = items.filter(item => item.id !== id);

  res.send({message: `Item ${id} has been removed`})
}

export const updateItem = (req, res) => {
  const {id} = req.params;
  const {name} = req.body

  items = items.map(item => (item.id === id? {id, name}
    : item));

  item = items.find((item) => item.id === id);

  res.send(item)
}

// module.exports = {
//   getItems,
//   getItem,
//   addItem,
//   deleteItem,
//   updateItem
// }