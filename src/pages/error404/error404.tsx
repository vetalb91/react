import styles from "./error404.module.css";
export const Error404: React.FC = () => {
    return (
        <div className={styles.wrap_content}>
            <div className={styles.error_page}>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
            </div>
        </div>
    );
};