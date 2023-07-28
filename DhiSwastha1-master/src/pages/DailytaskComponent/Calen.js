import { useState } from "react";
import d2 from "../images/d2.png"
import "./dtask.css"


function Calen(props) {

    const [isActive, setActive] = useState(false);
    const [isAccepted,setAccept] = useState(false)

    const handleback = () => {

        setActive(current => !current)
        setAccept(current=> !current)
    }
     const myStyle = {
        backgroundImage:`url(${props.img})`,
        backgroundColor: '#e0e0e0',
        backgroundBlendMode:"overlay",
        border:"1px solid black",
        boxShadow:"10px 10px ",
        backgroundSize:"cover"
 }
       

    return (
        <>
      
            <div className="crd"  style={myStyle}>
              
                <div className="crdElements m-2 p-2">

                    <div className="crdFirstElement"> <img src={props.img}  /> </div>
                    <div className="crdSecondElement" style={{colo:"black"}}>
                        <div><h4> {props.title}</h4> </div>
                        <div> <p style={{fontSize:"15px" ,color:"black"}} > {props.description}</p></div>
                    </div>

                  
                </div>
                <div className="crdThirdElement"> <button className=" crdbtn" onClick={handleback} style={{backgroundColor:isAccepted? "lightgreen":""}}> { isAccepted ?<p>Accepted</p> : <p> Accept Challenge</p> }</button>  </div>
            </div>


        </>

    )
}

export default Calen;