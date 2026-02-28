import { create } from "zustand";

const useBeritaStore = create((set) => ({
    list_data: [],
    loading: false,
    error: null,

    getView: async () => {
        set({
            loading: true,
            error: null
        });

        try {
            const res = await fetch('http://127.0.0.1:8000/berita', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${localStorage.getItem('token')}` // Jika butuh token
                },
            });
            if (!res.ok) {
                throw new Error('Gagal mengambil data dari server');
            }

            const data = await res.json();
            set({
                list_data: data,
                loading: fals
            })
        } catch (err) {
            set({
                error: err.message,
                loading: false
            })
        };
    }
}))

export default useBeritaStore