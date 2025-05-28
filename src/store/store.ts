import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import type {CryptoCurrency, Pair} from "../types";
import {fetchCurrentCryptoPairs, getCryptos} from "../services/CryptoService.ts";

type CryptoStore = {
  cryptoCurrencies: CryptoCurrency[],
  fetchCryptos: () => Promise<void>,
  fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptoCurrencies: [],
    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptos()
      set(() => ({
        cryptoCurrencies
      }))
    },
    fetchData: async (pair) => {
      const data = await fetchCurrentCryptoPairs(pair)
      console.log(data)

    }
  }))
)