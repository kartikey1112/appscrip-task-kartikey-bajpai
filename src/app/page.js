'use client'
import { Suspense, useState, useEffect } from 'react'
import Image from 'next/image'
import Products from './components/products'
import Filters from './components/Filters'
import SortDropdown from './components/SortDropdown'
import Footer from './components/Footer'
import Header from './components/header'

// Add cache configuration
async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 3600 } // Cache for 1 hour
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

async function getCategories() {
  const res = await fetch('https://fakestoreapi.com/products/categories', {
    next: { revalidate: 3600 } // Cache for 1 hour
  });

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }

  return res.json();
}

export default function Home() {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [productsData, setProductsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [products, categories] = await Promise.all([
          getProducts(),
          getCategories()
        ]);
        setProductsData(products);
        setCategoriesData(categories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <>
      <Header />
      <main className="main-container">
        <div className="header">
          <h1>Discover our products</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </div>

        <div className="content-wrapper">
          <div className="filter-header">
            <div className="filter-left">
              <span className="items-count">
                {productsData.length} ITEMS
              </span>
              <div className="filter-toggle">
                <Image
                  width={16}
                  height={16}
                  src="/icons/arrow-left.svg"
                  alt="filter"
                  className={isFilterVisible ? 'rotate-180' : ''}
                  unoptimized
                />
                <button className="filter-button" onClick={toggleFilter}>
                  <span>{isFilterVisible ? 'Hide filter' : 'Show filter'}</span>
                </button>
              </div>
            </div>
            <SortDropdown />
          </div>

          <div className="products-container">
            {isFilterVisible && <Filters categories={categoriesData} />}
            <Products initialProducts={productsData} />
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}