const products = [
    {
        id: 1,
        name: "Collier Berbère Authentique",
        price: 80,
        img: "Maroc/collier-traditionnel.jpg",
        description: "Collier artisanal marocain fait à la main avec des perles traditionnelles berbères.",
        colors: ["Multicolore", "Rouge", "Bleu"],
        sizes: ["Unique"] // bijou = une taille
    },
    {
        id: 2,
        name: "Caftan Bleu Élégant",
        price: 150,
        img: "Maroc/Jellaba-F1.jpg",
        description: "Caftan traditionnel marocain bleu, élégant et confortable pour toutes les occasions.",
        colors: ["Bleu", "Vert Émeraude", "Rouge Bordeaux"],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 3,
        name: "Babouches Homme Bleu",
        price: 60,
        img: "Maroc/Babouche-bleu-H.jpg",
        description: "Babouches artisanales pour homme, confortables et élégantes, idéales pour la maison.",
        colors: ["Bleu", "Marron", "Noir"],
        sizes: [39, 40, 41, 42, 43, 44]
    },
    {
        id: 4,
        name: "Coussin Berbère Coloré",
        price: 45,
        img: "Maroc/Coussins-berberes1.jpg",
        description: "Coussin décoratif berbère coloré, parfait pour salon ou chambre, fait main.",
        colors: ["Multicolore", "Rouge/Noir", "Jaune/Bleu"],
        sizes: ["40x40 cm", "45x45 cm", "50x50 cm"]
    },
    {
        id: 5,
        name: "Djellaba Homme Traditionnelle",
        price: 140,
        img: "Maroc/Jellaba-H.jpg",
        description: "Djellaba traditionnelle pour homme, confortable et élégante, idéale pour fêtes et cérémonies.",
        colors: ["Blanc", "Gris", "Noir", "Beige"],
        sizes: ["M", "L", "XL", "XXL"]
    },
    {
        id: 6,
        name: "Lampe Artisanale Salon",
        price: 120,
        img: "Maroc/Lampe1.jpg",
        description: "Lampe artisanale en céramique et métal pour salon, apporte une ambiance chaleureuse.",
        colors: ["Blanc", "Doré", "Argenté", "Noir"],
        sizes: ["30 cm", "40 cm", "50 cm"]
    },
    {
        id: 7,
        name: "Sac Marocain Traditionnel",
        price: 70,
        img: "Maroc/sac-F.jpg",
        description: "Sac traditionnel marocain en cuir et tissu, pratique et élégant pour tous les jours.",
        colors: ["Marron", "Noir", "Rouge"],
        sizes: ["Petit", "Moyen", "Grand"]
    },
    {
        id: 8,
        name: "Zerbiyah Salon Moderne",
        price: 150,
        img: "Maroc/Zerbiyah2.jpg",
        description: "Tapis de salon moderne, style marocain, tissé à la main pour un confort et une décoration uniques.",
        colors: ["Beige", "Bleu", "Rouge", "Multicolore"],
        sizes: ["2x3 m", "2.5x3.5 m", "3x4 m"]
    },
    {
        id: 9,
        name: "Belgha Royale Bleue",
        price: 125,
        img: "Maroc/Babouche-bleu-H.jpg",
        description: "Belgha traditionnelle pour hommes, couleur bleue, confortable et élégante. Parfaite pour toutes les occasions et fabriquée artisanalement au Maroc.",
        sizes: [40, 41, 42, 43, 44]
    },
    {
        id: 10,
        name: "Belgha Élégance Marron",
        price: 125,
        img: "Maroc/Babouche-marron-H.jpg",
        description: "Belgha traditionnelle marron pour hommes, confortable et raffinée, idéale pour un style classique marocain.",
        sizes: [40, 41, 42, 43, 44]
    },
    {
        id: 11,
        name: "Belgha Classique Noire",
        price: 125,
        img: "Maroc/Babouche-noir-H.jpg",
        description: "Belgha traditionnelle noire pour hommes, élégante et résistante, parfaite pour un usage quotidien ou les occasions spéciales.",
        sizes: [40, 41, 42, 43, 44]
    },
    {
        id: 12,
        name: "Belgha Prestige Verte",
        price: 125,
        img: "Maroc/Babouche-vert-H.jpg",
        description: "Belgha traditionnelle verte pour hommes, confortable et chic, idéale pour compléter une tenue traditionnelle marocaine.",
        sizes: ["40", 41, 42, 43, 44]
    },
    {
    id: 13,
    name: "Djellaba Élégance",
    price: 160,
    img: "Maroc/Jellaba-F.jpg",
    description: "Djellaba élégante pour femmes, confortable et raffinée.",
    colors: ["Beige", "Rouge", "Bleu", "Vert"], // choix de couleur
    sizes: ["S", "M", "L", "XL"]               // tailles disponibles
    },
    {
        id: 14,
        name: "Djellaba Raffinée",
        price: 160,
        img: "Maroc/Jellaba-F1.jpg",
        description: "Djellaba raffinée pour femmes, parfaite pour un style classique marocain.",
        colors: ["Marron", "Noir", "Blanc", "Bleu"],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 15,
        name: "Djellaba Passion",
        price: 160,
        img: "Maroc/Jellaba-F2.png",
        description: "Djellaba passion rouge pour femmes, élégante et raffinée.",
        colors: ["Rouge", "Rose", "Bordeaux", "Violet"],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 16,
        name: "Djellaba Nature",
        price: 160,
        img: "Maroc/Jellaba-F3.jpg",
        description: "Djellaba verte nature pour femmes, confortable et chic.",
        colors: ["Vert", "Beige", "Bleu", "Blanc"],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 17,
        name: "Collier traditionnel avec perles vertes",
        price: 85,
        img: "Maroc/bijoux1.jpg",
        description: "Collier traditionnel marocain avec perles vertes, fabriqué artisanalement. Idéal pour compléter votre tenue ou comme cadeau.",
        colors: ["Doré"], // couleur principale
        sizes: [] // pas de taille pour les colliers
    },
    {
        id: 18,
        name: "Bracelet artisanal en or",
        price: 55,
        img: "Maroc/bijoux2.jpg",
        description: "Bracelet artisanal marocain en or, finement travaillé pour un style élégant et traditionnel.",
        colors: ["Or"],
        sizes: [] // pas de taille
    },
    {
        id: 19,
        name: "Collier de mariée traditionnel",
        price: 45,
        img: "Maroc/bijoux3.jpg",
        description: "Collier traditionnel porté lors des mariages marocains, symbole de culture et d'élégance.",
        colors: ["Doré", "Argenté"],
        sizes: [] // pas de taille
    },
    {
        id: 20,
        name: "Collier marocain en or",
        price: 65,
        img: "Maroc/collier-traditionnel.jpg",
        description: "Collier marocain en or, conçu artisanalement pour sublimer vos tenues traditionnelles ou modernes.",
        colors: ["Or"],
        sizes: [] // pas de taille
    },
    {
        id: 21,
        name: "Djellaba Bleu Ciel et Blanc",
        price: 145,
        img: "Maroc/Jellaba-H.jpg",
        description: "Djellaba traditionnelle pour hommes en bleu ciel et blanc, composée de 2 pièces, confortable et élégante.",
        colors: ["Bleu Ciel", "Blanc", "Bleu Marine", "Gris"],
        sizes: [38, 40, 42, 44, 46, 48]
    },
    {
        id: 22,
        name: "Djellaba Crème avec Sfifa Marron",
        price: 145,
        img: "Maroc/Jellaba-H1.jpg",
        description: "Djellaba crème avec décoration Sfifa marron, 2 pièces, idéale pour toutes les occasions.",
        colors: ["Crème", "Marron", "Beige", "Blanc"],
        sizes: [38, 40, 42, 44, 46, 48]
    },
    {
        id: 23,
        name: "Djellaba Élégance Beige avec Selham Meil",
        price: 145,
        img: "Maroc/Jellaba-H2.jpg",
        description: "Djellaba beige avec Selham Meil, 3 pièces, élégante et traditionnelle pour hommes.",
        colors: ["Beige", "Blanc", "Marron", "Gris"],
        sizes: [38, 40, 42, 44, 46, 48]
    },
    {
        id: 24,
        name: "Djellaba Blanc avec Khiyata Bleu",
        price: 145,
        img: "Maroc/Jellaba-H3.jpg",
        description: "Djellaba blanche avec broderies Khiyata bleu, 2 pièces, confortable et raffinée.",
        colors: ["Blanc", "Bleu", "Bleu Marine", "Gris"],
        sizes: [38, 40, 42, 44, 46, 48]
    },
    {
        id: 25,
        name: "Sejadah Bordeaux",
        price: 40,
        img: "Maroc/Sajadah.jpg",
        description: "Tapis de prière artisanal marocain couleur bordeaux, confortable et élégant.",
        colors: ["Bordeaux", "Orange"],
        sizes: ["100x200 cm"]
    },
    {
        id: 26,
        name: "Sejadah Rouge Émeraude",
        price: 40,
        img: "Maroc/Sajadah1.webp",
        description: "Tapis de prière marocain couleur Rouge émeraude, brodé à la main pour un style authentique.",
        colors: ["Rouge", "Noir", "Bleu ciel", "Bordeaux"],
        sizes: ["100x200 cm"]
    },
    {
        id: 27,
        name: "Sejadah Blanc Cassé",
        price: 40,
        img: "Maroc/Sajadah2.jpg",
        description: "Sejadah blanc cassé 100% marocain, doux et confortable pour vos prières.",
        colors: ["Blanc Cassé", "Crème", "Beige"],
        sizes: ["100x200 cm"]
    },
    {
        id: 28,
        name: "Sejadah Bleu Marine",
        price: 40,
        img: "Maroc/Sajadah3.jpg",
        description: "Sejadah Bleu Marine artisanal, idéal pour une décoration élégante et vos moments de prière.",
        colors: ["Bleu Marine", "Rouge", "Jaune", "Marron"],
        sizes: ["100x200 cm"]
    },
    {
        id: 29,
        name: "Tekchita Verte",
        price: 180,
        img: "Maroc/Tekchita-F.jpg",
        description: "Tekchita traditionnelle verte pour femmes, élégante et parfaite pour les cérémonies.",
        colors: ["Verte"] // couleur fixe
    },
    {
        id: 30,
        name: "Tekchita Rouge Rose Mery",
        price: 180,
        img: "Maroc/Tekchita-F1.jpg",
        description: "Tekchita rouge rose pour femmes, raffinée et traditionnelle, idéale pour les occasions spéciales.",
        colors: ["Rouge Rose"] // couleur fixe
    },
    {
        id: 31,
        name: "Tekchita Dorée",
        price: 180,
        img: "Maroc/Tekchita-F2.jpg",
        description: "Tekchita dorée pour femmes, luxueuse et traditionnelle, parfaite pour les cérémonies.",
        colors: ["Dorée"] // couleur fixe
    },
    {
        id: 32,
        name: "Tekchita Violet Mystique",
        price: 180,
        img: "Maroc/Tekchita-F3.jpg",
        description: "Tekchita violette pour femmes, chic et élégante, idéale pour les occasions spéciales.",
        colors: ["Violet"] // couleur fixe
    },
    {
        id: 33,
        name: "Sac Argenté",
        price: 160,
        img: "Maroc/sac-F.jpg",
        description: "Sac traditionnel marocain argenté, artisanal et élégant.",
        colors: ["Argenté"] // couleur fixe
    },
    {
        id: 34,
        name: "Sac Doré Artisan",
        price: 160,
        img: "Maroc/sac-F1.jpg",
        description: "Sac doré artisanal avec perles vertes, parfait pour compléter vos tenues.",
        colors: ["Doré"] // couleur fixe
    },
    {
        id: 35,
        name: "Sac Doré Vert Prestige",
        price: 160,
        img: "Maroc/sac-F2.jpg",
        description: "Sac doré vert prestige, artisanal et coloré pour un style élégant.",
        colors: ["Doré Vert"] // couleur fixe
    },
    {
        id: 36,
        name: "Sac Blanc Cassé",
        price: 160,
        img: "Maroc/sac-F3.webp",
        description: "Sac blanc cassé, artisanal, parfait pour compléter une tenue traditionnelle.",
        colors: ["Blanc Cassé"] // couleur fixe
    },
    {
        id: 37,
        name: "Coussin Berbère Rouge",
        price: 90,
        img: "Maroc/Coussins-berberes.jpg",
        description: "Coussin berbère rouge, artisanal et multicouleur pour décorer votre intérieur.",
        colors: ["Rouge", "Orange", "Bordeaux"], // différentes couleurs
        sizes: ["40x40 cm", "45x45 cm", "50x50 cm"] // différentes tailles
    },
    {
        id: 38,
        name: "Coussin Berbère Bleu",
        price: 90,
        img: "Maroc/Coussins-berberes1.jpg",
        description: "Coussin berbère bleu, artisanal et multicouleur, confortable et élégant.",
        colors: ["Bleu", "Turquoise", "Marine"], // différentes couleurs
        sizes: ["40x40 cm", "45x45 cm", "50x50 cm"]
    },
    {
        id: 39,
        name: "Coussin Moderne Vert",
        price: 90,
        img: "Maroc/Coussins-moderne.jpg",
        description: "Coussin moderne vert, artisanal et confortable, parfait pour votre salon ou chambre.",
        colors: ["Vert", "Kaki", "Menthe"], // différentes couleurs
        sizes: ["40x40 cm", "50x50 cm", "60x60 cm","50x80 cm"]
    },
    {
        id: 40,
        name: "Coussin Moderne Violet",
        price: 90,
        img: "Maroc/Coussins-moderne1.jpg",
        description: "Coussin moderne violet, artisanal et élégant, idéal pour compléter votre décoration.",
        colors: ["Violet", "Lavande", "Prune"], // différentes couleurs
        sizes: ["40x40 cm", "50x50 cm", "60x60 cm","50x80 cm"]
    },
        {
        id: 41,
        name: "Zerbiyah Rouge Tradition",
        price: 200,
        img: "Maroc/Zerbiyah1.jpg",
        description: "Zerbiyah rouge traditionnelle marocaine, tissée à la main pour un confort et un style unique.",
        colors: ["Rouge", "Bordeaux", "Orange"],
        sizes: ["120x180 cm", "140x200 cm", "160x220 cm","200x220 cm","200x250 cm"]
    },
    {
        id: 42,
        name: "Zerbiyah Rouge Royal",
        price: 200,
        img: "Maroc/Zerbiyah2.jpg",
        description: "Zerbiyah Rouge royal traditionnelle, style marocain pour votre salon ou chambre.",
        colors: ["Rouge", "Turquoise", "Marine"],
        sizes: ["120x180 cm", "140x200 cm", "160x220 cm", "200x220 cm"]
    },
    {
        id: 43,
        name: "Zerbiyah Beige Doré Élégance",
        price: 200,
        img: "Maroc/Zerbiyah3.jpg",
        description: "Zerbiyah beige doré, élégante et confortable, idéale pour la décoration intérieure.",
        colors: ["Beige", "Doré", "Crème"],
        sizes: ["120x180 cm", "140x200 cm", "160x220 cm","200x220 cm"]
    },
    {
        id: 44,
        name: "Zerbiyah Blanc Cassé",
        price: 200,
        img: "Maroc/Zerbiyah4.jpg",
        description: "Zerbiyah blanc cassé, artisanale et traditionnelle, parfait pour votre salon.",
        colors: ["Blanc Cassé", "Crème", "Beige"],
        sizes: ["120x180 cm", "140x200 cm", "160x220 cm","200x220 cm"]
    },

    // Lampes & Fanous
    {
        id: 45,
        name: "Lampe Tradition Rouge",
        price: 120,
        img: "Maroc/Lampe.jpg",
        description: "Lampe traditionnelle marocaine rouge, artisanale et décorative pour intérieur.",
        colors: ["Rouge", "Or", "Bordeaux"],
        sizes: ["20 cm", "30 cm", "50 cm"]
    },
    {
        id: 46,
        name: "Lampe Royal Bleu",
        price: 120,
        img: "Maroc/Lampe1.jpg",
        description: "Lampe royale bleue marocaine, artisanale et élégante.",
        colors: ["Bleu", "Turquoise", "Marine"],
        sizes: ["30 cm", "50 cm", "100 cm"]
    },
    {
        id: 47,
        name: "Fanous Vert Élégance",
        price: 120,
        img: "Maroc/Lampe2.jpg",
        description: "Fanous vert élégant, artisanal et décoratif, parfait pour votre salon ou mosquée.",
        colors: ["Vert", "Kaki", "Menthe"],
        sizes: ["20 cm", "30 cm", "40 cm"]
    },
    {
        id: 48,
        name: "Lampe Violet Mystique",
        price: 120,
        img: "Maroc/Lampe3.jpg",
        description: "Lampe violet mystique, artisanale et décorative pour créer une ambiance chaleureuse.",
        colors: ["Violet", "Lavande", "Prune"],
        sizes: ["20 cm", "30 cm", "40 cm"]
    },
    {
        id: 49,
        name: "Sherbeel Élégance",
        price: 80,
        img: "Maroc/Sherbeel-F.jpg",
        description: "Sherbeel marocain élégant et confortable, parfait pour toutes les occasions et cérémonies.",
        sizes: [36, 37, 38, 39, 40] // exemple de tailles disponibles
    },
    {
        id: 50,
        name: "Sherbeel Doré",
        price: 70,
        img: "Maroc/Sherbeel-F1.jpg",
        description: "Sherbeel doré traditionnel marocain, confortable et raffiné.",
        sizes: [36, 37, 38, 39, 40]
    },
    {
        id: 51,
        name: "Sherbeel Traditionnelle",
        price: 60,
        img: "Maroc/Sherbeel-F2.jpg",
        description: "Sherbeel traditionnel marocain, artisanal et élégant.",
        sizes: [36, 37, 38, 39, 40]
    },
    {
        id: 52,
        name: "Sherbeel Marocain",
        price: 60,
        img: "Maroc/Sherbel-F.jpg",
        description: "Sherbeel marocain classique, confortable et traditionnel.",
        sizes: [36, 37, 38, 39, 40]
    }
]
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

const colorsContainer = document.querySelector("#product-colors");
const sizesContainer = document.querySelector("#product-sizes");

let product = null;

if (productId) {
  product = products.find(p => p.id === parseInt(productId));

  if (product) {
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price + " €";
    document.getElementById("product-image").src = product.img;
    document.getElementById("product-image").alt = product.name;
    document.getElementById("product-description").textContent = product.description;

    if (product.colors && product.colors.length > 0) {
      product.colors.forEach(color => {
        const option = document.createElement("option");
        option.value = color;
        option.textContent = color;
        colorsContainer.appendChild(option);
      });
    } else {
      colorsContainer.style.display = "none";
    }

    if (product.sizes && product.sizes.length > 0) {
      product.sizes.forEach(size => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        sizesContainer.appendChild(option);
      });
    } else {
      sizesContainer.style.display = "none";
    }

  } else {
    alert("Produit introuvable !");
  }
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product, color = null, size = null, qty = 1) {
  let cart = getCart();

  const existingItem = cart.find(item =>
    item.id === product.id &&
    item.color === color &&
    item.size === size
  );

  if (existingItem) {
    existingItem.quantity += qty; 
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      color: color,
      size: size,
      quantity: qty
    });
  }

  saveCart(cart);
}

document.getElementById("add-to-cart").addEventListener("click", () => {
  if (!product) return; 

  const selectedColor = colorsContainer.value || null;
  const selectedSize = sizesContainer.value || null;

  addToCart(product, selectedColor, selectedSize, 1);

  window.location.href = "cart.html";
});

