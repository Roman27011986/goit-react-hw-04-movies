import styles from './ReviewsList.module.css';

const ReviewsItem = ({ onAuthor, onContent }) => {
    return (
        <li>
            <h3 className={styles.author}>Author: {onAuthor}</h3>
            <p className={styles.cont}>{onContent}</p>
        </li>
    );
};
export default ReviewsItem;