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
    <Card className="w-200 m-10 border-blue-900 border-2 h-80">
      <CardHeader >
        <CardTitle className="font-bold flex items-center gap-2">
          <IoIosFingerPrint /> AIRCRAFT IDENTITY
        </CardTitle>
      </CardHeader>
      <CardFooter className=' border-blue-900 '>
        <div>
          <CardContent className='flex gap-5'>
            <Field>
              <FieldLabel htmlFor="checkout-7j9-cvv">Airplane Name</FieldLabel>
              <Input placeholder="123" required className="w-60" />
            </Field>

             <Field>
              <FieldLabel htmlFor="checkout-7j9-cvv">MANUFACTURER *</FieldLabel>
              <Input placeholder="123" required className="w-60" />
            </Field>
            <Field>
              <FieldLabel htmlFor="checkout-7j9-cvv">MODEL NUMBER *</FieldLabel>
              <Input placeholder="123" required className="w-60" />
            </Field>

          
          </CardContent>
        </div>
      </CardFooter>
    </Card>
  );
}
