import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import TodoList from './components/TodoList/TodoList';
import EditBlog from './components/EditBlog/EditBlog';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/edit/:id" component={EditBlog} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
