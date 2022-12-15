import React from "react";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>Entre em contato</p>
        <p>E tenha sua empresa sempre ao alcance do público</p>
        <address>
          <p>
            Email: denisrodrigues.ita@gmail.com <AiOutlineMail />
          </p>
          <p>
            <a href={`https://wa.me/+5535984484087`} target="_blank">
              (35) 98448-4087 <AiOutlineWhatsApp />
            </a>
          </p>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
