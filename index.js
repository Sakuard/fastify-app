import dotenv from 'dotenv';
dotenv.config();
import fastify from 'fastify';
import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';
import { SwaggerTheme } from 'swagger-themes';
import itemRoutes from './routes/items.js';

const PORT = process.env.PORT
const app = fastify({ logger: true})

await app.register(swagger);
await app.register(itemRoutes)
app.register(swaggerUI, {
  theme: {
    css: [
      { filename: 'theme.css', content: new SwaggerTheme('v3').getBuffer('dark') }
    ],
  }
})

app.get('/',{
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string'},
        },
        require: ['hello']
      }
    }
  }
}, async () => {
  return { hello: 'world'}
});

await app.listen({ port: PORT})