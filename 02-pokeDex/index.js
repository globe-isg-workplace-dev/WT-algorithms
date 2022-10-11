// Retrieves data from pokemons.json
import data from './pokemons.json' assert {type: 'json'};
// util functions
function Weakness(weakness) {
    this.weakness = weakness;
    this.count = 1;
}
/**
 * Find Attack Details Based on Attack Name
 */
function findAttack(attack){
    let found = false;
    let i = 0; // increment for pokemon list
    let j = 0; // increment for move list

    while(!found && i < data.length){
        // check if pokemon has the move
        j = 0;
        while(!found && j < data[i]['Special Attack(s)'].length) {
            if(data[i]['Special Attack(s)'][j].Name === attack){
                found = data[i]['Special Attack(s)'][j];
            }
            j++;
        }

        j = 0;
        while(!found && j < data[i]['Fast Attack(s)'].length) {
            if(data[i]['Fast Attack(s)'][j].Name === attack)
                found = data[i]['Fast Attack(s)'][j];
            j++;
        }
        i++;
    }

    return found;
}


// main functions

/**
 * Returns array of all pokemon names
 */
function findNames() {
    return data.map(data => data.Name);
}

/**
 * Returns an array of pokemon objects that are resistant to the specified
 * attack
 */
function findByResistance(attack) {
    let attackDetails = findAttack(attack);
    return data.filter(data => data.Resistant.includes(attackDetails.Type));
}

/**
 * Returns an array pokemon names that are resistant to the specified
 * attack
 */
function findNamesByResistance(attack) {
    let attackDetails = findAttack(attack);
    let withResistance = data.filter(data => data.Resistant.includes(attackDetails.Type));
    return withResistance.map(withResistance => withResistance.Name);
}

/**
 * Returns the average max CP of all pokemon
 */
function avgMaxCP(){
    let withCP = data.filter(data => data.MaxCP != null);
    let avgCP = withCP.reduce((result, withCP) => {
        return result += withCP.MaxCP},0)/withCP.length;
    return avgCP;
}

/**
 * Returns an array of objects that contains the list
 * of weaknesses and the number of times they occur 
 * in the dataset
 */
function countedWeaknesses() {
    let weaknesses = new Array();
    let weaknessList = new Array();

    data.map(data => {
        for(let i = 0; i < data.Weaknesses.length; i++) {
            if(weaknessList.length === 0) {
                weaknesses.push(new Weakness(data.Weaknesses[i]));
                weaknessList.push(data.Weaknesses[i]);
            }
            else if(weaknessList.indexOf(data.Weaknesses[i]) === -1) {
                weaknesses.push(new Weakness(data.Weaknesses[i]));
                weaknessList.push(data.Weaknesses[i]);
            }
            else
                weaknesses[weaknessList.indexOf(data.Weaknesses[i])].count += 1;
        }
    });

    return weaknesses;
}

console.log(findNames());
console.log(avgMaxCP());
// console.log(findByResistance("Vine Whip"));
console.log(findNamesByResistance("Acid"));
console.log(countedWeaknesses());
