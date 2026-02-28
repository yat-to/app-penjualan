export const menu = [
    { id: '1', title: 'Dashboard', url: '/dashboard', icon: 'Home' },
    {
        id: '2', title: 'Transaksi', url: '', icon: 'Building2',
        children: [
            { title: 'Penjualan', url: '/penjualan' },
            { title: 'Riwayat Penjualan', url: '/riwayatPenjualan' },
            { title: 'Return Penjualan', url: '/returnPenjualan' },
        ]
    },
    {
        id: '3', title: 'Pembelian (Restock)', url: '', icon: 'Building2',
        children: [
            { title: 'Pembalian Barang', url: '/pembalianBarang' },
            { title: 'Riwayat Pembelian', url: '/riwayatPembelian' },
        ]
    },
    {
        id: '4', title: 'Stok', url: '', icon: 'BookImage',
        children: [
            { title: 'Mutasi Stok', url: '/mutasiStok' },
            { title: 'Penyesuaian Stok', url: '/penyesuaianStok' },
            { title: 'Minimum Stok Alert', url: '/minimumStokAlert' },
        ]
    },
    {
        id: '5', title: 'Laporan', url: '', icon: 'BookImage',
        children: [
            { title: 'Laporan Penjualan', url: '/lapPenjualan' },
            { title: 'Laporan Laba Rugi', url: '/lapLaba' },
            { title: 'Laporan Stock', url: '/lapStock' },
            { title: 'Laporan Terlaris', url: '/lapTerlaris' },
            { title: 'Laporan Pembelian', url: '/lapPembelian' },
        ]
    },
    {
        id: '6', title: 'Master Data', url: '', icon: 'BookImage',
        children: [
            { title: 'Kategori', url: '/kategori' },
            { title: 'Brand', url: '/brand' },
            { title: 'Produk', url: '/produk' },
            { title: 'Varian Produk', url: '/varianProduk' },
        ]
    },
];