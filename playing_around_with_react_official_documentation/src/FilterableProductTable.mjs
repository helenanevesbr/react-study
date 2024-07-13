function ProductRow({ product }) {
    return (
        PRODUCTS.map(product=>
            <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        )
    )
}

function ProductCategoryRow({ product }) {
    return (
        PRODUCTS.map(product=>
            <tr>
                <td>{product.category}</td>
            </tr>
        )
    )
}

export function ProductTable({ product }) {
    return (
        <table>
            <ProductCategoryRow />
            <ProductRow />
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

