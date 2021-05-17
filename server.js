const express = require('express')
const app = express()
const port = 3000

const db = require('./server/db');

const run = async () => {
    await db.connect();
    
    app.use('/', express.static(__dirname + '/public'));
    
    app.get('/api/questions', async (req, res) => {
        const questions = await db.getQuestions();
        res.send({questions})
    })
    
    app.listen(port, () => {
      console.log(`Example app listening at ${port}`);
    });

    // db.addQuestion({
    //     question: '77+77',
    //     answers:[5454,54546, 154],
    //     correct: 2
    // })
}

run();
