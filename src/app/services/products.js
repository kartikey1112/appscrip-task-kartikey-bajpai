const BASE_URL = 'https://fakestoreapi.com';

export async function getProducts() {
    try {
        const response = await fetch(`${BASE_URL}/products`, {
            next: { revalidate: 3600 } // Revalidate every hour
        });
        if (!response.ok) throw new Error('Failed to fetch products');
        return response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

export async function getCategories() {
    try {
        const response = await fetch(`${BASE_URL}/products/categories`, {
            next: { revalidate: 3600 }
        });
        if (!response.ok) throw new Error('Failed to fetch categories');
        return response.json();
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}

export async function getProductsByCategory(category) {
    try {
        const response = await fetch(`${BASE_URL}/products/category/${category}`, {
            next: { revalidate: 3600 }
        });
        if (!response.ok) throw new Error('Failed to fetch products by category');
        return response.json();
    } catch (error) {
        console.error('Error fetching products by category:', error);
        return [];
    }
}