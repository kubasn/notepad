const express = require("express");
const app = express();
const { port } = require("./config");
const apiRouter = require("./routes/api");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
//baza danych
require("./database/mongoose");

//parsery-w jaki sposób aplikacja ma przetwarzac pewne pola, dzięki temu będziemy
//mogli obsłuzyć dane których content-type to application/json
app.use(bodyParser.json());

//mówię aplikacji by użtwała api, dodaje wcześniej do wszystkich ścieżek api
//niech dołącza nasz router wszystkie nasze ścieżki do głównej domeny naszego projektu
//router- ścieżki
//dodaje api do początku każdej ścieżki z apiRouter
app.use("/api", apiRouter);

//serwer ma słuchać połączen przychodzących na porcie 3000, w momencie gdy
//serwer zacznie słuchać konsoluje sobie

//cors fix

//serwer
app.listen(port, () => {
  console.log(`serwer is running... port ${port}`);
});
