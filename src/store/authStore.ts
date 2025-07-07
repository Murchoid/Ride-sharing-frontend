import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthTokens = {
  accessToken: string | null;
  refreshToken: string | null;
};

type AuthState = AuthTokens & {
  setTokens: (tokens: AuthTokens) => void;
  clearTokens: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      setTokens: (tokens) => set(tokens),
      clearTokens: () => set({ accessToken: null, refreshToken: null }),
    }),
    {
      name: 'auth-storage', 
      partialize: (state) => ({ accessToken: state.accessToken, refreshToken: state.refreshToken }),
    }
  )
);
