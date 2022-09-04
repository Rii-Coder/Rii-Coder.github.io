import styles from '../styles/NavBar.module.css';
import Image from 'next/image';
import Icon from '../public/cat.png';
import Link from 'next/link';

const NavBar = () => {

    

    return (
        <div>
            
            <div className={styles.navbar}>
                <Link href="/">
                    <div className={styles.home}>
                        <h2 className={styles.title}>Rii page</h2>
                        <div>
                            <Image src={Icon} height={100} width={100} alt="Cat icon"/>
                        </div>
                    </div>
                </Link>
                <Link href="/">
                    <a>My skills</a>
                </Link>
                <Link href="/">
                    <a>Work</a>
                </Link>
                <Link href="/">
                    <a>Contact</a>
                </Link>
                <Link href="/">
                    <a>Videogames</a>
                </Link>
                
            </div>
        </div>
    );
}

export default NavBar;