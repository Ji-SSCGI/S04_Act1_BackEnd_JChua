class Pokemon {
    constructor(name, type, hp, attack, defense, move1, move2, move3) {
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.move1 = {
            move1: {
                name: move1.name,
                power: move1.power,
                damage() {
                    return this.power;
                }
            },
            move2: {
                name: move2.name,
                power: move2.power,
                damage() {
                    return this.power;
                }
            },
            move3: {
                name: move3.name,
                power: move3.power,
                damage() {
                    return this.power;
                }
            }
        }
    }
}

function typeAdvantage(attackerType, defenderType) {
    switch (attackerType) {
        case "Fire":
            return defenderType === "Grass" ? 2 : 1;
        case "Grass":
            return defenderType === "Water" ? 2 : 1;
        case "Water":
            return defenderType === "Fire" ? 2 : 1;
        default:
            return 1;
    }
}

