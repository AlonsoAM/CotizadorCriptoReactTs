import {currencies} from "../data";
import {useCryptoStore} from "../store/store.ts";
import {type FormEvent, useState} from "react";
import type {Pair} from "../types";
import ErrorMessage from "./ErrorMessage.tsx";

const CriptoSearch = () => {

  const cryptoCurrencies = useCryptoStore(state => state.cryptoCurrencies)
  const [pair, setPair] = useState<Pair>({
    currency: '',
    cripto_currency: ''
  });

  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (Object.values(pair).includes('')) {
      setError('Todos los campos son obligatorios')
      return
    }
    setError('')
    // Consultar la API
  }

  return (
    <form className={'form'}
          onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className={'field'}>
        <label htmlFor={'currency'}>Moneda:</label>
        <select name={'currency'}
                id={'currency'}
                value={pair.currency}
                onChange={(e) => setPair({...pair, currency: e.target.value})}>
          <option value="">-- Seleccione --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>{currency.name}</option>
          ))}
        </select>
      </div>
      <div className={'field'}>
        <label htmlFor={'cripto_currency'}>Criptomoneda:</label>
        <select name={'cripto_currency'}
                id={'cripto_currency'}
                value={pair.cripto_currency}
                onChange={(e) => setPair({...pair, cripto_currency: e.target.value})}>
          <option value="">-- Seleccione --</option>
          {cryptoCurrencies.map((currency) => (
            <option key={currency.CoinInfo.Name} value={currency.CoinInfo.Name}>{currency.CoinInfo.FullName}</option>
          ))}
        </select>
      </div>
      <input type="submit" value={'Cotizar'}/>
    </form>
  )
}
export default CriptoSearch
