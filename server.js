const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    `<h2>99 Bottles of Beer on the Wall</h2><a href ="/98">Take one down, Pass it around!</a>`
  );
});
app.get("/:number_of_bottles", (req, res) => {
  if (req.params.number_of_bottles <= 0) {
    res.send(
      `<h2>No more bottles of beer on the wall! Maybe Next Time.</h2> <a href = "/"> start over</a>  `
    );
  } else {
    res.send(
      `${
        req.params.number_of_bottles
      } Bottles of Beer on the Wall! <br></br><a href ="/${
        req.params.number_of_bottles - 1
      }">Take one down, Pass it around!</a>`
    );
  }
});

app.listen(port, () => {
  console.log(`App running at port ${port}`);
});
