import ReviewsItem from '../ReviewsItem';

const ReviewsList = ({ onData }) => {
    return (
        <ul>
            {onData.length > 0 ? onData.map(({ author, content, id }) => (
                <ReviewsItem key={id}
                    onAuthor={author}
                    onContent={content}
                />
            )) : <p>We don't have any reviews for this movie</p>}
        </ul>
    );
};

export default ReviewsList;