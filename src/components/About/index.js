import React from 'react';

// Icons
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

import './styles.css';

// Photo
import photo from '../../assets/profile.jpg';

export default function About() {
  return (
    <section id="About">
      <img src={photo} alt="Profile" />
      <h1>Luiz Gustavo</h1>
      <p>Cada dia mais impressionado com as portas que a tecnologia está abrindo!</p>
      <ul>
        <li>
          <a href="https://github.com/iamtheluiz/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/luiz-gustavo-da-silva-vasconcellos-05192a192/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a href="mailto:iamtheluiz.dev@gmail.com">
            <MdMail />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/iamtheluizvasc/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </li>
      </ul>
    </section>
  );
}
