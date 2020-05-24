import React from 'react';
import logo from './logo.svg';
import './App.css';

// 실제 html의 <body> 태그에 해당하는 내용을 App.js가 채우게 된다.
// 실질적인 웹 사이트 화면에 대한 내용 출력을 담당하는 부분
function App() {
  return (
    <div className="gray-background">
        <img scr={logo} alt="logo" />
        <h2>Let's develop management system</h2>
    </div>
  );
}

export default App;
