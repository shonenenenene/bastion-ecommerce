import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { TypeActions } from '../../../store/actions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import './style.scss'

const AddType = () => {
  const dispatch = useDispatch()
  const [inputNameValue, setInputNameValue] = useState('')
  const [inputIdValue, setInputIdValue] = useState('')
  const [disabled, setDisabled] = useState(false)
  const productTypes = useTypedSelector(state => state.typesReducer.productTypes)

  const addType = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch({ type: TypeActions.ADD_TYPE, payload: { typeId: +inputIdValue, typeName: inputNameValue } })
    setInputNameValue('')
    setInputIdValue('')
  }

  const inputNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputNameValue(e.target.value)
  }

  const inputIdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputIdValue(e.target.value)
  }

  useEffect(() => {
      const re = /^\d+$/
        if (inputNameValue === ('') || inputIdValue === ('') || !re.test( String( inputIdValue ) ) || productTypes.find(item => item.typeId === +inputIdValue || inputIdValue.length > 9)) {
            setDisabled(true)
        } else {
          setDisabled(false)
        }
    }, [inputNameValue, inputIdValue, productTypes])

  


  return (
    <div className='add-type'>
          <form>
              <input onChange={e => inputNameHandler(e)} type="text" value={inputNameValue} placeholder='Имя типа'/>
              <input onChange={e => inputIdHandler(e)} type="text" value={inputIdValue} placeholder='id типа (число до 9 знаков)'/>
              <button disabled={disabled} onClick={(e) => addType(e)} type='button'>Добавить тип</button>
          </form>
    </div>
  )
}

export default AddType