import React from 'react';

export default class Tasker extends React.Component {
  constructor() {
    super();
    this.state = { list: ['первое', 'второе'] };
  }
  addTask() {
    const list = [...this.state.list, this.task.value];
    this.setState({ list });
  }
  render() {
    return (
      <div>
        <ol>{this.state.list.map((v, i) => <li key={i}>{v}</li>)}</ol>
        <input defaultValue={'пустое'} ref={ref => this.task = ref} />
        <button onClick={::this.addTask}>{'Добавить'}</button>
      </div>
    );
  }
}
