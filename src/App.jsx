import React from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route, Link } from 'react-router-dom';
import Counter from './Counter';
import Map from './Map';
import Gallery from './Gallery';

const Content = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Map} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/counter" component={Counter} />
    </Switch>
  </main>
);

const Menu = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Карта</Link></li>
        <li><Link to="/gallery">Галерея</Link></li>
        <li><Link to="/counter">Отзывы</Link></li>
      </ul>
    </nav>
  </header>
);
const App = () => (
  <div><Menu /><Content />
  </div>);
export default hot(module)(App);
