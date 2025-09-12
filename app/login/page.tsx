"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, ArrowRight, ShieldCheck, QrCode, CheckCircle2 } from "lucide-react";

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type FormValues = z.infer<typeof schema>;

export default function LoginPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setSubmitting(true);
      // TODO: Replace with your login API
      await new Promise((r) => setTimeout(r, 1300));
      console.log("Login payload", data);
      setSubmitted(true);
    } catch (e) {
      console.error(e);
      alert("Login failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-[100dvh] bg-gradient-to-b from-white via-white to-[#fff8f3]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10 bg-[radial-gradient(ellipse_at_top,rgba(22,163,74,0.25),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(249,115,22,0.25),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#006400] rounded-full px-3 py-1">
              <ShieldCheck className="h-4 w-4" /> QuickMenuX Login
            </span>
            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827]">
              Welcome back to <span className="text-[#f97316]">Quick</span>
              <span className="text-[#006400]">Menu</span>X
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Log in to manage your restaurant profile, update menus, and keep your QR-powered menu online.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <div className="inline-flex items-center gap-2"><QrCode className="h-4 w-4 text-[#111827]" /> Fast QR access</div>
              <div className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#16a34a]" /> Secure login</div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow ring-1 ring-black/5 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-[#111827]">Login to your account</h2>
            <p className="mt-1 text-sm text-gray-600">
              Enter your credentials below to access your dashboard.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  className="mt-1 w-full rounded-xl border-gray-300 focus:border-[#f97316] focus:ring-[#f97316]"
                  placeholder="you@restaurant.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  {...register("password")}
                  className="mt-1 w-full rounded-xl border-gray-300 focus:border-[#16a34a] focus:ring-[#16a34a]"
                  placeholder="••••••••"
                />
                {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>}
              </div>

              <div className="flex items-center justify-between">
                <Link href="/forgot-password" className="text-sm font-medium text-[#f97316] hover:underline">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#f97316] px-5 py-3 text-white font-semibold shadow hover:bg-[#fb923c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f97316] disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  <>
                    Login <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="text-sm text-gray-600 text-center">
                Don’t have an account?{" "}
                <Link href="/signup" className="text-[#006400] font-medium hover:underline">
                  Sign up
                </Link>
              </p>

              {submitted && (
                <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                  <p className="font-semibold">Success! 🎉</p>
                  <p className="mt-1">You are now logged in (demo). Redirect to dashboard here.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
