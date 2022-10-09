const filesys = require("fs");
const pathsys = require("path");
const http = require("http");
const expressmod = require("express");
const path = require("path");

const app = expressmod();
app.get("/", (requested, responses) => {
    const mainPageFile = pathsys.join(__dirname, "../public/index.html");
    const membacaFile = filesys.readFileSync(mainPageFile, "utf-8");
    responses.send(membacaFile);
    switch(requested.url){
        case "/cars":
            responses.writeHead(200);
            responses.end(app("carimobil.html"))
            return;
    }
})

class cari{
    constructor(){
        this.cariMobil = document.getElementById("search-car");
}
}




app.use(expressmod.static(pathsys.join(__dirname, "../public")))

app.listen(8000, () => {
    console.log(`Ur server running on port ${8000}`)
});
