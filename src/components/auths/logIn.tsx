import { useForm } from "@tanstack/react-form";
import validateField, { loginSchema, type LoginSchema } from "@/lib/validation/auth.schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye,EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";

export default function AuthLog() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    }as LoginSchema,
    onSubmit: async ({ value }) => {
      const result = loginSchema.safeParse(value);
      if (!result.success) {
                console.error('Validation failed:', result.error.issues)
                return
          }
      console.log("Logging in with", value);
      // call your API here
      form.reset();
    },
  }) ;

  return (
    <form 
      onSubmit={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    form.handleSubmit()
                }}
    >
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Email or Phone</label>
        <form.Field name="email"
          validators={{
                        onChange: ({ value }) => validateField(value, loginSchema.shape.email),
                        onBlur: ({ value }) => validateField(value, loginSchema.shape.email),
                    }}
        >
          {(field) => (
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <Input
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Enter email or phone"
                className="pl-10 h-[50px] border-gray-300 text-[#adaebc]"
              />
              {field.state.meta.errors?.[0] && (
                <p className="text-red-500 text-xs mt-1">{field.state.meta.errors[0]}</p>
              )}
            </div>
          )}
        </form.Field>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Password</label>
        <form.Field name="password"
          validators={{
                        onChange: ({ value }) => validateField(value, loginSchema.shape.password),
                        onBlur: ({ value }) => validateField(value, loginSchema.shape.password),
                    }}
        >
          {(field) => (
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3.5 text-gray-400" />
              <Input
                type={showPassword ? "text" : "password"}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Enter password"
                className="pl-10 pr-10 h-[50px] border-gray-300 text-[#adaebc]"
              />
              {showPassword ? (
                <EyeOff
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <Eye
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
              {field.state.meta.errors?.[0] && (
                <p className="text-red-500 text-xs mt-1">{field.state.meta.errors[0]}</p>
              )}
            </div>
          )}
        </form.Field>
      </div>

      <div className="flex items-center justify-between mt-2 mb-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <label htmlFor="remember" className="text-sm text-gray-600">
            Remember me
          </label>
        </div>
        <a href="#" className="text-sm text-green-600">
          Forgot password?
        </a>
      </div>

      <Button type="submit" className="w-full h-12 bg-green-600 hover:bg-green-700 text-white rounded-xl">
        Login
      </Button>
    </form>
  );
}
