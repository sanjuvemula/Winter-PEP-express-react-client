// Render a dynamic list from an array of objects.
// Data: javascript const products = [ { id: 1, name: "Laptop", price: 999, category: "Electronics" }, { id: 2, name: "Coffee Maker", price: 49, category: "Home" }, { id: 3, name: "Smartphone", price: 699, category: "Electronics" } ];
// Requirements:
// Create a ProductList component that receives this array as a prop.
// Use .map() to generate a list of products.
// Each item must have a unique key.
// Display the name and price.

function Data(){
    const products = [
        {id:1, name:"Laptop", price:9909, category:"Electronics"},
        {id:2, name:"phone", price:2345, category:"Electronics"},
        {id:3, name:"book", price:50, category:"Stationary"}
    ];

    const ProductList = ({products}) =>{
        return(
            <>
                {products.map(product => (
                    <p key={product.id}>
                        {product.name}
                        {product.price}
                    </p>
                ))}
            </>
        )
    }

    return(
        <ProductList products={products}/>
    )
}
export default Data;
