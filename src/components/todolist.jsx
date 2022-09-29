import React, { useState } from 'react';

function TodoList(props){
  const {list,setList} = props;
  const [newTodo, setNewTodo] = useState();
  const [tab, setTab] = useState('total');
  const AddTodoHandler=()=>{
    if (newTodo){
      setList([...list,{id : Math.max(...list.map(i => i.id))+1, text : newTodo, check : false}])
    }
  };
  
  const toggleChecked=(id)=>{
    let temp = list.map(item => item.id == id ? {id: item.id, text: item.text, check: !item.check } : item);
    setList(temp);
  };
  
  const deleteFinished=()=>{
    let templist = list.filter(item => !item.check);
    setList(templist);
  };
  
  const deteteItem=(id)=>{
    let templist = list.filter(item => item.id != id );
    setList(templist);
  }; 
  
  const filteredData = (tab == 'total') ? list : (tab == 'done') ? list.filter(item=>item.check==true) : list.filter(item=>item.check==false);
  
  function TodoItem(props){
    const {item}=props;
    return (
      <li key={item.id}>
        <label class="todoList_label" >
          <input 
            class="todoList_input" 
            type="checkbox" 
            value="true" 
            checked={item.check? "checked" : ""}
            onChange={()=>{toggleChecked(item.id)}}>
          </input>
          <span>{item.text}</span>
        </label>
        <a href="#" onClick={()=>{deteteItem(item.id)}}>
          <i class="fa fa-times"></i>
        </a>
      </li>
    )
  };
  
  return (
    <div class="todoList_Content">
      <div class="inputBox">
        <input type="text" placeholder="請輸入待辦事項" onChange={(e)=>setNewTodo(e.target.value)}></input>
        <a href="#" onClick={()=>{AddTodoHandler()}}>
          <i class="fa fa-plus"></i>
        </a>
      </div>
      <div class="todoList_list">
        <ul class="todoList_tab">
          <li><a id='total' href="#" class={(tab==='total')? 'active':''} onClick={(e)=>setTab(e.target.id)}>全部</a></li>
          <li><a id='wait' href="#" class={(tab==='wait')? 'active':''} onClick={(e)=>setTab(e.target.id)}>待完成</a></li>
          <li><a id='done' href="#" class={(tab==='done')? 'active':''} onClick={(e)=>setTab(e.target.id)}>已完成</a></li>
        </ul>
        <div class="todoList_items">
          <ul class="todoList_item">
            {filteredData.map((item,i)=>{
              return(
                <TodoItem item={item}/>
              )
            })}
          </ul>
          <div class="todoList_statistics">
            <p> 共 {list.length} 項，已完成 {(list.filter(el=>el.check==true)).length} 項</p>
            <a href="#" onClick={()=>deleteFinished()}>清除已完成項目</a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default TodoList;