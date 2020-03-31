const card1 = [
  "Activate a character",
  "Remove 2 blue dice showing damage",
  "Heal 1 damage from each character"
];
const card2 = [
  "Resolve all dice showing Ranged damage",
  "Resolve all dice showing Melee damage",
  "Reroll all dice not showing damage"
];
const card3 = [
  "Resolve all dice showing shields",
  "Turn 2 dice to sides showing shields",
  "Gain 3 shields"
];
const card4 = [
  "Remove 2 shields from a character",
  "Resolve all dice not showing damage",
  "Gain 2 resources"
];

var enemyDeck = [
  ...Array(10).fill(card1),
  ...Array(10).fill(card2),
  ...Array(10).fill(card3),
  ...Array(10).fill(card4)
];

export default enemyDeck;
/*
    Heal x damage
    Gain x shields
    Remove x die showing damage/resource (of color x)
    Discard x cards
    Gain x resources
    Deal x damage to each of opponents character
    Remove one shield from each of opponents character
    Activate a character
    Activate all characters
    Turn x dice to sides showing damage/resource/shields


    COMBINATIONS
    Ex: Activate a character and resolve up to 2 of that characters dice.

*/
