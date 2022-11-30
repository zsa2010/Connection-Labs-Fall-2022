const { response } = require('express');
const express = require('express')
let app = express()
app.use(express.json())
//DB initial code
let Datastore = require('nedb');
let db = new Datastore('response1.db');
db.loadDatabase();


app.use('/', express.static('public'))

app.post('/submission', (req, res) => {
	console.log(req.body)
    //inserting the users responses into the database
    db.insert(response, (err, newDocs)=> {
     console.log(newDocs)
    })
    db.find ({}, (err, docs)=>{
    if (err){
        res.json({task: 'task failed'})
    }else{
            res.json({task: docs})
        }
    })
       
    })
        
        //console.log('new document inserted');
      
        //console.log(docs);
      

const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log('listening at ', port)
})
