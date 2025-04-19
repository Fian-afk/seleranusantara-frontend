// Tombol Keranjang
document.addEventListener('DOMContentLoaded', function () {
    const keranjang = document.getElementById('keranjang');
  
    keranjang.addEventListener('click', function () {
      window.location.href = 'keranjang.html';
    });
  });

//   Sidebar
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('closeSidebar');

    burger.addEventListener('click', () => {
      sidebar.classList.remove('-translate-x-full');
    });

    closeBtn.addEventListener('click', () => {
      sidebar.classList.add('-translate-x-full');
    });

    const sidebarMain = document.querySelector('#sidebar');
    document.addEventListener('click', function (e) {
        if(!sidebarMain.contains(e.target) && !burger.contains(e.target)) {
            sidebar.classList.add('-translate-x-full');
        }
    })
  });

//   Tambah Keranjang
  document.addEventListener('DOMContentLoaded', function() {
    const addButtons = document.querySelectorAll('button:not(.custom-checkbox)');
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent.includes('Tambah')) {
                const originalText = this.innerHTML;
                this.innerHTML = '<div class="w-4 h-4 flex items-center justify-center"><i class="ri-check-line"></i></div><span>Ditambahkan</span>';
                this.classList.remove('bg-primary');
                this.classList.add('bg-green-500');
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.classList.add('bg-primary');
                    this.classList.remove('bg-green-500');
                }, 1500);
            }
        });
    });
    
    // Filter buttons
    const filterButtons = document.querySelectorAll('.rounded-full');
    filterButtons.forEach(button => {
        if (!button.classList.contains('bg-primary')) {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => {
                    btn.classList.remove('bg-primary', 'text-white');
                    btn.classList.add('bg-white', 'text-gray-700');
                });
                this.classList.remove('bg-white', 'text-gray-700');
                this.classList.add('bg-primary', 'text-white');
            });
        }
    });
});

// Fitur Filter
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card-hover');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const kategori = button.getAttribute('data-kategori');

            cards.forEach(card => {
                const cardKategori = card.getAttribute('data-kategori');
                if (kategori === 'semua' || cardKategori === kategori) {
                    card.classList.remove('d-none');
                } else {
                    card.classList.add('d-none');
                }
            })
        })
    })
})
// Live Search
document.addEventListener('DOMContentLoaded', () => {
const search = document.getElementById('search');
const cards = document.querySelectorAll('.card-hover');

search.addEventListener('input', function () {
    const keyword = this.value.toLowerCase();

    cards.forEach(card => {
    const title = card.querySelector('h3').innerText.toLowerCase();

    if (title.includes(keyword)) {
        card.classList.remove('d-none');
    } else {
        card.classList.add('d-none');
    }
    });
});
});