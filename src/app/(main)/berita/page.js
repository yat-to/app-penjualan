/* eslint-disable @next/next/no-img-element */
import { dummyBerita } from "@/data/dummyBerita"

export default async function page() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Daftar Berita</h1>

            <div className="grid grid-cols-12 gap-4">
                {dummyBerita.map((item) => (
                    <div className="col-span-12 md:col-span-4 bg-white p-4 rounded shadow" key={item.id}>
                        <img src={item.foto} alt={item.judul} className="mb-3 rounded" />
                        <h2 className="text-xl font-semibold">{item.judul}</h2>
                        <p className="text-sm text-gray-500">{item.sumber}</p>
                        <p className="mt-2">{item.deskripsi}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
