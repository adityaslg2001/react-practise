import logo from './logo.svg';
import './App.css';
import {Header} from './Header.jsx';
import {Cardy,Footer,FAQs} from './Footer.jsx';
import { blogs } from './blog.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDropbox, faFacebook, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { faDragon, faDroplet, faHamburger, faLongArrowAltDown, faMultiply, faV } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import {FAQ} from './faq.jsx';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function App() {
  
  let counter=0;                                 //for counter useState
  let [count,countFunc]=useState(counter);       //for counter useState


  let showHide=false;                              //for SHOW & HIDE useState
  let [shide,shideFunc]=useState(showHide);        //for SHOW & HIDE useState

  let passwordVisible=false;                                          //for password show & hide
  let [passVisible,passVisibleFunc]=useState(passwordVisible);        //for password show & hide


  let hamburger=false;                                                 //for hamburger menu show & hide
  let [hamburgerDrop,hamburgerDropFunc]=useState(hamburger);           //for hamburger menu show & hide

  let [modalState, modalStateFunc]=useState(false);                     //for showing modal hide/show

  let faq=FAQ;

  let [showFaq, showFaqFunc]=useState(false);

  let showNotificationSuccess=()=>{
    NotificationManager.success('Tera toh sahi hai bhai.', 'Nice Job!');
  }

  return (
    <div className="App">
    <div className={`modalOverlay ${modalState?'showBackDrop':''}`} onClick={()=>modalStateFunc(false)}></div>
    <div className={`myModal ${modalState?'showModal':''}`}><h3>TINDER</h3> <span className='cross' onClick={()=>modalStateFunc(false)}><FontAwesomeIcon icon={faMultiply} className='fontz'/></span></div>
    
      <NotificationContainer/>
      <Header onClick={showNotificationSuccess}/> 
      <div className={`menu ${hamburgerDrop?'activeMenu':''}`}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
        <li>Articles</li>
        <li>Features</li>
        <li>Contact Us</li>
      </ul>
      </div>
      <button className='micon' onClick={()=>hamburgerDropFunc(!hamburgerDrop)}>
      {hamburgerDrop?<FontAwesomeIcon icon={faMultiply} className='fontz'/>:<FontAwesomeIcon icon={faHamburger} className='fontz'/>}
      </button>

      




      <FontAwesomeIcon icon={faFacebook} className='fonts'/>
      <FontAwesomeIcon icon={faWhatsapp} className='fonts'/>
      <FontAwesomeIcon icon={faLinkedin} className='fonts'/>
      <FontAwesomeIcon icon={faGithub} className='fonts'/>

      <br></br> <br></br>
      <Button variant='primary' onClick={()=>shideFunc(!shide)}> 
      {(shide)?"Hide":"Show"}
      </Button>
      {
      (shide)
      ?
      <Container>
        <br></br>
        <br></br>
        <Button variant="primary" onClick={()=>countFunc(count+1)}>Increase</Button>{" "}{" "}
        <span>{count}</span>{" "}{" "}
        <Button variant="primary"onClick={()=>countFunc(count-1)}>Decrease</Button>
        <br></br>
        <br></br>
        <div className='passW'>
        <input type={(passVisible)?'text':'password'} className='passInput'></input>
        <Button variant="primary" onClick={()=>passVisibleFunc(!passVisible)}className='btnTilt'>
        {(passVisible)?"Hide":"Show"}
        </Button>
        </div>
        <br></br>
        <Button variant="primary" onClick={()=>modalStateFunc(true)}>Show Modal</Button>
        
      </Container>
      :
      ''
      }
      
      <div className='cardRow'>
        {blogs.map((val,idx)=>{
          return (<Cardy value={val} key={idx}/>);
        })}
      </div>
      <hr></hr>
      <NotificationContainer/>
      <div><h1 onClick={showNotificationSuccess}>Frequently Asked Questions (FAQ)</h1></div>
      <div className='faqOuter'>
      {
        FAQ.map((val,idx)=>{
          return (<FAQs value={val} key={idx}/>);
        })
      }
      </div>
      
        
      <Footer/>
    </div>
  );
}

export default App;
