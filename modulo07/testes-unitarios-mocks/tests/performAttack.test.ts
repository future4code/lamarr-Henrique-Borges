import { performAttack } from "../src/funcs/performAttack";
import { Character } from "../src/model/Character";

describe("Testes para funçao performAttack", ()=> {

    test("Should perform attack", () => {

        const validatorMock = jest.fn(() => {
            return true;
        });
    
        const attacker: Character = {
            name: "Scorpion",
            life: 1500,
            defense: 200,
            strength: 600,
        };
    
        const defender: Character = {
            name: "Kitana",
            life: 1500,
            defense: 400,
            strength: 800,
        };
    
        performAttack(attacker, defender, validatorMock);
    
        expect(defender.life).toEqual(1300);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
    });

    test("Should return invalid character error", () => {

        expect.assertions(4);
        
        const validatorMock = jest.fn(() => {
            return false;
        });
    
        const attacker: Character = {
            name: "",
            life: 1500,
            defense: 200,
            strength: 600,
        };
    
        const defender: Character = {
            name: "Kitana",
            life: 1500,
            defense: 400,
            strength: 800,
        };
    
        try {
            performAttack(attacker, defender, validatorMock);
        } catch (err) {
            
            expect(err.message).toBe("Invalid character");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1);
        }
    });
})
