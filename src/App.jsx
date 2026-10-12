
import { useState, useEffect } from "react";
import "./App.css";

// ============================================
// 1. DATA PRODUK TANI DESAA
// ============================================

const products = [
  {
    id: 1,
    name: "Tomat Segar",
    category: "Sayuran",
    price: 12000,
    unit: "kg",
    description:
      "Tomat segar pilihan, cocok untuk kebutuhan rumah tangga dan usaha kuliner.",
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 2,
    name: "Wortel Organik",
    category: "Sayuran",
    price: 15000,
    unit: "kg",
    description:
      "Wortel segar dengan warna cerah dan tekstur renyah untuk menu sehat keluarga.",
    image:
      "https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 3,
    name: "Beras Premium",
    category: "Bahan Pokok",
    price: 16000,
    unit: "kg",
    description:
      "Beras pilihan berkualitas untuk menghasilkan nasi pulen dan lezat setiap hari.",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 4,
    name: "Jagung Manis",
    category: "Sayuran",
    price: 10000,
    unit: "kg",
    description:
      "Jagung manis pilihan yang cocok untuk direbus, dibakar, atau diolah menjadi hidangan favorit.",
    image:
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 5,
    name: "Sayuran Hijau",
    category: "Sayuran",
    price: 8000,
    unit: "ikat",
    description:
      "Sayuran hijau segar untuk melengkapi kebutuhan nutrisi dan menu harian keluarga.",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=85",
  },
  {
    id: 6,
    name: "Stroberi Segar",
    category: "Buah",
    price: 28000,
    unit: "kg",
    description:
      "Stroberi segar dengan warna menarik, cocok dinikmati langsung atau dijadikan olahan.",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=85",
  },
];

const categories = ["Semua", "Sayuran", "Buah", "Bahan Pokok"];

const formatPrice = (price) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);

// ============================================
// 2. KOMPONEN UTAMA
// ============================================

export default function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    setImageIndex((current) => (current + 1) % 3);
  }, 4000);

  return () => clearInterval(interval);
}, []);

  // Filter produk berdasarkan pencarian dan kategori
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "Semua" ||
      product.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // Pesan produk melalui WhatsApp
  const orderProduct = (product) => {
    const message = `Halo TaniDesaa, saya ingin memesan ${product.name}. Harga: ${formatPrice(product.price)} per ${product.unit}. Mohon informasi lebih lanjut.`;

    const whatsappUrl = `https://wa.me/6283117338143?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="app">
      {/* ======================================
          TOPBAR
      ====================================== */}
      <div className="topbar">
        <div className="container topbar-inner">
          <p>🌱 Hasil tani segar, langsung dari petani</p>
          <p>Mendukung pertanian lokal Indonesia</p>
        </div>
      </div>

      {/* ======================================
          NAVBAR
      ====================================== */}
      <header className="navbar">
        <div className="container navbar-inner">
          <a className="brand" href="#home">
            <span className="brand-icon">🌿</span>
            <span>
              Tani<span className="brand-accent">Desaa</span>
            </span>
          </a>

          <nav className="nav-links">
            <a href="#home">Beranda</a>
            <a href="#produk">Produk</a>
            <a href="#tentang">Tentang Kami</a>
          </nav>

          <a className="nav-cta" href="#produk">
            Belanja Sekarang <span>↗</span>
          </a>
        </div>
      </header>

      <main>
        {/* ======================================
            HERO SECTION
            Empat gambar dengan penutup div lengkap
        ====================================== */}
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="eyebrow">
                <span>✦</span> DARI PETANI UNTUK NEGERI
              </span>

              <h1>
                Hasil Tani
                <br />
                Segar untuk
                <br />
                <span>Hidup Lebih Baik.</span>
              </h1>

              <p className="hero-description">
                Temukan hasil pertanian pilihan yang segar dan berkualitas.
                Kami menghubungkan petani lokal dengan keluarga Indonesia
                melalui cara belanja yang lebih mudah.
              </p>

              <div className="hero-actions">
                <a className="btn-primary" href="#produk">
                  Jelajahi Produk <span>→</span>
                </a>
                <a className="btn-secondary" href="#tentang">
                  Kenali Kami
                </a>
              </div>

              <div className="hero-stats">
                <div>
                  <strong>100%</strong>
                  <span>Pilihan Segar</span>
                </div>
                <div>
                  <strong>Lokal</strong>
                  <span>Dukung Petani</span>
                </div>
                <div>
                  <strong>Mudah</strong>
                  <span>Pesan Online</span>
                </div>
              </div>
            </div>

            {/* PEMBUNGKUS GAMBAR HERO */}
            
<div className="hero-visual">
  <div className="hero-gallery">
    {/* Gambar utama tetap */}
    <img
      className="hero-image"
      src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=90"
      alt="Hamparan lahan pertanian hijau"
    />

    {/* Gambar pendukung pertama */}
    <img
      className="hero-support-image support-one"
      src={[
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=700&q=85",
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=85",
        "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=700&q=85",
      ][imageIndex]}
      alt="Pemandangan pertanian"
    />

    {/* Gambar pendukung kedua */}
    <img
      className="hero-support-image support-two"
      src={[
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=85",
        "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=700&q=85",
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=700&q=85",
      ][imageIndex]}
      alt="Sayuran segar hasil pertanian"
    />

    {/* Gambar pendukung ketiga */}
    <img
      className="hero-support-image support-three"
      src={[
        "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=700&q=85",
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=700&q=85",
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=85",
      ][imageIndex]}
      alt="Tanaman pertanian"
    />
  </div>

  <div className="floating-card floating-top">
    <span className="floating-icon">🌱</span>
    <div>
      <strong>Hasil Pilihan</strong>
      <span>Segar dan berkualitas</span>
    </div>
  </div>

  <div className="floating-card floating-bottom">
    <span className="floating-icon">🤝</span>
    <div>
      <strong>Dukung Petani Lokal</strong>
      <span>Bersama membangun pertanian</span>
    </div>
  </div>

  <div className="hero-image-label">
    <span>🌾</span>
    <div>
      <strong>Dari Alam Indonesia</strong>
      <p>Untuk kebutuhan setiap hari</p>
    </div>
  </div>
</div>

            {/* AKHIR PEMBUNGKUS GAMBAR HERO */}
          </div>
        </section>

        {/* ======================================
            KEUNGGULAN
        ====================================== */}
        <section className="benefits">
          <div className="container benefits-grid">
            <article className="benefit-item">
              <div className="benefit-icon">🌿</div>
              <div>
                <h3>Produk Pilihan</h3>
                <p>Hasil tani yang dipilih dengan cermat.</p>
              </div>
            </article>

            <article className="benefit-item">
              <div className="benefit-icon">🚜</div>
              <div>
                <h3>Dukung Petani</h3>
                <p>Membantu mengembangkan pertanian lokal.</p>
              </div>
            </article>

            <article className="benefit-item">
              <div className="benefit-icon">🛒</div>
              <div>
                <h3>Pesan Praktis</h3>
                <p>Hubungi kami dengan mudah secara online.</p>
              </div>
            </article>

            <article className="benefit-item">
              <div className="benefit-icon">💚</div>
              <div>
                <h3>Penuh Kepedulian</h3>
                <p>Mendukung pangan dan lingkungan berkelanjutan.</p>
              </div>
            </article>
          </div>
        </section>

        {/* ======================================
            PRODUK
        ====================================== */}
        <section className="products-section" id="produk">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">PILIHAN UNTUK ANDA</span>
                <h2>
                  Hasil Tani <span>Unggulan</span>
                </h2>
                <p>
                  Temukan beragam hasil pertanian untuk memenuhi kebutuhan
                  sehari-hari Anda.
                </p>
              </div>

              <span className="product-count">
                {filteredProducts.length} produk tersedia
              </span>
            </div>

            <div className="product-controls">
              <div className="category-list">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={
                      activeCategory === category
                        ? "category-button active"
                        : "category-button"
                    }
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="search-box">
                <span aria-hidden="true">⌕</span>
                <input
                  type="search"
                  placeholder="Cari hasil tani..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  aria-label="Cari produk"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    aria-label="Hapus pencarian"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <article
                    className="product-card"
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="product-image-wrap">
                      <img
                        className="product-image"
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                      />
                      <span className="product-category">
                        {product.category}
                      </span>

                      <button
                        type="button"
                        className="quick-view-button"
                        onClick={(event) => {
                          event.stopPropagation();
                          setSelectedProduct(product);
                        }}
                        aria-label={`Lihat detail ${product.name}`}
                      >
                        ↗
                      </button>
                    </div>

                    <div className="product-info">
                      <span className="product-category-text">
                        {product.category}
                      </span>
                      <h3>{product.name}</h3>
                      <p className="product-description">
                        {product.description}
                      </p>

                      <div className="product-card-bottom">
                        <div className="product-price">
                          <strong>{formatPrice(product.price)}</strong>
                          <span>/ {product.unit}</span>
                        </div>

                        <button
                          type="button"
                          className="add-product-button"
                          onClick={(event) => {
                            event.stopPropagation();
                            orderProduct(product);
                          }}
                          aria-label={`Pesan ${product.name} melalui WhatsApp`}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty-products">
                <span>🔎</span>
                <h3>Produk belum ditemukan</h3>
                <p>
                  Coba kata kunci lain atau pilih kategori yang berbeda.
                </p>
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("Semua");
                  }}
                >
                  Tampilkan Semua Produk
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ======================================
            TENTANG KAMI
        ====================================== */}
        <section className="about-section" id="tentang">
          <div className="container about-grid">
            <div className="about-visual">
              <img
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1000&q=85"
                alt="Lahan pertanian hijau"
                loading="lazy"
              />
              <div className="about-image-note">
                <span>🌱</span>
                <div>
                  <strong>Tumbuh Bersama</strong>
                  <p>Untuk masa depan yang lebih baik</p>
                </div>
              </div>
            </div>

            <div className="about-content">
              <span className="eyebrow">CERITA TANI DESAA</span>
              <h2>
                Merawat Bumi,
                <br />
                <span>Menghidupi Sesama.</span>
              </h2>
              <p>
                TaniDesaa hadir untuk memperkenalkan hasil pertanian lokal
                kepada lebih banyak orang. Kami percaya bahwa hasil tani
                yang baik dapat mendukung kehidupan keluarga sekaligus
                membantu petani berkembang.
              </p>
              <p>
                Melalui cara pemesanan yang praktis, kami ingin membuat
                hubungan antara petani dan konsumen menjadi lebih dekat.
              </p>

              <a className="btn-primary" href="#produk">
                Lihat Produk Kami <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ======================================
            AJAKAN BELANJA
        ====================================== */}
        <section className="cta-section">
          <div className="container cta-inner">
            <div>
              <span className="eyebrow">DUKUNG HASIL TANI LOKAL</span>
              <h2>Belanja Hasil Tani dengan Lebih Mudah.</h2>
              <p>
                Temukan produk pilihan dan hubungi kami untuk informasi
                pemesanan.
              </p>
            </div>

            <a className="btn-primary" href="#produk">
              Mulai Belanja <span>→</span>
            </a>
          </div>
        </section>
      </main>

      {/* ======================================
          FOOTER LENGKAP
      ====================================== */}
      <footer className="footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-icon">🌿</span>
            <span>
              Tani<span className="brand-accent">Desaa</span>
            </span>
          </a>

          <p>Merawat bumi, mendukung petani, menyediakan pangan.</p>

          <div className="footer-links">
            <a href="#home">Beranda</a>
            <a href="#produk">Produk</a>
            <a href="#tentang">Tentang Kami</a>
          </div>

          <span className="footer-copyright">
            © {new Date().getFullYear()} TaniDesaa. Semua hak dilindungi.
          </span>
        </div>
      </footer>

      {/* ======================================
          MODAL DETAIL PRODUK
      ====================================== */}
      {selectedProduct && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="product-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Detail ${selectedProduct.name}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Tutup detail produk"
            >
              ×
            </button>

            <img
              className="modal-product-image"
              src={selectedProduct.image}
              alt={selectedProduct.name}
            />

            <div className="modal-product-info">
              <span className="product-category-text">
                {selectedProduct.category}
              </span>
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.description}</p>

              <div className="modal-product-price">
                {formatPrice(selectedProduct.price)}
                <span> / {selectedProduct.unit}</span>
              </div>

              <button
                type="button"
                className="btn-primary modal-order-button"
                onClick={() => orderProduct(selectedProduct)}
              >
                Pesan melalui WhatsApp <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
