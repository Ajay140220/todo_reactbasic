import React, { Component } from 'react'

export default class ToDO extends Component {

  constructor(){
      super();
      this.state = {
           tasks: [{id:1,task:"Revise js"},
                    {id:2,task:"Revise Dsa"},],
           currtask: "",
      };
  }
  
 
  handletask = ()=>{
       this.setState({
            tasks:[...this.state.tasks,{id:this.state.tasks.length+1,task:this.state.currtask}]
       });    
  }

  handlechange = (e)=>{
    console.log(e.target.value);
    this.setState({
        currtask: e.target.value
    });
  }
  handledelete = (id) =>{
      let narr = this.state.tasks.filter(taskobj=>taskobj.id!=id);
      this.setState({
           tasks:[...narr]
      });
  }
 
  render() {
    return (
      <div>
        <input
             type="text" 
             placeholder="Enter your task"
              onChange={this.handlechange}/>
             <button onClick={this.handletask}>Add</button>
             {
              this.state.tasks.map((taskobj,idx)=>{
                return(
                   <li key={taskobj.id}>
                    <p>{`${idx+1}.${taskobj.task}`}</p>
                    <button onClick={() =>this.handledelete(taskobj.id)}>Delete</button>
                    
                 </li>);
              })
              }
      </div>
    );
  }
}
