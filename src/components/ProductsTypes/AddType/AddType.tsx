import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { TypeActions } from '../../../store/actions'
import './style.scss'

const AddType = () => {
  const dispatch = useDispatch()
  const [inputNameValue, setInputNameValue] = useState('')
  const [inputIdValue, setInputIdValue] = useState('')
  const [disabled, setDisabled] = useState(false)

  const addType = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch({ type: TypeActions.ADD_TYPE, payload: { typeId: inputIdValue, typeName: inputNameValue } })
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
        if (inputNameValue === ('') || inputIdValue === ('')) {
            setDisabled(true)
        } else {
          setDisabled(false)
        }
    }, [inputNameValue, inputIdValue])

  


  return (
    <div className='add-type'>
          <form>
              <input onChange={e => inputNameHandler(e)} name='name' type="text" value={inputNameValue} placeholder='Введите имя типа'/>
              <input onChange={e => inputIdHandler(e)} name='id' type="text" value={inputIdValue} placeholder='Введите id типа'/>
              <button disabled={disabled} onClick={(e) => addType(e)} type='button'>Добавить тип</button>
          </form>
    </div>
  )
}

export default AddType