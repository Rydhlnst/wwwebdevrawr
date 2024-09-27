import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button"; // ShadCN UI Button
import { Input } from "@/components/ui/input";   // ShadCN UI Input
import { Textarea } from "@/components/ui/textarea"; // ShadCN UI Textarea

export default function ConsultingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
        <MaxWidthWrapper>
        <div className="container mx-auto py-16">
            <section className="flex flex-col rounded-lg p-8 gap-12">
                <div className="flex flex-col">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
                    Why Choose Us for Your Innovation Consulting?
                </h1>
                <p className="text-gray-700 mb-8">
                    At our consulting firm, we believe in empowering your ideas and turning them into impactful innovations. Here’s why we are the right choice for you:
                </p>
                </div>
                

                <div className="space-y-6">
                

                <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Our Unique Advantages
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                        <strong>Expert Insights</strong>: Our team of seasoned professionals brings a wealth of experience to guide you in your innovation journey.
                    </li>
                    <li>
                        <strong>Tailored Strategies</strong>: We customize our consulting approach to fit the unique needs and goals of your organization.
                    </li>
                    <li>
                        <strong>Data-Driven Decisions</strong>: We leverage data analysis to help you identify opportunities and make informed decisions.
                    </li>
                    <li>
                        <strong>Continuous Support</strong>: Our commitment doesn't end with the consultation; we provide ongoing support to ensure your success.
                    </li>
                    <li>
                        <strong>Proven Track Record</strong>: Join a growing list of satisfied clients who have successfully transformed their ideas into reality with our help.
                    </li>
                    </ul>
                </div>

                
                </div>
                <section className=" rounded-lg shadow-lg p-8 mt-12">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                    Contact Us
                    </h2>
                    <p className="text-center text-gray-600 mb-4">
                    Have questions or want to discuss your project? Fill out the form below, and we will get back to you shortly!
                    </p>
                    
                    <form className="space-y-6 max-w-xl mx-auto">
                    <div>
                        <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700">
                        Your Name
                        </label>
                        <Input id="name" type="text" placeholder="Enter your name" className="mt-1 w-full" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700">
                        Email Address
                        </label>
                        <Input id="email" type="email" placeholder="Enter your email" className="mt-1 w-full" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-left text-sm font-medium text-gray-700">
                        Your Message
                        </label>
                        <Textarea id="message" placeholder="How can we help you?" className="mt-1 w-full" />
                    </div>
                    <div className="text-center">
                        <Button type="submit" className="px-8 py-4 text-lg bg-blue-600 text-white hover:bg-blue-700">
                        Send Message
                        </Button>
                    </div>
                    </form>
                </section>
            </section>
            </div>
        </MaxWidthWrapper>
    </div>
    
  );
}
