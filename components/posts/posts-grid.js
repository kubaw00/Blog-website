import PostItem from './post-item';
import classes from '.posts-grid.module.css';

function PostsGrid({ posts }) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem post={post} key={post.key} />
      ))}
    </ul>
  );
}

export default PostsGrid;
