export default function ProductList({products}){
    return(
        <ul>
            {products.map((barang) => (
                <li key={barang.id}>
                    {barang.nama} - Rp {barang.harga.toLocaleString()}
                </li>
            ))}
        </ul>
    )
}