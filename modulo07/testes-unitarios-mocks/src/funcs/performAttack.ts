import { Character } from "../model/Character";

// === Implementação da função performAttack utilizando a função validateCharacter diretamente na implementação: === //

// import { validateCharacter } from "./validateCharacter";

// export const performAttack = (attacker: Character, defender: Character) => {
//     if (!validateCharacter(attacker) || !validateCharacter(defender)) {
//         throw new Error("Invalid character");
//     }
  
//     if (attacker.strength > defender.defense) {
//         defender.life -= attacker.strength - defender.defense;
//     }
// }

// === Implementação da função performAttack utilizando inversão de dependências: === //
//  Dessa forma podemos realizar os teste ultilizando o mock:

export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
    ) => {
        
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    }
}
