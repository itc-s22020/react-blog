import Logo from "./logo"
import Container from './container'
import styles from 'styles/footer.module.css'

const Footer = () => {
    return(
        <footer className={styles.wrapper}>
            <Container>
                <div className={styles.flexContainer}>
                    <Logo />
                    [ソーシャル]
                </div>
            </Container>
        </footer>
    ) 
}

export default Footer