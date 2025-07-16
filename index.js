require('dotenv').config() // --> ye hum top par he rakh te hai and ye hum ne apne application ko production ready karna ka liya kiya hai.

const express = require("express"); // ye hum ne 'express' import kar liya hai application ke andar and now we can use it.

const app = express();
// basically through this express ke sari functionality utha kar hum ne app variable ko da de hai.

const port = 3000; // ye hamra virtual port hai.

const githubData = {
  "login": "codeurge123",
  "id": 174909202,
  "node_id": "U_kgDOCmznEg",
  "avatar_url": "https://avatars.githubusercontent.com/u/174909202?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/codeurge123",
  "html_url": "https://github.com/codeurge123",
  "followers_url": "https://api.github.com/users/codeurge123/followers",
  "following_url": "https://api.github.com/users/codeurge123/following{/other_user}",
  "gists_url": "https://api.github.com/users/codeurge123/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/codeurge123/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/codeurge123/subscriptions",
  "organizations_url": "https://api.github.com/users/codeurge123/orgs",
  "repos_url": "https://api.github.com/users/codeurge123/repos",
  "events_url": "https://api.github.com/users/codeurge123/events{/privacy}",
  "received_events_url": "https://api.github.com/users/codeurge123/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "code_urge",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 15,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2024-07-06T21:42:55Z",
  "updated_at": "2025-05-19T15:49:34Z"
}

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

app.get('/github', (req,res)  => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
