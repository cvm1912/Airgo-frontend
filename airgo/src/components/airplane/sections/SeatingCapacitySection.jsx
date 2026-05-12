
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
    <Card className="w-full my-4 border-blue-900 border-2 !py-0 !gap-0 h-full">
      <CardHeader className="bg-blue-50 px-4 py-4">
        <CardTitle className="font-bold flex items-center gap-2 text-2xl">
          <MdAirlineSeatReclineExtra />SEATING & CAPACITY
        </CardTitle>
      </CardHeader>
      <CardFooter className='border-blue-900'>
        <div className="w-full">
          <CardContent className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            <Field>
                <FieldLabel htmlFor="max-speed" className='text-xl font-medium'>MAX SPEED (KNOTS)</FieldLabel>
              <Input placeholder="520" required className="w-full text-xl font-medium p-2" />
            </Field>
            <Field>
                <FieldLabel htmlFor="max-speed" className='text-xl font-medium'>MAX SPEED (KNOTS)</FieldLabel>
              <Input placeholder="520" required className="w-full text-xl font-medium p-2" />
            </Field>
            <Field>
                 <FieldLabel htmlFor="max-speed" className='text-xl font-medium'>MAX SPEED (KNOTS)</FieldLabel>
              <Input placeholder="520" required className="w-full text-xl font-medium p-2" />
            </Field>
          </CardContent>
        </div>
      </CardFooter>
    </Card>
  );
}
