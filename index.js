const express = require('express')
const app = express()
const port=5000

let movies = [
{
    id:"1",
    title:"inception",
    director:"nolan",
    relese_date:"2010-2-2"
},
{
    id:"2",
    title:"irishman",
    director:"martin",
    relesedate:"2019-5-1"
}
]

//get api movie list
app.get('/movie',(req,res)=>{
    res.json(movies)
})

//add movie to the list
app.post('/movie',(req,res)=>{
    const movie = req.body
    
    console.log(movie)
    movies.push(movie)
    res.send("movie added")
})

// search movie
app.get('/movie/:id',(req,res)=>{
    const id = req.params.id

    for(let movie of movies){
        if(movie.id ===id){
            res.json(movie)
            return
        }
    }
    res.status(400).send('movie not found')
})

app.listen(port, () => console.log(`Listening on port ${port}`)); 