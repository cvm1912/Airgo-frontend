import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
export default function SeatCapacity() {
  return (
    <Card className="w-full my-4 border-blue-900 border-2">
      <CardHeader >
        <CardTitle className="font-bold flex items-center gap-2 ">
          <IoIosFingerPrint />SEATING & CAPACITY
        </CardTitle>
      </CardHeader>
      <CardFooter className='border-blue-900'>
        <div className="w-full">
          <CardContent className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            <Field>
              <FieldLabel htmlFor="checkout-7j9-cvv">Airplane Name</FieldLabel>
              <Input placeholder="123" required className="w-full" />
            </Field>
            <Field>
              <FieldLabel htmlFor="checkout-7j9-cvv">MANUFACTURER *</FieldLabel>
              <Input placeholder="123" required className="w-full" />
            </Field>
            <Field>
              <FieldLabel htmlFor="checkout-7j9-cvv">MODEL NUMBER *</FieldLabel>
              <Input placeholder="123" required className="w-full" />
            </Field>
          </CardContent>
        </div>
      </CardFooter>
    </Card>
  );
}
