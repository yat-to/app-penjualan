"use client";
import React, { useState } from 'react';
import { Plus, MoreHorizontal, ChevronLeft, ChevronRight, Edit, Trash2, X } from 'lucide-react';
import { brand } from '@/data/brand';

export default function Page() {
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [selectedKategori, setSelectedKategori] = useState(null);
    const [mode, setMode] = useState('add');

    const openAddModal = () => {
        setMode('add');
        setSelectedKategori(null);
        setModalOpen(true);
    };

    const openEditModal = (item) => {
        setMode('edit');
        setSelectedKategori(item);
        setModalOpen(true);
    };

    const openDeleteModal = (item) => {
        setSelectedKategori(item);
        setDeleteOpen(true);
    };

    return (
        <div className="space-y-6 pb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div><h1 className="text-2xl font-bold text-gray-800">Brand</h1></div>
                <div className="flex gap-2">
                    <button onClick={() => openAddModal()} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-sm transition-all">
                        <Plus size={18} />
                        <span>Tambah Data</span>
                    </button>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">NO</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">URAIAN</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">KETERANGAN</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {brand.map((data, index) => (
                                <tr key={data.id} className="hover:bg-blue-50/30 transition-colors group">
                                    <td className="px-6 py-4 text-center">
                                        <span className="text-sm text-gray-800">{index+1}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-gray-800">{data.nama}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-gray-800">{data.keterangan}</span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button onClick={() => openEditModal(data)} className="p-2 text-yellow-600 rounded-lg" title="Edit">
                                                <Edit size={16} />
                                            </button>
                                            <button onClick={() => openDeleteModal(data)} className="p-2 text-red-600 rounded-lg" title="Hapus">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="px-6 py-4 border-t border-gray-200 bg-white flex flex-col items-center gap-3">
                    <div className="flex items-center gap-1">
                        <button className="p-1.5 mr-1 border border-gray-200 rounded-md text-gray-400 hover:bg-gray-50 hover:text-blue-600 transition-all disabled:opacity-50">
                            <ChevronLeft size={16} />
                        </button>

                        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-blue-600 bg-blue-600 text-white text-xs font-bold shadow-sm shadow-blue-100">
                            1
                        </button>

                        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-transparent text-gray-500 text-xs font-semibold hover:border-gray-200 hover:bg-gray-50 transition-all">
                            2
                        </button>

                        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-transparent text-gray-500 text-xs font-semibold hover:border-gray-200 hover:bg-gray-50 transition-all">
                            3
                        </button>

                        <span className="w-8 h-8 flex items-center justify-center text-gray-300">
                            <MoreHorizontal size={14} />
                        </span>

                        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-transparent text-gray-500 text-xs font-semibold hover:border-gray-200 hover:bg-gray-50 transition-all">
                            10
                        </button>

                        <button className="p-1.5 ml-1 border border-gray-200 rounded-md text-gray-400 hover:bg-gray-50 hover:text-blue-600 transition-all">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="font-bold text-gray-800 text-lg">
                                {mode === 'add' ? 'Tambah Kategori' : 'Edit Kategori'}
                            </h3>
                            <button onClick={() => setModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                                <X size={20} />
                            </button>
                        </div>

                        <form className="p-6 space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Nama Kategori</label>
                                <input
                                    type="text"
                                    defaultValue={selectedKategori?.nama || ''}
                                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-sm transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Keterangan</label>
                                <textarea
                                    rows="3"
                                    defaultValue={selectedKategori?.keterangan || ''}
                                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none text-sm transition-all resize-none"
                                />
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setModalOpen(false)}
                                    className="flex-1 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-all"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 shadow-md shadow-blue-200 transition-all"
                                >
                                    {mode === 'add' ? 'Simpan Data' : 'Update Data'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {deleteOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-sm p-6 animate-in fade-in zoom-in duration-200">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                                <Trash2 size={24} />
                            </div>
                            <h3 className="font-bold text-gray-800 text-lg">Hapus Kategori?</h3>
                            <p className="text-sm text-gray-500 mt-1">
                                Anda akan menghapus kategori <span className="font-bold text-gray-800">{selectedKategori?.nama}</span>. Tindakan ini tidak dapat dibatalkan.
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
    );
}