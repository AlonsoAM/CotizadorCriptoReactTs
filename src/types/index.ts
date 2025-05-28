import {z} from 'zod/v4'
import {CurrencySchema} from '../schema/cripto-schema'

export type Currency = z.infer<typeof CurrencySchema>