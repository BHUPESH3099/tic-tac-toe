var mainBoard = null

class Board{
    constructor(){
        this.cells = []
        for(let i = 0; i<9; i++){
            this.cells[i] = new Cell()
        }
    }

    checkRows(){
        if(this.cells[0].mark == this.cells[1].mark && this.cells[0].mark == this.cells[2].mark && this.cells[0].mark != null){
            return this.cells[0].mark
        }
        if(this.cells[3].mark == this.cells[4].mark && this.cells[3].mark == this.cells[5].mark && this.cells[3].mark != null){
            return this.cells[3].mark
        }
        if(this.cells[6].mark == this.cells[7].mark && this.cells[6].mark == this.cells[8].mark && this.cells[6].mark != null){
            return this.cells[6].mark
        }
        return null
    }

    checkColumns(){
        if(this.cells[0].mark == this.cells[3].mark && this.cells[0].mark == this.cells[6].mark && this.cells[0].mark != null){
            return this.cells[0].mark
        }
        if(this.cells[1].mark == this.cells[4].mark && this.cells[1].mark == this.cells[7].mark && this.cells[1].mark != null){
            return this.cells[1].mark
        }
        if(this.cells[2].mark == this.cells[5].mark && this.cells[2].mark == this.cells[8].mark && this.cells[2].mark != null){
            return this.cells[2].mark
        }
        return null
    }

    checkDiagonals(){
        if(this.cells[0].mark == this.cells[4].mark && this.cells[0].mark == this.cells[8].mark && this.cells[0].mark != null){
            return this.cells[0].mark
        }
        if(this.cells[2].mark == this.cells[4].mark && this.cells[2].mark == this.cells[6].mark && this.cells[2].mark != null){
            return this.cells[2].mark
        }
        return null
    }
}

function creteNewBoard(){
    if(mainBoard!=null){
        return mainBoard
    }
    return new Board()
}

class Player{
    constructor(name, mark){
        this.name = name
        this.mark = mark
    }
}

class Cell{
    constructor(){
        this.mark = null
    }

    isMarked(){
        return (this.mark!=null)
    }
    markCell(player){
        this.mark = player.mark
    }
}

class Game{
    constructor(nameOfPlayer1, nameOfPlayer2){
        this.board = creteNewBoard()
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
        let mark = this.board.checkRows()
        this.checkWin = this.checkResult(mark)
        if(this.checkWin==1){
            return
        }

        mark = this.board.checkColumns()
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
        if(cellNumberToBeMarked<0 || cellNumberToBeMarked>8){
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

let newGame = new Game("abc", "xyz")

// newGame.play(0)
// newGame.play(4)
// newGame.play(1)
// newGame.play(5)
// newGame.play(2)

