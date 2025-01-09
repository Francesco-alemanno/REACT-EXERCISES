import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Counter from './Counter';
import ShowGithubUser from './ShowGithubUser';
import GithubUserList from './GithubUserList';
import NotFound from './NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/users">Users</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Welcome name="User" />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<GithubUserList />}>
            <Route index element={<div>Aggiungi utente e seleziona</div>} />
            <Route path=":username" element={<ShowGithubUser />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
