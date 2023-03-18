import { validateCharacter } from "../src/funcs/validateCharacter";

describe("Testes para funçao ValidateCharacter", ()=> {

    test("teste que verifica o comportamento da função com um personagem com o nome vazio", () => {
        const result = validateCharacter({
            name: "",
            life: 1500,
            strength: 300,
            defense: 500,
        })
    
        expect(result).toBe(false);
    })

    test("teste que verifica o comportamento da função com um personagem com a vida igual a zero", () => {
        const result = validateCharacter({
            name: "Scorpion",
            life: 0,
            strength: 300,
            defense: 500,
        })
    
        expect(result).toBe(false);
    })

    test("teste que verifica o comportamento da função com um personagem com a  força igual a zero", () => {
        const result = validateCharacter({
            name: "Scorpion",
            life: 1500,
            strength: 0,
            defense: 500,
        })
    
        expect(result).toBe(false);
    })

    test("teste que verifica o comportamento da função com um personagem com a defesa igual a zero", () => {
        const result = validateCharacter({
            name: "Scorpion",
            life: 1500,
            strength: 300,
            defense: 0,
        })
    
        expect(result).toBe(false);
    })

    test("teste que verifica o comportamento da função com um personagem com a vida com um valor negativo", () => {
        const result = validateCharacter({
            name: "Scorpion",
            life: -1500,
            strength: 300,
            defense: 500,
        })
    
        expect(result).toBe(false);
    })

    test("teste que verifica o comportamento da função com um personagem com as informações válidas", () => {
        const result = validateCharacter({
            name: "Scorpion",
            life: 1500,
            strength: 300,
            defense: 500,
        })
    
        expect(result).toBe(true);
    })

})
