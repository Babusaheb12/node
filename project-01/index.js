const express =require('express');

const users = require('./MOCK_DATA.json');

const app = express();
const PORT = 8000;

// ROUTS..
app.get("/", (req, res) => {
    res.send("Hello Babu Saheb 👋 Server is running!");
});



// HTML route this is a dummy rotes to show how we can send html as response in express
app.get("/users", (req, res) => {

    const html = `
        <ul>
            ${users.map(user => `<li>${user.first_name}</li>`).join("")}
        </ul>
    `;

    res.send(html);
});

/// this is a get api to get all users from the json file and send it as response in json format

app.get("/api/users", (req, res) => {
    res.json(users);
});

// app.get("/api/users/:id", (req, res) =>{
//     const id = Number(req.params.id);
//     const user =users.find(user => user.id === id);
//     return res.json(user);
// });

app.post("/api/users", (req, res) => {
// TODO: we will implement this later
/// CREATE A NEW USERS
return res.json({status: "panding"});
});


// app.patch("/api/users/:id", (req, res) => {
// // TODO: we will implement this later
// /// Edit users with id.
// return res.json({status: "panding"});
// });

app.route("/api/users/:id").get("/api/users/:id", (req, res) =>{
    const id = Number(req.params.id);
    const user =users.find(user => user.id === id);
    return res.json(user);
    
}).get((req, res) => {
    // TODO: we will implement this later
/// Edit users with id.
return res.json({status: "panding"});

}).patch((req, res) => {
    // TODO: we will implement this later
/// delete users
return res.json({status: "panding"});
});



// app.delete("/api/users/:id", (req, res) => {
// // TODO: we will implement this later
// /// delete users
// return res.json({status: "panding"});
// });


app.listen(PORT, () => console.log(`server started on PORT: ${PORT}`));