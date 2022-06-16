const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
app.use(cors())
app.use(bodyParser.json())
const Player = require("./view/player")
const Cell = require("./view/cell")
const Game = require("./view/game")
const Board = require("./view/board")

let newGame

app.post("/api/v1/game", (req,resp) => {
    let PlayerName1 = req.body.nameOfPlayer1
    let PlayerName2 = req.body.nameOfPlayer2

    if(typeof PlayerName1 != "string" || typeof PlayerName2 != "string"){
        resp.status(406).send("Enter Valid Input")
        return
    }
    newGame = new Game(PlayerName1, PlayerName2)
    
    resp.status(200).send(newGame)
})

app.post("/api/v1/playRound", (req, res) => {
    let cellNumber = req.body.cellNumber
    newGame.play(cellNumber)

    res.status(200).send(newGame.board)
})




app.listen(9000, () =>{
    console.log("Start server 9000")
})