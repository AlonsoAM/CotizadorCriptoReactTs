import {currencies} from "../data";
import {useCryptoStore} from "../store/store.ts";

const CriptoSearch = () => {

  const cryptoCurrencies = useCryptoStore(state => state.cryptoCurrencies)

  return (
    <form className={'form'}>
      <div className={'field'}>
        <label htmlFor={'currency'}>Moneda:</label>
        <select name={'currency'} id={'currency'}>
          <option value="">-- Seleccione --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>{currency.name}</option>
          ))}
        </select>
      </div>
      <div className={'field'}>
        <label htmlFor={'cripto_currency'}>Criptomoneda:</label>
        <select name={'cripto_currency'} id={'cripto_currency'}>
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
