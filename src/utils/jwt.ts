import {jwtDecode} from "jwt-decode";

export function getUserInfoFromToken(token: string | null): { sub?: string; email?: string; role?: string; isActive: boolean} | null {
  try {
    const decoded = jwtDecode<{ sub?: string; email?: string; role?: string; isActive: boolean }>(token as string);
    return {
      sub: decoded.sub,
      email: decoded.email,
      role: decoded.role,
      isActive: decoded.isActive
    };
  } catch {
    return null;
  }
}

export function getTokens(){
    const accessToken = localStorage.getItem('authorized');
    const refreshToken = localStorage.getItem('authorized');
    return { accessToken, refreshToken };
}