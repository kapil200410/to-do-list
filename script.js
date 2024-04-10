// let tasks = [];

// const rendertasks = () => {
//     const tasklist = document.getElementById('taskList');
//     taskList.innerHTML = ''

//     tasks.forEach((task, index) => {

//         const li = document.createElement('li');
//         li.textContent = task.name;
//         const btn = document.createElement('button');
//         btn.innerHTML = '<div>delete</div>';
//         btn.classname = 'delete-button';
//         btn.onclick = () => deleteTask(index);

//         li.appendChild(btn);
//         taskList.appendChild(li);



//     });
// }

// const addtask = () => {
//     console.log("")
//     const name = document.getElementById('taskinput');
//     if (name !== "") {

//         const task = {
//             name: name.value,
//             date: new Date()
//         }

//          console.log(task)
//         tasks.push(task);
//          console.log(tasks)
//         rendertasks();
       
//   } else {
//           alert('empty')
//      }
//  }



//  const deleteTask = (index)=>{
//     tasks.splice(index,1);
//     renderTasks();
//  }
//  const clearAllTasks = () =>{
//     tasks = [];
//     renderTasks();
//  }

//  const countTasks = ()=>{
//     alert("total number of tasks is:"+tasks.length)
//  }
 


let tasks = [];

const rendertasks = () => {
    const tasklist = document.getElementById('taskList');
    taskList.innerHTML = ''

    tasks.forEach((task, index) => {

        const li = document.createElement('li');
        li.textContent = task.name;
        const btn = document.createElement('button');
        btn.innerHTML = '<div>delete</div>';
        btn.classname = 'delete-button';
        btn.onclick = ()=> deleteTask(index);

        li.appendChild(btn);
        taskList.appendChild(li);

    });
}

const addtask = () => {
    console.log("")
    const name = document.getElementById('taskinput');
    if (name.value != "") {

        const task = {
            name: name.value,
            date: new Date()
        }

        console.log(task)
        tasks.push(task);
        console.log(tasks)
        rendertasks();
    }
    else {
        alert('empty')
    }
}
const deleteTask=(index)=>{
    tasks.splice(index,1)
    rendertasks()
}
const cleartask=(cleartask)=>{
    tasks=[]
    rendertasks()
}
const Count=()=>{
    alert(tasks.length)
    rendertasks()
}
rendertasks()
