import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Page404 } from './pages';
import { Header } from './components';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    );
  }
}
