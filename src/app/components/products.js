'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import { isAuthenticated } from '../services/auth'
import Login from './Login'

export default function Products({ initialProducts = [] }) {
    const [wishlist, setWishlist] = useState(new Set())
    const [showLogin, setShowLogin] = useState(false)
    const isAuth = isAuthenticated()

    const toggleWishlist = (productId) => {
        if (!isAuth) {
            setShowLogin(true)
            return
        }
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

    return (
        <>
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
                                unoptimized
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
                        {isAuth ? (
                            <div className="product-info">
                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-price">${product.price?.toFixed(2)}</p>
                                <p className="product-category">{product.category}</p>
                                <div className="product-rating">
                                    <span>⭐ {product.rating?.rate}</span>
                                    <span>({product.rating?.count} reviews)</span>
                                </div>
                            </div>
                        ) : (
                            <div className="product-info-locked">
                                <p className="text-center text-gray-500">
                                    Sign in to view product details
                                </p>
                                <button
                                    onClick={() => setShowLogin(true)}
                                    className="w-full mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                                >
                                    Sign In
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {showLogin && <Login onClose={() => setShowLogin(false)} />}
        </>
    )
}