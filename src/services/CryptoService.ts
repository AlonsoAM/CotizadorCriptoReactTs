import axios from "axios";
import {CryptoCurrenciesResponseSchema} from "../schema/cripto-schema.ts";
import type {Pair} from "../types";

export const getCryptos = async () => {
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
  const {data: {Data}} = await axios.get(url)
  const result = CryptoCurrenciesResponseSchema.safeParse(Data)
  if (result.success) {
    return result.data
  }
}

export const fetchCurrentCryptoPairs = async (pair: Pair) => {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.currency}&tsyms=${pair.cripto_currency}`
  const {data} = await axios.get(url)
  return data
}