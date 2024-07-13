const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];


function groupProductsByCategory(uncategorizedProducts){
    let productsByCategory = uncategorizedProducts.reduce((acumulo, product) => {
        if (!acumulo[product.category]){
            acumulo[product.category] = []; // Se categoria ainda não existe como chave do dict, adicionar chave e criar lista vazia
        }
        acumulo[product.category].push(product); // Agrupar dados do produto (dict) na categoria (list) a qual ele pertence
        return acumulo;
    }, {});
    return productsByCategory
}

function groupProductTableComponents(produtsByCategory){
    let rowsForCategoryOrProduct = []
    Object.keys(produtsByCategory).map(category=>{
        // Linha heading com categoria
        rowsForCategoryOrProduct.push(<ProductCategoryRow category={category}/>)
        // Linhas com dados dos produtos daquela categoria
        produtsByCategory[category].map(product=>
            rowsForCategoryOrProduct.push(<ProductRow product={product}/>)
        )
    })
    return rowsForCategoryOrProduct
}


function ProductRow({ product }) {
    let name = product.stocked ? product.name : <span style={{color:'red'}}>{product.name}</span>
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}


function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan='2'>{category}</th>
        </tr>
    )
}


export function ProductTable() {

    let produtsByCategory = groupProductsByCategory(PRODUCTS)
    let rowsForCategoryOrProduct = groupProductTableComponents(produtsByCategory=produtsByCategory)

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rowsForCategoryOrProduct}
            </tbody>
        </table>
    )
}


export function SearchBar() {
    return (
        <form>
            <input type="text" placeholder="Search..."></input>
            <label>
                <input type="checkbox"></input>
                Only show products in stock
            </label>
        </form>
    )
}

