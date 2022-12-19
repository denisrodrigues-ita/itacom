import React from "react";
import { AiOutlineWhatsApp, AiFillInstagram } from "react-icons/ai";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section>
      <div className={styles.center}>
        <h1>Contatos</h1>
        <p>
          <a href="tel:+5535984484087" target="_blank">
            Telefone: (35) 98448-4087
          </a>
        </p>
        <p>
          <a href="mailto:denisrodrigues.ita@gmail.com">
            denisrodrigues.ita@gmail.com
          </a>
        </p>
        <div className={styles.icons}>
          <p>
            <a
              href="https://wa.me/+5535984484087"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineWhatsApp />
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/denisrodrigues.ita/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
