import CriptoSearch from "./components/CriptoSearch.tsx";
import {useCryptoStore} from "./store/store.ts";
import {useEffect} from "react";
import CryptoPriceDisplay from "./components/CryptoPriceDisplay.tsx";

const App = () => {

  const fetchCryptos = useCryptoStore(state => state.fetchCryptos)

  useEffect(() => {
    fetchCryptos()
  }, []);

  return (
    <>
      <div className={'container'}>
        <h1 className={'app-title'}>
          Cotizador de <span>Criptomonedas</span>
        </h1>
        <div className="content">
          <CriptoSearch/>
          <CryptoPriceDisplay/>
        </div>
      </div>
    </>
  )
}

export default App
