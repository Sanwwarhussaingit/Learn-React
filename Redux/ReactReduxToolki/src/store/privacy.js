
import { createSlice } from "@reduxjs/toolkit"

const privactSlice = createSlice({
  name: 'privacy',
  initialState: false,
  reducers: {
    toggle: function(state){
      return state = !state;
    },
  }
});
export const privacyActions = privactSlice.actions;
export default privactSlice;
