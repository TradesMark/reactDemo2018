import React, { Component as C } from 'react';
import { render as r } from 'react-dom';

class Counter extends C {
  constructor(props) {
    super();
    const { stars } = props;
    this.state = { stars };
  }
  plus() {
    const stars = +this.state.stars + 1;
    this.setState({ stars });
  }
  render() {
    return (
      <div>Лайкер <hr />
        <button onClick={() => this.plus()}><span role="img" aria-label="add">➕</span></button> <Stars length={this.state.stars} />
      </div>);
  }
}
const Stars = ({ length }) =>
  <span>{Array.from({ length }, (v, i) => ++i).map(() => '⭐️').join('')}</span>;
r(
  <div><Counter stars="3" /><Counter stars="10" /></div>,
  document.querySelector('.cont'),
);

