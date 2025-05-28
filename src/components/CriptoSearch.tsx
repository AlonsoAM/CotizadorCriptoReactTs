const CriptoSearch = () => {
  return (
    <form className={'form'}>
      <div className={'field'}>
        <label htmlFor={'currency'}>Moneda:</label>
        <select name={'currency'} id={'currency'}>
          <option value="">-- Seleccione --</option>
        </select>
      </div>
      <div className={'field'}>
        <label htmlFor={'cripto_currency'}>Criptomoneda:</label>
        <select name={'cripto_currency'} id={'cripto_currency'}>
          <option value="">-- Seleccione --</option>
        </select>
      </div>
      <input type="submit" value={'Cotizar'} />
    </form>
  )
}
export default CriptoSearch
