import logo from './logo.svg';
import './App.css';
import { useState , useEffect } from 'react';
import {Card ,Row,Col, Button , Modal} from 'react-bootstrap'
import {motion} from 'framer-motion'
import {useNavigate} from 'react-router-dom'
import { CgProfile  } from "react-icons/cg";
import {CiDark} from 'react-icons/ci'
import { TbMessageCirclePlus } from "react-icons/tb";
import axios from 'axios';


function App() {   

  const [isOpen, setIsOpen] = useState(false);
  const [color,setColor] = useState(false)

  
  

  const [mystyle,setMyStyle] = useState()
  const [commentModal,setCommentModal] = useState(false)

 

 

 

  

   
  return (
    <div  className="App" style={{width:"100%",height:"95vh",marginBottom:"80px",justifyContent:"center",display:"flex",borderRadius:"15px",position:"relative"}}>
            <p></p>
           <img src ={require("./pic1.jpg")} style={{width:"100%",height:"100%",objectFit:"cover",position:"fixed"}} />
            
            <div style={{position:"absolute",marginTop:"30px",display:"grid",placeItems:"center",marginBottom:"50px"}} >
              
               <Row>
                   
                   <Col lg = {6} style={{display:"flex",height:"50vh",width:"40vw",justifyContent:"center",alignItems:"center",backgroundColor:""}} >
                    
                    <motion.div initial = {{y:-1000}} animate = {{y:0}} >
                      
                      <div style={{alignItems:"start"}} >
                      <h1 style={{fontSize:"90px",color:"white"}} className='nameFont'>
                      Arjun Tudu
                      </h1>
                      <div style={{alignItems:"flex-start"}} >
                      <p style={{color:"white",fontSize:"30px"}}>
                      Bachelor's of Technology
                      </p>
                      <p style={{color:"white",fontSize:"30px",marginRight:"50%"}}> Age - 25 </p>
                      </div>
                      </div>
                     
                      
                       
                    </motion.div>
                    
                   </Col>

                   <Col lg = {6} style={{display:"flex",overflow:"scroll",alignItems:"start",width:"40vw",height:"50vh",justifyContent:"center",alignItems:"center",backgroundColor:""}}>
                     
                     <motion.div
                     
                     initial = {{x:-10000}}
                     animate = {{x:0}}
                     
                     >
                     <p style={{fontSize:"65px",color:"white",marginTop:"80px"}} > 
                      I am a self learned website maker , I have done some projects that shows my skills .It would be great if you visit my platforms , 
                      With these kind of skillset I am going to give as much value to your organization.
                    </p>
                    </motion.div>
                                        
                   </Col>

               </Row> 

               <motion.div
               

               
               >

            <div style={{width:"50vw",border:"2px solid",color:"white"}}>  </div>
            </motion.div>
            <p></p>

               <div style={{width:"60vw",height:"auto",marginBottom:"60px",backgroundColor:"",display:"flex",justifyContent:"flex-start"}} >
                      
                       
                      


                      <motion.div 
                      
                      initial = {{y:-10000}}
                      animate = {{y:0}}
                      >
                    
                     <h1 style={{alignContent:"center",color:"white",marginLeft:"80px"}} >
                      Here's some examples of my work
                    </h1>

                    </motion.div>
               </div>

               <Row>

                       <Col lg = {4}>
                       <a href='https://react3-frontend-frontend-gjvk.vercel.app'>
                         <motion.div
                          
                          initial = {{x:-1000}}
                          animate = {{x:0}}

                          whileHover={{scale:"1.2"}}

                         style={{width:"100%",backgroundColor:"red",height:"200px",borderRadius:"15px"}} >
                             
                             <img src = {require("./Okaare (2).png")} style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"15px"}} />

                         </motion.div>

                         </a>
                       </Col>

                       <Col lg = {4}> 
                       <a href = 'https://react2-frontend.vercel.app'>
                       <motion.div
                        
                        initial = {{y:1000}}
                        animate = {{y:0}}

                        whileHover={{scale:"1.2"}}

                       style={{width:"100%",backgroundColor:"red",height:"200px",borderRadius:"15px"}} >
                             
                             <img src = {require("./Okaare (1).png")} style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"15px"}} />

                         </motion.div>
                         </a>
                       </Col>

                       <Col lg = {4}>
                       
                       <a href='https://mern-practice-1.vercel.app'>
                       <motion.div
                       
                       initial = {{x:1000}}
                       animate = {{x:0}}

                       whileHover={{scale:"1.2"}} 

                       
                       
                       style={{width:"100%",backgroundColor:"green",height:"200px",borderRadius:"15px"}} >

                       <img src = {require("./Okaare.png")} style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"15px"}} />
                      
                       </motion.div>

                       </a>
                       
                       </Col>


                    </Row>

              
            </div>


              

          
        
    </div>
  );
}

export default App;
