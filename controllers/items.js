const items = require('../Items');

const getItems = (req, res) => {
  res.send(items)
}

const getItem = (req, res) => {
  const {id} = req.params;

  const item = items.find(item => item.id === id)

  res.send(item)
};

module.exports = {
  getItems,
  getItem
}