import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />}></Route>
                    <Route path="/products" element={<ProductPage />}></Route>
                    <Route
                        // 동적 라우트 설정
                        // - 경로에 콜론(:) 사용
                        path="/products/:productId"
                        element={<ProductDetailPage />}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

// #1. BrowserRouter
/**
 * - 애플리케이션을 전체를 감싸서 라우팅을 활성화 (최상위 컴포넌트)
 * - HTML5 History API 사용
 *   ㄴ 주소 표시줄과 동기화하여 URL을 관리하며, SEO, UX를 향상 시킴.
 */

// #2. Routes : 여러 Route 컴포넌트를 묶어주는 컨테이너 역할.
// #3. Route : 특정 경로에 해당하는 컴포넌트를 렌더링 하는 역할.
//     ㄴ path : 특정 경로 / element : 보여줄 컨텐츠