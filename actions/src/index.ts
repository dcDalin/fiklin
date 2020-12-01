import 'dotenv/config';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

import authRoutes from './routes/auth.routes';

const PORT = process.env.PORT || 4000;

(async () => {
  try {
    const app = express();

    const staticFiles = express.static(
      path.join(__dirname, '../../client/build'),
    );

    app.use(bodyParser.json());

    app.use(staticFiles);

    // tslint:disable-next-line: variable-name
    app.use('/api/auth', authRoutes);

    // all react routes
    app.use('/*', staticFiles);

    app.listen({ port: PORT }, () =>
      // tslint:disable-next-line: no-console
      console.log(
        `
        ################################################

        🚀 Server ready at http://localhost:${PORT} 🚀

        ################################################
        `,
      ),
    );
  } catch (e) {
    // tslint:disable-next-line: no-console
    console.error(e);
  }
})();
