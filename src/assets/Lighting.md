## **Aydınlatma**

Aydınlatma arayüzünde yer alan cihazlar aşağıda verilmiştir.

- Luminansmetre
- Işık Seviyesi
- Yaklaşım Aydınlatma

SCADA, harici ışık seviyesine ve trafik koşullarına bağlı olarak tünelin tamamı için aydınlatmanın otomatik ve manuel kontrolünü sağlar. Aydınlatma Sisteminin iç aydınlatma veya dış aydınlatma değerleri gibi parametreleri bu arayüz üzerinden görüntülenir. Ek olarak, bu arayüz aydınlatma sistemlerinin anormal koşullarında alarmları aktive eder. Buna rağmen, yazılım sistemi uzun süre otomatik olarak çalıştırabilir ve operatör bu modu kullanarak otomatik modu durdurabilir ve aydınlatma sistemine manuel olarak komut verebilir. Bu veriler endüstriyel bir protokol veya PLC tarafından alınacaktır. Detaylı bilgi ilgili bölümdeki diğer tasarım raporlarında belirtilmiştir.
SCADA çalışma modları aşağıda açıklanmıştır:
- **Otomatik (Lüminansmetre ve SCADA üzerinden çalışma)**: Otomatik kumanda, tamamen lüminansmetrelerin kontrolünde okunan ve işlenen değerlerin neticesinde bilgisayar kontrolünde gerçekleşen kumandayı ifade eder.
- **Lokal (Elle)**: Lokal kumanda, yalnızca seçme anahtarı “Lokal” konumda iken yapılabilir. Bu kumanda aydınlatma panosu üzerindeki start–stop butonları ile ilgili armatür grup ve kademelerinin kontaktörlerinin devreye alınıp çıkartılmasını ifade eder. Anahtar “Lokal” konuma alındığında mevcut komutlar yeni bir komut istenene kadar devam etmektedir.
Eğer anahtar Lokal'den Otomatik'e çevrilirse otomatik komutlar derhal yerine getirilir.
- **Manuel (Bilgisayar üzerinden operatör inisiyatifi ile kontrol):** Manuel kumanda ise bilgisayar üzerinden istenilen armatür gruplarının ve kademelerinin lüminasmeterlerden gelen değerler göze alınmaksızın devreye alınıp çıkartılabildiği kumandadır.
Eğer Tünel Alt Kontrol Merkezinden bir komut gelirse, bu komut seçme anahtarı “Otomatik” konumunda iken yerine getirilir. Eğer seçme anahtarı “Lokal” de ise bu komut yerine getirilmez. Yapılan işlemlerin tamamı TKM’ye bildirilir.
Aydınlatma arayüzü aşağıda verilmiştir.

![image.png](/.attachments/image-66000e92-35f6-474a-b457-ffc858ad91bd.png)