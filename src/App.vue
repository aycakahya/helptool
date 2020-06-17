<template>
  <div>
    <sidebar-menu :menu="menu">
      <font-awesome-icon slot="toggle-icon" icon="arrows-alt-h"></font-awesome-icon>
      <font-awesome-icon slot="dropdown-icon" icon="angle-down"></font-awesome-icon>
    </sidebar-menu>
    <router-view />
  </div>
</template>
<script>
import Header from "./shared/Header";
import Footer from "./shared/Footer";

import { SidebarMenu } from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";

export default {
  name: "app",
  components: {
    appHeader: Header,
    appFooter: Footer,
    SidebarMenu
  },
  props: {
    hideToggle: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onToggleCollapse(collapsed) {},
    onItemClick(event, item) {}
  },
  data() {
    return {
      menu: [
        {
          header: true,
          title: "SCADA HELP",
          hiddenOnCollapse: true
        },
        {
          href: "/SCADAUIArchitecture",
          title: "SCADA UI Mimarisi",
          icon: {
            element: "font-awesome-icon",
            attributes: {
              icon: "home"
            }
          }
        },
        {
          href: "/Interfaces",
          title: "Arayüzler",
          icon: {
            element: "font-awesome-icon",
            attributes: {
              icon: "border-all"
            }
          },
          child: [
            {
              href: "/LVMV",
              title: "AG-OG",
              icon: {
                element: "font-awesome-icon",
                attributes: {
                  icon: "car-battery"
                }
              },
              child: [
                {
                  href: "/CircuitBreaker",
                  title: "Devre Kesici"
                },
                {
                  href: "/Jenerator",
                  title: "Jenerator"
                },
                {
                  href: "/FuelTank",
                  title: "Yakıt Tankı"
                },
                {
                  href: "/UPS",
                  title: "UPS"
                },
                {
                  href: "/PLC",
                  title: "PLC"
                },
                {
                  href: "/CouplingBreaker",
                  title: "Bağlantı Kesici"
                }
              ]
            },
            {
              href: "/Lighting",
              title: "Aydınlatma",
              icon: {
                element: "font-awesome-icon",
                attributes: {
                  icon: "bolt"
                }
              },
              child: [
                {
                  href: "/RoadLighting",
                  title: "Yol Aydınlatma"
                },
                {
                  href: "/Luminancemeter",
                  title: "Luminansmetre"
                },
                {
                  href: "/LightLevel",
                  title: "Işık Seviyesi"
                },
                {
                  href: "/AutoManuelControl",
                  title: "Otomatik-Manuel Kontrol"
                },
                {
                  href: "/LuminancemeterThreshold",
                  title: "Luminansmetre Eşik Değeri"
                }
              ]
            },
            {
              href: "/Ventilation",
              title: "Havalandırma",
              icon: {
                element: "font-awesome-icon",
                attributes: {
                  icon: "fan"
                }
              },
              child: [
                {
                  href: "/Jetfan",
                  title: "Jetfan"
                },
                {
                  href: "/AutoManuelControl",
                  title: "Otomatik-Manuel Kontrol"
                },
                {
                  href: "/PLC",
                  title: "PLC"
                },
                {
                  href: "/VentilationThreshold",
                  title: "Havalandırma Eşik Değeri"
                },
                {
                  href: "/COSensor",
                  title: "CO Sensör"
                },
                {
                  href: "/VisSensor",
                  title: "Vis Sensör"
                },
                {
                  href: "/AFMSensor",
                  title: "AFM Sensör"
                }
              ]
            },
            {
              href: "/TrafficOutside",
              title: "Tünel Dışı Trafik",
               icon: {
                element: "font-awesome-icon",
                attributes: {
                  icon: "directions"
                }
              },
              child: [
                {
                  href: "/VTSSpeed",
                  title: "VTS Hız"
                },
                {
                  href: "/VTSDirection",
                  title: "VTS Yön"
                },
                {
                  href: "/VMSManagementPanel",
                  title: "VMS Yönetim Paneli"
                }
              ]
            },
            {
              href: "/TrafficInside",
              title: "Tünel İçi Trafik",
               icon: {
                element: "font-awesome-icon",
                attributes: {
                  icon: "traffic-light"
                }
              },
              child: [
                {
                  href: "/VTSSpeed",
                  title: "VTS Hız"
                },
                {
                  href: "/VTSDirection",
                  title: "VTS Yön"
                },
                {
                  href: "/RoadLighting",
                  title: "Yol Aydınlatma"
                },
                {
                  href: "/TrafficLights",
                  title: "Trafik Işıkları"
                },
                {
                  href: "/ScenarioControl",
                  title: "Senaryo  Kontrol"
                }
              ]
            },
            {
              href: "/SOS",
              title: "SOS",
               icon: {
                element: "font-awesome-icon",
                attributes: {
                  icon: "phone-alt"
                }
              },
              child: [
                {
                  href: "/EmergencyCall",
                  title: "Acil Arama"
                },
                {
                  href: "/HeatDetection",
                  title: "Isı Algılama"
                }
              ]
            },
            {
              href: "/Linear",
              title: "Doğrusal",
              icon: {
                element: "font-awesome-icon",
                attributes: {
                  icon: "grip-lines"
                }
              },
              child: [
                {
                  href: "/FireScenario",
                  title: "Yangın Senaryosu"
                },
                {
                  href: "/FireScenarioArea",
                  title: "Yangın Senaryo Bölge"
                },
                {
                  href: "/FireScenarioDetector",
                  title: "Yangın Detektörü"
                },
                {
                  href: "/FireZone",
                  title: "Yangın Bölgesi"
                }
              ]
            },
            {
              href: "/Sabotage",
              title: "Sabotaj",
              icon: {
                element: "font-awesome-icon",
                attributes: {
                  icon: "fire-extinguisher"
                }
              },
              child: [
                {
                  href: "/FireCabinet",
                  title: "Yangın Kabinet"
                },
                {
                  href: "/FireExtinguisher",
                  title: "Yangın Söndürücü"
                }
              ]
            },
            {
              href: "/FireFighting",
              title: "Yangın Söndürme",
              icon: {
                element: "font-awesome-icon",
                attributes: {
                  icon: "faucet"
                }
              },
              child: [
                {
                  href: "/WaterTank",
                  title: "Su Deposu"
                },
                {
                  href: "/MainandStandbyPump",
                  title: "Ana ve Yedek Pompa"
                }
              ]
            },
            {
              href: "/Meteorology",
              title: "Meteoroloji",
              icon: {
                element: "font-awesome-icon",
                attributes: {
                  icon: "cloud-moon-rain"
                }
              },
              child: [
                {
                  href: "/WeatherCondition",
                  title: "Hava Durumu"
                }
              ]
            },
            {
              href: "/VehicleCounting",
              title: "Araç Sayım",
               icon: {
                element: "font-awesome-icon",
                attributes: {
                  icon: "car"
                }
              },
            },
            {
              href: "/CCTV",
              title: "CCTV",
              icon: {
                element: "font-awesome-icon",
                attributes: {
                  icon: "video"
                }
              },
              child: [
                {
                  href: "/Camera",
                  title: "Kamera"
                }
              ]
            },
            {
              href: "/Network",
              title: "Network",
               icon: {
                element: "font-awesome-icon",
                attributes: {
                  icon: "network-wired"
                }
              },
              child: [
                {
                  href: "/NetworkDevice",
                  title: "Network Cihaz"
                }
              ]
            },
            {
              href: "/Reports",
              title: "Raporlar",
              icon: {
                element: "font-awesome-icon",
                attributes: {
                  icon: "file-signature"
                }
              }
            },
            {
              href: "/Trends",
              title: "Trendler",
               icon: {
                element: "font-awesome-icon",
                attributes: {
                  icon: "chart-line"
                }
              },
            },
            {
              href: "/LogViewer",
              title: "Log Görüntüleme",
              icon: {
                element: "font-awesome-icon",
                attributes: {
                  icon: "history"
                }
              },
            },
            {
              href: "/Alarms",
              title: "Alarmlar",
              icon: {
                element: "font-awesome-icon",
                attributes: {
                  icon: "bell"
                }
              },
            },
            {
              href: "/Scenarios",
              title: "Senaryolar",
               icon: {
                element: "font-awesome-icon",
                attributes: {
                  icon: "check-square"
                }
              },
            }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
.v-sidebar-menu {
  /* this class works */
   /* deneme*/
   /* deneme*/
  width: 300px;
  padding-top: 28px;
  z-index: 20;
  background: linear-gradient(#6078ea 0%, #22d9db 100%);
}

.sidebar .v-sidebar-menu .vsm--item {
  /* this class doesn't work */
  height: 33px;
  color: #555d6c;
  font-family: Roboto;
  font-size: 28px;
  line-height: 33px;
  background-color: #fff;
}
</style>