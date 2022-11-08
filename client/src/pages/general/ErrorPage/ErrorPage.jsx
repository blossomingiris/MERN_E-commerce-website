import styles from './ErrorPage.module.scss'

//404 error: page does not exist

function ErrorPage() {
  return (
    <div className={styles.container}>
      <h2>404 Error. Sorry, this page does not exist.</h2>
    </div>
  )
}

export default ErrorPage
