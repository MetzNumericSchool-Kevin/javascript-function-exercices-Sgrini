/*Salutation Aventurier*/

/* function salutations(nomSorcier) {
  console.log(
    `Salutations Aventurier ! Je me nomme ${nom_sorcier} pour vous servir.`
  );
}

const nom_sorcier = "Archibad";
salutations(nom_sorcier); */

/*Prix d'une potion*/

/*function prix_potion(prix_potion, quantite) {
  return prix_potion * quantite;
}

let prixTotal = prix_potion(3, 10);
console.log(
  `Le prix total pour 3 potions est de ${prixTotal} rubis cher Aventurier. `
); */

/* Fabrication de potion */

function newPotion(idPotion, prix = 10, stock = 1) {
  return {
    id: idPotion,
    prix: prix,
    stock: stock,
  };
}
console.log(newPotion("Potion de Mana"));
console.log(newPotion("Potion de Bouclier", 15, 2));
console.log(newPotion("Potion de Force", 20, 1));

function potionSupplementaire(idPotion, prix = 10, sotkc = 1);