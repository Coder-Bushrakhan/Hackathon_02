import { products } from '@/app/utilis/mock'
import { Product } from '@/app/utilis/type'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState: Product[]= products

export const productSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const {  } = productSlice.actions

export default productSlice.reducer