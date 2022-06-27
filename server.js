// Importing express module to create a web server called app
const express = require('express')
// Creating web server 
const app = express()
// The Port that web server should start on
const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log('Listening on http://localhost:' + port));

// parseing incoming JSON requests and puts the parsed data in req. body
app.use(express.json())


app.post('/', (req, res) => {
  const { data } = req.body;
  let word_frequency = new Map();
  const wordArray = data.split(" ");
  for (let i = 1; i <= 10; i++)
    word_frequency.set(i, 0)

  wordArray.forEach(word => {
    const wl = word.length
    const wf = word_frequency.get(wf);
    word_frequency.set(wl, wf + 1)

  });

  const frequency = Object.fromEntries(word_frequency)

  res.send(frequency)

})