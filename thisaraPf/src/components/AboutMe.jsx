import React from 'react';

export default function AboutMe() {
    return (
        <section className='about' id='about' style={{ minHeight: '710px', padding: '60px 0' }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <h2 className='mb-4'>About Me</h2>
                        <p className='lead'>
                            Hi, I'm Thisara Bandara, a full-stack developer specialized in web and application development.
                        </p>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <h3 className='mb-3'>Education</h3>
                        <ul className='list-unstyled'>
                            <li className='mb-3'>
                                <h5>University of Ruhuna</h5>
                                <p className='mb-0'>
                                    Bachelor of Information and Communication Technology(BICT)
                                </p>
                                <small>Undergratuate</small>
                            </li>
                        </ul>
                        <ul className='list-unstyled'>
                            <li className='mb-3'>
                                <h5>Peradeniya Central College - Kandy</h5>
                                <p className='mb-0'>
                                    G.C.E. Advanced Level Examination (2019)
                                </p>
                                <small></small>
                            </li>
                        </ul>
                        <ul className='list-unstyled'>
                            <li className='mb-3'>
                                <h5>Vidyartha College  - Kandy</h5>
                                <p className='mb-0'>
                                    G.C.E. Ordinary Level Examination (2016)
                                </p>
                                <small></small>
                            </li>
                        </ul>
                        
                    </div>
                    <div className='col-md-6'>
                        <h3 className='mb-3'>Skills</h3>
                        <ul className='list-unstyled'>
                            <li>React, Node.js, Python, C++, Java, Spring Boot</li>
                            <li>CSS, Tailwind CSS, MySQL, MongoDB, PHP</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
