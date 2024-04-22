type ButtonProps = {
    children: string
}

import styles from "./button.module.css"

export const Button = ({children}: ButtonProps) => (<button className={styles.button}>{children}</button>)