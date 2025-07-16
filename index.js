require('dotenv').config() // --> ye hum top par he rakh te hai and ye hum ne apne application ko production ready karna ka liya kiya hai.

const express = require("express"); // ye hum ne 'express' import kar liya hai application ke andar and now we can use it.

const app = express();
// basically through this express ke sari functionality utha kar hum ne app variable ko da de hai.

const port = 3000; // ye hamra virtual port hai.

// Now Get Request kar lo
// Syntax :
// app.get('url' , callback);
// Note : Callback() ke andar 2 parameter hoga allways first is req(request) and second is res(response)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("codeurge__");
});

app.get("/login", (req, res) => {
  res.send('<h1>Please Login at chai aur code</h1>');
}); // --> abhe ye run nhi karaa ga ku ke hua kya hai actually mera code server mein nhi pucha hai --> to ab usko server mein pucha na ke liya hum kya kara ga ke server ko band kar kar dobara se run kara ga 

app.get('/youtube' , (req,res) => {
    res.send('<h2>Chai aur code</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
