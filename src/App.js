import React, { Component } from 'react'
import "./App.css";
export default class App extends Component {

  state={
    id: Math.random(),
  fullName: "wadii",
  myimg : "https://img2.freepng.fr/20180811/btv/kisspng-drawing-football-player-sports-shoe-manaa-mise-niveau-artistique-appliqu-classe-5b6f951bcbb890.5402065715340393238345.jpg",
  Bio: "Zlatan Ibrahimovic est footballeur suédois occupant actuellement environ 99% de l’actualité footballistique en France. Son autobiographie s’est vendue à plus de 500 000 exemplaires en Suède, au point de devenir sujet à d’éventuels prix littéraires. Intitulé adroitement « Moi, Zlatan Ibrahimovic », le joueur du PSG ne tergiverse pas à évoquer ses relations tendues avec l’ancien coach du FC Barcelone, Pep Guardiola, tout en usant d’un certain sens de la métaphore.",
  profession: "kawarji",
  isvisible: true,
  seconds:0,
  timer :null,
  };

  handleShow = () => {
    this.setState({ isvisible: !this.state.isvisible });
  };
  // componentDidMount() {
  //   this.timer = setInterval(() => {
  //     this.setState({ seconds: this.state.seconds + 1 });
  //   }, 1000);
  // };

componentDidMount(){
  this.setState({ timer : setInterval(() => {
    this.inc();
  }, 1000)  });
}

  inc = () => {this.setState({ seconds: this.state.seconds+1  });}

componentWillUnmount (){
  this.setState({ seconds : (this.state.seconds) });
  clearInterval(this.timer);
}
  
  render() {
    return (
      <div className="App">
      <button onClick={()=> this.handleShow()}>{this.state.isvisible ? "Hide" : "Show"}</button>
      {this.state.isvisible && (
      <div>
      <h1>
         {this.state.fullName}
      </h1>
      <img src={this.state.myimg} style={{width:"300px", height:"200px"}} alt="joueur"></img>
      <p>
        {this.state.Bio}
      </p>
      <h1>
        {this.state.profession}
      </h1>
      
      { <h2> Number of seconds is {this.state.seconds}</h2> }
      </div>
      )}
      </div>
    );
  }
}