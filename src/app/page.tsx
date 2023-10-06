import styles from './page.module.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <main >
      <div className="flex flex-row justify-center items-center mt-32">
        <h1 className="text-8xl font-bold">Hello World!</h1>
        {/* <div className={styles.mask}>
        <p>Hello World!</p>
      </div>
        <div className={styles.body}>
        <p>Hello World!</p>
      </div> */}
        <div className="text-center mb-4">
        <Image
          src="/hey-emoji.png"
          alt="not-shown"
          width={100}
          height={100}
          className="shake-animation"
        />
      </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
      <div className=" flex flex-row  text-center text-3xl font-bold">
        I am a monk with a Mac who loves designing and <br/> coding from 
        scratch and gets a kick out of turning ideas  <br/>  into vibrant reality on the screen
      </div> <br/>
      <div className="text-center mt-4">
        <Image
          src="/floater.webp"
          alt="not-shown"
          width={100}
          height={100}
        />
      </div>
      </div>
    </main>
  );
}
