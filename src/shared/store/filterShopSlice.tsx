import { PayloadAction, createSlice, Dispatch } from '@reduxjs/toolkit';

const initialState = {
  opened: false,
  near: false,
  shops: true,
  posts: false,
};

type changeFilterType = {
  value: boolean;
  type: string;
};

export const shopFilterSlice = createSlice({
  name: 'shopsFilter',
  initialState,
  reducers: {
    changeState(state, action: PayloadAction<changeFilterType>) {
      const key = action.payload.type;
      state[key as keyof typeof initialState] = action.payload.value;
    },
  },
});

export const changeFilterState =
  ({ value, type }: changeFilterType) =>
  async (dispatch: Dispatch) => {
    dispatch(shopFilterSlice.actions.changeState({ value, type }));
  };

export default shopFilterSlice.reducer;
