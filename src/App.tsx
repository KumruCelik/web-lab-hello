import './App.css'

function App() {
    return (
        <>
            <a href="#main-content" className="skip-link">
                Ana icerige atla
            </a>

            <header>
                <h1>Kumru Çelik — Portföy</h1>
                <nav aria-label="Ana navigasyon">
                    <ul>
                        <li><a href="#hakkimda">Hakkimda</a></li>
                        <li><a href="#projeler">Projeler</a></li>
                        <li><a href="#iletisim">Iletisim</a></li>
                    </ul>
                </nav>
            </header>

            <main id="main-content">
                <section id="hakkimda">
                    <h2>Hakkimda</h2>
                    <figure>
                        <img src="profil.jpg" alt="Kumru Çelik'in vesikalik fotografi" />
                        <figcaption>Kumru Çelik</figcaption>
                    </figure>
                    <p>
                        Merhaba, ben Kumru Çelik. Web Tasarimi ve Programlama dersi kapsaminda
                        bu portföy sayfasini hazirliyorum. Modern web teknolojilerine ilgi duyuyorum
                        ve kullanici dostu, erisilebilir web siteleri gelistirmeyi hedefliyorum.
                    </p>
                    <h3>Kullandigim Teknolojiler</h3>
                    <ul>
                        <li>HTML5 & Semantik Etiketler</li>
                        <li>CSS3 (Flexbox, Grid)</li>
                        <li>JavaScript & TypeScript</li>
                        <li>React & Vite</li>
                    </ul>
                </section>

                <section id="projeler">
                    <h2>Projelerim</h2>
                    <article>
                        <h3>Proje 1: E-Ticaret Arayüzü</h3>
                        <p>React kullanarak gelistirilen, duyarlı bir e-ticaret vitrin tasarimi.</p>
                        <ul>
                            <li>React</li>
                            <li>CSS Modules</li>
                        </ul>
                        <img src="proje1.jpg" alt="E-Ticaret projesi ana sayfa ekran goruntusu" />
                    </article>

                    <article>
                        <h3>Proje 2: Web Lab Hello</h3>
                        <p>Vite ve React ile olusturulan ilk laboratuvar calismasi.</p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                        <img src="proje2.jpg" alt="Web Lab Hello projesi calisir durumu" />
                    </article>
                </section>

                <section id="iletisim">
                    <h2>Iletisim</h2>
                    <form action="#" method="POST" noValidate>
                        <fieldset>
                            <legend>Iletisim Formu</legend>

                            <div className="form-group">
                                <label htmlFor="name">Ad Soyad:</label>
                                <input type="text" id="name" name="name"
                                    required minLength={2}
                                    aria-describedby="name-error" />
                                <small id="name-error" className="error-msg"
                                    role="alert"></small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">E-posta:</label>
                                <input type="email" id="email" name="email"
                                    required
                                    aria-describedby="email-error" />
                                <small id="email-error" className="error-msg"
                                    role="alert"></small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Konu:</label>
                                <select id="subject" name="subject" required
                                    aria-describedby="subject-error">
                                    <option value="">-- Seciniz --</option>
                                    <option value="is">Is Teklifi</option>
                                    <option value="soru">Soru</option>
                                    <option value="oneri">Oneri</option>
                                </select>
                                <small id="subject-error" className="error-msg"
                                    role="alert"></small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Mesajiniz:</label>
                                <textarea id="message" name="message"
                                    rows={5} required minLength={10}
                                    aria-describedby="message-error">
                                </textarea>
                                <small id="message-error" className="error-msg"
                                    role="alert"></small>
                            </div>

                            <button type="submit">Gonder</button>
                        </fieldset>
                    </form>
                </section>
            </main>

            <footer>
                <p>&copy; 2025 Kumru Çelik. Tum haklari saklidir.</p>
                <p>
                    <a href="#">GitHub</a> | <a href="#">LinkedIn</a>
                </p>
            </footer>
        </>
    )
}

export default App