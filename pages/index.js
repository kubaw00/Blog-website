import Hero from '../components/home-page/Hero';
import FeaturedPosts from '../components/home-page/featured-posts';

const DUMMY_POSTS = [
  {
    title: 'Getting Started With NextJs',
    slug: 'getting-started-with-next-js',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is the React JS framework',
    date: '2022-02-10',
  },
  {
    title: 'Getting Started With NextJs',
    slug: 'getting-started-with-next-js2',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is the React JS framework',
    date: '2022-02-10',
  },
  {
    title: 'Getting Started With NextJs',
    slug: 'getting-started-with-next-js3',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is the React JS framework',
    date: '2022-02-10',
  },
  {
    title: 'Getting Started With NextJs',
    slug: 'getting-started-with-next-js4',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is the React JS framework',
    date: '2022-02-10',
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;
