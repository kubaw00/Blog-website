import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/me.jpg"
          alt="An image showing Jakub"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&#39; m Jakub</h1>
      <p>I blog about web development especialy frantend frameworks </p>
    </section>
  );
}

export default Hero;
