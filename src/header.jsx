export default function Header() {
    return (
        <>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center text-dark text-decoration-none">

                    <span className="fs-4">학우미</span>
                </a>
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <image className="bi me-2" src='img/majeon_logo.jpg' width="40" height="32" role="img" aria-label="majeon"></image>
                </a>
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2 link-secondary">홈</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">급식</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">시간표</a></li>
                    <li><a href="#" className="nav-link px-2 link-dark">날씨</a></li>
                </ul>
            </header>
        </>
    )
}