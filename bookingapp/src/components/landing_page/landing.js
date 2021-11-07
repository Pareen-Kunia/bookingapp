import React from 'react';
import '../landing_page/landing.css'
import Reset from '../reset_pass/reset';
/* eslint no-use-before-define: 0 */  // --> OFF

const Navbar = () => {
    return (
        <div>

            <header class="l-header">
                <nav class="nav bd-grid">
                    <div>
                        <a href='/' class="nav__logo">BookingApp</a>
                    </div>

                    <div class="nav__menu" id="nav-menu">
                        <ul class="nav__list">
                            <li class="nav__item"><a href='/' class="nav__link active">Home</a></li>
                            <li class="nav__item"><a href='/' class="nav__link">About</a></li>
                            <li class="nav__item"><a href='/' class="nav__link">Skills</a></li>
                            <li class="nav__item"><a href='/' class="nav__link">Work</a></li>
                            <li class="nav__item"><a href='/' class="nav__link">Contact</a></li>
                            <li class="nav__item"><a href='/Reset' class="nav__link">Forgot Password</a></li>
                        </ul>
                    </div>

                    <div class="nav__toggle" id="nav-toggle">
                        <i class='bx bx-menu'></i>
                    </div>
                </nav>
            </header>

            <main class="l-main">

            <div class="home bd-grid" id="home">
                <div class="home__data">
                    <h1 class="home__title">Hi,<br/>I'am <span class="home__title-color">Booking App</span><br/>Your friend</h1>

                    <a href='/' class="button">Contact</a>
                </div>

                <div class="home__social">
                    <a href="/" class="home__social-icon"><i class='bx bxl-linkedin'></i></a>
                    <a href="/" class="home__social-icon"><i class='bx bxl-behance' ></i></a>
                    <a href="/" class="home__social-icon"><i class='bx bxl-github' ></i></a>
                </div>

                <div class="home__img">    
                    <img src="assets/img/perfil.png" alt=""/>
                </div>
            </div>

            <section class="about section " id="about">
                <h2 class="section-title">About</h2>

                <div class="about__container bd-grid">
                    <div class="about__img">
                        <img src="assets/img/about.jpg" alt=""/>
                    </div>
                    
                    <div>
                        <h2 class="about__subtitle">I'am Marlon</h2>
                        <p class="about__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.</p>           
                    </div>                                   
                </div>
            </section>

            <section class="skills section" id="skills">
                <h2 class="section-title">Skills</h2>

                <div class="skills__container bd-grid">          
                    <div>
                        <h2 class="skills__subtitle">Profesional Skills</h2>
                        <p class="skills__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.</p>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-html5 skills__icon'></i>
                                <span class="skills__name">HTML5</span>
                            </div>
                            <div class="skills__bar skills__html">

                            </div>
                            <div>
                                <span class="skills__percentage">95%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-css3 skills__icon'></i>
                                <span class="skills__name">CSS3</span>
                            </div>
                            <div class="skills__bar skills__css">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">85%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-javascript skills__icon' ></i>
                                <span class="skills__name">JAVASCRIPT</span>
                            </div>
                            <div class="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">65%</span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxs-paint skills__icon'></i>
                                <span class="skills__name">UX/UI</span>
                            </div>
                            <div class="skills__bar skills__ux">
                                
                            </div>
                            <div>
                                <span class="skills__percentage">85%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>              
                        <img src="assets/img/work3.jpg" alt="" class="skills__img"/>
                    </div>
                </div>
            </section>

            <section class="work section" id="work">
                <h2 class="section-title">Work</h2>

                <div class="work__container bd-grid">
                    <div class="work__img">
                        <img src="assets/img/work1.jpg" alt=""/>
                    </div>
                    <div class="work__img">
                        <img src="assets/img/work2.jpg" alt=""/>
                    </div>
                    <div class="work__img">
                        <img src="assets/img/work3.jpg" alt=""/>
                    </div>
                    <div class="work__img">
                        <img src="assets/img/work4.jpg" alt=""/>
                    </div>
                    <div class="work__img">
                        <img src="assets/img/work5.jpg" alt=""/>
                    </div>
                    <div class="work__img">
                        <img src="assets/img/work6.jpg" alt=""/>
                    </div>
                </div>
            </section>

            <section class="contact section" id="contact">
                <h2 class="section-title">Contact</h2>

                <div class="contact__container bd-grid">
                    <form action="" class="contact__form">
                        <input type="text" placeholder="Name" class="contact__input"/>
                        <input type="mail" placeholder="Email" class="contact__input"/>
                        <textarea name="" id="" cols="0" rows="10" class="contact__input"></textarea>
                        <input type="button" value="Enter" class="contact__button button"/>
                    </form>
                </div>
            </section>

            </main>


        </div>
    );
};

export default Navbar;