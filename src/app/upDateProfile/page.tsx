
"use client";

import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const UpdatePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = String(formData.get("name") || "").trim();
    const image = String(formData.get("image") || "").trim();

    if (!name) {
      toast.error("নাম লিখুন");
      return;
    }

    try {
      const { error } = await authClient.updateUser({
        name,
        image: image || undefined,
      });

      if (error) {
        toast.error(error.message || "প্রোফাইল আপডেট করা যায়নি!");
        return;
      }

      toast.success("প্রোফাইল আপডেট সফল হয়েছে!");
      setIsEditing(false);
    } catch {
      toast.error("কিছু একটা সমস্যা হয়েছে!");
    }
  };

  const handleSignOut = async () => {
    try {
      const { error } = await authClient.signOut();

      if (error) {
        toast.error(error.message || "সাইন আউট করা যায়নি!");
        return;
      }

      toast.success("সাইন আউট সফল হয়েছে!");
      window.location.href = "/sign-in";
    } catch {
      toast.error("কিছু একটা সমস্যা হয়েছে!");
    }
  };

  if (!user) {
    return (
      <p className="mt-10 text-center">
        Please sign in first.
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f7f4] p-4 sm:p-8 flex justify-center">
      <div className="w-full max-w-3xl space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            আমার প্রোফাইল
          </h1>
          <p className="text-sm text-gray-600">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={user.image || "/default-avatar.png"}
              alt={user.name || "User Avatar"}
              className="w-16 h-16 rounded-full object-cover"
            />

            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {user.name || "ইউজার পাওয়া যায়নি"}
              </h2>
              <p className="text-sm text-gray-500">
                {user.email}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSignOut}
            className="px-4 py-2 border border-red-200 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 transition"
          >
            ← সাইন আউট
          </button>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-md font-semibold text-gray-900">
              তথ্য আপডেট
            </h3>

            <button
              type="button"
              onClick={() => setIsEditing(!isEditing)}
              className="text-sm text-green-700 font-medium hover:underline"
            >
              {isEditing ? "বাতিল" : "এডিট করুন"}
            </button>
          </div>

          {isEditing && (
            <form onSubmit={handleUpdate} className="space-y-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  নাম
                </label>
                <input
                  name="name"
                  type="text"
                  defaultValue={user.name || ""}
                  placeholder="আপনার নাম লিখুন"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-50/50 text-gray-800"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  প্রোফাইল ছবির URL
                </label>
                <input
                  name="image"
                  type="url"
                  defaultValue={user.image || ""}
                  placeholder="https://example.com/image.png"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-600 bg-gray-50/50 text-gray-800"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#13883b] hover:bg-[#107532] text-white font-medium rounded-xl transition shadow-sm"
              >
                আপডেট
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
