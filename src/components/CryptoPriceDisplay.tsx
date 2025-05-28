import {useCryptoStore} from "../store/store.ts";
import {useMemo} from "react";

const CryptoPriceDisplay = () => {

  const result = useCryptoStore(state => state.result)
  const hasResult = useMemo(() => Object.keys(result).length > 0, [result])

  return (
    <div>
      {hasResult && (
        <>
          <h2>Cotización</h2>
          <div className="result">
            <div>
              <p>el precio es de: <span>{result.PRICE}</span></p>
            </div>
          </div>
        </>
      )}

    </div>
  )
}
export default CryptoPriceDisplay
