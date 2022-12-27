import './App.css';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <>
    <Container>
      <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center text-dark text-decoration-none">

      <span class="fs-4">학우미</span>
        </a>
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <image class="bi me-2" src='img/majeon_logo.jpg' width="40" height="32" role="img" aria-label="majeon"></image>
              </a>
              <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a href="#" class="nav-link px-2 link-secondary">홈</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">급식</a></li>
                <li><a href="#" class="nav-link px-2 link-dark">날씨</a></li>
              </ul>
      </header>
      <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">급식표</h1>
        <p class="col-md-8 fs-4">마전고등학교에 이번 주 급식이 뭔지 알려줍니다.</p>
        <button class="btn btn-primary btn-lg" type="button">급식표 보러가기</button>
      </div>
    </div>
    <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <h2>시간표</h2>
          <p>마전고등학교의 시간표를 확인합니다. 각 반별 시간표를 확인가능합니다.</p>
          <button class="btn btn-outline-light" type="button">시간표 보러가기</button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-light border rounded-3">
          <h2>날씨</h2>
          <p>마전고등학교 주변 날씨, 미세먼지, 습도 등 실시간으로 알려줍니다.</p>
          <button class="btn btn-outline-secondary" type="button">날씨 확인하러 가기</button>
        </div>
      </div>
    </div>
    <footer class="pt-3 mt-4 text-muted border-top">
      © 학우미 2022
    </footer>
    </Container>
    </>
  );
}

export default App;
