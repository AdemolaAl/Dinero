const express = require('express');
const app = express();
const PORT = 3000;

app.use('/public', express.static(process.cwd() + '/public'));
app.use('/Pictures', express.static(process.cwd() + '/Pictures'));


app.get('/', (req, res)=>{ 
    res.sendFile(__dirname+ "/views/index.html")
});

app.listen(PORT, (error) =>{ 
	if(!error) 
		console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
	else
		console.log("Error occurred, server can't start", error); 
	} 
); 
