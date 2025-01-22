import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo01.png';
import '../style.css';
import { gsap } from 'gsap';
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";

function Footer() {
    return (
        <footer>
            <hr />
            <div className="footer-container">
                <div className="footer-left">
                    <div className='social'>
                        <Link to="https://instagram.com">
                            <SlSocialInstagram size={24} />
                        </Link>
                        <Link to="https://Linkedin.com">
                            <SlSocialLinkedin size={24} />
                        </Link>
                        <Link to="https://instagram.com">
                            <SlSocialFacebook size={24} />
                        </Link>

                        <p>&copy;Copyright 2025 | All rights reserved.</p>
                    </div>
                    <div>
                        <h4>Address</h4>
                        <p>New Cairo, Cairo, Egypt</p>
                    </div>
                </div>
                <div className="footer-right">
                    <div>
                        <h4>General</h4>
                        <p>+20 102 688 6437</p>
                        <p>contact@clixys.com</p>
                    </div>
                    <div>
                        <button>
                            <Link to="/Contact">Contact</Link>
                        </button> <br />
                        <button>
                            <Link to="/Contact">Contact</Link>
                        </button>
                    </div>
                    <form>
                        <input type="text" placeholder="Email" />
                        <input type="submit" value={"Subscribe"} />
                    </form>
                </div>
            </div>
        </footer>
    );
}

export default Footer;