import Image from 'next/image';
import classes from './hero.module.css';


function Hero () {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src = "/my-first-blog/Images/IMG_20171108_160030_016.jpg" alt= "image of me for the blog" width={100} height={100}/>
            </div>
            <p>Hi!!, My name is Otsile and this is my first ever blog. I intend to speak and post links to articles all about everything I enjoy doing. Whether it's sports or music, I will be giving my honest opinion on them and I encourage dialog taking place.</p>
        </section>
    )

}

export default Hero;