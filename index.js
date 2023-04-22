const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const Catagorys = require('./Data/Catagorys.json')
const news = require('./Data/News.json');



app.use(cors());


app.get('/',(req, res)=>{
res.send('dragon is running ')

} );

app.get('/categories',(req, res)=>{
    res.send(Catagorys);

})

// All news
app.get('/news', (req,res )=>{
    res.send(news)
})

// specific id news
app.get('/news/:id', (req, res)=>{
    const id= req.params.id;
    console.log(id);
    const selectedNews = news.find(n=>n._id === id);
    res.send(selectedNews)
})


// category news
app.get('/categories/:id', (req, res)=>{
    const id = parseInt(req.params.id)

    if(id === 0){
        res.send(news)
    }
    else{
        const categoryNews = news.filter(n=>parseInt(n.category_id) === id);
        res.send(categoryNews)
    }
   
})

app.listen(port,()=>{
    console.log(`dragon api is running on port : ${port}`)
})