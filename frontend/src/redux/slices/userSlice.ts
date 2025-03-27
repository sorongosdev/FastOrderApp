import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../consts/Url';

// 사용자 인증 비동기 액션 생성
export const loginUser = createAsyncThunk(
  'user/login',
  async ({ textId, pw }: { textId: string; pw: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/user/login`,
        {
          text_id: textId,
          pw: pw,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue('로그인에 실패했습니다.');
    }
  }
);

interface UserState {
  token: string | null;
  userId: string | null;
  userName: string | null;
  userPoint: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  token: null,
  userId: null,
  userName: null,
  userPoint: 0,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userName = action.payload.name;
      state.userId = action.payload.userId;
      state.userPoint = action.payload.points || 0;
    },
    logoutUser: (state) => {
      state.token = null;
      state.userId = null;
      state.userName = null;
      state.userPoint = 0;
    },
    updatePoints: (state, action) => {
      state.userPoint = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setToken, setUserInfo, logoutUser, updatePoints } = userSlice.actions;
export default userSlice.reducer;