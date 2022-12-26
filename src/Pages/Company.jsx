import React from "react";
import { useParams } from "react-router-dom";
import emp from "../../Api";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import styles from "./Company.module.css";

const Company = () => {
  const { segment, company } = useParams();
  const [comp, setComp] = React.useState({});

  React.useEffect(() => {
    emp[segment].forEach((item) => {
      if (item.nome === company) {
        setComp(item);
      }
    });
  }, [segment, company]);

  return (
    <section className="container animeLeft">
      <main className={styles.mainComp}>
        <div>
          <div>
            <img src={comp.img} alt={comp.nome} />
          </div>
          <div>
            <p>{comp?.nome}</p>
            <p>{comp?.telefone}</p>
            <p>{comp?.cidade}</p>
            <p>{comp?.endereco}</p>
            <p>{comp?.descricao}</p>
            <p>
              <a href={comp?.site}>{comp?.site}</a>
            </p>
            <div>
              <a href={comp?.facebook} target="_blank" rel="noreferrer">
                <AiFillFacebook />
              </a>
              <a href={comp?.instagram} target="_blank" rel="noreferrer">
                <AiFillInstagram />
              </a>
              <a
                href={`https://wa.me/${comp?.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineWhatsApp />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.map}>
          <iframe src={comp?.map} />
        </div>
      </main>
    </section>
  );
};

export default Company;
