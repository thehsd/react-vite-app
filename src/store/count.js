import { create } from 'zustand'


const initData = [
    {
        username: '',
        age: 12,
        email: 'asd'
    },
    {
        username: '',
        age: 12,
        email: 'asd'
    },
    {
        username: '',
        age: 12,
        email: 'asd'
    }
]


export const useCount = create((set) => ({
    count: initData,

    // actions
    actions: {
        increase: (payload) => {
            set((oldState) => ({
                count: oldState.count + payload
            }))
        },
        decrease: (payload = 1) => {
            set((oldState) => ({
                count: oldState.count - payload
            }))
        }
    }

}))
