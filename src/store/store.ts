import {create} from 'zustand'
import {devtools} from 'zustand/middleware'
import axios from 'axios'
import {CryptoCurrenciesResponseSchema} from "../schema/cripto-schema.ts";
import type {CryptoCurrency} from "../types";

type CryptoStore = {
  cryptoCurrencies: CryptoCurrency[],
  fetchCryptos: () => Promise<void>
}

const getCryptos = async () => {
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
  const {data: {Data}} = await axios.get(url)
  const result = CryptoCurrenciesResponseSchema.safeParse(Data)
  if (result.success) {
    return result.data
  }
}

export const useCriptoStore = create<CryptoStore>(devtools((set) => ({
  cryptoCurrencies: [],
  fetchCryptos: async () => {
    const cryptoCurrencies = await getCryptos()
    set(() => ({
      cryptoCurrencies
    }))
  }
})))