const Board = require("./board")
const Player = require("./player")

var mainBoard = null
function createNewBoard() {
      if (mainBoard != null) {
        return mainBoard;
      }
       return new Board();
    }

class Game{
    constructor(nameOfPlayer1, nameOfPlayer2){
        this.board = createNewBoard()
        this.players = [new Player(nameOfPlayer1, "X"), new Player(nameOfPlayer2, "y")]
        this.turn = 0
        this.checkWin = 0
    }

    checkResult(mark){
        if(mark == this.players[0].mark){
            console.log("Winner is : ",this.players[0].name)
            return 1
        }
        if(mark == this.players[1].mark){
            console.log("Winner is : ",this.players[1].name)
            return 1
        }
        return 0
    }

    resultAnalyzer(){
        let mark = this.board.checkHorizontal()
        this.checkWin = this.checkResult(mark)
        if(this.checkWin==1){
            return
        }

        mark = this.board.checkVertical()
        this.checkWin = this.checkResult(mark)
        if(this.checkWin==1){
            return
        }

        mark = this.board.checkDiagonals()
        this.checkWin = this.checkResult(mark)
        if(this.checkWin==1){
            return
        }

        if(mark == null && this.turn == 9){
            console.log("Game is draw")
        }
        return
    }

    play(cellNumberToBeMarked){
        if(cellNumberToBeMarked < 0 || cellNumberToBeMarked > 8){
            console.log('Cell Number must be between 0 and 8')
            return
        }
        if(this.board.cells[cellNumberToBeMarked].isMarked()){
            console.log("Cell already marked")
            return
        }
        if(this.turn>9 || this.checkWin==1){
            console.log("Game already over")
            return
        }

        if(this.turn%2==0){
            this.board.cells[cellNumberToBeMarked].markCell(this.players[0])
            this.turn++
        }
        else{
            this.board.cells[cellNumberToBeMarked].markCell(this.players[1])
            this.turn++
        }

        this.resultAnalyzer()

        if(this.turn==9 || this.checkWin==1){
            console.log("Game over")
        }
        return        
    }
}

module.exports = Game