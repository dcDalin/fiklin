import path from 'path';
import express from 'express';

const PORT = process.env.PORT || 4000;

(async () => {
  try {
    const app = express();

    const staticFiles = express.static(
      path.join(__dirname, '../../client/build'),
    );

    app.use(staticFiles);

    // tslint:disable-next-line: variable-name
    app.get('/api/v1/test', (_req, res) => {
      res.send('hello');
    });

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
