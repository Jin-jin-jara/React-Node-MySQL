import React from 'react';
import Customer from './components/Customer'
import './App.css';

const customer = [{
  'id' : 1,
  'image' : 'https://www.codingfactory.net/wp-content/uploads/abc.jpg',
  'name' : '홍길동',
  'birthday' : '950721',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '나동빈',
  'birthday': '960508',
  'gender': '남자',
  'job': '프로그래머'
  },
  {
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '이순신',
  'birthday': '961127',
  'gender': '남자',
  'job': '디자이너'
  }
]
// 실제 html의 <body> 태그에 해당하는 내용을 App.js가 채우게 된다.
// 실질적인 웹 사이트 화면에 대한 내용 출력을 담당하는 부분
function App() {
  return (
    <div>
    {customer.map(c => {
      return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday}
      gender={c.gender}/>
    })}
    </div>
  );
}

export default App;
