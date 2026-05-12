import AirCraftIdentity from "./sections/AircraftIdentitySection";
import { Button } from "@/components/ui/button"
import SeatCapacity from "./sections/SeatingCapacitySection";
import PerformanceSection from "./sections/PerformanceSection";
import LogisticsStatusSection from "./sections/LogisticsStatusSection";
export default function CreateAirplaneForm() {
  return (
    <div className="w-full overflow-x-hidden">
    <div className="flex flex-col gap-6 p-4 sm:p-6 md:flex-row md:justify-between md:items-start md:p-10">
      <div className="flex flex-col gap-2">
        <p className="text-bold">
            <span className="text-gray-500">INVENTORY</span> / 
            <span className="text-blue-900"> CREATE NEW AIRCRAFT</span></p>
        <h1 className="text-2xl sm:text-4xl text-blue-950 font-bold">Register New Fleet Unit</h1>
        <p className="text-gray-500 text-sm sm:text-base">Enter technical specifications and operational identity for new hardware onboarding. All fields marked with * are mandatory for telemetry synchronization.</p>
      </div>
      <div className="flex gap-4 sm:gap-6 shrink-0">
        <Button variant="outline" className='text-blue-900 font-bold text-sm sm:text-base md:text-2xl px-4 py-2 sm:px-6 sm:py-4 md:p-10 hover:bg-blue-900 hover:text-white'>Cancel</Button>
        <Button variant="outline" className='bg-blue-900 font-bold text-sm sm:text-base md:text-2xl px-4 py-2 sm:px-6 sm:py-4 md:p-10 text-white hover:bg-white hover:text-blue-900'>INITILIAZE UNIT</Button>
      </div>
    </div>
    <div className="px-4">
     <AirCraftIdentity/>
     <div className="flex flex-col md:flex-row gap-0">
        <div className="w-full md:w-1/2 min-w-0"><SeatCapacity/></div>
        <div className="w-full md:w-1/2 min-w-0"><PerformanceSection/></div>
     </div>
     <LogisticsStatusSection/>
    </div>
    </div>
  );
}




export function ButtonOutline() {
  return 
}
