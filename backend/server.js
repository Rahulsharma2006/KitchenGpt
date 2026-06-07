const exprees = require('express');
const app = exprees();

app.listen(8080, () => {
    console.log('Server is running on port 8080');  
});
app.get('/',(req,res)=>{
   res.send('Server is Running');
});