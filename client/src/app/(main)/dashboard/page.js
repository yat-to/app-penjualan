import React from 'react'

const transaksi = [
    {
        id: 1,
        tanggal: "2026-02-28",
        nama_pelanggan: "Budi Santoso",
        hp_pelanggan: "081234567890",
        qty: "3",
        total: 30000
    },
    {
        id: 2,
        tanggal: "2026-02-28",
        nama_pelanggan: "Andi Wijaya",
        hp_pelanggan: "082196412278",
        qty: "5",
        total: 25000
    },
    {
        id: 3,
        tanggal: "2026-02-28",
        nama_pelanggan: "Citra Dewi",
        hp_pelanggan: "085234567890",
        qty: "2",
        total: 20000
    }
];

export const produkTerlarisDummy = [
    {
        id: 1,
        nama_barang: "Overgrip Li-Ning GP1000",
        stok_tersedia: 38,
        total_belanja: 96000   // 12 pcs x 8.000
    },
    {
        id: 2,
        nama_barang: "Grip Handuk Yonex AC402",
        stok_tersedia: 20,
        total_belanja: 108000  // 6 pcs x 18.000
    },
    {
        id: 3,
        nama_barang: "Shuttlecock RSL Classic (1 Tube)",
        stok_tersedia: 10,
        total_belanja: 465000  // 3 tube x 155.000
    },
    {
        id: 4,
        nama_barang: "Senar Yonex BG65",
        stok_tersedia: 12,
        total_belanja: 285000  // 3 pcs x 95.000
    },
    {
        id: 5,
        nama_barang: "Grip Karet Polos",
        stok_tersedia: 32,
        total_belanja: 90000   // 15 pcs x 6.000
    }
];

export default function Page() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-700">Penjualan Hari Ini</h3>
                    <p className="text-3xl font-bold text-blue-600 mt-2">1,240</p>
                </div>
                <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-700">Transaksi Hari Ini</h3>
                    <p className="text-3xl font-bold text-green-600 mt-2">Rp 15.200.000</p>
                </div>
                <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-700">Total Produk</h3>
                    <p className="text-3xl font-bold text-blue-600 mt-2">1,240</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-700 pb-3 border-b border-gray-200">Transaksi Terbaru</h3>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">NAMA</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">QTY</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">TOTAL</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {transaksi.map((data) => (
                                    <tr key={data.id} className="hover:bg-blue-50/30 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-gray-700">{data.nama_pelanggan}</span>
                                                <span className="text-[11px] font-mono text-gray-500">{data.hp_pelanggan}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm text-gray-700">{data.qty}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm text-gray-700">Rp{data.total.toLocaleString('id-ID')}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-700 pb-3 border-b border-gray-200">Produk Terlaris</h3>
                    <div className="space-y-5 mt-4">
                        {produkTerlarisDummy.map((data, index) => (
                            <div key={data.id} className="group">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex gap-3">
                                        <div>
                                            <p className="text-sm font-bold text-gray-800">
                                                {data.nama_barang}
                                            </p>
                                            <p className="text-[11px] text-gray-400 font-medium">
                                                Barang tersisa {data.stok_tersedia} pcs
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-700">
                                            Rp{data.total_belanja.toLocaleString('id-ID')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
