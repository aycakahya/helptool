## **Senaryolar**

Ana sunucu üzerinde çalışan senaryo modülü sayesinde yangın alarmları ve gabari alarmlarında otomatik olarak aşağıdaki işlemler gerçekleştirilmektedir.
- **Yangın Senaryosu:** Operatör seçmiş olduğu yangın senaryosunu onaylamak zorundadır. T4K, T5G, T4G, T5K olmak üzere dört adet yangın senaryosu vardır.

**T4 Kuzey 1.Bölge yangın senaryosu şu şekilde işlemektedir:** 
Bildirim ekranında (notification) Başlat ve İptal olmak üzere 2 tane seçenek mevcuttur. “Başlat” butonu tıklandığında ilgili senaryo başlatılacaktır ve bildirim ekranında sırasıyla senaryo adımları listelenecektir.  Başlat butonu ile “İşlemi onaylıyor musunuz?” onay penceresi açılacaktır.
 
![image.png](/.attachments/image-f8f71c39-2513-400f-9b32-c39edefedf8a.png)

Başlatılan senaryoyu geri almak istenirse bildirim ekranında aşağıdaki pencere açılacaktır. “Geri Al” butonuna tıklandığında başlatılan bütün senaryolar geri alınmış olacaktır. T4 Kuzey ve Güney Tüp yangın senaryoları toplam 8 bölgeden oluşmaktadır. T5 Güney ve Kuzey yangın senaryoları tek bölgeden oluşur. 

- **Gabari Senaryosu:** İlgili VMS'e mesaj gönderilir, SCADA ekranında ilgili uyarıların gösterilmesi sağlanmaktadır.
**T4K Gabari senaryosu şu şekilde işlemektedir:**
-Tünel Dışı Trafik’te yer alan VMS (TKP08) 9 nolu deseni görüntüleyecektir.
-VMS’te normal durumda ise 1 nolu desen görüntülenmektedir.

- **VTS Senaryosu:** 
VTS senaryosu T4K, T4G, T5K, T5G olmak üzere 4 tane bulunmaktadır. Örnek olarak T4K VTS senaryosu verilmiştir.

![image.png](/.attachments/image-0c7afd22-18e6-498f-bdd5-ac065fb86b74.png)

Örneğin 1.kontrol şu şekilde işlemektedir;
-Tünel İçi Trafik, trafik ışıkları (T4KTLC1, T4KTLC2) yeşil ışık durumundadır.
-Tünel İçi Trafik, VTS hızları (TKP06S1, TKP06S2, TKP05S1, TKP05S2, TKP04S1, TKP04S2, TKP03S1, TKP03S2) 70 olacaktır.
-Tünel İçi Trafik, VTS yönleri (TKP06D1, TKP06D2, TKP05D1, TKP05D2, TKP04D1, TKP04D2, TKP03D1, TKP03D2)   olacaktır.

- **Havalandırma Senaryosu:** Senaryo adımları da belirtilen aralıklara ulaştığında otomatik olarak devreye girmektedir. CO değeri ve görünürlük değeri için Jet fan adımları verilmiştir. 1.adım da 2 adet Jet fan çalışırken, 2. adım da 4 adet Jet fan çalışacaktır. CO değerinin 150’nin üzerinde olduğu durumlarda 8 tane Jet fan çalışacaktır.


