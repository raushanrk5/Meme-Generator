import React from "react";
import Form from "./form";
import Header from "./Header";
import Meme from "./meme";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      imgUrl: "",
      topText: "",
      bottomText: "",
      memes: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.generateMeme = this.generateMeme.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ memes: response.data.memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  generateMeme(event) {
    event.preventDefault();
    console.log(this.state.memes);

    let num = Math.floor(Math.random() * this.state.memes.length);
    console.log(num);

    const url = this.state.memes[num].url;
    this.setState({
      imgUrl: url
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form
          handleChange={this.handleChange}
          generateMeme={this.generateMeme}
          details={this.state}
        />
        <br />
        <br />
        <Meme data={this.state} />
      </div>
    );
  }
}
