const express = require('express');
const app = express();
const DATABASE_HOST = process.env.DATABASE_HOST;

app.get('/health', (req, res) => {
    res.status(200).json({status: 200});
});

app.get('/data-base', (req, res) => {
    res.status(200).json({port: DATABASE_HOST});
})

app.listen(3000, () =>{
    console.log('Porta 3000. started in ' + new Date());
})