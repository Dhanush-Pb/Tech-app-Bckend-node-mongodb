const app = require('./app');
const db=require('./config/db');
const port = 3000;
const usermodel =require('./model/usermodel');
const ToduModel =require('./model/tudumodel');
app.get('/',(req,res)=>{ 
  res.send('hello world !!!!!!');
});
app.listen(port, () => { 
  console.log(`Server listening on port http://localhost:${port}`);
});
