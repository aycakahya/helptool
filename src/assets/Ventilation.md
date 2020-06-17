## **Havalandırma** 

Havalandırma arayüzünde yer alan cihazlar aşağıda verilmiştir.

- Jetfan
- Afm Sensör
- CO Sensör
- Vis Sensör
- Havalandırma Eşik Değeri
- PLC
- Otomatik-Manuel Kontrol

Bu ekranda tünel içi hava kalitesine dair karbon monoksit, görünürlük ve hava hız-yön değerleri gösterilmektedir. Ayrıca tünel içerisinde bulunan hava yön detektörlerinin anlık verilerini ve jet fanların durumlarını göstermektedir ve bu jet fanların kumandasının gerçekleştirilmesine imkân sağlamaktadır. Ayrıca bu ekran üzerinde her bir portal için kontrol seçenekleri bulunmaktadır. Bu alanlardan kullanıcı havalandırma sisteminin gerek otomatik gerekse manuel bir şekilde çalışmasını sağlayabilmektedir. Manuel çalışma durumunda kullanıcı istediği jet fanın üzerini tıklayarak çalışmasını gerçekleştirebilmektedir. Otomatik kısımda ise jet fanlar havalandırma sensörlerinden gelen değerlere dayalı bir şekilde otomatik olarak çalışmaktadır. Bu ekran üzerinde havalandırma sistemi ekipmanlarına dair arıza bilgileri de görüntülenebilmektedir. Bu sistem içerisinde herhangi bir cihaz arızalandığında o cihazın kullanılamayacağına dair gösterge oluşmaktadır.
Jetfanların havalandırma kontrolü, otomasyon sistemi kapsamındaki PLC üniteleri tarafından yapılmıştır. PLC’ler, jetfanları devreye alma ve devreden çıkarma işlemini ölçülen karbon monoksit, hava yön ve hız verilerini önceden belirlenmiş eşik değerleriyle karşılaştırarak yapmaktadır. PLC, bu değerler ışığında otomatik olarak uygun sayıda jetfanı önceden belirlenmiş olan sırayla devreye almaktadır. Örneğin yangın durumunda yangın yeri otomatik olarak tespit edilecek ve bu durumda çalışması planlanmış olan fanlar devreye girecektir.

**Çalışma Modları:**

Üç türlü havalandırma kontrol modu olacaktır:

1. Otomatik çalıştırma: 
- Eğer karbon monoksit konsantrasyonları çok az ise (30 ppm’den az) ve görüş mesafesi iyi ise (ışık zayıflama katsayısı 2,5x10-3 m-1’den azsa) havalandırma devreye girmeyecektir.
Eğer karbon monoksit konsantrasyonu 30 ppm veya üzerine çıkarsa veya ışık zayıflama katsayısı 2,5x10-3 m-1 üzerine çıkarsa ve bu durum 5 dakika sürmüşse, o zaman en azından bir fan devreye girecektir.
- Eğer karbon monoksit konsantrasyonu 60, 100 veya 150 ppm değerleri üzerinde veya ışık azalma katsayısı k=5, 7,5 veya 10x10-3 m-1 değerleri üzerinde sürekli 5 dakika kalmışsa o zaman fanlar yukarıdaki tabloda görülen 1-4. adıma kadar birer birer devreye girecektir.
- Eğer CO 150 ppm üzerinde veya k= 14x10-3 m-1 tünel kapanış değerlerinde sürekli 10 dakika kalmışsa o zaman tünel trafiğe kapatılacaktır.
Trafik işaretleri “kırmızı” ya çevrilecek ve bu önemli durum, VMS’lerde gerekirse sembollerle de desteklenmiş uygun mesajlarla sürücülere duyurulacaktır.
- Yalnızca karbon monoksit konsantrasyonu 150 ppm altına ve ışık zayıflama faktörü 10x10-3 altına düşerse tünel yeniden açılacaktır.

2. Yangın durumunda çalıştırma: 
Yangın durumunda belirlenmiş yangın senaryoları devreye girmektedir. Tehlike halinde insan müdahalesine gerek kalmaksızın otomasyon programına yazılan aksiyonlar devreye girmektedir. Yangın durumunda olaylara müdahale TKM'deki operatörlerin tam kontrolündedir.

3. Elle Kumanda (Manuel) Çalıştırma:
Bakım esnasında jetfanlar kontrol panolarından manuel olarak kumanda edilmektedir. TKM’de jetfan kontrol panolarında, her jetfan için “Otomatik-Manuel-Off” bir seçme anahtarı bulunmaktadır. Eğer “Manuel” kumanda moduna geçilmişse, bu durumu gösteren bir ikaz lambası bulunmaktadır. Eğer anahtar manuel konuma alınırsa, mevcut komutlar kontaktan bir yeni komut gelinceye kadar devam edecektir. Eğer jetfanlar devreye alınacaksa bu işlem tek tek sırayla olacaktır. Eğer seçme anahtarı “Manuel” den “Otomatik” konuma alınırsa, bu modun komutları derhal yerine getirilecektir. Her jetfanın çalışma süresi, Tünel Kontrol Merkezindeki SCADA sistemine aktarılmaktadır.

Havalandırma arayüzü aşağıda verilmiştir.

![image.png](/.attachments/image-d32d4119-45f0-49f7-a63f-0bf964b92070.png)