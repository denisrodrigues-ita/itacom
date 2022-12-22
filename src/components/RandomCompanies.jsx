import React from "react";
import { Link } from "react-router-dom";
import emp from "../../Api";
import styles from "./RandomCompanies.module.css";
import {
  AiOutlineClose,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Modal from "react-modal";

// Modal react empresas
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

let arr = [];

const RandomCompanies = ({ type, pesquisa, segment }) => {
  const [modalEmpresa, setModalEmpresa] = React.useState({});
  const [modal, setModal] = React.useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [empresas, setEmpresas] = React.useState([]);
  let subtitle;
  let count = 0;

  const getRandomInt = (max) => Math.floor(Math.random() * max);

  // implementando count para quando tiver menos de 9 empresas não bugar
  Object.entries(emp).forEach((item) => {
    item[1].forEach((i) => {
      count++;
    });
  });

  React.useEffect(() => {
    switch (type) {
      case "home":
        arr = [];
        if (count < 9) {
          while (arr.length < count) {
            let seg = null;
            let e = null;
            seg =
              Object.entries(emp)[getRandomInt(Object.entries(emp).length)][0];
            e = emp[seg][getRandomInt(emp[seg].length)];
            if (!arr.includes(e)) {
              arr.push(e);
            }
            setEmpresas(arr);
          }
        } else {
          while (arr.length < 9) {
            let seg = null;
            let e = null;
            seg =
              Object.entries(emp)[getRandomInt(Object.entries(emp).length)][0];
            e = emp[seg][getRandomInt(emp[seg].length)];
            if (!arr.includes(e)) {
              arr.push(e);
            }
            setEmpresas(arr);
          }
        }
        break;
      case "search":
        arr = [];
        Object.entries(emp).forEach((element) => {
          element[1].forEach((e) => {
            if (
              e.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
              e.tipo.toLowerCase().includes(pesquisa.toLowerCase())
            ) {
              arr.push(e);
            }
            setEmpresas(arr);
          });
        });
        break;
      case "segment":
        arr = [];
        while (arr.length < Object.entries(emp[segment]).length) {
          let e = null;
          e = emp[segment][getRandomInt(emp[segment].length)];
          if (!arr.includes(e)) {
            arr.push(e);
          }
          setEmpresas(arr);
        }
        break;
    }
  }, [type, pesquisa, segment]);

  const openModal = ({ currentTarget }) => {
    setIsOpen(true);
    setModal(currentTarget.querySelector("#h3").textContent);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Função para pegar o nome da empresa que foi clicada
  React.useEffect(() => {
    arr.forEach((item) => {
      if (item.nome === modal) {
        setModalEmpresa(item);
      }
    });
  }, [modal]);

  return (
    <section className={styles.flx}>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        // contentLabel="Example Modal"
      >
        <div
          id="modal"
          className={styles.modal}
          ref={(_subtitle) => (subtitle = _subtitle)}
        >
          <button className={styles.closed} onClick={closeModal}>
            <AiOutlineClose />
          </button>
          <div>
            <img src={modalEmpresa?.img} alt={modalEmpresa?.nome} />
          </div>
          <div>
            <p>{modalEmpresa?.nome}</p>
            <p>{modalEmpresa?.cidade}</p>
            <p>{modalEmpresa?.endereco}</p>
            <p>{modalEmpresa?.telefone}</p>
            <div className={styles.socialMedias}>
              <div>
                <p>
                  <a href={modalEmpresa?.facebook} target="_blank">
                    <AiFillFacebook />
                  </a>
                </p>
                <p>
                  <a href={modalEmpresa?.instagram} target="_blank">
                    <AiFillInstagram />
                  </a>
                </p>
                <p>
                  <a
                    href={`https://wa.me/${modalEmpresa?.whatsapp}`}
                    target="_blank"
                  >
                    <AiOutlineWhatsApp />
                  </a>
                </p>
              </div>
              <div>
                <Link to={`/${modalEmpresa.tipo}/${modalEmpresa.nome}`}>
                  <button>Ver Mais</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {empresas.map((e) => (
        <div key={e.nome} className={styles.a} onClick={openModal}>
          <img src={e.img} alt={e.nome} />
          <h3 id="h3">{e?.nome}</h3>
          <p>{e?.telefone}</p>
        </div>
      ))}
    </section>
  );
};

export default RandomCompanies;
