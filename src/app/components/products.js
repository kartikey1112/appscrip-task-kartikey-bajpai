'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Heart } from 'lucide-react'

export default function Products({ initialProducts = [] }) {
    const [wishlist, setWishlist] = useState(new Set())

    const toggleWishlist = (productId) => {
        setWishlist(prev => {
            const newWishlist = new Set(prev)
            if (newWishlist.has(productId)) {
                newWishlist.delete(productId)
            } else {
                newWishlist.add(productId)
            }
            return newWishlist
        })
    }

    if (!initialProducts || initialProducts.length === 0) {
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

    return (
        <div className="products-grid">
            {initialProducts.map((product) => (
                <div key={product.id} className="product-item">
                    <div className="product-image-container">
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={300}
                            height={300}
                            className="product-image"
                            unoptimized // Add this for external images
                        />
                        <button
                            className="wishlist-button"
                            onClick={() => toggleWishlist(product.id)}
                            aria-label={wishlist.has(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                        >
                            <Heart
                                className={wishlist.has(product.id) ? "heart-filled" : "heart-outline"}
                                fill={wishlist.has(product.id) ? "currentColor" : "none"}
                            />
                        </button>
                    </div>
                    <div className="product-info">
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-price">${product.price?.toFixed(2)}</p>
                        <p className="product-category">{product.category}</p>
                        <div className="product-rating">
                            <span>⭐ {product.rating?.rate}</span>
                            <span>({product.rating?.count} reviews)</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}