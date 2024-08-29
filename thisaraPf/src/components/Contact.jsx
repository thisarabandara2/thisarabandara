import React, { useRef } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_d1olm5d', 'template_n4fchns', form.current, {
                publicKey: 'eLJP1BJe-9rZdpwAl',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <section className='contact' id='connect'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt='Contact Us' />
                    </Col>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col md={6} className='px-1'>
                                    <input type='text' placeholder='First Name' name='user_name' />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input type="text" placeholder="Last Name" name='last_name'/>
                                </Col>
                                <Col md={6} className='px-1'>
                                    <input type='email' placeholder='Email Address' name='user_email' />
                                </Col>
                                <Col md={6} className='px-1'>
                                    <input type='tel' placeholder='Phone' name='user_mobile' />
                                </Col>
                                <Col >
                                    <textarea row="6" placeholder='Message' name='message' />
                                    <button type='submit'><span>{"Send"}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>

                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
