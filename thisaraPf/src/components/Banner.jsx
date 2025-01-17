import { useState, useEffect } from 'react'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import HeaderImg from '../assets/img/my.png'
import { HashLink } from 'react-router-hash-link'

export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    //const toRoute = ["front-end", "back-end", "full-stack"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300- Math.random() * 100);
    const period = 2000;

    useEffect(() => {

        let ticker = setInterval(() => {
            tick();
        },delta);
        return () => {
            clearInterval(ticker);
        }
    },[text]);

    const tick = () => {

        let i = loopNum % toRoute.length;
        let fullText = toRoute[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0,text.length + 1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updatedText === fullText){
            setDelta(period);
            setIsDeleting(true);

        }else if(isDeleting && updatedText === ""){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }


  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-item-center'>
                <Col xs={12} md={6} xl={7}>
                 <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>{"Hi, I'm Thisara Bandara"}<span></span></h1>
                    <p>See the world throught technical eyes and come to develop technically</p>
                    <HashLink to='#connect'>
                    <button onClick={() => console.log("connect")}>Let's Connect <ArrowRightCircle size={25}/> </button>
                    </HashLink>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <img src={HeaderImg} alt='header img' />
                </Col>
            </Row>
        </Container>
      
    </section>
  )
}
