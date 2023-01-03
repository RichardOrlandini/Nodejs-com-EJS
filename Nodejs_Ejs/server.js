const express = require('express');
const app = express(); //estanciando e guardando nessa varivel app

// o app carrega tudo dentro do express, e estamos chamamos o set
app.set("view engine", "ejs"); // falando para o express como ele vai renderizar tudo

app.get("/", (req, res) =>{
    const items = [ 
        {title: ""}
    ];
    res.render("pages/index");
})

app.get("/sobre", (req, res) =>{
    res.render("pages/about");
})

app.listen(8080 , () => console.log("Estamos rodando"));


