import { useMutation } from "@tanstack/react-query";
import { loginApi } from "@/api/auth";
import { useAuthStore } from "@/store/authStore";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

export function useLogin() {
  const setTokens = useAuthStore((s) => s.setTokens);
  const navigate = useNavigate()


  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      setTokens({
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
        isVerified: true
      });
      toast.success("Log in successful");

      navigate({to: "/"})
    },
    onError: (err) => {
      console.error("Login error", err);
      toast.error("Failed to Log in," + err);
    },
  });
}