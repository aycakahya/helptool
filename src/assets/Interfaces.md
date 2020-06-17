## **Arayüzler**
SCADA görsel arayüzü 16/9 veya 16/10 ekran formatında tasarlanmıştır. Görsel arayüz temel olarak 7 bölümden oluşmaktadır.

![interface design.png](/.attachments/interface%20design-327bea2a-e45b-41b4-8a1b-e2261022b070.png)

1. Bölüm:
Bu bölümde alarm satırı yer almaktadır. Sistem oluşan alarm ve uyarı gibi mesajlar operatör onaylamadığı (acknowledge) sürece burada yer alacaktır. Alarm satırı tek satır olabileceği gibi birden fazla satırdan oluşabilir. Bu durumda en son gelen alarm en üstte yer alacaktır. Aşağıdaki örnekte yangın söndürme arayüzünde yer alan jokey pompa hatası ve alarmı onaylama (ACK) verilmiştir.

![1.png](/.attachments/1-89bc9836-1951-4b1f-b526-bfdafc4e1e5d.png)

2. Bölüm:
Bu bölümde sisteme giriş yapan operatörün kullanıcı adı yer almaktadır. Ayrıca tarih, saat, dil seçimi de yer almaktadır. 

![2.png](/.attachments/2-f6a986f7-5132-4071-acc6-559d3cd04525.png)

3. Bölüm:
Bu kısımda telekontrol sistemine bağlı alt sistemlerin detay sayfalarına ulaşmak için butonlar yer almaktadır. Butonlara tıklanarak sistemler arasında gezinmek mümkündür.

![3.png](/.attachments/3-2e5109b2-da8d-4f78-8300-24bd79ec3779.png)

4. Bölüm:
Telekontrol sistemine bağlı alt sistemlerin detayları bu kısımda gösterilmiştir. Bölümler arasında sadece bu kısım değiştirilebilmektedir. Detay sayfasının tek bir ekrana sığmaması halinde ekranı kaydırmak için aşağıda sağa ve sola kaydırma butonları yer almaktadır.

5. Bölüm:
Burada kullanıcı adı, yetkisi görünmektedir. Açılır menü ise ayarlar, kurulum, kullanıcı değiştir, kapat gibi fonksiyonları içermektedir.

![5.png](/.attachments/5-6a4a8cf9-ff17-4b33-aa6e-12ddbe327f47.png)

6. Bölüm:
Bu bölümde SCADA'ya gelen alarmlar gösterilmektedir. Saat, sistem adı, cihaz adı, mesaj, kabul tarihi, hangi kullanıcının kabul ettiği ve durum gibi bilgiler görüntülenmektedir. Alarmı onayla, ertele gibi seçenekler bulunmaktadır. 

![6.png](/.attachments/6-d7dee4c1-5a20-4aa9-b5e8-638084e38c16.png)

7. Bölüm:
Akıllı telefonlarda veya yazılımlarda olduğu gibi SCADA yazılımında da notification yani bildirim ekranı mevcuttur. Bu bölümde notification bulunmaktadır. Açılıp kapanabilen notification ekranı bildirim gelen arayüzü, cihaz adı, cihazın çalıştırıldığı kontrol, aktif edildiği saat, kontrolün değeri gibi bilgileri görüntülemektedir. 

![image.png](/.attachments/image-026a8da9-f043-4145-8e84-4468919cda18.png)

SCADA genel olarak aşağıda verilen arayüzleri içermektedir. Ayrıca raporlama ve trend eğrileri de burada yer almaktadır.
- AG-OG
- Aydınlatma
- Havalandırma
- Tünel İçi Trafik
- Tünel Dışı Trafik
- SOS
- Doğrusal
- Sabotaj
- Yangın Söndürme
- Meteoroloji
- Araç Sayım
- CCTV
- Network

SCADA arayüzlerinde cihazların durumunu kontrol etmek için detay pencereleri yer almaktadır. Cihazlardan gelen alarmlar da bu pencerede gösterilmektedir. Cihazlar ile ilgili değişiklik kontrol bölümünde yapılmaktadır.

**Raporlama**

Sunulan yönetim ve görselleştirme sistemi bir raporlama fonksiyonu ile donatılmıştır. Bir proses resminin “rapor sayfası” olarak düzenlenmesi ve verilerin uygun bir gösterim ve değerlendirme aracına (burada Microsoft Excel tercih edilmektedir) aktarılmıştır.
Daha önce düzenlenmiş olan formlar daha sonra bir ihtiyaç olması durumunda kullanıcı tarafında bir mouse click ile çağrılır ve istenen zaman aralığı için değerler ile doldurulur.
Yönetim merkezinin veri stoklarından; güncel durum değerleri, tarihi değerler ve sıkıştırılmış değerler SQL sorguları vasıtasıyla aktarılır. Rapor formlarına minimum, maksimum, ortalama, adet, toplam, sapma gibi çeşitli hücresel hesaplamalar da eklenebilmektedir. Burada standart fonksiyon kapsamı için Microsfot Excel’de mevcut olan fonksiyonlar mevcuttur. Kullanıcı bir rapor talebinde bulunduğunda istediği yalnızca istediği rapor türünü ve bu raporu hangi zaman aralığında istediğini belirtir.
Ancak raporlama sistematiği bu zaman aralığından farklı zaman aralıklarını da içerir.
Her rapor istenen sayıda sayfadan oluşabilir.
Her çıktı sayfası buna göre numaralandırılmış ve açıklayıcı başlık ve alt bilgisine sahip olmalıdır.
Tablo formatında düzenlenmiş olan verilerinin ve bunlardan fonksiyonlar vasıtasıyla hesaplanmış olan bilgilerin yanında sistem, trend eğrileri, sütun, çubuk ve pasta diyagramları gibi grafiksel çıktı çeşitlerinin geniş bir yelpazesini sunmaktadır. Ayrıca istenen grafik verileri (resimler) raporlara eklenebilmektedir.
İstenildiği takdirde rapora, raporu düzenleyen (kullanıcı) kişi de eklenir.
Araç sayım verileri, fanların ve aydınlatma sisteminin çalışma süreleri, hava kalitesi değerleri, çeşitli alarmların sayıları gibi bilgilerden oluşan raporlar yazılım onay dosyasında belirlenecek bir format ile günlük, aylık ve yıllık olarak excel veya html formatında hazırlanmaktadır.

**Trend Gösterimi**

Tüm sistem ile ilgili verilerin gösterilmesi için sunulan sistem birden fazla eğilim gösterme imkânlarına sahiptir.
8 eğriden oluşabilen basit bir değer-zaman trendinin yanında bir değer üzerinde değer gösterimi de konfigure edilebilir.
Gösterilen değer aralığı her bir eğri için ayrı olarak belirtilir ve ilgili ölçekleri isteğe bağlı olarak görünür veya görünmez hale getirilebilir.
Birlikte gösterilecek olan bilgilerin birleşimleri isimlendirilmiş konfigürasyon olarak kaydedilecektir. Saklanabilen konfigürasyonların sayısı sınırlı değildir. Trend eğrilerinden lineer bir fonksiyon vasıtası ile her eğri noktasına ait zaman ve değer bilgilerini almak mümkündür.
Trend fonksiyonu bir yandan sürekli güncellenen online bilgileri gösterirken hem diğer yandan arşivsel, tarihsel bilgi sorgulamalarına olanak tanır.
Trend eğrilerinin gösterildiği pencereden direkt olarak eğrilerin bir standart yazıcı üzerinden yazdırılır ya da veriler CSV formatında transfer edilebilir.
Verileri açık ve net şekilde karşılaştırabilmek için eğrilerin ekrandaki gösterildikleri alan, dikey olarak üst üste açılabilen birden fazla trend katmanına ayrılmaktadır. Katmanların yüksekliği kullanıcı tarafından fare ile ayarlanabilmektedir. Eğrileri zaman bazında karşılıklı olarak kıyaslayabilmek için her bir trend alanına bağımsız bir baz / başlama zamanı tanımlanır.
Trend ekranında kullanıcı tarafından ayarlanıp set edilebilen bir referans değeri ile bir trend eğrisi arasında kalan alanlar ekranda boyanabilir, renklendirilebilir. Sunulacak olan yazılım bir ölçüm kesiti üzerinden bir veri grubunu zaman değişkenine bağlı olmaksızın sütun grafik şeklinde de gösterilir.
Yangın Fiber kablosunun, lüminansmetrelerin, elektrik tüketim değerlerinin, jet fanların, jeneratörün trend eğrileri bulunmaktadır.