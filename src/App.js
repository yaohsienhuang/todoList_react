import logo from './logo.svg';
import './App.css';
import TodoList from'./components/todolist'
import React, { useState } from 'react';


function App(){
  const initData=[
    { id: 1, text:'去買便當', check: true},
    { id: 2, text:'去阿姨家拿東西', check: false},
    { id: 3, text:'完成第一章節的學習', check: false},
    { id: 4, text:'跟阿婷吃飯', check: false},
    { id: 5, text:'找媽媽聊天', check: false}
  ];
  const [list, setList] = useState(initData);

  return (
    <div id="todoListPage" class="bg-half">
      <nav>
        <h1><a href="#">ONLINE TODO LIST</a></h1>
      </nav>
      <div class="conatiner todoListPage vhContainer">
        <TodoList list={list} setList={setList}/>
      </div>
    </div>
  )
};

export default App;
