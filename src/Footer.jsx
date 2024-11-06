import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faAngleDown, faV}  from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';



export function Footer()
{
    return (
        <h1>THIS IS THE FOOTER</h1>
    );
}

export function Cardy(props)
{
    let readMe=()=>{
    return (alert(`OK! Opening article : ${props.value.title}.`))
    };
    return (
        
          <Card className='cardy'>
          <Card.Body>
            <Card.Title className='cardTitle'>{props.value.id} <br></br> {props.value.title}</Card.Title>
            <Card.Text className='cardText'>
              {props.value.body}
            </Card.Text>
            <Button variant="primary" className='cardBtn' onClick={readMe}>Read More</Button>
          </Card.Body>
        </Card>

    );
}


export function FAQs(props)
{
    let [showFaq, showFaqFunc]=useState(false);
    return(
        <>
        <FontAwesomeIcon icon={faAngleDown} className='fontz1' onClick={()=>showFaqFunc(!showFaq)}/>
        <div className={`faqItems`}>
          <h2>{props.value.question}</h2>
          <p className={`${showFaq?'showP':''}`}>{props.value.answer}</p>
        </div>
        </>
    )
    

}