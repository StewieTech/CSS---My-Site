db.products.insert(
    {
        _id: 3,
        name: "Rubber",
        price: 1.3,
        stock: 43,
        reviews: [
            {
                authorName: "Sally",
                rating: 5,
                review: "Best rubber ever"
            },
            {
                authorName: "John",
                rating: 5,
                review: "Awesome really Awesome:!"
            }
        ]
    }
)


db.products.insert(
    {
        _id: 4,
        name: "Eraser",
        price: 1.3,
        stock: 43,
        reviews: [
            {
                authorName: "Stewart",
                rating: 4,
                review: "Best rubber ever"
            },
            {
                authorName: "Brian",
                rating: 5,
                review: "Awesome really Awesome:!"
            }
        ]
    }
)