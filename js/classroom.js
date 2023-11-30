        // Daftar kelas yang tersedia
        const daftarKelas = [
            // Hari Senin
            { hari: "senin", waktu: "7:30 - 9:30", lantai: "ground", kapasitas: 50, nama: "CR G01" },
            { hari: "senin", waktu: "7:30 - 9:30", lantai: "ground", kapasitas: 100, nama: "CR G02" },
            { hari: "senin", waktu: "7:30 - 9:30", lantai: "lt1", kapasitas: 50, nama: "CR 101" },
            { hari: "senin", waktu: "7:30 - 9:30", lantai: "lt1", kapasitas: 100, nama: "CR 102" },
            { hari: "senin", waktu: "7:30 - 9:30", lantai: "lt2", kapasitas: 50, nama: "CR 201" },
            { hari: "senin", waktu: "7:30 - 9:30", lantai: "lt2", kapasitas: 100, nama: "CR 202" },
            { hari: "senin", waktu: "7:30 - 9:30", lantai: "lt3", kapasitas: 50, nama: "CR 301" },
            { hari: "senin", waktu: "7:30 - 9:30", lantai: "lt3", kapasitas: 100, nama: "CR 302" },
            
            { hari: "senin", waktu: "10:00 - 12:30", lantai: "ground", kapasitas: 50, nama: "CR G03" },
            { hari: "senin", waktu: "10:00 - 12:30", lantai: "ground", kapasitas: 100, nama: "CR G04" },
            { hari: "senin", waktu: "10:00 - 12:30", lantai: "lt1", kapasitas: 50, nama: "CR 103" },
            { hari: "senin", waktu: "10:00 - 12:30", lantai: "lt1", kapasitas: 100, nama: "CR 104" },
            { hari: "senin", waktu: "10:00 - 12:30", lantai: "lt2", kapasitas: 50, nama: "CR 203" },
            { hari: "senin", waktu: "10:00 - 12:30", lantai: "lt2", kapasitas: 100, nama: "CR 204" },
            { hari: "senin", waktu: "10:00 - 12:30", lantai: "lt3", kapasitas: 50, nama: "CR 303" },
            { hari: "senin", waktu: "10:00 - 12:30", lantai: "lt3", kapasitas: 100, nama: "CR 304" },
            
            { hari: "senin", waktu: "13:00 - 15:30", lantai: "ground", kapasitas: 50, nama: "CR G05" },
            { hari: "senin", waktu: "13:00 - 15:30", lantai: "ground", kapasitas: 100, nama: "CR G06" },
            { hari: "senin", waktu: "13:00 - 15:30", lantai: "lt1", kapasitas: 50, nama: "CR 301" },
            { hari: "senin", waktu: "13:00 - 15:30", lantai: "lt1", kapasitas: 100, nama: "CR 302" },
            { hari: "senin", waktu: "13:00 - 15:30", lantai: "lt2", kapasitas: 50, nama: "CR 401" },
            { hari: "senin", waktu: "13:00 - 15:30", lantai: "lt2", kapasitas: 100, nama: "CR 402" },
            { hari: "senin", waktu: "13:00 - 15:30", lantai: "lt3", kapasitas: 50, nama: "CR 501" },
            { hari: "senin", waktu: "13:00 - 15:30", lantai: "lt3", kapasitas: 100, nama: "CR 502" },
    
            // Hari Selasa
            { hari: "selasa", waktu: "7:30 - 9:30", lantai: "ground", kapasitas: 50, nama: "CR G01" },
            { hari: "selasa", waktu: "7:30 - 9:30", lantai: "ground", kapasitas: 100, nama: "CR G02" },
            { hari: "selasa", waktu: "7:30 - 9:30", lantai: "lt1", kapasitas: 50, nama: "CR 101" },
            { hari: "selasa", waktu: "7:30 - 9:30", lantai: "lt1", kapasitas: 100, nama: "CR 102" },
            { hari: "selasa", waktu: "7:30 - 9:30", lantai: "lt2", kapasitas: 50, nama: "CR 201" },
            { hari: "selasa", waktu: "7:30 - 9:30", lantai: "lt2", kapasitas: 100, nama: "CR 202" },
            { hari: "selasa", waktu: "7:30 - 9:30", lantai: "lt3", kapasitas: 50, nama: "CR 301" },
            { hari: "selasa", waktu: "7:30 - 9:30", lantai: "lt3", kapasitas: 100, nama: "CR 302" },
            
            { hari: "selasa", waktu: "10:00 - 12:30", lantai: "ground", kapasitas: 50, nama: "CR G03" },
            { hari: "selasa", waktu: "10:00 - 12:30", lantai: "ground", kapasitas: 100, nama: "CR G04" },
            { hari: "selasa", waktu: "10:00 - 12:30", lantai: "lt1", kapasitas: 50, nama: "CR 103" },
            { hari: "selasa", waktu: "10:00 - 12:30", lantai: "lt1", kapasitas: 100, nama: "CR 104" },
            { hari: "selasa", waktu: "10:00 - 12:30", lantai: "lt2", kapasitas: 50, nama: "CR 203" },
            { hari: "selasa", waktu: "10:00 - 12:30", lantai: "lt2", kapasitas: 100, nama: "CR 204" },
            { hari: "selasa", waktu: "10:00 - 12:30", lantai: "lt3", kapasitas: 50, nama: "CR 303" },
            { hari: "selasa", waktu: "10:00 - 12:30", lantai: "lt3", kapasitas: 100, nama: "CR 304" },
            
            { hari: "selasa", waktu: "13:00 - 15:30", lantai: "ground", kapasitas: 50, nama: "CR G05" },
            { hari: "selasa", waktu: "13:00 - 15:30", lantai: "ground", kapasitas: 100, nama: "CR G06" },
            { hari: "selasa", waktu: "13:00 - 15:30", lantai: "lt1", kapasitas: 50, nama: "CR 301" },
            { hari: "selasa", waktu: "13:00 - 15:30", lantai: "lt1", kapasitas: 100, nama: "CR 302" },
            { hari: "selasa", waktu: "13:00 - 15:30", lantai: "lt2", kapasitas: 50, nama: "CR 401" },
            { hari: "selasa", waktu: "13:00 - 15:30", lantai: "lt2", kapasitas: 100, nama: "CR 402" },
            { hari: "selasa", waktu: "13:00 - 15:30", lantai: "lt3", kapasitas: 50, nama: "CR 501" },
            { hari: "selasa", waktu: "13:00 - 15:30", lantai: "lt3", kapasitas: 100, nama: "CR 502" },
    
            // Data untuk hari Selasa, Rabu, Kamis, dan Jumat dengan pola serupa.
            ];
    
    
    
            // Mendapatkan elemen dropdown dan hasil
            const hariDropdown = document.getElementById("hari");
            const waktuDropdown = document.getElementById("waktu");
            const kapasitasDropdown = document.getElementById("kapasitas");
            const hasil = document.getElementById("kelas-terisi");
    
            // Mendapatkan elemen pilihan lantai
            const pilihanLantai = document.getElementById("pilihanLantai");
    
            // Menambahkan event listener pada setiap dropdown
            hariDropdown.addEventListener("change", tampilkanKelasTersedia);
            waktuDropdown.addEventListener("change", tampilkanKelasTersedia);
            kapasitasDropdown.addEventListener("change", tampilkanKelasTersedia);
    
            // Menambahkan event listener pada setiap kotak lantai
            const pilihanLantaiItems = pilihanLantai.querySelectorAll(".pilihan-lantai");
            pilihanLantaiItems.forEach(item => {
                item.addEventListener("click", () => {
                    // Menghapus kelas "terpilih" dari semua elemen pilihan lantai
                    pilihanLantaiItems.forEach(item => {
                        item.classList.remove("terpilih");
                    });
                    // Menambahkan kelas "terpilih" ke elemen yang dipilih
                    item.classList.add("terpilih");
                    tampilkanKelasTersedia();
                });
            });
    
            // Memanggil fungsi untuk menampilkan kelas saat web dimuat
            tampilkanKelasTersedia();
    
            // Fungsi untuk menampilkan kelas yang tersedia
            function tampilkanKelasTersedia() {
                const selectedHari = hariDropdown.value;
                const selectedWaktu = waktuDropdown.value;
                const selectedKapasitas = parseInt(kapasitasDropdown.value);
    
                // Menghapus elemen-elemen sebelumnya
                while (hasil.firstChild) {
                    hasil.removeChild(hasil.firstChild);
                }
    
                // Mendapatkan lantai yang dipilih
                const lantaiTerpilih = pilihanLantai.querySelector(".terpilih");
                const selectedLantai = lantaiTerpilih ? lantaiTerpilih.id : "";
    
                // Menampilkan kelas yang sesuai dengan pilihan pengguna
                const kelasTersedia = daftarKelas.filter(kelas => (
                    kelas.hari === selectedHari &&
                    kelas.waktu === selectedWaktu &&
                    kelas.lantai.toLowerCase() === selectedLantai.toLowerCase() &&
                    kelas.kapasitas === selectedKapasitas
                ));
    
                if (kelasTersedia.length === 0) {
                    hasil.textContent = "Tidak ada kelas yang tersedia sesuai dengan pilihan Anda.";
                } else {
                    kelasTersedia.forEach(kelas => {
                        const listItem = document.createElement("li");
                        listItem.className = "kelas-item";
                        listItem.textContent = `${kelas.nama}`;
                        hasil.appendChild(listItem);
                    });
                }
            }