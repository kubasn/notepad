const express = require("express");
const app = express();
const { port } = require("./config");
const apiRouter = require("./routes/api");

//mówię aplikacji by użtwała api, dodaje wcześniej do wszystkich ścieżek api
//niech dołącza nasz router wszystkie nasze ścieżki do głównej domeny naszego projektu
//router- ścieżki
app.use("/", apiRouter);

//serwer ma słuchać połączen przychodzących na porcie 3000, w momencie gdy
//serwer zacznie słuchać konsoluje sobie

//serwer
app.listen(port, () => {
  console.log(`serwer is running... port ${port}`);
});
