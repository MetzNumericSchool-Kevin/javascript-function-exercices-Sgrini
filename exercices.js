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
    nom: idPotion,
    prix: prix,
    stock: stock,
  };
}

const inventaire = [
  {
    nom: "Potion de Mana",
    prix: 10,
    stock: 1,
  },
  {
    nom: "Potion de Bouclier",
    prix: 15,
    stock: 2,
  },
  {
    nom: "Potion de Force",
    prix: 20,
    stock: 3,
  },
];

function ajoutPotion(inventaire, potion) {
  let existante = inventaire.find((p) => p.nom === potion.nom);

  if (existante) {
    existante.prix = potion.prix;
    existante.stock += potion.stock;
    console.log(
      `Potion "${potion.nom}" mise à jour : Prix = ${potion.prix}, Stock = ${existante.stock}.`
    );
  } else {
    inventaire.push(potion);
    console.log(`Potion "${potion.nom}" ajoutée à l'inventaire.`);
  }

  inventaire.push(potion);
  console.log(`Potion "${potion.nom}" ajoutée à l'inventaire.`);
}
ajoutPotion(inventaire, newPotion("Potion de Mana", 12, 5));
ajoutPotion(inventaire, newPotion("Potion de Vitesse", 18, 2));

console.log(newPotion("Potion de Mana"));
console.log(newPotion("Potion de Bouclier", 15, 2));
console.log(newPotion("Potion de Force", 20, 1));
