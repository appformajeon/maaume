import { Container } from 'react-bootstrap';
import Header  from '../header';
import Footer from '../footer';
export default function Root() {
    return (
        <>
    <Container>
      <Header></Header>
      <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">급식표</h1>
        <p className="col-md-8 fs-4">마전고등학교에 이번 주 급식이 뭔지 알려줍니다.</p>
        <button className="btn btn-primary btn-lg" type="button">급식표 보러가기</button>
      </div>
    </div>
    <div className="row align-items-md-stretch">
      <div className="col-md-6">
        <div className="h-100 p-5 text-white bg-dark rounded-3">
          <h2>시간표</h2>
          <p>마전고등학교의 시간표를 확인합니다. 각 반별 시간표를 확인가능합니다.</p>
          <button className="btn btn-outline-light" type="button">시간표 보러가기</button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 bg-light border rounded-3">
          <h2>날씨</h2>
          <p>마전고등학교 주변 날씨, 미세먼지, 습도 등 실시간으로 알려줍니다.</p>
          <button className="btn btn-outline-secondary" type="button">날씨 확인하러 가기</button>
        </div>
      </div>
    </div>
    <Footer/>
    </Container>
    
    </>
    )
}