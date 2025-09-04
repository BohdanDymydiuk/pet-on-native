import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Lang {
    EN = 'en',
    UA = 'ua',
}


export interface AppState {
    lang: Lang;
}

const initialState = {
    lang: Lang.EN,
};

export interface UpdateAppSettingsPayload {
    lang: Lang;
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateAppSettings: (
        state: AppState, 
        action: PayloadAction<UpdateAppSettingsPayload>
    ) => {
        state.lang = action.payload.lang;
    },
  },
});

export const { 
    updateAppSettings,
} = appSlice.actions;

export const selectAppSettings = (state: {app: AppState}): AppState => state.app;

export default appSlice.reducer;