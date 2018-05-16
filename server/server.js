const express = require('express');
const app = express();
const port = 3030;
const bodyParser = require('body-parser');
const messagesCtrl = require('./controllers/messages');

let messages = [];

app.use(bodyParser.json()); 
                    // Request  / Response 
app.get('/api/msg', messagesCtrl.list);
// app.get('/api/msg/:id', messagesCtrl.read);
app.post('/api/msg', messagesCtrl.create);
// app.put('/api/msg/:id', messagesCtrl.update);
// app.delete('/api/msg/:id', messagesCtrl.delete);

            // : params required things for endpoint to work
app.get('/api/msg/:name/:message', (req, res)=>{
  console.log(`${req.params.name} said ${req.params.message}`)
  res.send('Thanks for particpating');
})

app.get('/api/msg/:name', (req, res)=>{
  console.log(req.query);
  if (typeof req.query.exclamation === "string"){
    console.log(`${req.params.name} yelled ${req.query.exclamation.toUpperCase()}`)
    return res.status(200).send('THANKS FOR PARTICIPATING');
  }
  return res.status(400).send('Hey there was an error, please fix');
})


// axios.post('/api/msg', 
//   {name:'Brack', message:'Sushi is the best.'});

app.listen(port, ()=>{
  console.log("Listening on port: " + port);
})

// //this is how you bring thing in in ES6
// const express = require('express');
// const app = express();
// //you can use ports over 3000 to stay safe TCP/UDP port
// const port = 3030; 
// //this module is middleware to return stuff to the client in the body 
// const bodyParser = require('body-parser')

// let messages = [];

// app.use(bodyParser.json());

//                         //req=request res=response 
// app.get('/api/msg/yeah/boi', (req, res)=>{
//     console.log('you hit me, the sever');
//     console.log(req.url);
//     //send info through perameters , a query, a body , thoe are the 3 ways to send info back to the client 
//     res.send('greeting fellow traveler');
// });
//     //   : indicates params
// app.get('/api/msg/:name/:message',(req,res)=>{
//     console.log(`${req.params.name} said ${req.params.message}`)
//     res.send(`${req.params.name} thanks for talking to me`)
// })
//     //req.query.words  is going to give back what the the client sent in the URL under :name?words=blah
//     //you can conactonate with &       
// app.get('/api/msg/:name', (req,res)=>{
//     if(req.query.words===""){
//     console.log(`${req.params.name} yelled ${req.query.words}`)
//     res.status(200).send(req.params)
//     }else{
//         // res.send('gitgood at sp3ll1ng')
//         res.status(400).send('wut u want')
//     }
// })

// app.post('/api/msg', (req,res)=>{
//     console.log(`${req.body.name} said ${req.body.info}`)
//     res.send('you got it dood!')
// })

// // axios.post('/api/msg', 
// //   {name:'Brack', message:'Sushi is the best.'});

// app.listen(port, ()=>{
//     console.log('listening on port'+port);
// })