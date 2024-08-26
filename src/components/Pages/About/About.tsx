import style from './About.module.css';

function About() {
  return <section className={style['about']}>
    <div className={`${style['about-content']} container`}>
      <div className={style['about-content__title']}>
        <h1>About</h1>
      </div>
      <div className={style['about-content__description']}>
        <p>Shopper is a web application that allows you to shop online. It is a project that I have created for my free time. I hope you enjoy it.</p>
        </div>
    </div>
  </section>
}

export default About;
