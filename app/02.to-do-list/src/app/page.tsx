'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/Components/Button'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const handleSubmit = () => {
    router.push('/todo')
  }

  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <Image
          src='/images/Homepage.svg'
          width={371}
          height={278}
          alt='Homepage icon'
        />
        <div className={styles.content}>
          <h2 className={styles.subTitle}>Welcome to</h2>
          <h1 className={styles.title}>OUR REMINDER</h1>
          <p className={styles.context}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
            dictum tempus, interdum at dignissim metus. Ultricies sed nunc.
          </p>
        </div>
      </div>
      <Button
        name='submitButton'
        label='Get Start'
        button-icon={<ArrowRightAltOutlinedIcon />}
        onClick={handleSubmit}
      />
    </main>
  )
}
