import { Cart } from '@/app/utilis/type'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState: Cart[] = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const {  } = cartSlice.actions

export default cartSlice.reducer