import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useBasket = create(
    persist(


        (set, get) => ({
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
                        set((oldBasket) => {
                            return {
                                invoice: {
                                    totalPrice: oldBasket.invoice.totalPrice + payload.price,
                                    deliveryCost: 0,
                                    discount: 0
                                },
                                items: [...oldBasket.items, { ...payload, quantity: 1 }]
                            }
                        })
                    }

                },
                removeFromBasket: (payload) => {
                    const shouldRemove = payload.quantity === 1;
                    if (shouldRemove) {
                        set((oldBasket) => ({
                            invoice: {
                                ...oldBasket.invoice,
                                totalPrice: oldBasket.invoice.totalPrice - payload.price
                            },
                            items: oldBasket.items.filter((item) => item.id !== payload.id)
                        }))
                    } else {
                        set((oldBasket) => ({
                            invoice: {
                                ...oldBasket.invoice,
                                totalPrice: oldBasket.invoice.totalPrice - payload.price
                            },
                            items: oldBasket.items.map((item) => {
                                if (item.id === payload.id) {
                                    return { ...item, quantity: item.quantity - 1 }
                                } else return item
                            })
                        }))
                    }
                }
            }
        }),
        {
            name: 'basket-data',
            partialize: (state) =>
                Object.fromEntries(
                    Object.entries(state).filter(([key]) => !['actions'].includes(key)),
                ),
        }
    )

);


export default useBasket;