import Link from 'next/link';
import classes from './post-item.module.css';
import Image from 'next/image';

function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;
  const formatedDate = new Date(date).toLoacaleString('en-Us', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} height={300} width={200} />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formatedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
