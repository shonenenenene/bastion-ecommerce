import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { TypeActions } from '../../../store/actions'
import './style.scss'

const AddProduct: FC = () => {

  const dispatch = useDispatch()
  const products = useTypedSelector(state => state.productsReducer.products)
  const productTypes = useTypedSelector(state => state.typesReducer.productTypes)
  

  const [inputProductId, setInputProductId] = useState('')
  const [inputProductName, setInputProductName] = useState('')
  const [inputProductPrice, setInputProductPrice] = useState('')
  const [inputProductStandart, setInputProductStandart] = useState('')
  const [select, setSelect] = useState('default')
  const [disabled, setDisabled] = useState(false)

  const addProduct = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch({ type: TypeActions.ADD_PRODUCT, payload: { typeName: select, productId: +inputProductId, productName: inputProductName, price: +inputProductPrice, standart: inputProductStandart.toUpperCase() } })
    setInputProductId('')
    setInputProductName('')
    setInputProductPrice('')
    setInputProductStandart('')
    setSelect('default')
  }
  

  const inputIdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const re = /^\d+(-\d+)*$/
    if ((re.test(String(e.target.value)) || e.target.value === '') && (e.target.value).toString().length <= 9) setInputProductId(e.target.value)
  }

  const inputNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputProductName(e.target.value)
  }

   const inputPriceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

    const re = /^\d+(-\d+)*$/
    if ((re.test(String(e.target.value)) || e.target.value === '') && (e.target.value).toString().length <= 5) setInputProductPrice(e.target.value)
     
  }

   const inputStandartHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputProductStandart(e.target.value)
  } 

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
     setSelect(e.target.value)
   }

  useEffect(() => {
    const re = /^\d+$/
    if (inputProductId == ('')
      || inputProductName == ('')
      || inputProductPrice == ('')
      || inputProductStandart == ('')
      || select == ('default')
      || !re.test(String(inputProductId))
      || !re.test(String(inputProductPrice))
      || products.find(item => item.productId === +inputProductId)) {
      setDisabled(true)
    } else setDisabled(false)
  },[inputProductId, inputProductName, inputProductPrice, inputProductStandart, select])


  return (
    <div className='add-product'>
          <form>
              <input onChange={e => inputIdHandler(e)} type="text" className='product-id' placeholder='id(число до 9 знаков)' value={ inputProductId } />
              <input onChange={e => inputNameHandler(e)} className='product-name' placeholder='Название' value={ inputProductName }/>
              <select onChange={e => selectHandler(e)} className='select-type' defaultValue='default'>
              <option disabled value='default'>Выберите тип</option>
              {productTypes.map((e) => {
                return <option key={e.typeId} value={e.typeName}>{ e.typeName }</option>
              } )}     
              </select>
              <input onChange={e => inputPriceHandler(e)} type="text" className='price' placeholder='Цена (до 99999)' value={ inputProductPrice }/>
              <input onChange={e => inputStandartHandler(e)} className='standart' placeholder='ГОСТ' value={ inputProductStandart }/>
              <button disabled={disabled} onClick={(e) => addProduct(e)} type='button' className='add-product-btn'>Добавить продукт</button>
          </form>
    </div>
  )
}

export default AddProduct