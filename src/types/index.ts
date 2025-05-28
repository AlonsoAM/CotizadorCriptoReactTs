import {z} from 'zod/v4'
import {CryptoCurrencyResponseSchema, CurrencySchema} from '../schema/cripto-schema'

export type Currency = z.infer<typeof CurrencySchema>

export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>