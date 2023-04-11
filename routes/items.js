
const items = require('../Items')

// Options for get all items
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: 'array', 
        items: {
          type: 'object',
          properties: {
            // id: {type: 'integer'},
            id: {type: 'string'},
            name: {type: 'string'}
          }
        }
      }
    }
  }
}

const getItemOpts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          id: {type: 'string'},
          name: {type: 'string'}
        }
      }
    }
  }
}
function itemRoutes (fastify, options, done) {
  // Get all items
  fastify.get('/items', getItemsOpts, (req, res) => {
    res.send(items)
  });
  // Get single item
  fastify.get('/items/:id', getItemOpts, (req, res) => {
    const {id} = req.params;
  
    const item = items.find(item => item.id === id)
  
    res.send(item)
  });

  done();
}

module.exports = itemRoutes