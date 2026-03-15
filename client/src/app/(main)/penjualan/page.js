"use client";
import React, { useState } from "react";
import {
    Plus,
    Trash2,
    X,
    ChevronLeft,
    ChevronRight,
    Eye,
    LayoutGrid,
    Table as TableIcon,
    Phone
} from "lucide-react";

import { transaksi } from "@/data/transaksi";

export default function Page() {
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [selectData, setSelectData] = useState(null);
    const [viewMode, setViewMode] = useState("table");

    const openAdd = () => {
        setSelectData(null);
        setAddModal(true);
    };

    const openEdit = (item) => {
        setSelectData(item);
        setEditModal(true);
    };

    const openDelete = (item) => {
        setSelectedTransaksi(item);
        setDeleteModal(true);
    };

    // Fungsi helper untuk badge warna agar tidak nulis berulang
    const getBadgeStyle = (metode) => {
        const styles = {
            Cash: "bg-green-100 text-green-600",
            Transfer: "bg-blue-100 text-blue-600",
            QRIS: "bg-purple-100 text-purple-600",
        };
        return styles[metode] || "bg-gray-100 text-gray-600";
    };

    return (
        <div className="space-y-6 pb-10 min-h-screen">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Riwayat Penjualan</h1>
                </div>

                <button onClick={() => openAdd()} className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-md transition-all active:scale-95">
                    <Plus size={18} />
                    <span>Transaksi Baru</span>
                </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <div className="flex items-center bg-gray-100 p-1 rounded-lg">
                        <button
                            onClick={() => setViewMode("table")}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${viewMode === "table" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                        >
                            <TableIcon size={16} />
                            Tabel
                        </button>
                        <button
                            onClick={() => setViewMode("card")}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${viewMode === "card" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                        >
                            <LayoutGrid size={16} />
                            Kartu
                        </button>
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                        Total: <span className="text-gray-800">{transaksi.length}</span> Transaksi
                    </div>
                </div>

                <div className="p-0">
                    {viewMode === "table" ? (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
                                    <tr>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-center">No</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-center">ID Transaksi</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Pelanggan</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-center">Tanggal</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-center">Metode</th>
                                        <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-right">Total</th>
                                        <th className="px-6 py-4"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {transaksi.map((data, index) => (
                                        <tr key={data.id} className="hover:bg-blue-50/40 transition-colors">
                                            <td className="px-6 py-4 text-center text-sm text-gray-500">{index + 1}</td>
                                            <td className="px-6 py-4 text-center text-sm font-mono font-bold text-blue-600">{data.id_transaksi || data.kode_transaksi}</td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm font-semibold text-gray-800">{data.nama_pembeli}</div>
                                                <div className="text-xs text-gray-400 flex items-center gap-1"><Phone size={10} /> {data.no_wa}</div>
                                            </td>
                                            <td className="px-6 py-4 text-center text-sm text-gray-600">{data.tanggal}</td>
                                            <td className="px-6 py-4 text-center">
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${getBadgeStyle(data.metode_bayar)}`}>
                                                    {data.metode_bayar}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right text-sm font-bold text-gray-800">
                                                Rp{data.total.toLocaleString("id-ID")}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end gap-1">
                                                    <button onClick={() => openDetail(data)} className="p-2 text-gray-400 hover:text-blue-600 transition-colors"><Eye size={18} /></button>
                                                    <button onClick={() => openDelete(data)} className="p-2 text-gray-400 hover:text-red-600 transition-colors"><Trash2 size={18} /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 bg-gray-50/50">
                            {transaksi.map((data, index) => (
                                <div key={data.id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 "></div>
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">ID Transaksi</span>
                                            <div className="text-sm font-bold text-blue-600">{data.id_transaksi || data.kode_transaksi}</div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Tanggal</span>
                                            <div className="text-xs text-gray-600">{data.tanggal}</div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                                        <div className="text-sm font-bold text-gray-800">{data.nama_pembeli}</div>
                                        <div className="text-xs text-gray-500 flex items-center gap-1.5 mt-1">
                                            <Phone size={12} className="text-gray-400" /> {data.no_wa}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${getBadgeStyle(data.metode_bayar)}`}>
                                            {data.metode_bayar}
                                        </span>
                                        <div className="text-right">
                                            <div className="text-xs text-gray-400">Total Bayar</div>
                                            <div className="text-sm font-extrabold text-gray-800 text-lg">Rp{data.total.toLocaleString("id-ID")}</div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end gap-2 mt-4">
                                        <button onClick={() => openDetail(data)} className="flex-1 flex justify-center items-center gap-1 py-2 rounded-md bg-blue-50 text-blue-600 text-xs font-bold hover:bg-blue-100 transition-colors">
                                            <Eye size={14} /> Detail
                                        </button>
                                        <button onClick={() => openDelete(data)} className="p-2 rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition-colors">
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="px-6 py-4 border-t border-gray-200 bg-white flex justify-between items-center">
                    <span className="text-xs text-gray-500 hidden sm:block">Halaman 1 dari 1</span>
                    <div className="flex items-center gap-2 mx-auto sm:mx-0">
                        <button className="p-2 border border-gray-200 rounded-lg text-gray-400 hover:bg-gray-50 transition-all disabled:opacity-50">
                            <ChevronLeft size={16} />
                        </button>
                        <button className="w-9 h-9 bg-blue-600 text-white text-xs font-bold rounded-lg shadow-sm shadow-blue-200">
                            1
                        </button>
                        <button className="p-2 border border-gray-200 rounded-lg text-gray-400 hover:bg-gray-50 transition-all disabled:opacity-50">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>



                {addModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                        <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
                            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                                <h3 className="font-bold text-gray-800 text-lg">
                                    Tambah
                                </h3>
                                <button onClick={() => setAddModal(false)} className="text-gray-400 hover:text-gray-600">
                                    <X size={20} />
                                </button>
                            </div>

                            <form className="p-6 space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Nama Pembeli</label>
                                    <input
                                        type="text"
                                        defaultValue={selectData?.nama || ''}
                                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-sm transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">No Wa</label>
                                    <input
                                        type="number"
                                        defaultValue={selectData?.no_wa || ''}
                                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-sm transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Total</label>
                                    <input
                                        type="number"
                                        defaultValue={selectData?.total || ''}
                                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-sm transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Metode Pembayaran</label>
                                    <select
                                        defaultValue={selectData?.metode_bayar || ''}
                                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-sm transition-all"
                                    >
                                        <option value="">Pilih</option>
                                        <option value="Cash">Cash</option>
                                        <option value="Transfer">Transfer</option>
                                        <option value="QRIS">QRIS</option>
                                    </select>
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <button
                                        type="button"
                                        onClick={() => setAddModal(false)}
                                        className="flex-1 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-all"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 shadow-md shadow-blue-200 transition-all"
                                    >
                                        Simpan Data
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}