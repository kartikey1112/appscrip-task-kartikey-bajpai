'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'

const sortOptions = [
    {
        id: 'recommended',
        label: 'RECOMMENDED',
        isDefault: true
    },
    {
        id: 'newest',
        label: 'NEWEST FIRST',
        isDefault: false
    },
    {
        id: 'popular',
        label: 'POPULAR',
        isDefault: false
    },
    {
        id: 'priceHighToLow',
        label: 'PRICE : HIGH TO LOW',
        isDefault: false
    },
    {
        id: 'priceLowToHigh',
        label: 'PRICE : LOW TO HIGH',
        isDefault: false
    }
]

export default function SortDropdown() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(sortOptions.find(opt => opt.isDefault))

    const handleOptionClick = (option) => {
        setSelectedOption(option)
        setIsOpen(false)
    }

    return (
        <div className="sort-container">
            <button 
                className="sort-button"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selectedOption.label}</span>
                <Image 
                    src="/icons/arrow-down.svg" 
                    alt="expand" 
                    width={16} 
                    height={16}
                    className={isOpen ? 'rotate-180' : ''}
                />
            </button>
            {isOpen && (
                <div className="sort-dropdown">
                    {sortOptions.map((option) => (
                        <button
                            key={option.id}
                            className={`sort-option ${selectedOption.id === option.id ? 'selected' : ''}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {selectedOption.id === option.id && (
                               <Check className='text-gray-900'/>
                            )}
                            <span>{option.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
} 