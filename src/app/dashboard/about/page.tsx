import { Leaf, Lightbulb, Recycle, UsersRound } from "lucide-react"
import MaxWidthWrapper from "../../components/MaxWidthWrapper"

const member = [
    {
      name: 'Faiq Haqqani',
      role: 'UI/UX Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Muhammad Riyadhul Jinan Nasution',
      role: 'Programmer',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'M. Fathan Hakim',
      role: 'UI/UX Designer',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]

export default function AbousUs() {
    return <>
            <div className="min-h-screen bg-gray-50">
            <MaxWidthWrapper>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
                Empowering <span className="text-blue-500">Human</span> and <span className="text-blue-500">Technology</span> to Create Innovation
                </h1>
                <p className="text-lg text-gray-600 mb-8 text-center">
                At <span className="text-blue-500">WebDevelopmentRawr</span>, we believe in the power of human creativity and technological advancements to drive innovation and solve the world’s most pressing challenges.
                </p>

                <div className="py-20">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                        Our <span className="text-blue-500">Team Members</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-12 text-center">
                        Meet the dedicated individuals behind our innovations.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {member.map((m, index) => (
                        <div key={index} className="text-center">
                            <img
                            src={m.imageUrl}
                            alt={m.name}
                            className="w-64 h-64 mx-auto rounded-md mb-4 shadow"
                            />
                            <h3 className="text-xl font-semibold">{m.name}</h3>
                            <p className="text-gray-400">{m.role}</p>
                        </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {/* Vision Section */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
                    <p className="text-gray-600">
                    To be a leading force in the integration of human potential and technology, creating innovations that empower individuals, businesses, and communities worldwide.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                    <div className="flex flex-col gap-3 text-gray-600">
                        <div className="grid grid-cols-10 gap-3 justify-items-center items-center">
                            <UsersRound size={24} className="text-blue-500 col-span-1"/>
                            <p className="col-span-9"><span className="font-semibold">Empowering People</span> : Providing resources and opportunities to harness the full potential of technology.</p>
                        </div>
                        <div className="grid grid-cols-10 gap-3 justify-items-center items-center">
                            <Lightbulb size={24} className="text-blue-500 col-span-1"/>
                            <p className="col-span-9"><span className="font-semibold">Driving Innovation</span> : Exploring new frontiers in technology through continuous R&D.</p>
                        </div>
                        <div className="grid grid-cols-10 gap-3 justify-items-center items-center">
                            <Leaf size={24} className="text-blue-500 col-span-1"/>
                            <p className="col-span-9"><span className="font-semibold">Sustainable Impact</span> : Focusing on ethical and eco-friendly technological advancement.</p>
                        </div>
                    </div>
                </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Core Values</h2>
                <ul className="list-disc list-inside text-gray-600">
                    <li><strong>Innovation:</strong> Constantly evolving and thinking beyond limits.</li>
                    <li><strong>Collaboration:</strong> Fostering teamwork between diverse talents.</li>
                    <li><strong>Excellence:</strong> Delivering high-quality solutions with precision and integrity.</li>
                    <li><strong>Sustainability:</strong> Innovating for a future that benefits both people and the planet.</li>
                    <li><strong>Empowerment:</strong> Enabling individuals to unlock their potential through technology.</li>
                </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Do</h2>
                <p className="text-gray-600">
                    We specialize in offering innovative solutions in various fields such as [Insert Industries Here]. Our team collaborates with leading professionals to deliver cutting-edge products and services that cater to evolving needs.
                </p>
                </div>
            </div>
            </MaxWidthWrapper>
            
        </div>
    </>
}