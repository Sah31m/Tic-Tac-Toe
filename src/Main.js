 

// Variables
var Game_ = null

// Classes
class GridClass {
    
    constructor(Parent){

        this.Parent = Parent
        this.Cells = {}
        this.AssertCells()
 
    }

    // Clear whole entire grid
    Clear(){

        let Cells = this.Cells
        console.log(Cells)

        for (let Cell in Cells){
            let Target = this.Cells[Cell]
            Target.Clear()
        }

    }

    AssertCells(){

        for (let i = 0; i < 9; i++) {
            
            let Position = i+1
            let Element = document.getElementsByName(Position)[0]

            let Cell_ = new Cell(this,Element,Position)
            this.Cells[Position] = Cell_

        }

        console.log(this)

    }

}

class Cell {

    constructor(Parent,Element,Position){

        // Construct Cell and create an event when the cell is clicked
        var self = this
        this.Parent = Parent
        this.Element = Element
        this.Position = Position
        this.Player = null
        this.Icon = null

        // Cell clicked event
        Element.addEventListener("click", function(){

            if (self.Player != null){
                return 
            }

            self.Select(Game_.Turn)
            Game_.NextTurn()

        })
 
    }

    Clear(){

        // Clear Cell
        this.Player = null
        
        if (this.Icon){
            this.Icon.remove()
        }

    }

    Select(){

        //Set Icon for selected Cell to represent Nought or Crosses
        this.Player = Game_.Turn
        let Icon = document.createElement("img")
        let ImgPath = Game_.Turn == 1 ? "./Images/O.png" : "./Images/X.png"
        Icon.setAttribute("class", "Cell-Image");
        Icon.setAttribute("alt", "Image");
        Icon.setAttribute("src", ImgPath);
        this.Element.appendChild(Icon);

    }

}

class Game {

    constructor(){

        this.Turn = Math.floor(Math.random() * 2) + 1
        this.Finished = false
        this.Grid = new GridClass(this)

        this.Start()

    }

    Start(){
        this.Grid.Clear()
    }

    CheckWin(){

        let Combinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ]

 
        const Cells = Object.values(this.Grid.Cells)
   
        return Combinations.some(combo => {
            return combo.every(index => Cells[index].Player === Game_.Turn);
        });

    }

    CheckFullboard(){

        const Cells = Object.values(this.Grid.Cells)

        for (Cell in Cells) {
            
            let TargetCell = Cells[Cell]

            if (TargetCell.Player == null){
                return false
            }
        }

        return true

    }

    NextTurn(){

        let PlayerWon = this.CheckWin()
        let BoardFull = this.CheckFullboard() && (this.CheckWin() == false)

        if (PlayerWon){
            console.log("Windder")

        }else if (BoardFull){
            console.log("Boardfull")
        }
        
        this.Turn = this.Turn == 1 ? 2 : 1

    }

}


Game_ = new Game