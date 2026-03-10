# CSS Kararları

## 1. Breakpoint Seçimi
- **Neden 640px ve 1024px seçtim?**
  Günümüzde en yaygın cihaz ekran genişliklerini kapsamak için bu değerleri tercih ettim. 640px, tipik akıllı telefonların yatay görünümleri ve küçük tabletler için genel ve stabil bir kırılım noktasıdır. 1024px ise standart masaüstü ve dizüstü bilgisayar ekranlarının başlangıcı kabul edilir. Bu iki kırılım noktası, modern web tasarımındaki "mobil - tablet - masaüstü" geçişlerini sorunsuz sağlamak için idealdir.
- **İçeriğim bu noktalarda nasıl değişiyor?**
  - **0-639px (Mobil):** İçerikler dikey bir formda binişik (`flex-direction: column`), kolay dokunulabilir tam genişlikte bağlantılar (`width: 100%`) ile listeleniyor ve daha dar bir alan kullanılıyor (padding'ler daha düşük).
  - **640px-1023px (Tablet):** "Hakkımda" bölümü gibi yan yana sığabilecek kısımlar yatay düzene (`flex-direction: row`) geçiyor, section iç boşlukları (padding) biraz daha ferahlıyor.
  - **1024px+ (Masaüstü):** Ekran yeterince genişlediği için içerik maksimum `1200px` ile ortalanıyor (`margin: 0 auto`), proje grid yapısı en az 3 sütuna çıkıyor ve ferah bir görünüm için sayfa boşlukları en üst düzeye (`3xl`) ulaşıyor.

## 2. Layout Tercihleri
- **Header için neden Flexbox seçtim?**
  Header içindeki logo ve navigasyon menüsünün kolaylıkla tek bir dikey veya yatay eksende hizalanması, aralarındaki boşluğun her iki yana yaslanarak dinamik dağıtılması (`justify-content: space-between`) ve elemanların tam ortalanması (`align-items: center`) işlemleri için en pratik ve güçlü araç Flexbox'tır.
- **Proje kartları için neden Grid seçtim?**
  Proje listesindeki kartları iki boyutlu (hem satır hem sütun) bir kafes sistemine oturtmak, aralarına eşit mesafe dağıtmak ve kolonların düzgün bir hizada otomatik esnemesini sağlamak için CSS Grid en uygun çözümdür. 
- **auto-fit mi auto-fill mi kullandım, neden?**
  `auto-fit` kullandım. Çünkü ekran genişlediğinde ve kolonları dolduracak yeterli kart olmadığında, kartların (`auto-fill`'de olduğu gibi kenara yapışıp boş alan bırakması yerine) ellerindeki alanı maksimum verimle esnek olarak paylaşmalarını (`1fr` oranında genişlemelerini) istedim.

## 3. Design Tokens
- **Hangi renk paletini seçtim ve neden?**
  Modern, temiz ve güven verici bir profil çizmek için kurumsal mavi tonlarını (`#1E3A8A`, `#2563EB`) primary (ana) renkler olarak seçtim. Arka planları ise içeriğin daha net okunması için okuma yorgunluğu yaratmayan saf beyaz ve açık yüzey grisi (`#F9FAFB`) ile destekledim.
- **Spacing skalasını nasıl belirledim?**
  Kullanıcı arayüzünde tutarlı bir boşluk hiyerarşisi elde etmek için 4'ün katları kuralını (4px, 8px, 16px, 24px, 32px vs.) baz alarak `rem` birimleri ile esnek bir ölçü birimi tasarımı (xs'den 3xl'a kadar) kurdum. 
- **Fluid typography için clamp değerlerini nasıl ayarladım?**
  Yazıların ekran boyutuna göre Media Query zincirlerine gerek kalmadan yumuşakça (organik şekilde) büyüyüp küçülmesi için akıcı bir metot olan `clamp(minimum_boyut, hesaplanan_izafi_boyut, maksimum_boyut)` fonksiyonunu kullandım. Küçük ekranda sabit minimum, büyük ekranda sabit maksimum değer baz alınırken, aradaki tüm ekran boyutlarında sayfa genişliğine göre (`vw`) metnin boyutu orantılı olarak dinamik ayarlanıyor.

## 4. Responsive Stratejiler
- **Mobile-first yaklaşımını nasıl uyguladım?**
  Performans ve tasarım mantığı gereği, hiçbir `@media` sorgusuna girmeyen en yalın ve en dıştaki varsayılan CSS kodlarımı doğrudan dar genişlikteki mobil ekranlara uygun (tek sütun, büyük butonlar, dar boşluklar olacak şekilde) yazdım. CSS sadece ekran büyüdüğünde (min-width ile) üzerine yeni kurallar ekleyerek ezecek şekilde yapılandırıldı.
- **Hangi elemanlar breakpoint'lerde değişiyor?**
  - **Header ve Navigasyon:** Mobilde menüler alt alta (column), daha geniş ekranlarda yatay olarak hizalı.
  - **Hakkımda Bölümü:** Mobilde tek sütunlu ortalanmış dikey yerleşim (column), Tablet ve Masaüstü'nde ise fotoğraf ve yazı yan yana (row) hizalanıyor.
  - **Proje Grid Yapsı:** Mobilde tek kolonken, genişledikçe (`minmax` kurallarıyla) otomatik kolon ekleyerek 3 sütuna kadar büyüyor.
  - **İçerik Genişliği:** Geniş ekranlarda sayfa dağılmasın diye dış çerçeve (`max-width: 1200px`) ile donduruluyor.
- **Görsel boyutlarını nasıl yönettim?**
  Resimlerin cihaz ne kadar daralırsa daralsın dışarı taşmaması ve kabına oturması için tüm görsellere `max-width: 100%; height: auto;` kuralı atadım. Özellikle profil gibi kare olması istenen resimlerde bükülmeleri önlemek amacıyla `aspect-ratio: 1` ve resmin çirkinleşip ezilmemesi için de `object-fit: cover` özelliğini kullandım.
