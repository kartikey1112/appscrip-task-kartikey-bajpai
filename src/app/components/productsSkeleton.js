export default function ProductsSkeleton() {
    return (
        <div className="products-grid">
            {[...Array(8)].map((_, index) => (
                <div key={index} className="product-skeleton">
                    <div className="skeleton-image"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-text short"></div>
                </div>
            ))}
        </div>
    )
}