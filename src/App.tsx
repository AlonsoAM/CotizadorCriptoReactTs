import CriptoSearch from "./components/CriptoSearch.tsx";
import {useCriptoStore} from "./store/store.ts";
import {useEffect} from "react";

const App = () => {

  const fetchCryptos = useCriptoStore(state => state.fetchCryptos)

  useEffect(() => {
    fetchCryptos()
  }, [fetchCryptos]);

  return (
    <>
      <div className={'container'}>
        <h1 className={'app-title'}>
          Cotizador de <span>Criptomonedas</span>
        </h1>
        <div className="content">
          <CriptoSearch/>
        </div>
      </div>
    </>
  )
}

export default App
