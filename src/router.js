import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Interfaces from "./components/Interfaces.vue"
import SCADAUIArchitecture from "./components/SCADAUIArchitecture.vue"
import LVMV from "./components/LVMV.vue"
import CircuitBreaker from "./components/CircuitBreaker.vue"
import Jenerator from "./components/Jenerator.vue"
import FuelTank from "./components/FuelTank.vue"
import UPS from "./components/UPS.vue"
import PLC from "./components/PLC.vue"
import CouplingBreaker from "./components/CouplingBreaker.vue"
import Lighting from "./components/Lighting.vue"
import RoadLighting from "./components/RoadLighting.vue"
import Luminancemeter from "./components/Luminancemeter.vue"
import LightLevel from "./components/LightLevel.vue"
import AutoManuelControl from "./components/AutoManuelControl.vue"
import LuminancemeterThreshold from "./components/LuminancemeterThreshold.vue"
import Ventilation from "./components/Ventilation.vue"
import Jetfan from "./components/Jetfan.vue"
import VentilationThreshold from "./components/VentilationThreshold.vue"
import COSensor from "./components/COSensor.vue"
import VisSensor from "./components/VisSensor.vue"
import AFMSensor from "./components/AFMSensor.vue"
import TrafficInside from "./components/TrafficInside.vue"
import VTSSpeed from "./components/VTSSpeed.vue"
import VTSDirection from "./components/VTSDirection.vue"
import VMSManagementPanel from "./components/VMSManagementPanel.vue"
import ScenarioControl from "./components/ScenarioControl.vue"
import SOS from "./components/SOS.vue"
import EmergencyCall from "./components/EmergencyCall.vue"
import HeatDetection from "./components/HeatDetection.vue"
import Linear from "./components/Linear.vue"
import FireScenario from "./components/FireScenario.vue"
import FireScenarioArea from "./components/FireScenarioArea.vue"
import FireScenarioDetector from "./components/FireScenarioDetector.vue"
import FireZone from "./components/FireZone.vue"
import Sabotage from "./components/Sabotage.vue"
import FireCabinet from "./components/FireCabinet.vue"
import FireExtinguisher from "./components/FireExtinguisher.vue"
import WaterTank from "./components/WaterTank.vue"
import MainandStandbyPump from "./components/MainandStandbyPump.vue"
import Meteorology from "./components/Meteorology.vue"
import WeatherCondition from "./components/WeatherCondition.vue"
import VehicleCounting from "./components/VehicleCounting.vue"
import CCTV from "./components/CCTV.vue"
import Camera from "./components/Camera.vue"
import Network from "./components/Network.vue"
import NetworkDevice from "./components/NetworkDevice.vue"
import Reports from "./components/Reports.vue"
import Trends from "./components/Trends.vue"
import LogViewer from "./components/LogViewer.vue"
import Alarms from "./components/Alarms.vue"
import Scenarios from "./components/Scenarios.vue"
import TrafficOutside from "./components/TrafficOutside.vue"
import TrafficLights from "./components/TrafficLights.vue"
import FireFighting from "./components/FireFighting.vue"

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/SCADAUIArchitecture",
      name: "SCADAUIArchitecture",
      component: SCADAUIArchitecture
    },
    {
      path: "/Interfaces",
      name: "Interfaces",
      component: Interfaces
    },
    {
      path: "/LVMV",
      name: "LVMV",
      component: LVMV
    },   
    {
      path: "/CircuitBreaker",
      name: "CircuitBreaker",
      component: CircuitBreaker
    },
    {
      path: "/Jenerator",
      name: "Jenerator",
      component: Jenerator
    },
    {
      path: "/FuelTank",
      name: "FuelTank",
      component: FuelTank
    },
    {
      path: "/UPS",
      name: "UPS",
      component: UPS
    },
    {
      path: "/PLC",
      name: "PLC",
      component: PLC
    },
    {
      path: "/CouplingBreaker",
      name: "CouplingBreaker",
      component: CouplingBreaker
    },
    {
      path: "/Lighting",
      name: "Lighting",
      component: Lighting
    },
    {
      path: "/RoadLighting",
      name: "RoadLighting",
      component: RoadLighting
    },
    {
      path: "/Luminancemeter",
      name: "Luminancemeter",
      component: Luminancemeter
    },
    {
      path: "/LightLevel",
      name: "LightLevel",
      component: LightLevel
    },
    {
      path: "/AutoManuelControl",
      name: "AutoManuelControl",
      component: AutoManuelControl
    },
    {
      path: "/LuminancemeterThreshold",
      name: "LuminancemeterThreshold",
      component: LuminancemeterThreshold
    },
    {
      path: "/Ventilation",
      name: "Ventilation",
      component: Ventilation
    },
    {
      path: "/Jetfan",
      name: "Jetfan",
      component: Jetfan
    },

    {
      path: "/AutoManuelControl",
      name: "AutoManuelControl",
      component: AutoManuelControl
    },
    {
      path: "/PLC",
      name: "PLC",
      component: PLC
    },
    {
      path: "/VentilationThreshold",
      name: "VentilationThreshold",
      component: VentilationThreshold
    },
    {
      path: "/COSensor",
      name: "COSensor",
      component: COSensor
    },
    {
      path: "/VisSensor",
      name: "VisSensor",
      component: VisSensor
    },
    {
      path: "/AFMSensor",
      name: "AFMSensor",
      component: AFMSensor
    },
    {
      path: "/TrafficInside",
      name: "TrafficInside",
      component: TrafficInside
    },
    {
      path: "/VTSSpeed",
      name: "VTSSpeed",
      component: VTSSpeed
    },
    {
      path: "/VTSDirection",
      name: "VTSDirection",
      component: VTSDirection
    },
    {
      path: "/VMSManagementPanel",
      name: "VMSManagementPanel",
      component: VMSManagementPanel
    },
    {
      path: "/TrafficOutside",
      name: "TrafficOutside",
      component: TrafficOutside
    },
    {
      path: "/VTSSpeed",
      name: "VTSSpeed",
      component: VTSSpeed
    },
    {
      path: "/VTSDirection",
      name: "VTSDirection",
      component: VTSDirection
    },
    {
      path: "/RoadLighting",
      name: "RoadLighting",
      component: RoadLighting
    },
    {
      path: "/TrafficLights",
      name: "TrafficLights",
      component: TrafficLights
    },
    {
      path: "/ScenarioControl",
      name: "ScenarioControl",
      component: ScenarioControl
    },
    {
      path: "/SOS",
      name: "SOS",
      component: SOS
    },
    {
      path: "/EmergencyCall",
      name: "EmergencyCall",
      component: EmergencyCall
    },
    {
      path: "/HeatDetection",
      name: "HeatDetection",
      component: HeatDetection
    },
    {
      path: "/Linear",
      name: "Linear",
      component: Linear
    },
    {
      path: "/FireScenario",
      name: "FireScenario",
      component: FireScenario
    },
    {
      path: "/FireScenarioArea",
      name: "FireScenarioArea",
      component: FireScenarioArea
    },
    {
      path: "/FireScenarioDetector",
      name: "FireScenarioDetector",
      component: FireScenarioDetector
    },
    {
      path: "/FireZone",
      name: "FireZone",
      component: FireZone
    },
    {
      path: "/Sabotage",
      name: "Sabotage",
      component: Sabotage
    },
    {
      path: "/FireCabinet",
      name: "FireCabinet",
      component: FireCabinet
    },
    {
      path: "/FireExtinguisher",
      name: "FireExtinguisher",
      component: FireExtinguisher
    },
    {
      path: "/FireFighting",
      name: "FireFighting",
      component: FireFighting
    },
    {
      path: "/WaterTank",
      name: "WaterTank",
      component: WaterTank
    },
    {
      path: "/MainandStandbyPump",
      name: "MainandStandbyPump",
      component: MainandStandbyPump
    },
    {
      path: "/Meteorology",
      name: "Meteorology",
      component: Meteorology
    },
    {
      path: "/WeatherCondition",
      name: "WeatherCondition",
      component: WeatherCondition
    },
    {
      path: "/VehicleCounting",
      name: "VehicleCounting",
      component: VehicleCounting
    },
    {
      path: "/CCTV",
      name: "CCTV",
      component: CCTV
    },
    {
      path: "/Camera",
      name: "Camera",
      component: Camera
    },
    {
      path: "/Network",
      name: "Network",
      component: Network
    },
    {
      path: "/NetworkDevice",
      name: "NetworkDevice",
      component: NetworkDevice
    },
    {
      path: "/Reports",
      name: "Reports",
      component: Reports
    },
    {
      path: "/Trends",
      name: "Trends",
      component: Trends
    },
    {
      path: "/LogViewer",
      name: "LogViewer",
      component: LogViewer
    },
    {
      path: "/Alarms",
      name: "Alarms",
      component: Alarms
    },
    {
      path: "/Scenarios",
      name: "Scenarios",
      component: Scenarios
    }
  ]
});