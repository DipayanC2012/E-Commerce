import React from 'react'
import styles from './styles.module.scss'
import { type CardProp } from '../../../../model'

const TodaysDealCard: React.FC<CardProp> = ({ cardData }) => {
  const { id, maxDiscount, fixedDiscount, timer, name, image } = cardData ?? {}

  const [countdown, setCountdown] = React.useState(() => timer)

  React.useEffect(() => {
    const timerInterval = setInterval(() => {
      setCountdown((state: any) => state && state - 1)
    }, 1000)

    return () => clearTimeout(timerInterval)
  }, [])

  return (
    <div className={styles.cardWrapper}>
      <img src={image} alt={name} />
      <div className={styles.discountContainer}>
        <p>
          {maxDiscount ? `Upto ${maxDiscount}% off` : `${fixedDiscount}% off`}
        </p>
        <span>
          {timer
            ? `Offer expires in ${countdown && Math.floor(countdown / 3600)}:${
                countdown &&
                Math.floor(
                  (countdown / 3600 - Math.floor(countdown / 3600)) * 60
                )
              }:${countdown && Math.floor(countdown % 60)}`
            : `Deal of the day`}
        </span>
      </div>
      <div className={styles.productName}>{name}</div>
    </div>
  )
}

export default TodaysDealCard
