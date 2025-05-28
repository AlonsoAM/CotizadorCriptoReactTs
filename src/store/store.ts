import { create } from 'zustand'
import axios from 'axios'

const getCryptos = async () => {
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
  const {data: {Data}} = await axios.get(url)
  console.log(Data)

}

export const useCriptoStore = create(() => ({
  fetchCryptos: async () => {
    await getCryptos()
  }
}))