import React from 'react';
import uuidv4 from 'uuid/v4';
import { connect } from 'react-redux';
import { store } from './index'; // прикольно что index импортирует App
import addTask from './actions';

function mapStateToProps(state){
  return ({
    list: state.list,
  });
}

@connect(mapStateToProps)
export default class extends React.Component {
  /*
    constructor() {
      super();
      this.initList();
      store.subscribe(() => {
        this.initList();
        this.forceUpdate(); // просто для демо, чтобы видеть как работает
      });
    }
    initList() {
      this.list = store.getState().list;
    }
  */
  addTask() {
    store.dispatch(addTask(this.task.value));
  }
  render() {
    return (
      <div>
        <ol>{this.props.list.map(v => <li key={uuidv4()}>{v}</li>)}</ol>
        <input defaultValue="пустое" ref={ref => this.task = ref} />
        <button onClick={::this.addTask}>Добавить</button>
      </div>
    );
  }
}
