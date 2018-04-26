import React, { Component as C } from 'react';
import { render as r } from 'react-dom';

class VoteButton extends С {
    constructor(props) {
        super(props);
        this.state = { votes: props.votes };
      }
    handleClick(delta) {
      this.setState({ votes: this.state.votes += delta });
    }
    render() {
      return (<div className="button">
         <button onClick={this.handleClick.bind(this, 1)}>{ this.props.title }⬆︎</button>  
         <strong> голосов: { this.state.votes }</strong></div>
      );
    }
}

class VoteButtonList extends С {
      constructor(props) {
        super(props);
        this.state = { frameworks: [] };
      }
      async componentDidMount() {
        const frameworks = await fetch(this.props.url).then(x => x.json());
        this.setState({ frameworks });
  }
      render(){
        const buttons = this.state.frameworks.map(x => <VoteButton key={x.id} title={x.title} votes={x.votes} />);
        return (
          <ul>
            { buttons }
          </ul>
        );
      }
}
r(
  <VoteButtonList url="https://kodaktor.ru/j/react5b_6cbf2" />,
  document.querySelector('.cont'),
);

