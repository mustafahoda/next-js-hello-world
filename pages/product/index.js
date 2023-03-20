import Link from "next/link"

function ProductsList({ productId = 100 }) {
    return (


        <div>
            <Link legacyBehavior href="/">
                <a>Home</a>
            </Link>
            <Link href='/product/1'>
                <h1> Product 1 </h1>
            </Link>
            <Link href='/product/2'>
                <h1> Product 2 </h1>
            </Link>
            <Link href='/product/3' replace>
                <h1> Product 3 </h1>
            </Link>

            <Link href={`/product/${productId}`}>
                <h1> Product {productId}</h1>
            </Link>
        </div >
    )
}

export default ProductsList