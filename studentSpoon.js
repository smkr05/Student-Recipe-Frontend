const recipes = [
    {
        id: "pasta-bake",
        title: "PASTA BAKE",
        image: "https://cdn.prod.website-files.com/5937d667a1e78f72396a4b9c/5f9e7f089508b62028d20050_sheri-silver-q5C-_coAZR4-unsplash.jpg",
        rating: "4/5",
        cost: "$6",
        description: "A warm pasta bake made with tomato sauce, cheese and simple ingredients. This recipe is useful for students because it is filling, affordable and can be made in a large portion.",
        ingredients: [
            "200g pasta",
            "1 jar tomato sauce",
            "100g grated cheese",
            "pepperoni or vegetables",
            "mixed herbs"
        ],
        method: [
            "Boil the pasta until soft.",
            "Mix the pasta with tomato sauce and herbs.",
            "Place the mixture into an oven dish.",
            "Add cheese on top.",
            "Bake until the cheese has melted."
        ]
    },
    {
        id: "chicken-quesadilla",
        title: "CHICKEN QUESADILLA",
        image: "https://cdn.prod.website-files.com/5937d667a1e78f72396a4b9c/5b7d5d5785ceb18675a820b4_IMG_1649%202.jpg",
        rating: "4/5",
        cost: "$5",
        description: "A quick tortilla meal filled with chicken and cheese. This is suitable for students because it can be made quickly and can use leftover ingredients.",
        ingredients: [
            "2 tortilla wraps",
            "cooked chicken",
            "grated cheese",
            "peppers",
            "onion"
        ],
        method: [
            "Cook the chicken and vegetables in a pan.",
            "Place the filling onto a tortilla wrap.",
            "Add grated cheese.",
            "Fold the wrap and toast it in a pan.",
            "Cut into slices and serve."
        ]
    },
    {
        id: "crunchy-pasta-salad",
        title: "CRUNCHY PASTA SALAD",
        image: "https://cdn.prod.website-files.com/5937d667a1e78f72396a4b9c/5f9e907c428c58e40f5bfa7f_sina-piryae-bBzjWthTqb8-unsplash.jpg",
        rating: "3/5",
        cost: "$4",
        description: "A cold pasta salad that can be prepared in advance. It is useful for students because it can be stored and eaten later.",
        ingredients: [
            "150g pasta",
            "cucumber",
            "sweetcorn",
            "lettuce",
            "mayonnaise"
        ],
        method: [
            "Boil the pasta and leave it to cool.",
            "Chop the salad ingredients.",
            "Mix the pasta and salad together.",
            "Add mayonnaise.",
            "Serve cold or store in the fridge."
        ]
    },
    {
        id: "cheesy-garlic-pasta",
        title: "CHEESY GARLIC PASTA",
        image: "https://cdn.prod.website-files.com/5937d667a1e78f72396a4b9c/59d513aa96577900017990ce_IMG_0911.JPG",
        rating: "4/5",
        cost: "$4",
        description: "A simple garlic and cheese pasta recipe. This is a good student meal because it uses cheap ingredients and takes little time to cook.",
        ingredients: [
            "200g pasta",
            "garlic",
            "butter",
            "cheese",
            "black pepper"
        ],
        method: [
            "Boil the pasta.",
            "Melt butter in a pan.",
            "Add garlic and cook gently.",
            "Mix in the pasta.",
            "Add cheese and stir until melted."
        ]
    },
    {
        id: "tomato-pasta",
        title: "TOMATO PASTA",
        image: "https://cdn.prod.website-files.com/5937d667a1e78f72396a4b9c/5b1a727cb2424153bc7dcbe8_IMG_1216.JPG",
        rating: "4/5",
        cost: "$3",
        description: "A basic tomato pasta made from cupboard ingredients. It is affordable, simple and suitable for cooking in larger portions.",
        ingredients: [
            "200g pasta",
            "tinned tomatoes",
            "onion",
            "garlic",
            "mixed herbs"
        ],
        method: [
            "Boil the pasta.",
            "Cook onion and garlic in a pan.",
            "Add tinned tomatoes and herbs.",
            "Simmer the sauce.",
            "Mix the sauce with pasta."
        ]
    },
    {
        id: "chicken-curry",
        title: "CHICKEN CURRY",
        image: "https://cdn.prod.website-files.com/5937d667a1e78f72396a4b9c/5987459599d89400012482c3_IMG_0486.JPG",
        rating: "4/5",
        cost: "$6",
        description: "A simple chicken curry served with rice. This is useful for students because it is filling and can be cooked in batches.",
        ingredients: [
            "chicken",
            "rice",
            "curry sauce",
            "onion",
            "oil"
        ],
        method: [
            "Cook onion in oil.",
            "Add chicken and cook until browned.",
            "Add curry sauce.",
            "Boil rice separately.",
            "Serve curry with rice."
        ]
    },
    {
        id: "homemade-cookies",
        title: "EASY TO MAKE HOMEMADE BAKED COOKIES",
        image: "https://cdn.prod.website-files.com/5937d667a1e78f72396a4b9c/5f9e9cb7428c589c1d5c17f6_erol-ahmed-AmzKuEnr1VY-unsplash.jpg",
        rating: "4/5",
        cost: "$5",
        description: "Warm chocolate chip cookies are a classic comfort food treat. This recipe is perfect for students because it is simple, low cost and can be shared with housemates.",
        ingredients: [
            "120g softened butter",
            "125g light brown sugar",
            "1 egg",
            "180g plain/all purpose flour",
            "1/2 teaspoon bicarbonate of soda",
            "1 bar of chocolate",
            "salt"
        ],
        method: [
            "Pre-heat the oven to 180°C.",
            "Mix the sugar and butter in a large bowl.",
            "Add the egg and mix again.",
            "Add flour, salt and bicarbonate of soda.",
            "Break the chocolate into small chips and mix it into the dough.",
            "Place spoonfuls of dough on a baking tray.",
            "Bake until golden and leave to cool before eating."
        ]
    },
    {
        id: "homemade-hummus",
        title: "HOMEMADE HUMMUS",
        image: "https://cdn.prod.website-files.com/5937d667a1e78f72396a4b9c/5f9e95431df8367a41ef6a3d_nicholas-barbaros-FBbGyco88GU-unsplash.jpg",
        rating: "3/5",
        cost: "$3",
        description: "A simple homemade hummus recipe made from chickpeas. This is a healthy and affordable student snack.",
        ingredients: [
            "chickpeas",
            "lemon juice",
            "garlic",
            "olive oil",
            "salt"
        ],
        method: [
            "Drain the chickpeas.",
            "Blend chickpeas with garlic and lemon juice.",
            "Add olive oil slowly.",
            "Season with salt.",
            "Serve with bread, wraps or vegetables."
        ]
    }
];

document.addEventListener("DOMContentLoaded", function () {
    saveSelectedRecipe();
    loadRecipePage();
});

function saveSelectedRecipe() {
    const recipeCards = document.querySelectorAll("[data-recipe-id]");

    recipeCards.forEach(function (card) {
        card.addEventListener("click", function () {
            const recipeId = card.getAttribute("data-recipe-id");
            localStorage.setItem("selectedRecipe", recipeId);
        });
    });
}

function loadRecipePage() {
    const titleElement = document.getElementById("recipeTitle");

    if (!titleElement) {
        return;
    }

    const selectedRecipeId = localStorage.getItem("selectedRecipe") || "homemade-cookies";

    const selectedRecipe = recipes.find(function (recipe) {
        return recipe.id === selectedRecipeId;
    });

    if (!selectedRecipe) {
        return;
    }

    document.getElementById("recipeImage").src = selectedRecipe.image;
    document.getElementById("recipeImage").alt = selectedRecipe.title;
    document.getElementById("recipeTitle").textContent = selectedRecipe.title;
    document.getElementById("recipeRating").textContent = selectedRecipe.rating;
    document.getElementById("recipeCost").textContent = selectedRecipe.cost;
    document.getElementById("recipeDescription").textContent = selectedRecipe.description;

    const ingredientsList = document.getElementById("recipeIngredients");
    const methodList = document.getElementById("recipeMethod");

    ingredientsList.innerHTML = "";
    methodList.innerHTML = "";

    selectedRecipe.ingredients.forEach(function (ingredient) {
        const listItem = document.createElement("li");
        listItem.textContent = ingredient;
        ingredientsList.appendChild(listItem);
    });

    selectedRecipe.method.forEach(function (step) {
        const listItem = document.createElement("li");
        listItem.textContent = step;
        methodList.appendChild(listItem);
    });
}