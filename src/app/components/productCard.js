'use client'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import { useState } from 'react'

export default function ProductCard({ name, image, isNew }) {
    const [isWishlisted, setIsWishlisted] = useState(false)

    return (
        <div className="product-item">
            {isNew && (
                <div className="new-tag">
                    NEW PRODUCT
                </div>
            )}
            <button 
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="wishlist-button"
            >
                <Heart 
                    className={isWishlisted ? 'heart-filled' : 'heart-outline'} 
                />
            </button>

            <div className="product-image-container">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="product-image"
                />
            </div>

            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <div className="flex justify-between">
                    <p className="text-gray-secondary">Sign in to see pricing</p>
                </div>
            </div>
        </div>
    )
}