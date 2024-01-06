'use client';

import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import Button from '../components/Button';
import styles from './page.module.scss';

export default function Welcome() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const handleButtonClick = () => {
    if (user) {
      router.push('/main');
    } else {
      router.push('/signup');
    }
  }

  const buttonText = user ? 'Go to main' : 'Sign Up';

  return (
    <>
      <main className={styles.main}>
        <h1>Welcome to my application</h1>
        <p>
          Hi! I am a beginner Frontend developer. Started
          training in July 2022 and got carried away with the process. A great desire to realize yourself in  production development. It is interesting how the process of creating a product is built in teams:
          interaction, problem solving, result. Life experience and diversity in professional activities led to a meaningful and balanced decision to devote most of his life to the field of information technology, to do it seriously and thoroughly. I like working in a team. I like to share experiences. I love development and self-improvement. My goal is to become a great developer, a professional in my field.</p>
        <Button
          type="button"
          text={buttonText}
          onClick={handleButtonClick}
        />
      </main>
    </>
  );
}