const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.static('src'));

app.get('/', (req, res)=>{
    res.send('Hello')
    res.sendFile('/src/Contact.html')
})

app.listen(PORT,()=>{
console.log(`server running on port ${PORT}`);
})