import { PencilSimpleLine } from "phosphor-react";

import styles from "./Sidebar.module.css";

const imageCoverAddress = "https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50";
const imageProfileAddress = "https://github.com/LucasBerce71.png";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src={imageCoverAddress} 
        alt="Capa de perfil" 
      />

      <div className={styles.profile}>
        <img 
          className={styles.avatar}
          src={imageProfileAddress} 
          alt="Imagem de perfil" 
        />
        <strong>Lucas Jesus</strong>
        <span>Froentend Engineer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}