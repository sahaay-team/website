"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="flex h-screen">
      {/* Left Column - Form */}
      <div className="w-full lg:w-[45%] flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-medium text-gray-900 mb-2">
            Welcome back
          </h1>
          <p className="text-gray-500 mb-12">
            Sign in to continue your journey with Sahaay
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm text-gray-600 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-gray-200 py-2 text-gray-900 focus:border-orange-500 focus:outline-none transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label 
                htmlFor="password" 
                className="block text-sm text-gray-600 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b border-gray-200 py-2 text-gray-900 focus:border-orange-500 focus:outline-none transition-colors"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <Link 
                href="/forgot-password" 
                className="text-sm text-orange-500 hover:text-orange-600"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white rounded-full py-3 hover:bg-orange-600 transition-colors"
            >
              Sign in
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link 
              href="/signup" 
              className="text-orange-500 hover:text-orange-600"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="hidden lg:block lg:w-[55%] relative">
        <Image
          src="/img/login_img.png"
          alt="Service Provider"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 " />
        
      </div>
    </div>
  );
}


