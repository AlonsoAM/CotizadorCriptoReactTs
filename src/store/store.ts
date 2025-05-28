import { create } from 'zustand'

export const useCriptoStore = create(() => ({
  fetchCryptos: () => {
    console.log('Desde fetch cryptos')
  }
}))