import React from "react";
import { useParams } from "react-router-dom";

const Busca = () => {
  const { pesquisa } = useParams();

  return (
    <section>
      <p>busca</p>
    </section>
  );
};

export default Busca;
