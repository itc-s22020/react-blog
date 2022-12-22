import Link from 'next/link'
import styles from 'styles/logo.module.css'

const Logo = ({ boxOn = false}) => {
    return(
        <Link href="/" passHref>
            <p className={boxOn ? styles.box : styles.basic}>CUBE</p>
        </Link>
    )
}
export default Logo