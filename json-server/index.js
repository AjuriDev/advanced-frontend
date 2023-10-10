const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const PORT = 8000;

const Delays = {
  NONE: 0,
  SHORT: 200,
  SECOND: 1000,
  SECOND_3: 3 * 1000,
  SECOND_10: 10 * 1000,
  MINUTE: 60 * 1000,
  INFINITY: 60 * 1000 * 1000,
}

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (
  req,
  res,
  next
) => {
  await new Promise((res) => {
    setTimeout(res, Delays.SECOND);
  });
  next();
});

// Эндпоинт для логина
server.post(
  '/login',
  (
  req,
  res
) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users = [] } = db;

    const userFromBd = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (userFromBd) {
      return res.json(userFromBd);
    }

    return res.status(403).json({ message: 'User not found' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

// проверяем, авторизован ли пользователь
server.use((
  req,
  res,
  next
) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }

  next();
});

server.use(router);

// запуск сервера
server.listen(PORT, () => {
  console.log(`server is running on ${PORT} port`);
});
