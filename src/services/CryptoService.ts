import axios from "axios";
import {CryptoCurrenciesResponseSchema, CryptoPriceSchema} from "../schema/cripto-schema.ts";
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
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cripto_currency}&tsyms=${pair.currency}`
  const {data: {DISPLAY}} = await axios.get(url)
  const result = CryptoPriceSchema.safeParse(DISPLAY[pair.cripto_currency][pair.currency])
  if (result.success) {
    return result.data
  }
}