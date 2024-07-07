const router = require("express").Router()
const fs = require("fs");

const readData = ()=>{
    return JSON.parse(fs.readFileSync("./data/favorites.json"));
}
const writeData = (data)=>{
    fs.writeFileSync("./data/favorites.json", JSON.stringify(data));
}


router.get("/", (req, res)=>{
    const products = readData();
    res.render("favorites", {products})
})

module.exports = router;