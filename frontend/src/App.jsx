import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Routes from './pages/Routes'

function App() {
  return (
    <div>
      <Container className="mt-3">
        <Header title="Todo" />
        <Routes />
      </Container>
    </div>
  );
}

export default App;
