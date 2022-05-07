import { createSlice } from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, showCounter: false }
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment (state) {
            state.counter++
        },
        decrement (state) {
            state.counter--
        },
        increase (state, action) {
            state.counter = state.counter + action.payload
        },
        toggle (state) {
            state.showCounter = !state.showCounter
        },
        reduce (state, action) {
            state.counter = state.counter - action.payload
        }

    }
})
export const counterAction = counterSlice.actions
export default counterSlice.reducer