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
                    <h1 class="home__title">Hi,<br/>I'am <span class="home__title-color">Booking App</span><br/>Your Assistant</h1>

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
                        {/* <h2 class="about__subtitle">I'am Marlon</h2> */}
                        <p class="about__text">This booking app will help you book appointments for your customer with ease and efficiently.</p>           
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