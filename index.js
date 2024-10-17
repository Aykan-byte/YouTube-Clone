window.onload = function() {
    // Sidebar'ı açıp kapatmak için fonksiyon
    document.querySelector('.bi-list').addEventListener('click', function() {
        var sidebar = document.getElementById('sidebar1');
        var videos = document.querySelector('.videos');
        var selectbar = document.querySelector(".select-bar")

        // Sidebar ve video listesi sınıfını değiştir
        sidebar.classList.toggle('active');
        videos.classList.toggle('shifted'); // 'shifted' sınıfı eklenip çıkarılıyor
        selectbar.classList.toggle("shifted");
    });
};
