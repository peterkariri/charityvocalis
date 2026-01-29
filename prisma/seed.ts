import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    // Create Admin User
    const password = await hash('password123', 12)
    const admin = await prisma.user.upsert({
        where: { email: 'admin@vocalis.org' },
        update: {},
        create: {
            email: 'admin@vocalis.org',
            name: 'Admin User',
            role: 'admin',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
            password: password,
        },
    })

    console.log({ admin })

    // Create Sample Blog Posts
    const author = admin

    await prisma.blogPost.createMany({
        data: [
            {
                title: "Empowering Rural Schools: A Success Story",
                slug: "empowering-rural-schools",
                excerpt: "How our latest initiative provided textbooks and digital resources to over 500 students.",
                content: "Full content here...",
                authorId: author.id,
                published: true,
                category: "Education",
                image: "bg-pink-100",
            },
            {
                title: "The Power of Mentorship",
                slug: "power-of-mentorship",
                excerpt: "Meet the mentors who are guiding the next generation.",
                content: "Full content here...",
                authorId: author.id,
                published: true,
                category: "Mentorship",
                image: "bg-purple-100",
            }
        ],
        skipDuplicates: true,   

    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
