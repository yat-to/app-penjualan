"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulasi proses login selama 1 detik
        setTimeout(() => {
            console.log("Login berhasil");
            router.push("/beranda");
        }, 1000);
    };

    return (
        <div className="flex min-h-screen items-center justify-center p-4 bg-[linear-gradient(135deg,#eef4ff,#bdd2ff,#4880ff)]">
            <div className="w-full max-w-md p-8 bg-slate-50 rounded-2xl shadow-xl">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-slate-800">Selamat Datang</h1>
                    <p className="text-slate-500 mt-2">Silakan masuk ke akun Anda</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Username
                        </label>
                        <input
                            type="name"
                            placeholder="admin@example.com"
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-slate-800"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-lg shadow-blue-200 disabled:opacity-50"
                    >
                        {loading ? "Menghubungkan..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}