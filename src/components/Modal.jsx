import styles from './Modal.module.css'
import { useNavigate } from 'react-router-dom'
function Modal({ children }){
    const navigate = useNavigate();

    function navigateHandler (){
        navigate('..')
    }
    return(
        <>
            <div className={styles.backdrop} onClick={navigateHandler}/>
            <dialog open className={styles.modal}>{children}</dialog>
        
        </>
    )
}
export default Modal