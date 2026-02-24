const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    console.log('Seeding database...')

    // Clear existing items if needed (optional)
    // await prisma.decision.deleteMany({})

    const campaign1 = await prisma.campaign.create({
        data: {
            title: "Educate a Girl, Empower a Community",
            description: "Provide school fees, uniforms, and mentorship to 50 girls in rural Kenya.",
            targetAmount: 500000,
            raisedAmount: 125000,
            imageUrl: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000",
            status: "active",
            verified: true,
            impactUpdates: {
                create: [
                    {
                        title: "First Term Fees Paid!",
                        content: "Thanks to your support, 20 girls have started their first term.",
                        imageUrl: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1000",
                        publishedAt: new Date()
                    }
                ]
            }
        },
    })

    const campaign2 = await prisma.campaign.create({
        data: {
            title: "Clean Water for Schools",
            description: "Install water tanks and purification systems for 3 primary schools.",
            targetAmount: 300000,
            raisedAmount: 45000,
            imageUrl: "https://images.unsplash.com/photo-1574482620266-99321e06fa6b?q=80&w=1000",
            status: "active",
            verified: true,
        },
    })

    const campaign3 = await prisma.campaign.create({
        data: {
            title: "Digital Literacy Program",
            description: "Equip a computer lab to teach coding and digital skills.",
            targetAmount: 1000000,
            raisedAmount: 850000,
            imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000",
            status: "active",
            verified: true,
        },
    })

    console.log({ campaign1, campaign2, campaign3 })
    console.log('Seeding finished.')
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
