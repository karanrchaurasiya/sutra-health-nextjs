"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
);

export default function DoctorLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setLoading(true);
    setError("");

    const { error: loginError } =
      await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

    if (loginError) {
      console.error("Login error:", loginError);

      setError(
        loginError.message ||
          "Invalid email or password.",
      );

      setLoading(false);
      return;
    }

    router.push("/doctor-dashboard");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-[#FAF8F1] flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">

        <h1 className="text-2xl font-bold text-[#173F35] text-center">
          Doctor Login
        </h1>

        <p className="text-sm text-gray-500 text-center mt-2 mb-8">
          Sign in to manage appointments
        </p>

        <form onSubmit={handleLogin}>

          {/* EMAIL */}

          <div className="mb-5">

            <label
              htmlFor="doctor-email"
              className="block mb-2 text-sm font-medium text-[#36594E]"
            >
              Email
            </label>

            <input
              id="doctor-email"
              name="email"
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              autoComplete="username"
              required
              className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-white text-gray-900 outline-none focus:border-[#173F35] focus:ring-1 focus:ring-[#173F35]"
            />

          </div>

          {/* PASSWORD */}

          <div className="mb-5">

            <label
              htmlFor="doctor-password"
              className="block mb-2 text-sm font-medium text-[#36594E]"
            >
              Password
            </label>

            <input
              id="doctor-password"
              name="password"
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              autoComplete="current-password"
              required
              className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-white text-gray-900 outline-none focus:border-[#173F35] focus:ring-1 focus:ring-[#173F35]"
            />

          </div>

          {/* ERROR */}

          {error && (
            <div className="mb-5 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-xl bg-[#173F35] text-white font-semibold hover:opacity-90 disabled:opacity-60"
          >
            {loading
              ? "Signing in..."
              : "Sign in"}
          </button>

        </form>

      </div>

    </div>
  );
}