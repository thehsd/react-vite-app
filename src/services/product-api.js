export const getProductList = async () => {
    const request = await fetch('https://fakestoreapi.com/products')
    const response = await request.json()
    return response
}

export const AddProduct = async (params) => {

    const payload = { ...params, image: 'https://dkstatics-public.digikala.com/digikala-products/6733544c7f75ae04d097e6fdae3dc353d176b611_1737287896.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80' }
    const request = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        body: JSON.stringify(payload)
    })
    const response = await request.json()
    return response;
}