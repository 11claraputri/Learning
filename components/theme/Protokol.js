import React from "react";

const Protokol = () => {
    return (
        <div className="pt-6">
            <div className="bg-[#040E15] py-20  text-center">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-32">
                    <h1 className="text-white font-abc text-xl md:text-3xl lg:text-5xl   text-center">
                        PROTOKOL KESEHATAN
                    </h1>
                    <p className="mx-auto mt-3 font-abc text-xl text-white">Tanpa mengurangi rasa hormat, acara ini menerapkan Protokol Kesehatan, sesuai dengan peraturan & rekomendasi pemerintah</p>
                    <hr class="h-px  my-4 bg-white border-0 dark:bg-white"></hr>
                    <div className="mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-white">
                        <div className="grid1-item ">
                            <img src="../assets1/Prokes-4-300x300.png" className="w-28"/>
                            <h2 className="text-xl">Gunakan Masker</h2>
                            <p className="text-sm">Wajib menggunakan
                                masker di dalam acara</p>
                        </div>
                        <div className="grid1-item">
                            <img src="../assets1/Prokes-3.png" className="w-28"/>
                            <h2 className="text-xl">Gunakan Masker</h2>
                            <p className="text-sm">Wajib menggunakan
                                masker di dalam acara</p>
                        </div>
                        <div className="grid1-item">
                            <img src="../assets1/Prokes-5-300x300.png" className="w-28"/>
                            <h2 className="text-xl">Gunakan Masker</h2>
                            <p className="text-sm">Wajib menggunakan
                                masker di dalam acara</p>
                        </div>
                        <div className="grid1-item ">
                            <img src="../assets1/Prokes-7-300x300.png" className="w-28"/>
                            <h2 className="text-xl">Gunakan Masker</h2>
                            <p className="text-sm">Wajib menggunakan
                                masker di dalam acara</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Protokol;