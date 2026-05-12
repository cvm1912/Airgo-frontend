import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdSpeed } from "react-icons/md";
import { IoIosFingerPrint } from "react-icons/io";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function PerformanceSection() {
  return (
    <Card className="w-full my-4 border-blue-900 border-2 !py-0 !gap-0 h-full">
      <CardHeader className="bg-blue-50 px-4 py-4">
        <CardTitle className="font-bold flex items-center gap-2 text-2xl">
          <MdSpeed />PERFORMANCE SPECS
        </CardTitle>
      </CardHeader>
      <CardFooter className='border-blue-900'>
        <div className="w-full">
          <CardContent className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            <Field >
              <FieldLabel htmlFor="fuel-capacity" className='text-xl font-medium'>FUEL CAPACITY (LITRES)</FieldLabel>
              <Input placeholder="126000" required className="w-full text-xl font-medium p-2" />
            </Field>
            <Field>
              <FieldLabel htmlFor="max-speed" className='text-xl font-medium'>MAX SPEED (KNOTS)</FieldLabel>
              <Input placeholder="520" required className="w-full text-xl font-medium p-2" />
            </Field>
            <Field>
            <FieldLabel htmlFor="max-range" className='text-xl font-medium'>MAX RANGE (KM)</FieldLabel>
              <Input placeholder="14000" required className="w-full text-xl font-medium p-2" />
            </Field>
          </CardContent>
          <div className="px-6 pb-4 mt-4 rounded-4xl">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG2xb1jfXOhTxAAgNus5rK6HD90kqIJv8d5Q&s" alt="aircraft" className="w-full h-40 object-cover rounded" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
