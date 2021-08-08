import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    info: null
  },
  reducers: {
    register: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.value += 1
      console.log("s", state)
      console.log("a", action)
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { register, decremented } = userSlice.actions
export default userSlice.reducer

