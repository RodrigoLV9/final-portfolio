import { GoSun as SunIcon} from "react-icons/go";
import styles from '../../styles/Header.module.css'
export default function HeaderControls(){
    return(
        <div className={styles.controls} >
            <button className={styles.controls__button}>
                <SunIcon/>
            </button>
            <select className={styles.controls__select}>
                <option value="Español">Español</option>
                <option value="English">English</option>
                <option value="Portuguese">Portuguese</option>
            </select>
        </div>
    )
}