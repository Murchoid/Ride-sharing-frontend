import { useState } from "react";
import { useForm } from "@tanstack/react-form";
import validateField, { registerSchema, type RegisterSchema } from "@/lib/validation/auth.schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

export default function AuthReg() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

 const registerSchemaWithPasswordMatch = registerSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }
);

const form = useForm({
  defaultValues: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  } as RegisterSchema,
  onSubmit: async ({ value }) => {
    const result = registerSchemaWithPasswordMatch.safeParse(value);

       if (!result.success) {
      return {
        form: "Validation failed",
        fields: result.error.formErrors.fieldErrors,
      };
    }
    console.log("Registering with", value);
    // call your API here

    navigate({to:'/auth/user/signin'});
    form.reset();
  },
});


  return (
    <form 
    onSubmit={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    form.handleSubmit()
                }}
    className="space-y-4">
      {/* Name Field */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Name</label>
        <form.Field name="name"
            validators={{
                                    onChange: ({ value }) => validateField(value, registerSchema.shape.name),
                                    onBlur: ({ value }) => validateField(value, registerSchema.shape.name),
                                }}
        >
          {(field) => (
            <Input
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Enter your name"
              className="h-[50px] border-gray-300 text-[#adaebc]"
            />
          )}
        </form.Field>
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Email</label>
        <form.Field name="email"
            validators={{
                                    onChange: ({ value }) => validateField(value, registerSchema.shape.email),
                                    onBlur: ({ value }) => validateField(value, registerSchema.shape.email),
                                }}
        >
          {(field) => (
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <Input
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Enter email"
                className="pl-10 h-[50px] border-gray-300 text-[#adaebc]"
              />
              {field.state.meta.errors?.[0] && (
                <p className="text-red-500 text-xs mt-1">
                  {field.state.meta.errors[0]}
                </p>
              )}
            </div>
          )}
        </form.Field>
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Password</label>
        <form.Field name="password"
            validators={{
                                    onChange: ({ value }) => validateField(value, registerSchema.shape.password),            
                                    onBlur: ({ value }) => validateField(value, registerSchema.shape.password),
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
                <p className="text-red-500 text-xs mt-1">
                  {field.state.meta.errors[0]}
                </p>
              )}
            </div>
          )}
        </form.Field>
      </div>

      {/* Confirm Password Field */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">Repeat Password</label>
        <form.Field name="confirmPassword"
             validators={{
                                    onChange: ({ value }) => validateField(value, registerSchema.shape.confirmPassword),
                                    onBlur: ({ value }) => validateField(value, registerSchema.shape.confirmPassword),
                                }}
        >
          {(field) => (
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3.5 text-gray-400" />
              <Input
                type={showConfirm ? "text" : "password"}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Repeat password"
                className="pl-10 pr-10 h-[50px] border-gray-300 text-[#adaebc]"
              />
              {showConfirm ? (
                <EyeOff
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 cursor-pointer"
                  onClick={() => setShowConfirm(false)}
                />
              ) : (
                <Eye
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 cursor-pointer"
                  onClick={() => setShowConfirm(true)}
                />
              )}
              {field.state.meta.errors?.[0] && (
                <p className="text-red-500 text-xs mt-1">
                  {field.state.meta.errors[0]}
                </p>
              )}
            </div>
          )}
        </form.Field>
      </div>

      {/* Register Button */}
      <Button type="submit" className="w-full h-12 bg-green-600 hover:bg-green-700 text-white rounded-xl">
        Register
      </Button>
    </form>
    
  );
}
