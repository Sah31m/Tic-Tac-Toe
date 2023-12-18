import React from "react";
import "./Clicker.css"




class Clicker extends React.Component {
    
    constructor(Props){
        super(Props)
        this.Enabledsss = false
    }

    Handle = function(){
        console.log(this.Enabledsss)
    }

    render() {

        return (

            <div className="Clicker">

                <button onClick={this.Handle}>
                    Click To Change Image
                </button>

                <img className = "Pic" src = "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=67773a9d419786091c958b2ad08eae5e">

                </img>
            
            </div>

        )

    }
}


export default Clicker;
/*
class Clicker extends React.Component {

    render() {

        return (

            <div className="Clicker">

                <button>
                    test
                </button>

            </div>

        )

    }

}
export default Clicker;

*/



