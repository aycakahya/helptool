## **SCADA Mimarisi**

SCADA, genel olarak bir alana yayılmış sistemlerin tek bir noktadan kontrol ve izlenmesini kapsamaktadır. Temel olarak SCADA yazılımından izleme, kontrol, veri toplama, verilerin kaydı ve saklanması işlevlerini gerçekleştirmesi beklenmektedir. 

Mersin-Anamur Tüneli ile Tünel Kontrol Merkezi (TKM) fiber optik network ile birbirlerine bağlanmaktadırlar. Tüm alt sistemler; transfer edilen verilerin durumunu kendiliğinden denetlemektedir ve arıza varsa alarm mesajı üretmektedir. SCADA mimari tasarımı sırasında ana hedef, hızlı tepki süresi ve güvenilirliğini korumaktır. Şimdiye kadar elde bitirilen projelerde, bu hedefi her zaman karşılanmıştır. SCADA yazılımı vasıtası ile tünelde bulunan tüm sistemler ile en fazla üç saniye içerisinde veri alışverişi sağlanabilir. Kritik sistemlerde en önemli konular güvenilirlik, hızlı tepki süresi ve kullanım kolaylığıdır. Tüm altyapı ve destek sistemleri ile SCADA sistemi, bu önceliklere yönelik optimizasyonu ile inşa edilmiştir.
Saha sinyalleri lokal PLC’ler veya saha cihazları üzerinden TCP/IP protokolü ile toplanıp değerlendirilmekte, alarm durumları Tünel Kontrol Merkezi’ne aktarılmaktadır ve SCADA üzerinde gösterilmektedir.

Tünel kontrol merkezi telekontrol sisteminde bulunan PLC’ler; kendilerine bağlı bulunan ve diğer alt sistemleri yöneten RTU’ları kumanda etmekte, onların durum bilgilerini toplamaktadır ve bu bilgileri yetkisi dâhilinde değerlendirip yorumlamaktadır, elde ettiği tüm durum bilgilerini Tünel Kontrol Merkezine SCADA sistemine göndermektedir. 
Tüneller alt kontrol merkezlerinde bulunan omurga switchleri aracılığı ile kendi networkleri üzerinde bulunan AG-OG, aydınlatma, havalandırma sistemleri ile CCTV, yangın algılama, güvenlik alarm, doğrusal yangın algılama birimlerinden gelecek verileri tünel Kontrol Merkezine göndermektedir.

Sistemde kumanda kargaşasına neden olmamak için bir kontrol ve kumanda hiyerarşisi kurulmuştur. Buna göre birinci öncelik lokal kumandada olmaktadır, lokal kumanda edilen bir sisteme, Tünel Kontrol Merkezinden müdahale edilmemektedir. İkinci öncelik Tünel Kontrol Merkezi’ne geçmektedir. Sistemlerin otomatik çalışması ise bu iki kontrolün de olmadığı durumlarda gerçekleşmektedir.
Birbirinden bağımsız çalışan sistemlerin farklı şekilde kontrol ve kumandası mümkün olmaktadır. Örneğin; Havalandırma Sistemine lokal kumanda edilirken, Aydınlatma Sistemi otomatik çalışabilmektedir.
Acil durumlar ve alarmlar söz konusu olduğunda, önceden belirlenen senaryolar uygulanmaktadır ve böylece sistemde maksimum güvenilirlik sağlanmaktadır.

Sistemin işleyişi ile ilgili alarm grupları belirlenmekte ve alarmlar seviyesine göre ekranda gösterilip arşivlenmektedir. Arşivleme işlemi sadece alarmlar için değil, olaylar ve veriler için de geçerli olmaktadır. İstendiğinde belirlenecek olan formatlarda (tarihe göre, isime göre, veriye göre, vb.) rapor alınabilmektedir.

SCADA sistemi yazılım mimarisinde parola korumalı 4 tip kullanıcı vardır:
- Servis mühendisi
- Yönetici
- Operatör
- Yalnızca İzleme

SCADA sistemi tüm tünel sistemlerinin gözlem ve kontrolünü sağlayacak yapıda tasarlanmıştır. Her sistem, ayrı başlıklar altında, ihtiyaç duyulabilecek her türlü verinin izlenmesi, kontrolü ve kumandası anlaşılır ve kullanışlı olacak şekilde tasarlanmış olan gösterim modülleri üzerinde görüntülenmektedir.