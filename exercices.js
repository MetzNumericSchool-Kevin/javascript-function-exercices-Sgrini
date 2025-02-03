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

  inventaire.sort((a, b) => b.prix - a.prix);
}

function potionsEnStock(inventaire) {
  return inventaire.filter((potion) => potion.stock > 0);
}

ajoutPotion(inventaire, newPotion("Potion de Vitesse", 18, 2));

function potionsLowStock(inventaire) {
  return inventaire.filter((potion) => potion.stock === 0);
}

ajoutPotion(inventaire, newPotion("Potion de Gana", 12, 5));
ajoutPotion(inventaire, newPotion("Potion d'Invisibilité", 25, 1));

console.log(newPotion("Potion de Mana"));
console.log(newPotion("Potion de Bouclier", 15, 2));
console.log(newPotion("Potion de Force", 20, 1));

console.log(" Inventaire complet :", inventaire);
console.log(" Potions en stock :", potionsEnStock(inventaire));
console.log(" Potions stock épuisé:", potionsLowStock(inventaire));

const manuel_de_fabrication = {
  potion_soin: {
    ingredients: ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"],
    temps_de_fabrication: 3, // exprimé en secondes
  },
};

const composition = ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"];

function ajoutPotion2(ingredients, idPotion, tableau) {
  if (JSON.stringify(ingredients) == JSON.stringify(tableau)) {
    return {
      nom: idPotion,
      prix: 20,
      stock: 3,
    };
  } else {
    return new Error("Il manque des ingrédients à cette potion.");
  }
}

const inventaire2 = ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"];
ajoutPotion2(inventaire2, "Potion de soin", composition);
console.log(ajoutPotion2(inventaire2, "Potion de soin", composition));
