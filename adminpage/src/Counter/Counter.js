
import { useEffect, useState } from 'react';
import './Counter.css'
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import React from 'react';



function Counter() {

  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalProfessionals, setTotalProfessionals] = useState(0);


  useEffect(() => {
    async function usersCount(){
      const data =  await getDocs(collection(db, "users"));
      let sz = 0;
      data.forEach(dt=> sz++)
      setTotalUsers(sz);


      const data1 =  await getDocs(collection(db, "posts"));
      let sz1 = 0;
      data1.forEach(dt=> sz1++)
      setTotalPosts(sz1);



      const data2 =  await getDocs(collection(db, "professionalss"));
      let sz2 = 0;
      data2.forEach(dt=> sz2++)
      setTotalProfessionals(sz2);
    }

    usersCount();

    function render(){
      let a = document.querySelectorAll(".counter23");
        let arrays = Array.from(a); // converting in array

        arrays.map((items) => {
          let count = 0;
          console.log(items.dataset.number);
          function counterUp(){
            count++;
            items.innerHTML = count;

            if(count >= items.dataset.number){
              clearInterval(stop)  // for stop increments
            }
          }
          let stop = setInterval(() => {
            counterUp()
          }, items.dataset.speed);  // (1000 / item.dataset.speed ) for ending same time in all values from counter
        });
    }

    render();


  });


 
    

  return (
    <>
    <div class="container23">
        <div class="counter_content23">
            <div class="counts_items23">
                <h1 class="counter23 counter_text23" data-number={totalUsers} data-speed="100"></h1>
                <p class="count_para23">Users</p>
            </div>
            <div class="counts_items23">
                <h1 class="counter23 counter_text23" data-number={totalPosts} data-speed="100"></h1>
                <p class="count_para23">Posts</p>
            </div>
            <div class="counts_items23">
                <h1 class="counter23 counter_text23" data-number={totalProfessionals} data-speed="100"></h1>
                <p class="count_para23">Professionals</p>
            </div>
        </div>
   </div>

    </>
  );
}

export default Counter;
