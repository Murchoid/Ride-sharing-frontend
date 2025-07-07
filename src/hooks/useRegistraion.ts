import { useMutation } from "@tanstack/react-query";
import { registerApi } from "@/api/auth";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

export function useLogin() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: registerApi,
    onSuccess: () => {
      toast.success('Registration successful');
      navigate({to : '/auth/user/signin'});
    },
    onError: (err) => {
      console.error("Login error", err);
      toast.error("Error loggin in " + err);
    },
  });
}