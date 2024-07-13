function ProductRow({ products }) {
    return (
        products.map(product=>
            <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        )
    )
}

function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th>{category}</th>
        </tr>
    )
}

export function ProductTable() {

    let categories = PRODUCTS.reduce((acumulo, product) => {
        if (!acumulo[product.category]){
            acumulo[product.category] = []; // Se categoria ainda não existe como chave do dict, adicionar chave e criar lista vazia
        }
        acumulo[product.category].push(product); // Agrupar dados do produto (dict) na categoria (list) a qual ele pertence
        return acumulo;
    }, {});

    let linhaCategoriaOuProduto = []

    Object.keys(categories).map(category=>
        linhaCategoriaOuProduto.push(<ProductCategoryRow category={category}/>)
    )

    return (
        <table>
            {linhaCategoriaOuProduto}
            <ProductRow products={PRODUCTS}/>
        </table>
    )
}

{/* <table>
<tr>

    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
</tr>
<tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
</tr>
<tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
</tr>
</table> */}

const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ];

