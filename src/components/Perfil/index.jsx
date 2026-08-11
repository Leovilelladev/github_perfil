import styles from './Perfil.module.css'

const Perfil = ({ usuario }) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={usuario.avatar_url} alt={usuario.login} />
            <h1 className={styles.name}>
                {usuario.name || usuario.login}
            </h1>
        </header>
    )
}

export default Perfil;