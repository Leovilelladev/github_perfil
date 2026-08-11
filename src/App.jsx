import { useState, useEffect } from "react";

import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";
import Busca from "./components/Busca";
import styles from './App.module.css';

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    if (!nomeUsuario) return;

    setCarregando(true);
    setErro(false);
    setUsuario(null);

    fetch(`https://api.github.com/users/${nomeUsuario}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Usuário não encontrado');
        }
        return res.json();
      })
      .then((dados) => {
        setUsuario(dados);
      })
      .catch(() => {
        setErro(true);
      })
      .finally(() => {
        setCarregando(false);
      });
  }, [nomeUsuario]);

  return (
    <>
      <Busca aoBuscar={setNomeUsuario} carregando={carregando} />

      {carregando && <p className={styles.mensagem}>Procurando usuário...</p>}

      {erro && <p className={styles.mensagem}>Usuário não encontrado 😕</p>}

      {usuario && (
        <>
          <Perfil usuario={usuario} />
          <ReposList nomeUsuario={usuario.login} />
        </>
      )}
    </>
  )
}

export default App
