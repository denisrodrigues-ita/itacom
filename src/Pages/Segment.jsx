import React from "react";
import styles from "./Segment.module.css";
import { Link, useParams } from "react-router-dom";
import emp from "../../Api";
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

const Segment = () => {
  const { segment } = useParams();

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modal, setModal] = React.useState("");
  const [modalEmpresa, setModalEmpresa] = React.useState({});

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

  React.useEffect(() => {
    emp[segment].forEach((item) => {
      if (item.nome === modal) {
        setModalEmpresa(item);
      }
    });
  }, [modal]);

  return (
    <section className={`${styles.flx} container`}>
      <div className={styles.divSegment}>
        <h1>
          Aqui você encontra as principais empresas no segmento de {segment}.
        </h1>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
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
            <p>{modalEmpresa?.endereco}</p>
            <p>{modalEmpresa?.cidade}</p>
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
                <Link to={"/"}>
                  <button>Ver Mais</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {emp[segment].map((e) => (
        <div key={e.nome} className={styles.a} onClick={openModal}>
          <img src={e.img} alt={e.nome} />
          <h3 id="h3">{e?.nome}</h3>
          <p>{e?.telefone}</p>
        </div>
      ))}
    </section>
  );
};

export default Segment;
