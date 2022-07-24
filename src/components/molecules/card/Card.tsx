import { useNavigate } from 'react-router-dom';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import { ARTICLE_DATA } from 'types/articles/articles';
import TimestampProcessing from 'components/atoms/timestampProcessing/TimestampProcessing';
import styles from './Card.module.scss';
import { AvatarImage } from 'components/atoms/button/avatar/AvatarImage';
import { useCard } from 'hooks/components/card/useCard';

const Card = (props: { data: ARTICLE_DATA }) => {
  const { data } = props;
  const navigate = useNavigate();
  const { imagesUrl } = useCard(data.images_url);

  return (
    <>
      <div
        className={styles.container}
        onClick={() => navigate(`/articles/article/${data.article_id}`)}
      >
        <div className={styles.timestamp_likes}>
          <div className={styles.timestamp}>
            <TimestampProcessing timestamp={data.created_at} />
          </div>
        </div>
        <div className={styles.card_container}>
          <img
            src={
              imagesUrl.length
                ? imagesUrl[0]
                : 'https://source.unsplash.com/random'
            }
            alt="articleImage"
            className={styles.image}
          />
          <div className={styles.card_information}>
            <p className={styles.title}>{data.title}</p>
            <div className={styles.avatar_username}>
              <AvatarImage url={data.user_photo_url} />
              <p>{data.username}</p>
            </div>
            <div className={styles.category}>
              <LocalOfferIcon className={styles.category_icon} />
              <span className={styles.category_name}>
                {data.category_name ? data.category_name : ''}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Card };
