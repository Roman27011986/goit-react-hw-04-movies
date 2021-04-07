import PropTypes from 'prop-types';
import CastItem from '../CastItem';
import styles from './CastList.module.css'
const CastList = ({ onCast }) => {
    return (
         <ul className={styles.list}>
             {onCast.map(({cast_id,profile_path,name,character}) => (
                 <CastItem key={cast_id}
                     onProfilePath={profile_path}
                     onName={name}
                     onChar={character}
        />
            ))}
         </ul>
    )
}

CastList.propTypes = {
    cast_id: PropTypes.number,
    profile_path: PropTypes.string,
    name: PropTypes.string,
    character:PropTypes.string
}
export default CastList