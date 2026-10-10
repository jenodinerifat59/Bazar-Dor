
"use client";

import React from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function SignInForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = String(formData.get("email") || "").trim();
    const password = String(formData.get("password") || "");

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "সাইন ইন করা যায়নি!");
        return;
      }

      if (data) {
        toast.success("সাইন ইন সফল হয়েছে!");
        window.location.href = "/";
      }
    } catch {
      toast.error("কিছু একটা সমস্যা হয়েছে!");
    }
  };
  const handelSignin = async () => {
              try {
                const { error } = await authClient.signIn.social({
                  provider: "google",
                  callbackURL: "/",
                });

                if (error) toast.error(error.message);
              } catch {
                toast.error("Google দিয়ে সাইন ইন করা যায়নি!");
              }
            }
      const signIngithub = async () => {
              try {
                const { error } = await authClient.signIn.social({
                  provider: "github",
                  callbackURL: "/",
                });

                if (error) toast.error(error.message);
              } catch {
                toast.error("GitHub দিয়ে সাইন ইন করা যায়নি!");
              }
            }      

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f2f5f1] px-4 py-12 text-[#2d3748]">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-[#111827] mb-2">
          সাইন ইন
        </h1>
        <p className="text-sm text-gray-600">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      <div className="w-full max-w-md bg-[#fafbf9] border border-gray-200/80 rounded-2xl p-8 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              ইমেইল
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-[#f7f9f6] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              পাসওয়ার্ড
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="পাসওয়ার্ড লিখুন"
              autoComplete="current-password"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-[#f7f9f6] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#008744] hover:bg-[#00753b] text-white font-medium rounded-lg shadow-sm transition-colors text-sm"
          >
            সাইন ইন
          </button>
        </form>

        <div className="relative my-6 flex items-center justify-center">
          <div className="border-t border-gray-200 w-full" />
          <span className="bg-[#fafbf9] px-3 text-xs text-gray-500 absolute">
            অথবা
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={handelSignin}
            className="flex items-center justify-center gap-2 px-3 py-2.5 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 text-xs font-semibold text-gray-800 transition-colors shadow-sm"
          >
            
            <span>Google দিয়ে চালিয়ে যান</span>
          </button>

          <button
            type="button"
            onClick={signIngithub}
            className="flex items-center justify-center gap-2 px-3 py-2.5 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 text-xs font-semibold text-gray-800 transition-colors shadow-sm"
          >
            
            <span>GitHub দিয়ে চালিয়ে যান</span>
          </button>
        </div>

        <div className="text-center mt-6 text-sm text-gray-600">
          অ্যাকাউন্ট নেই?{" "}
          <Link
            href="/sign-up"
            className="text-[#008744] hover:underline font-semibold"
          >
            সাইন আপ করুন
          </Link>
        </div>
      </div>

      <div className="mt-6">
        <Link
          href="/"
          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
}

