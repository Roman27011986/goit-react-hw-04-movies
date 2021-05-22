import PropTypes from 'prop-types';
import CastItem from '../CastItem';
import styles from './CastList.module.css';

const CastList = ({ onCast }) => {
    return (
        <ul className={styles.list}>
            {onCast.length > 0 ? onCast.map(({ cast_id, profile_path, name, character }) => (
                <CastItem key={cast_id}
                    onProfilePath={profile_path}
                    onName={name}
                    onChar={character}
                />
            )) :
                <p>We don't have any cast for this movie</p>}
        </ul>
    )
};

CastList.propTypes = {
    cast_id: PropTypes.number,
    profile_path: PropTypes.string,
    name: PropTypes.string,
    character: PropTypes.string
};

export default CastList;