import s from './index.module.scss'
import { CartItem } from '../item'
import { observer } from 'mobx-react-lite'
import { cart } from '@/shared/stores/local/cart'
import { Button } from '@/shared/ui/button'
import { ArrowLeft } from '@/shared/icons/ArrowLeft'
import { useNavigate } from 'react-router-dom'

export const CartList = observer(() => {
  const { items } = cart
  const navigate = useNavigate()

  return (
    <ul className={`${s.list} df fdc`}>
      <h1>Корзина</h1>
      <div className={`${s.info} dg aic`}>
        <span>Продукт</span>
        <span>Цена</span>
        <span>Количество</span>
        <span>Стоимость</span>
      </div>
      {items.length > 0
        ? items.map(item => <CartItem key={item._id} {...item} />)
        : 'Вы можете добавлять продукты в корзину'}
      <div className={`${s.btns} df aic jcsb`}>
        <Button variant="outlined" onClick={() => navigate('/')}>
          <ArrowLeft /> Назад в магазин
        </Button>
        <Button variant="outlined">Обновить</Button>
      </div>
    </ul>
  )
})
