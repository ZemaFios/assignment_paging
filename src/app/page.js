
import BoilerBox from '@/components/boilerplate/boilerbox'
import styles from './page.module.css'

export default async function Page() {

  return (
    <main className={styles.page}>
      
      <BoilerBox></BoilerBox>
      {/* Indsæt Client Component her og fjern boilerboxen */}
    </main>
  )
}

