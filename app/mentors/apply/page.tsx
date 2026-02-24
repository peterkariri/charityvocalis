"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"
import { CheckCircle2, Loader2 } from "lucide-react"

const formSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 characters"),
    profession: z.string().min(2, "Profession is required"),
    company: z.string().optional(),
    experience: z.string({
        required_error: "Please select your experience level",
    }),
    field: z.string({
        required_error: "Please select your primary field",
    }),
    linkedin: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
    bio: z.string().min(50, "Please provide a bio of at least 50 characters"),
    expertise: z.array(z.string()).refine((value) => value.length > 0, {
        message: "You must select at least one area of expertise",
    }),
    commitment: z.string({
        required_error: "Please select your time commitment availability",
    }),
})

const expertiseOptions = [
    "Leadership",
    "Career Planning",
    "Public Speaking",
    "STEM",
    "Entrepreneurship",
    "Financial Literacy",
    "Mental Health",
    "Arts & Culture",
]

export default function MentorApplyPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            profession: "",
            company: "",
            linkedin: "",
            bio: "",
            expertise: [],
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        // Simulate API call
        setTimeout(() => {
            console.log(values)
            setIsSubmitting(false)
            setIsSuccess(true)
            toast.success("Application submitted successfully!")
            window.scrollTo(0, 0)
        }, 2000)
    }

    if (isSuccess) {
        return (
            <main className="min-h-screen bg-gray-50/50">
                <Header />
                <div className="container mx-auto px-4 py-32">
                    <div className="max-w-2xl mx-auto text-center space-y-6 bg-white p-12 rounded-3xl shadow-xl">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle2 className="w-10 h-10 text-green-600" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900">Application Received!</h1>
                        <p className="text-xl text-gray-600">
                            Thank you for your interest in becoming a mentor. We have received your application and will review it shortly. Getting matched with the right mentee is a careful process, so please allow us 3-5 business days to get back to you.
                        </p>
                        <Button onClick={() => window.location.href = "/"} className="mt-8 rounded-full px-8">
                            Return Home
                        </Button>
                    </div>
                </div>
                <Footer />
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-gray-50/50">
            <Header />

            <div className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold mb-4">Become a Mentor</h1>
                            <p className="text-xl text-muted-foreground">
                                Share your journey, inspire the next generation, and make a lasting impact.
                                Complete the form below to join our mentorship program.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    {/* Personal Information */}
                                    <div className="space-y-6">
                                        <h2 className="text-2xl font-semibold border-b pb-2">Personal Information</h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <FormField
                                                control={form.control}
                                                name="firstName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>First Name</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Jane" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="lastName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Last Name</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Doe" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Email Address</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="jane@example.com" type="email" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="phone"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Phone Number</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="+254 7..." {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>

                                    {/* Professional Background */}
                                    <div className="space-y-6">
                                        <h2 className="text-2xl font-semibold border-b pb-2">Professional Background</h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <FormField
                                                control={form.control}
                                                name="profession"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Current Title/Profession</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="e.g. Senior Software Engineer" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="company"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Company/Organization</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="e.g. Tech Corp Ltd" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <FormField
                                                control={form.control}
                                                name="field"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Primary Field</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select your field" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="technology">Technology</SelectItem>
                                                                <SelectItem value="healthcare">Healthcare</SelectItem>
                                                                <SelectItem value="education">Education</SelectItem>
                                                                <SelectItem value="business">Business & Finance</SelectItem>
                                                                <SelectItem value="law">Law & Policy</SelectItem>
                                                                <SelectItem value="media">Media & Arts</SelectItem>
                                                                <SelectItem value="engineering">Engineering</SelectItem>
                                                                <SelectItem value="other">Other</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="experience"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Years of Experience</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select experience level" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="0-2">0-2 years</SelectItem>
                                                                <SelectItem value="3-5">3-5 years</SelectItem>
                                                                <SelectItem value="5-10">5-10 years</SelectItem>
                                                                <SelectItem value="10+">10+ years</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="linkedin"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>LinkedIn Profile URL (Optional)</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="https://linkedin.com/in/..." {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="bio"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Professional Bio</FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder="Tell us about yourself and your career journey..."
                                                            className="min-h-[120px]"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormDescription>
                                                        This will be shared with potential mentees.
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    {/* Mentorship Preferences */}
                                    <div className="space-y-6">
                                        <h2 className="text-2xl font-semibold border-b pb-2">Mentorship Details</h2>

                                        <FormField
                                            control={form.control}
                                            name="expertise"
                                            render={() => (
                                                <FormItem>
                                                    <div className="mb-4">
                                                        <FormLabel className="text-base">Areas of Expertise</FormLabel>
                                                        <FormDescription>
                                                            Select the areas you can provide guidance in.
                                                        </FormDescription>
                                                    </div>
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                        {expertiseOptions.map((item) => (
                                                            <FormField
                                                                key={item}
                                                                control={form.control}
                                                                name="expertise"
                                                                render={({ field }) => {
                                                                    return (
                                                                        <FormItem
                                                                            key={item}
                                                                            className="flex flex-row items-start space-x-3 space-y-0"
                                                                        >
                                                                            <FormControl>
                                                                                <Checkbox
                                                                                    checked={field.value?.includes(item)}
                                                                                    onCheckedChange={(checked) => {
                                                                                        return checked
                                                                                            ? field.onChange([...field.value, item])
                                                                                            : field.onChange(
                                                                                                field.value?.filter(
                                                                                                    (value) => value !== item
                                                                                                )
                                                                                            )
                                                                                    }}
                                                                                />
                                                                            </FormControl>
                                                                            <FormLabel className="font-normal">
                                                                                {item}
                                                                            </FormLabel>
                                                                        </FormItem>
                                                                    )
                                                                }}
                                                            />
                                                        ))}
                                                    </div>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="commitment"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Time Commitment Availability</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select availability" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="weekly">1-2 hours / week</SelectItem>
                                                            <SelectItem value="biweekly">1-2 hours / 2 weeks</SelectItem>
                                                            <SelectItem value="monthly">1-2 hours / month</SelectItem>
                                                            <SelectItem value="adhooc">Ad-hoc sessions only</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <Button type="submit" className="w-full rounded-full text-lg py-6" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Submitting Application...
                                            </>
                                        ) : (
                                            "Submit Application"
                                        )}
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
