export const fixacao = (word: string): string[] => {
    if(typeof word !== "string"){
        throw new Error("o argumento deve ser string");   
    }

    const array = word.split('')
    return array
}