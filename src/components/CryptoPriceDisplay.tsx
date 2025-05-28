import {useCryptoStore} from "../store/store.ts";
import {useMemo} from "react";
import Spinner from "./Spinner.tsx";

const CryptoPriceDisplay = () => {

  const result = useCryptoStore(state => state.result)
  const loading = useCryptoStore(state => state.loading)
  const hasResult = useMemo(() => {
    return result.PRICE &&
      result.IMAGEURL &&
      result.HIGHDAY &&
      result.LOWDAY &&
      result.CHANGEPCT24HOUR &&
      result.LASTUPDATE;
  }, [result])

  return (
    <div className={'result-wrapper'}>
      {loading ? <Spinner/> : hasResult && (
        <>
          <h2>Cotización</h2>
          <div className={'result'}>
            <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt="Imagen Cryptomoneda"/>
            <div>
              <p>El precio es de: <span>{result.PRICE}</span></p>
              <p>El precio más alto del día: <span>{result.HIGHDAY}</span></p>
              <p>el precio más bajo del día: <span>{result.LOWDAY}</span></p>
              <p>Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
              <p>Ultima actualización: <span>{result.LASTUPDATE}</span></p>
            </div>
          </div>
        </>
      )}

    </div>
  )
}
export default CryptoPriceDisplay
