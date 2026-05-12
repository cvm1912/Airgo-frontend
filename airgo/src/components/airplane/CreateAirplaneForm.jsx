import AirCraftIdentity from "./sections/AircraftIdentitySection";
import { Button } from "@/components/ui/button"
import SeatCapacity from "./sections/SeatingCapacitySection";
import PerformanceSection from "./sections/PerformanceSection";
import LogisticsStatusSection from "./sections/LogisticsStatusSection";
export default function CreateAirplaneForm() {
  return (
    <div>
    <div className="flex flex-col gap-6 p-6 sm:flex-row sm:justify-between sm:items-start sm:p-10">
      <div className="flex flex-col gap-2 max-w-xl">
        <p className="text-bold">
            <span className="text-gray-500">INVENTORY</span> / 
            <span className="text-blue-900"> CREATE NEW AIRCRAFT</span></p>
        <h1 className="text-2xl sm:text-4xl text-blue-950 font-bold">Register New Fleet Unit</h1>
        <p className="text-gray-500 text-sm sm:text-base">Enter technical specifications and operational identity for new hardware onboarding. All fields marked with * are mandatory for telemetry synchronization.</p>
      </div>
      <div className="flex gap-4 sm:gap-10">
        <Button variant="outline" className='text-blue-900 font-bold text-base sm:text-2xl px-6 py-4 sm:p-10 hover:bg-blue-900 hover:text-white'>Cancel</Button>
        <Button variant="outline" className='bg-blue-900 font-bold text-base sm:text-2xl px-6 py-4 sm:p-10 text-white hover:bg-white hover:text-blue-900'>INITILIAZE UNIT</Button>
      </div>
    </div>
     <AirCraftIdentity/>
     <div className="flex">
        <div><SeatCapacity/></div>
        <div><PerformanceSection/></div>
     </div>
     <div><LogisticsStatusSection/></div>
     
    </div>
  );
}




export function ButtonOutline() {
  return 
}
