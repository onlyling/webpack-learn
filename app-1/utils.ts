const PRE_KEY_123 = '123'

const PRE_KEY_321 = '321'

export const Nn123 = (s: string) => {
  return `${PRE_KEY_123}_${s}`
}

export const Nn321 = (s: string) => {
  return `${PRE_KEY_321}_${s}`
}
