import { create } from 'zustand'

const useBasket = create((set, get) => ({
    // data for store

    items: [],
    invoice: {
        totalPrice: 0,
        deliveryCost: 0,
        discount: 0
    },

    // actions for store data
    actions: {
        addToBasket: (payload) => {

            // already exist
            const alreadyExist = get().items.some((item) => item.id === payload.id)
            if (alreadyExist) {
                set((oldBasket) => ({
                    invoice: {
                        totalPrice: oldBasket.invoice.totalPrice + payload.price,
                        deliveryCost: 0,
                        discount: 0
                    },
                    items: oldBasket.items.map((item) => {
                        if (item.id === payload.id) {
                            return { ...item, quantity: item.quantity + 1 }
                        } else return item
                    })
                }))
            } else {
                set((oldBasket) => ({
                    invoice: {
                        totalPrice: oldBasket.invoice.totalPrice + payload.price,
                        deliveryCost: 0,
                        discount: 0
                    },
                    items: [...oldBasket.items, { ...payload, quantity: 1 }]
                }))
            }

        },
        removeFromBasket: () => { }
    }
}));


export default useBasket;