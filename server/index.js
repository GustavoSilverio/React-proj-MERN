const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const GiriaModel = require("./models/giria");
const NomepropModel = require("./models/nomeprop")

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://gustavo:gustavo123@react-mern.bbjpc3k.mongodb.net/vocabulario?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,

    }
);

// GIRIAS

app.post('/insert', async (req, res) => {

    const word = req.body.word //values that we wrote on front end

    const giria = new GiriaModel({ word: word });

    try {
        await giria.save();
        res.send("inserted data");
    } catch (err) {
        console.log(err);
    }
});

app.get('/read', async (req, res) => {
    GiriaModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }

        res.send(result);
    })

});

app.put('/update', async (req, res) => {

    const newWord = req.body.newWord; //values that we wrote on front end
    const id = req.body.id; //values that we wrote on front end

    try {
        await GiriaModel.findById(id, (err, updatedWord) => {
            updatedWord.word = newWord;
            updatedWord.save();
            res.send("update");
        });
    } catch (err) {
        console.log(err);
    }
});

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;


    await GiriaModel.findByIdAndRemove(id).exec();
    res.send("deleted");
});



// NOMES PROPRIOS

app.post('/insert1', async (req, res) => {

    const word = req.body.word //values that we wrote on front end

    const nomeprop = new NomepropModel({ word: word });

    try {
        await nomeprop.save();
        res.send("inserted data");
    } catch (err) {
        console.log(err);
    }
});

app.get('/read1', async (req, res) => {
    NomepropModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }

        res.send(result);
    })

});

app.put('/update1', async (req, res) => {

    const newWord = req.body.newWord; //values that we wrote on front end
    const id = req.body.id; //values that we wrote on front end

    try {
        await NomepropModel.findById(id, (err, updatedWord) => {
            updatedWord.word = newWord;
            updatedWord.save();
            res.send("update");
        });
    } catch (err) {
        console.log(err);
    }
});

app.delete("/delete1/:id", async (req, res) => {
    const id = req.params.id;


    await NomepropModel.findByIdAndRemove(id).exec();
    res.send("deleted");
});


app.listen(3001, () => {
    console.log('Server running on port 3001...')
});