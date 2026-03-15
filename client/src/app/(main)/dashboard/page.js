import React from 'react'
import SalesChart from '@/app/components/salesChart';

const dataGrafikDariDatabase = [
    { tanggal: "Jan", total: 4500000 },
    { tanggal: "Feb", total: 5200000 },
    { tanggal: "Mar", total: 4800000 },
    { tanggal: "Apr", total: 6100000 },
    { tanggal: "Mei", total: 5900000 },
    { tanggal: "Jun", total: 7200000 },
    { tanggal: "Jul", total: 8500000 },
    { tanggal: "Agu", total: 7800000 },
    { tanggal: "Sep", total: 9100000 },
    { tanggal: "Okt", total: 8200000 },
    { tanggal: "Nov", total: 9500000 },
    { tanggal: "Des", total: 11000000 },
];

const transaksi = [
    {
        product: "Kaos Polos Hitam",
        order_id: "ORD-001",
        date: "2026-02-28",
        customer_name: "Budi Santoso",
        payment: "Cash",
        amount: 30000
    },
    {
        product: "Kaos Polos Putih",
        order_id: "ORD-002",
        date: "2026-02-28",
        customer_name: "Andi Wijaya",
        payment: "Transfer",
        amount: 25000
    },
    {
        product: "Hoodie Basic Abu",
        order_id: "ORD-003",
        date: "2026-02-28",
        customer_name: "Citra Dewi",
        payment: "Transfer",
        amount: 20000
    }
];

const produkTerlarisDummy = [
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
                    <h3 className="text-lg font-semibold text-gray-700">Today Sales</h3>
                    <p className="text-3xl font-bold text-blue-600 mt-2">1,240</p>
                </div>
                <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-700">Transactions</h3>
                    <p className="text-3xl font-bold text-green-600 mt-2">Rp 15.200.000</p>
                </div>
                <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-700">Total Products</h3>
                    <p className="text-3xl font-bold text-blue-600 mt-2">1,240</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-6">
                <div className="md:col-span-8 space-y-4">
                    <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-700 pb-3 border-b border-gray-200">Sale Graph</h3>
                        <SalesChart data={dataGrafikDariDatabase} />
                    </div>
                </div>

                <div className="p-6 md:col-span-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-700 pb-3 border-b border-gray-200">Best Sellers</h3>
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
                                        <p className="text-sm font-bold text-blue-600">Rp{data.total_belanja.toLocaleString('id-ID')}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-6">
                <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-700 pb-3 border-b border-gray-200">Transaksi Terbaru</h3>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Product</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Order ID</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Date</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Customer Name</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Payments</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {transaksi.map((data) => (
                                    <tr key={data.id} className="hover:bg-blue-50/30 transition-colors group">
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-sm font-bold text-gray-700">{data.product}</span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-sm text-gray-700">{data.order_id}</span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-sm text-gray-700">{data.date}</span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-sm text-gray-700">{data.customer_name}</span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold 
                                                ${data.payment === 'Cash' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                                                
                                                <span className={`w-2 h-2 rounded-full 
                                                    ${data.payment === 'Cash' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                                                </span>
                                                {data.payment}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-sm text-gray-700">Rp{data.amount.toLocaleString('id-ID')}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
