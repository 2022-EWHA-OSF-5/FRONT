import './styles/reset.scss';
import './styles/font.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import LoginPage from './pages/Auth/LoginPage';
import SignUpPage from './pages/Auth/SignUpPage';
import DetailPage from './pages/Detail/DetailPage';
import DetailMenuPage from './pages/Detail/DetailMenuPage';
import DetailReviewPage from './pages/Detail/DetailReviewPage';
import DetailMapPage from './pages/Detail/DetailMapPage';
import AddMenuPage from './pages/AddPage/AddMenuPage';
import AddStorePage from './pages/AddPage/AddStorePage';
import AddReviewPage from './pages/AddPage/AddReviewPage';
import ListPage from './pages/ListPage';
import MyPage from './pages/MyPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/*" element={<MainPage />} />
        <Route exact path="/list" element={<ListPage />} />
        <Route exact path="/mypage" element={<MyPage />} />

        <Route exact path="/detail" element={<DetailPage />} />
        <Route exact path="/detail/menu" element={<DetailMenuPage />} />
        <Route exact path="/detail/review" element={<DetailReviewPage />} />
        <Route exact path="/detail/map" element={<DetailMapPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
