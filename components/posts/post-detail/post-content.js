import PostHeader from './post-header';
import classes from './post-content.module.css';

const DUMMY_POST = {
  title: 'Getting Started With NextJs',
  slug: 'getting-started-with-next-js',
  image: 'getting-started-nextjs.png',
  content: '# This is a first post',
  date: '2022-02-10',
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
}

export default PostContent;