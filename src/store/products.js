import { create } from "zustand";

const useProducts = create((set) => ({
    productList: [],
    actions: {
        setList: (payload) => {
            set(() => ({
                productList: payload
            }))
        }
    }
}))

export default useProducts