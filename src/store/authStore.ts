import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthTokens = {
  accessToken: string | null;
  refreshToken: string | null;
  isVerified: boolean;
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
      isVerified: false,  
      setTokens: (tokens) => set({ 
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
        isVerified: tokens.isVerified,
      }),
      clearTokens: () => set({ 
        accessToken: null, 
        refreshToken: null, 
        isVerified: false 
      }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        isVerified: state.isVerified,
      }),
    }
  )
);
