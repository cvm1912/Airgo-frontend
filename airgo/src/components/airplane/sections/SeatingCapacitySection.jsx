
import { Input } from "@/components/ui/input";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import {
  Field,
  FieldLabel,
} from "@/components/ui/field";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function SeatCapacity() {
  return (
    <Card className="w-full my-4 !py-0 !gap-0 h-full">
      <CardHeader className="bg-blue-50 px-4 py-4">
        <CardTitle className="font-bold flex items-center gap-2 text-2xl">
          <MdAirlineSeatReclineExtra />SEATING & CAPACITY
        </CardTitle>
      </CardHeader>
      <CardFooter>
        <div className="w-full">
          <CardContent className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            <Field>
                <FieldLabel htmlFor="max-speed" className='text-xl font-semibold text-[#44474D]'>ECONOMY</FieldLabel>
              <Input type="number" placeholder="0" required className="w-full text-xl font-medium p-2" />
            </Field>
            <Field>
                <FieldLabel htmlFor="max-speed" className='text-xl font-semibold text-[#44474D]'>BUSINESS</FieldLabel>
              <Input number="number" placeholder="0" required className="w-full text-xl font-medium p-2" />
            </Field>
            <Field>
                 <FieldLabel htmlFor="max-speed" className='text-xl font-semibold text-[#44474D]'>FIRST</FieldLabel>
              <Input type="number" placeholder="0" required className="w-full text-xl font-medium p-2" />
            </Field>
          </CardContent>
        </div>
      </CardFooter>
    </Card>
  );
}
