import express from 'express';
import { existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, 'dist');
const app = express();
const port = Number(process.env.PORT || 4173);

if (!existsSync(dist)) {
  console.error('Corre npm run build primeiro.');
  process.exit(1);
}

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});
app.use(express.static(dist));
app.get('*', (_req, res) => {
  res.sendFile(join(dist, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`ESPÓRICA pública em http://0.0.0.0:${port}`);
});
