'use client'
import { useState } from 'react'
import Image from 'next/image'

const filterCategories = [

    {
        id: 'idealFor',
        title: 'IDEAL FOR',
        type: 'dropdown',
        options: ['All', 'Men', 'Women', 'Unisex', 'Boys', 'Girls', 'Baby']
    },
    {
        id: 'occasion',
        title: 'OCCASION',
        type: 'dropdown',
        options: ['All', 'Casual', 'Formal', 'Party', 'Wedding', 'Festive', 'Sports', 'Beachwear']
    },
    {
        id: 'work',
        title: 'WORK',
        type: 'dropdown',
        options: ['All', 'Office', 'Outdoor', 'Remote', 'Construction', 'Factory', 'Hospitality']
    },
    {
        id: 'fabric',
        title: 'FABRIC',
        type: 'dropdown',
        options: ['All', 'Cotton', 'Linen', 'Silk', 'Wool', 'Denim', 'Polyester', 'Rayon', 'Nylon', 'Satin', 'Chiffon']
    },
    {
        id: 'segment',
        title: 'SEGMENT',
        type: 'dropdown',
        options: ['All', 'Men', 'Women', 'Kids', 'Unisex']
    },
    {
        id: 'suitableFor',
        title: 'SUITABLE FOR',
        type: 'dropdown',
        options: ['All', 'Summer', 'Winter', 'Monsoon', 'All Seasons']
    },
    {
        id: 'rawMaterials',
        title: 'RAW MATERIALS',
        type: 'dropdown',
        options: ['All', 'Cotton', 'Silk', 'Wool', 'Polyester', 'Nylon', 'Rayon', 'Bamboo', 'Leather']
    },
    {
        id: 'pattern',
        title: 'PATTERN',
        type: 'dropdown',
        options: ['All', 'Solid', 'Striped', 'Checked', 'Printed', 'Embroidered', 'Textured', 'Floral', 'Geometric']
    }
];


export default function Filters() {
    const [expandedCategory, setExpandedCategory] = useState(null)
    const [selectedOptions, setSelectedOptions] = useState({})
    const [isCustomizableChecked, setIsCheckCustomizableChecked] = useState(false)


    const handleCategoryClick = (categoryId) => {
        setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
    }

    const handleOptionChange = (categoryId, option) => {
        if (option === 'All') {
            setSelectedOptions(prev => ({
                ...prev,
                [categoryId]: {}
            }))
            return
        }

        setSelectedOptions(prev => ({
            ...prev,
            [categoryId]: {
                ...prev[categoryId],
                [option]: !prev[categoryId]?.[option]
            }
        }))
    }

    const getSelectedCount = (categoryId) => {
        const selected = selectedOptions[categoryId];
        if (!selected || typeof selected !== 'object') return 'All';
        const count = Object.values(selected).filter(Boolean).length;
        return count === 0 ? 'All' : `${count} selected`;
    }

    return (
        <div className="filter-sidebar">
            <div className='flex justify-start gap-1 items-center customizable-container'>
                <input
                    type="checkbox"
                    checked={isCustomizableChecked}
                    onChange={() => setIsCheckCustomizableChecked(prev => !prev)}
                    className='customizable-input'
                />
                <h3 className='customizable-text'>Customizable</h3>

            </div>
            {filterCategories.map((category) => (
                <div key={category.id} className="filter-section">
                    <div className="filter-header">
                        <h3>{category.title}</h3>
                        {category.type === 'dropdown' && expandedCategory === category.id && (
                            <button
                                className="unselect-all"
                                onClick={() => handleOptionChange(category.id, 'All')}
                            >
                                Unselect All
                            </button>
                        )}
                    </div>
                    {category.type === 'text' ? (
                        <div className="filter-text">
                            <span>All</span>
                            <Image
                                src="/icons/arrow-down.svg"
                                alt="expand"
                                width={16}
                                height={16}
                            />
                        </div>
                    ) : (
                        <div className={`filter-dropdown ${expandedCategory === category.id ? 'expanded' : ''}`}>
                            <button
                                className="dropdown-button"
                                onClick={() => handleCategoryClick(category.id)}
                            >
                                <span>{getSelectedCount(category.id)}</span>
                                <Image
                                    src="/icons/arrow-down.svg"
                                    alt="expand"
                                    width={16}
                                    height={16}
                                    className={expandedCategory === category.id ? 'rotate-180' : ''}
                                />
                            </button>
                            {expandedCategory === category.id && (
                                <div className="dropdown-content">
                                    {category.options.map((option) => (
                                        option !== 'All' && (
                                            <label
                                                key={option}
                                                className="dropdown-option"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={!!selectedOptions[category.id]?.[option]}
                                                    onChange={() => handleOptionChange(category.id, option)}
                                                />
                                                <span>{option}</span>
                                            </label>
                                        )
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
} 