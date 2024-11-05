const http = require('node:http');
const express = require('express');
const cors = require('cors');
var emojiStrip = require('emoji-strip');
const LanguageDetect = require('languagedetect');
const langDetect = new LanguageDetect();
langDetect.setLanguageType('iso2');

const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
    let sen = req.body.sentance
    let asp = req.body.aspect

    sen = sen.map(sentence => emojiStrip(sentence.replace(/\n/g, ' ')));
    console.log(sen);

    const result = {
        verdict: "positive",
    };

    res.json(result);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
