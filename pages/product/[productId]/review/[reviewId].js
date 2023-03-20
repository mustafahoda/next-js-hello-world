import { useRouter } from "next/router";

export default function Review(second) {

    const router = useRouter()
    const { productId, reviewId } = router.query

    return (

        <h1>Review {reviewId} for Product {productId} </h1>
    )
}