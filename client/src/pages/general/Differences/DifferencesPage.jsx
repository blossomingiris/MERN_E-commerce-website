import styles from './DifferencesPage.module.scss'
import Difference from '../../../components/Difference/Difference'
import { differences } from '../../../data/data'

function DifferencesPage() {
  return (
    <section className={styles.container}>
      {differences.map((diff, idx) => (
        <Difference
          key={idx}
          image={diff.image}
          title={diff.title}
          icon={diff.icon}
        />
      ))}
    </section>
  )
}

export default DifferencesPage
