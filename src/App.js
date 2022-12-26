import logo from './logo.svg';
import './App.css';

import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <>
    <Container>
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <image class="bi me-2" src='img/majeon_logo.jpg' width="40" height="32" role="img" aria-label="majeon"></image>
              </a>
              <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" class="nav-link px-2 link-secondary">홈</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">급식</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">날씨</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">FAQs</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">About</a></li>
              </ul>
      </header>
    </Container>
    </>
  );
}

export default App;
