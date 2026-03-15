"use client";
import React, { useState, useRef } from "react";
import {
    Plus,
    Trash2,
    X,
    ChevronLeft,
    ChevronRight,
    Eye,
    LayoutGrid,
    Table as TableIcon,
    Phone,
    ChevronDown,
    Ellipsis,
    Edit
} from "lucide-react";

import { produk } from "@/data/produk";

export default function Page() {
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [selectedKategori, setSelectedKategori] = useState(null);
    const [openDropdownId, setOpenDropdownId] = useState(null);
    const toggleDropdown = (id) => {
        setOpenDropdownId(openDropdownId === id ? null : id);
    };

    const openAdd = () => {
        setSelectedKategori(null);
        setAddModal(true);
    };

    const openEdit = (item) => {
        setSelectedKategori(item);
        setEditModal(true);
    };

    const openDeleteModal = (item) => {
        setSelectedKategori(item);
        setDeleteOpen(true);
    };

    return (
        <div className="space-y-6 pb-10 min-h-screen">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Produk</h1>
                </div>

                <button onClick={() => openAdd()} className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-md transition-all active:scale-95">
                    <Plus size={18} />
                    <span>Tambah Data</span>
                </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 bg-gray-50/50">
                        {produk.map((data, index) => (
                            <div key={data.id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="flex justify-between items-center mb-4 gap-4">
                                    {/* 1. SISI KIRI: FOTO PRODUK (Menggunakan data.foto) */}
                                    <div className="flex-shrink-0">
                                        <img
                                            src={data.foto || "/placeholder-image.jpg"}
                                            alt={data.uraian_kategori}
                                            className="w-20 h-20 rounded-lg object-cover border border-gray-100 shadow-sm"
                                        />
                                    </div>

                                    {/* 2. TENGAH: KETERANGAN PRODUK (Nama & Stok) */}
                                    <div className="flex-grow min-w-0">
                                        <div className="text-sm font-bold text-gray-800 leading-tight mb-1 line-clamp-2">
                                            {data.uraian_kategori}
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                                                Yonex
                                            </span>
                                            <div className="flex items-center gap-2">
                                                <div className="mt-1 text-sm font-black text-blue-700">
                                                    Rp{data.harga_jual?.toLocaleString("id-ID")}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 3. SISI KANAN: MENU (text-end) */}
                                    <div className="text-right flex-shrink-0 relative self-start">
                                        <div className="bg-blue-50 rounded-md relative">
                                            <button
                                                onClick={() => toggleDropdown(data.id)}
                                                className="p-1.5 hover:bg-blue-100 rounded-md transition-colors text-blue-600 focus:outline-none"
                                            >
                                                <Ellipsis size={20} />
                                            </button>

                                            {/* LOGIC DROPDOWN: Muncul jika openDropdownId === data.id */}
                                            {openDropdownId === data.id && (
                                                <>
                                                    {/* Backdrop transparan untuk menutup dropdown saat klik di luar */}
                                                    <div
                                                        className="fixed inset-0 z-40"
                                                        onClick={() => setOpenDropdownId(null)}
                                                    ></div>

                                                    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50 animate-in fade-in zoom-in duration-150 origin-top-right">
                                                        <button
                                                            onClick={() => { openDetail(data); setOpenDropdownId(null); }}
                                                            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                                                        >
                                                            <Eye size={16} /> Lihat Data
                                                        </button>

                                                        <button
                                                            onClick={() => { openEdit(data); setOpenDropdownId(null); }}
                                                            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                                                        >
                                                            <Edit size={16} /> Edit Data
                                                        </button>

                                                        <hr className="my-1 border-gray-100" />

                                                        <button
                                                            onClick={() => { openDeleteModal(data); setOpenDropdownId(null); }}
                                                            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-gray-50 transition-colors"
                                                        >
                                                            <Trash2 size={16} /> Hapus Data
                                                        </button>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-lg p-3 mb-4 flex justify-between items-center">
                                    <div>
                                        <div className="text-sm font-bold text-gray-800 leading-tight mb-1 line-clamp-2">Keterangan :</div>
                                        <div className="text-[11px] font-black text-gray-500 text-justify">
                                            {data.keterangan}
                                        </div>
                                    </div>
                                </div>


                                <div className="flex justify-between items-center mb-4 gap-4 p-3 rounded-xl border border-gray-100">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Terjual</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Sisa Stok</span>
                                        </div>
                                    </div>

                                    <div className="text-right flex flex-col gap-2">
                                        <div className="text-sm font-black text-gray-800">
                                            {data.penjualan || 0}
                                        </div>
                                        <div className="text-sm font-black text-gray-800">
                                            {data.stok}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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
                        <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
                            {/* HEADER */}
                            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                                <h3 className="font-bold text-gray-800 text-lg">
                                    {selectData ? 'Edit Produk' : 'Tambah Produk Baru'}
                                </h3>
                                <button onClick={() => setAddModal(false)} className="text-gray-400 hover:text-gray-600">
                                    <X size={20} />
                                </button>
                            </div>

                            {/* FORM */}
                            <form className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Kategori Select */}
                                    <div>
                                        <label className="block text-[10px] font-black text-gray-400 uppercase mb-1 tracking-wider">Kategori</label>
                                        <select
                                            defaultValue={selectData?.kategori_id || ''}
                                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-sm transition-all"
                                        >
                                            <option value="">Pilih Kategori</option>
                                            <option value="1">Sepatu</option>
                                            <option value="2">Racket</option>
                                            <option value="3">Jersey</option>
                                        </select>
                                    </div>

                                    {/* Brand Select */}
                                    <div>
                                        <label className="block text-[10px] font-black text-gray-400 uppercase mb-1 tracking-wider">Brand</label>
                                        <select
                                            defaultValue={selectData?.brand_id || ''}
                                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-sm transition-all"
                                        >
                                            <option value="">Pilih Brand</option>
                                            <option value="1">Yonex</option>
                                            <option value="2">Lining</option>
                                            <option value="3">Victor</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {/* Harga Jual */}
                                    <div>
                                        <label className="block text-[10px] font-black text-gray-400 uppercase mb-1 tracking-wider">Harga Jual (Rp)</label>
                                        <input
                                            type="number"
                                            placeholder="0"
                                            defaultValue={selectData?.harga_jual || ''}
                                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-sm transition-all"
                                        />
                                    </div>

                                    {/* Stok */}
                                    <div>
                                        <label className="block text-[10px] font-black text-gray-400 uppercase mb-1 tracking-wider">Stok Awal</label>
                                        <input
                                            type="number"
                                            placeholder="0"
                                            defaultValue={selectData?.stok || ''}
                                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-sm transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Keterangan */}
                                <div>
                                    <label className="block text-[10px] font-black text-gray-400 uppercase mb-1 tracking-wider">Keterangan Produk</label>
                                    <textarea
                                        rows="3"
                                        defaultValue={selectData?.keterangan || ''}
                                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-sm transition-all resize-none"
                                    ></textarea>
                                </div>

                                {/* URL Foto */}
                                <div>
                                    <label className="block text-[10px] font-black text-gray-400 uppercase mb-1 tracking-wider">URL Foto Produk</label>
                                    <input
                                        type="text"
                                        placeholder="https://..."
                                        defaultValue={selectData?.foto || ''}
                                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-sm transition-all"
                                    />
                                </div>

                                {/* FOOTER BUTTONS */}
                                <div className="flex gap-3 pt-4 border-t border-gray-50">
                                    <button
                                        type="button"
                                        onClick={() => setAddModal(false)}
                                        className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-600 rounded-lg text-sm font-bold hover:bg-gray-50 transition-all"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 shadow-md shadow-blue-100 transition-all"
                                    >
                                        {selectData ? 'Simpan Perubahan' : 'Tambah Produk'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {editModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                        <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
                            {/* HEADER */}
                            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                                <h3 className="font-bold text-gray-800 text-lg">
                                    Edit Produk
                                </h3>
                                <button onClick={() => setEditModal(false)} className="text-gray-400 hover:text-gray-600">
                                    <X size={20} />
                                </button>
                            </div>

                            {/* FORM */}
                            <form className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Kategori Select */}
                                    <div>
                                        <label className="block text-[10px] font-black text-gray-400 uppercase mb-1 tracking-wider">Kategori</label>
                                        <select
                                            defaultValue={selectedKategori?.kategori_id || ''}
                                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-sm transition-all"
                                        >
                                            <option value="">Pilih Kategori</option>
                                            <option value="1">Sepatu</option>
                                            <option value="2">Racket</option>
                                            <option value="3">Jersey</option>
                                        </select>
                                    </div>

                                    {/* Brand Select */}
                                    <div>
                                        <label className="block text-[10px] font-black text-gray-400 uppercase mb-1 tracking-wider">Brand</label>
                                        <select
                                            defaultValue={selectedKategori?.brand_id || ''}
                                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-sm transition-all"
                                        >
                                            <option value="">Pilih Brand</option>
                                            <option value="1">Yonex</option>
                                            <option value="2">Lining</option>
                                            <option value="3">Victor</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {/* Harga Jual */}
                                    <div>
                                        <label className="block text-[10px] font-black text-gray-400 uppercase mb-1 tracking-wider">Harga Jual (Rp)</label>
                                        <input
                                            type="number"
                                            placeholder="0"
                                            defaultValue={selectedKategori?.harga_jual || ''}
                                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-sm transition-all"
                                        />
                                    </div>

                                    {/* Stok */}
                                    <div>
                                        <label className="block text-[10px] font-black text-gray-400 uppercase mb-1 tracking-wider">Stok Awal</label>
                                        <input
                                            type="number"
                                            placeholder="0"
                                            defaultValue={selectedKategori?.stok || ''}
                                            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-sm transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Keterangan */}
                                <div>
                                    <label className="block text-[10px] font-black text-gray-400 uppercase mb-1 tracking-wider">Keterangan Produk</label>
                                    <textarea
                                        rows="3"
                                        defaultValue={selectedKategori?.keterangan || ''}
                                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-sm transition-all resize-none"
                                    ></textarea>
                                </div>

                                {/* URL Foto */}
                                <div>
                                    <label className="block text-[10px] font-black text-gray-400 uppercase mb-1 tracking-wider">URL Foto Produk</label>
                                    <input
                                        type="text"
                                        placeholder="https://..."
                                        defaultValue={selectedKategori?.foto || ''}
                                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-sm transition-all"
                                    />
                                </div>

                                {/* FOOTER BUTTONS */}
                                <div className="flex gap-3 pt-4 border-t border-gray-50">
                                    <button
                                        type="button"
                                        onClick={() => setAddModal(false)}
                                        className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-600 rounded-lg text-sm font-bold hover:bg-gray-50 transition-all"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 shadow-md shadow-blue-100 transition-all"
                                    >
                                        {selectedKategori ? 'Simpan Perubahan' : 'Tambah Produk'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {deleteOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
                        <div className="bg-white rounded-xl shadow-xl w-full max-w-sm p-6 animate-in fade-in zoom-in duration-200">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                                    <Trash2 size={24} />
                                </div>
                                <h3 className="font-bold text-gray-800 text-lg">Hapus Data?</h3>
                                <p className="text-sm text-gray-500 mt-1">
                                    Anda akan menghapus data <span className="font-bold text-gray-800">{selectedKategori?.nama}</span>. Tindakan ini tidak dapat dibatalkan.
                                </p>
                            </div>

                            <div className="flex gap-3 mt-6">
                                <button
                                    onClick={() => setDeleteOpen(false)}
                                    className="flex-1 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-50"
                                >
                                    Batal
                                </button>
                                <button
                                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 shadow-md shadow-red-200"
                                >
                                    Hapus
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}