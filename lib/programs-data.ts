import { Mic, Users, GraduationCap, Briefcase, Heart, MessageCircle } from "lucide-react"

export const programs = [
    {
        id: "speak-out-sessions",
        icon: Mic,
        title: "Speak Out Sessions",
        description:
            "Safe spaces where girls can share their stories, voice concerns, and practice public speaking in a supportive environment.",
        longDescription: `Our Speak Out Sessions provide a transformative platform for young girls to find their voice. In many communities, girls are taught to be seen and not heard. We challenge this narrative by creating safe, judgment-free zones where they can express themselves, share their personal stories, and discuss issues affecting their lives.
    
    Through structured public speaking workshops and open dialogue circles, participants build confidence, learn effective communication skills, and realize the power of their own stories. These sessions are often the first step towards self-advocacy and leadership.`,
        color: "bg-primary",
        textColor: "text-white",
        image: "/images/programs/speak-out.jpg", // Placeholder path
        placeholderImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop", // African woman speaking/leading
    },
    {
        id: "mentorship-program",
        icon: Users,
        title: "Mentorship Program",
        description:
            "Connect with successful women professionals who provide guidance, support, and real-world insights for career development.",
        longDescription: `Our Mentorship Program bridges the gap between ambition and achievement. We pair young girls with successful African women professionals from various fields—medicine, law, technology, business, and the arts.
    
    Mentors provide one-on-one guidance, helping mentees navigate educational choices, personal challenges, and career paths. This relationship fosters a sense of possibility and provides a concrete roadmap for success, showing girls that their dreams are valid and attainable.`,
        color: "bg-secondary",
        textColor: "text-secondary-foreground",
        image: "/images/programs/mentorship.jpg",
        placeholderImage: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop", // Women talking/mentoring
    },
    {
        id: "scholarship-fund",
        icon: GraduationCap,
        title: "Scholarship Fund",
        description:
            "Financial support for academically talented girls who need help covering school fees, books, and educational materials.",
        longDescription: `Education is a fundamental right, but poverty often stands in the way. Our Scholarship Fund is dedicated to ensuring that no bright young mind is left behind due to financial constraints.
    
    We provide comprehensive scholarships that cover tuition fees, uniforms, textbooks, and other essential learning materials. Beyond financial aid, scholarship recipients receive academic monitoring and counseling to ensure they thrive in their educational journey.`,
        color: "bg-primary",
        textColor: "text-white",
        image: "/images/programs/scholarship.jpg",
        placeholderImage: "https://images.unsplash.com/photo-1427504746696-ea5abd7dfe8b?q=80&w=800&auto=format&fit=crop", // Girl studying/graduating
    },
    {
        id: "career-guidance",
        icon: Briefcase,
        title: "Career Guidance",
        description:
            "Workshops and seminars that expose girls to various career paths and help them make informed decisions about their future.",
        longDescription: `Navigating the modern job market can be daunting. Our Career Guidance program exposes girls to a wide array of career possibilities, from STEM fields to creative arts and entrepreneurship.
    
    We organize career fairs, industry visits, and skill-building workshops that demystify different professions. We also help with practical skills like CV writing, interview preparation, and digital literacy, equipping girls with the tools they need to build independent futures.`,
        color: "bg-secondary",
        textColor: "text-secondary-foreground",
        image: "/images/programs/career.jpg",
        placeholderImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop", // Professional setting
    },
    {
        id: "wellness-support",
        icon: Heart,
        title: "Wellness Support",
        description:
            "Mental health resources and counseling services to help girls navigate challenges and build emotional resilience.",
        longDescription: `True empowerment includes emotional and mental well-being. Our Wellness Support program offers confidential counseling, mental health education, and resilience-building workshops.
    
    We address issues such as stress, trauma, self-esteem, and reproductive health in a culturally sensitive manner. By prioritizing mental wellness, we ensure that girls have the internal strength to face life's challenges and succeed in all other areas.`,
        color: "bg-primary",
        textColor: "text-white",
        image: "/images/programs/wellness.jpg",
        placeholderImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop", // Wellness/counseling
    },
    {
        id: "peer-networks",
        icon: MessageCircle,
        title: "Peer Networks",
        description:
            "Creating lasting connections between girls across different schools to build a supportive community of change-makers.",
        longDescription: `Solidarity is strength. Our Peer Networks connect girls from different schools and backgrounds, fostering a sisterhood of support and collaboration.
    
    Through joint projects, camps, and online forums, girls share experiences, learn from one another, and build a sense of collective identity. These networks often evolve into lifelong friendships and professional connections, creating a powerful ecosystem of women supporting women.`,
        color: "bg-secondary",
        textColor: "text-secondary-foreground",
        image: "/images/programs/peer.jpg",
        placeholderImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop", // Group of friends
    },
]
