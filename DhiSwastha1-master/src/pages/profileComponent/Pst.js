import React ,{useContext ,useEffect} from 'react'

import { useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { db } from '../../firebase'
import { getDocs,collection } from 'firebase/firestore'
import Post1 from './Post1'

const Pst = () => {

    // const [isShown, setIsShown] = useState(false);
    // const handleClick = () => {
    //     setIsShown(current => !current);
    // }
    const { currentUser } = useContext(AuthContext);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getUsers() {






            try {

                const data = await getDocs(collection(db, "posts"));
                const urs = [];
                data.forEach(dt => {

                    urs.push(dt.data());

                })
                console.log(urs)
                urs.sort(function (a, b) {
                    return b.date - a.date;
                })

                setPosts(urs);

            }
            catch (error) {
                console.log("Bro error: in profile ", + error );
            }

        }



        getUsers();
    }, [])
        const user =[];
     posts.forEach((d)=>{
        if(d.displayName=== currentUser.displayName)
            user.push(d)
     })



    return (  
        <div>


            {user.map((post) => (
                <div className="postDiv">
                {
                            <Post1 info={post} key={post.date} />  
                }
                   
                </div>
            ))}

        </div>
    
             
    )
}

export default Pst