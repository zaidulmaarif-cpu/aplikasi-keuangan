// Inisialisasi Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        lucide.createIcons();
    }
});

/**
 * Fungsi untuk berpindah tab/halaman di dalam dashboard
 * @param {string} tabId - ID elemen section yang ingin ditampilkan
 */
function switchTab(tabId) {
    // Sembunyikan semua konten tab
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(el => el.classList.add('hidden'));

    // Reset gaya tombol navigasi
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.classList.remove('bg-indigo-600', 'text-white', 'font-medium');
        btn.classList.add('hover:bg-slate-800');
    });

    // Tampilkan tab target atau fallback generic tab
    const targetSection = document.getElementById(tabId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    } else {
        const generic = document.getElementById('generic-tab');
        const genericTitle = document.getElementById('generic-title');
        if (generic && genericTitle) {
            genericTitle.innerText = tabId.replace(/-/g, ' ').toUpperCase();
            generic.classList.remove('hidden');
        }
    }

    // Update judul topbar & sorot tombol aktif
    if (event && event.currentTarget) {
        const activeBtn = event.currentTarget;
        activeBtn.classList.add('bg-indigo-600', 'text-white', 'font-medium');
        activeBtn.classList.remove('hover:bg-slate-800');
        
        const labelText = activeBtn.querySelector('span');
        const pageTitle = document.getElementById('page-title');
        if (labelText && pageTitle) {
            pageTitle.innerText = labelText.innerText;
        }
    }
}
