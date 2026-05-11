import { cn } from "@/lib/utils"

function Input({ className, type = "text", ...props }) {
    return (
        <input
            type={type}
            className={cn("border rounded px-3 py-2 w-full text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50", className)}
            {...props}
        />
    )
}

export { Input }
