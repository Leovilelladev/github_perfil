import { useState } from "react";

import styles from './Busca.module.css';

const Busca = ({ aoBuscar, carregando }) => {
    const [valor, setValor] = useState('');

    const aoEnviar = (evento) => {
        evento.preventDefault();

        if (!valor.trim()) return;

        aoBuscar(valor.trim());
    };

    return (
        <form className={styles.form} onSubmit={aoEnviar}>
            <label className={styles.label} htmlFor="nomeUsuario">
                Usuário do Github
            </label>
            <div className={styles.linha}>
                <input
                    id="nomeUsuario"
                    className={styles.input}
                    type="text"
                    placeholder="Ex: octocat"
                    value={valor}
                    onChange={(evento) => setValor(evento.target.value)}
                />
                <button className={styles.botao} type="submit" disabled={carregando}>
                    {carregando ? 'Buscando...' : 'Buscar'}
                </button>
            </div>
        </form>
    );
};

export default Busca;
