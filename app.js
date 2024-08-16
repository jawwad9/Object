import {onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth, db } from "./config.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"; 

// import { addDoc, collection, getDocs, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"; 



onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
    } else {
        window.location = 'login.html'
    }
  });



const logout = document.querySelector('#logout')

logout.addEventListener('click', ()=>{
    signOut(auth).then(() => {
        console.log('logout Successfully')
        window.location = 'login.html'
      }).catch((error) => {
        console.log(error)
      });
})




// post add


const title = document.querySelector('#title')
const description = document.querySelector('#description')
const formAdd = document.querySelector('#form-add')

const arr = [];

formAdd.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log(title.value)
  console.log(description.value)

  try {
      const docRef = await addDoc(collection(db, "todos"),{
        title: title.value,
        description: description.value,
        uid:auth.currentUser.uid
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
})




// const form = document.querySelector("#form");
// const todo = document.querySelector("#todo");
// const ul = document.querySelector("#ul");


// const arr = [];


// async function getData(){
//   const querySnapshot = await getDocs(collection(db, "todos"));
// querySnapshot.forEach((doc) => {
//   arr.push({...doc.data(), id: doc.id});
// });
// console.log(arr);
// renderTodo();
// }
// getData()


// function renderTodo(){
//   ul.innerHTML= "";
//   if (arr.length === 0) {
//     ul.innerHTML = "No Data Found"
//     return;
//   }
//   arr.map((item)=>{
//     ul.innerHTML += `
//     <li>${item.todo}
//         <button class="deleteBtn">Delete</button>
//         <button class="editBtn">Edit</button>
//         </li>
//     `
//   });

//   const deleteBtn = document.querySelectorAll('.deleteBtn')
//   const editBtn = document.querySelectorAll('.editBtn')


//   deleteBtn.forEach((btn, index) => {
//     btn.addEventListener('click',async () => {
//       await deleteDoc(doc(db, "todos", arr[index].id));
//       console.log(arr[index])
//       arr.splice(index, 1)
//       renderTodo()
//     })
//   })
  

//   editBtn.forEach((btn, index) => {
//     btn.addEventListener("click", async () => {
//       const updatedNewValue = prompt("enter new value");
//       const todoUpdate = doc(db, "todos", arr[index].id);
//       await updateDoc(todoUpdate, {
//         todo: updatedNewValue,
//       });
//       console.log("Data updated");
//       arr[index].todo = updatedNewValue;
//       renderTodo();
//     });
//   });
// }



// form.addEventListener('submit', async (event)=>{
// event.preventDefault();
// console.log('todo.value', todo.value)
// try {
//   const docRef = await addDoc(collection(db, "todos"),{
//     todo: todo.value,
//   });
//   console.log("Document written with ID: ", docRef.id);
//   arr.push({
//     todo: todo.value,
//     id: docRef.id
//   })
//   renderTodo()
//   todo.vale = "";
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
// })
