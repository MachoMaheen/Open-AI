const express = require("express");
const bodyParser = require("body-parser");
const openai = require("openai");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Set the OpenAI API key
openai.apiKey = "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";

app.post("/question", (req, res) => {
  const question = req.body.question;
  openai.Completion.create({
    engine: "text-davinci-002",
    prompt: question,
    temperature: 0.5,
  })
    .then((response) => {
      res.send(response.choices[0].text);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
