import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import type {CryptoCurrency, CryptoPrice, Pair} from "../types";
import {fetchCurrentCryptoPairs, getCryptos} from "../services/CryptoService.ts";

type CryptoStore = {
  cryptoCurrencies: CryptoCurrency[],
  result: CryptoPrice,
  loading: boolean,
  fetchCryptos: () => Promise<void>,
  fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptoCurrencies: [],
    result: {},
    loading: false,
    fetchCryptos: async () => {
      const cryptoCurrencies = await getCryptos()
      set(() => ({
        cryptoCurrencies
      }))
    },
    fetchData: async (pair) => {
      set(() => ({
        loading: true
      }))
      const data = await fetchCurrentCryptoPairs(pair)
      set(() => ({
        result: data,
        loading: false
      }))
    }
  }))
)