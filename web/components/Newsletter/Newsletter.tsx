import { Flow } from "components/Layout"
import styles from "./Newsletter.module.scss"
import { Button } from "components/Button"

export const Newsletter = () => {
  return (
    <form>
      <label>
        <Flow space="small">
          <div>
            <strong>E-post</strong>
          </div>
          <input type="email" className={styles.input} required />
          <div>
            <Button color="white" isArrow={false} type="submit">
              Meld deg på
            </Button>
          </div>
        </Flow>
      </label>
    </form>
  )
}
