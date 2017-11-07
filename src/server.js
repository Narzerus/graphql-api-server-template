import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import morgan from 'morgan';
import { formatError } from 'apollo-errors';

import './startup';
import schema from './graphql/schema';
import './db';

function parseSessionToken(authHeader) {
  return authHeader.split('Bearer ')[1];
}

const PORT = process.env.PORT;
const app = express();

app.use(cors());

const middleware = [
  bodyParser.json(),
  morgan('Auth :req[authorization] - :status :response-time ms'),
  graphqlExpress(request => {
    const sessionToken = request.headers.authorization
      ? parseSessionToken(request.headers.authorization)
      : null;
    return {
      schema,
      context: {
        sessionToken,
      },
      formatError,
    };
  }),
];

app.use('/graphql', ...middleware);
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.listen(PORT);

// eslint-disable-next-line no-console
console.log(`
== Created graphql server ==
PORT: ${PORT}
`);
