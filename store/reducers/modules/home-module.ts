import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ListOptions {
  page: number
  ordination: string
  perPage: number
  searchValue: string
}

interface HomeModuleStateProps {
  listOptions: ListOptions
}

const initialState: HomeModuleStateProps = {
  listOptions: {
    page: 1,
    perPage: 10,
    ordination: 'id,desc',
    searchValue: ''
  }
}

export const homeModuleSlice = createSlice({
  name: 'homeModule',
  initialState,
  reducers: {
    setListOptions: (state, action: PayloadAction<Partial<ListOptions>>) => {
      state.listOptions = { ...state.listOptions, ...action.payload }
    }
  }
})

export const { setListOptions } = homeModuleSlice.actions
