## **PLC Detay Penceresi**

PLC'lerin durum ve alarm bilgilerini göstermek için açılır detay penceresi mevcuttur. PLC detay penceresi AG-OG ve havalandırma arayüzlerinde bulunmaktadır.

**PLC Durum Bilgileri**

PLC durum bilgilerinde değer, proses, tarih, kalite, açıklama bilgileri bulunmaktadır. Özelliklerin anlaşır olması için açıklama sütunu detay penceresine eklenmiştir.

- **INTF_LEDON**: Dahili hata bulunması (programlama, parametre atama ya da lisans hataları vb.)
- **EXTF_LEDON**: Harici hata bulunması
- **R0_RUN**: CPU 0 çalışıyor
- **R1_RUN**: CPU 1 çalışıyor
- **STOP_LEDON**: CPU durma modunda
- **BAF_LEDON**: Batarya seviyesi düşük hatası
- **BUS1F_LEDON**: PROFIBUS arayüzünde veri yolu hatası
- **BUS5F_LEDON**: PROFINET arayüzünde veri yolu hatası
- **REDF_LEDON**: Sistem durumu ve yedeklilik hataları
- **R0_MASTER**: Sistem Rack 0’daki CPU tarafından kontrol ediliyor
- **R1_MASTER**: Sistem Rack 1’daki CPU tarafından kontrol ediliyor

![image.png](/.attachments/image-d64ce023-fc86-40cf-8edd-61b06959091b.png)

**PLC Alarm Bilgileri**

PLC'lerin alarm ile ilgili detaylı bilgiler bu detay penceresinde yer almaktadır.

![image.png](/.attachments/image-d7844c94-05f9-450d-a051-6221bb81c60b.png)