//  Exercício 01:
function isOneEdit(strA: string, strB: string): boolean {
    if (Math.abs(strB.length - strA.length) > 1) return false

    if (strA.length > strB.length) return strA.includes(strB)
    if (strB.length > strA.length) return strB.includes(strA)

    let charsDiffCount = 0

    for (let i = 0; i < strA.length; i++) {
        if (strA[i] !== strB[i]) charsDiffCount++
    }

    return charsDiffCount === 1
}

// testes
console.log("EXERCÍCIO 01:");
console.log("1", "expected true", isOneEdit("banan", "banana"));
console.log("2", "expected true", isOneEdit("bananak", "banana"));
console.log("3", "expected true", isOneEdit("panana", "banana"));
console.log("4", "expected false", isOneEdit("bananaaa", "banana"));

// ......................................................................................................... //

// Exercício 02:
export const stringCompression = (input:string) => {
    const substrings = []

    let lastChar = input[0]
    let charCount = 0
  
    for (const char of input) {

        if (char !== lastChar) {
            substrings.push(lastChar + charCount)
            lastChar = char
            charCount = 0
        }
      
        charCount++
    }
  
    substrings.push(lastChar + charCount)

    let result = ""
    
    for (const key of substrings) {
        result += key
    }
  
    return result.length > input.length ? input : result;
}

// testes
console.log("EXERCÍCIO 02:");
console.log("1", "expected a2b3 ", stringCompression("aabbb"));
console.log("2", "expected a2b1c5a3 ", stringCompression("aabcccccaaa"));
console.log("3", "expected accurate", stringCompression("accurate"));
console.log("4", "expected escola", stringCompression("escola"));
console.log("4", "expected a1c2u1r1a10t1e1", stringCompression("accuraaaaaaaaaate"));
