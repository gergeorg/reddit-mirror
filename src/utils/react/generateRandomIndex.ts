import { assoc } from '../js/assoc'

//nanoid - библиотека для генерации рандомных id
export const generateRandomString = () => Math.random().toString(36).substring(2, 15)

export const generateId = <O extends object>(obj: O) => assoc('id', generateRandomString())(obj)
