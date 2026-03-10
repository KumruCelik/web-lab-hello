import { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'
import UIKit from './pages/UIKit'

function toggleDark() {
  document.documentElement.classList.toggle('dark')
}

export default function App() {
  const [view, setView] = useState<'portfolio' | 'uikit'>('portfolio')

  if (view === 'uikit') {
    return (
      <>
        <button
          onClick={() => setView('portfolio')}
          className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-all font-bold"
        >
          Portföye Dön
        </button>
        <UIKit />
      </>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">

      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50"
      >
        Ana içeriğe atla
      </a>

      {/* ── Header ── */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Kumru Çelik
          </h1>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setView('uikit')}
              className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"
            >
              UI Kit'i Gör
            </button>
            <button
              onClick={toggleDark}
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 p-2 rounded-full shadow hover:scale-110 transition-transform"
              aria-label="Tema degistir"
            >
              <span className="dark:hidden">&#9790;</span>
              <span className="hidden dark:inline">&#9728;</span>
            </button>
          </div>

          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              {[
                { href: '#hakkimda', label: 'Hakkımda' },
                { href: '#projeler', label: 'Projeler' },
                { href: '#iletisim', label: 'İletişim' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">

        {/* ── Hakkımda ── */}
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img
                src="profil.jpg"
                alt="Kumru Çelik vesikalık fotoğrafı"
                className="w-40 h-40 rounded-full object-cover shadow-lg"
              />
            </figure>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkımda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Frontend geliştirici olarak modern web teknolojileriyle kullanıcı dostu arayüzler oluşturuyorum.
                Web Tasarımı ve Programlama dersi kapsamında bu portföy sayfasını hazırladım.
              </p>
              <ul className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Tailwind CSS', 'Vite'].map(tag => (
                  <li key={tag} className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Projeler ── */}
        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                variant="elevated"
                title="E-Ticaret Arayüzü"
                image="proje1.jpg"
                imageAlt="E-Ticaret anasayfa görünümü"
                footer={<Button size="sm">Detay</Button>}
              >
                <p>React ve Node.js ile tam kapsamlı alışveriş uygulaması.</p>
              </Card>
              <Card
                variant="elevated"
                title="Web Lab Hello"
                image="proje2.jpg"
                imageAlt="Web Lab Hello projesi"
                footer={<Button size="sm">Detay</Button>}
              >
                <p>Vite ve React ile oluşturulan ilk laboratuvar çalışması.</p>
              </Card>
              <Card
                variant="elevated"
                title="Portföy Sitesi"
                image="proje3.jpg"
                imageAlt="Portföy sitesi"
                footer={<Button size="sm">Detay</Button>}
              >
                <p>Tailwind CSS ile stillendirilmiş kişisel portföy sayfası.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* ── İletişim ── */}
        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              İletişim
            </h2>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <Input id="contact-name" label="Ad Soyad" placeholder="Ahmet Yılmaz" required />
              <Input id="contact-email" label="E-posta" type="email" placeholder="ad@mail.com" required />

              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
                />
              </div>

              <Button variant="primary" size="lg">
                Gönder
              </Button>
            </form>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2025 Kumru Çelik. Tüm hakları saklıdır.</p>
      </footer>

    </div>
  )
}