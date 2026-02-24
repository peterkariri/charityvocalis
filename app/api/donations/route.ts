import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const {
            amount,
            campaignId,
            donorName,
            donorEmail,
            donorPhone,
            paymentMethod,
            userId
        } = body

        if (!amount) {
            return NextResponse.json(
                { error: "Amount is required" },
                { status: 400 }
            )
        }

        // Start a transaction to ensure donation and campaign update happen together
        const result = await prisma.$transaction(async (tx) => {
            // 1. Create Donation
            const donation = await tx.donation.create({
                data: {
                    amount: parseFloat(amount),
                    currency: "KES",
                    status: "completed", // Simulating immediate success for now
                    paymentMethod: paymentMethod || "card",
                    transactionId: `mock-txn-${Date.now()}`,

                    userId: userId || null,
                    campaignId: campaignId || null,

                    donorName: donorName || "Guest",
                    donorEmail: donorEmail,
                    donorPhone: donorPhone,
                },
            })

            // 2. Update Campaign if applicable
            if (campaignId) {
                await tx.campaign.update({
                    where: { id: campaignId },
                    data: {
                        raisedAmount: {
                            increment: parseFloat(amount)
                        }
                    }
                })
            }

            return donation
        })

        return NextResponse.json(result)

    } catch (error) {
        console.error("Donation processing error:", error)
        return NextResponse.json(
            { error: "Failed to process donation" },
            { status: 500 }
        )
    }
}

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url)
        const userId = searchParams.get('userId')

        const conditions: any = {}
        if (userId) {
            conditions.userId = userId
        }

        const donations = await prisma.donation.findMany({
            where: conditions,
            orderBy: { createdAt: "desc" },
            include: {
                campaign: {
                    select: { title: true }
                }
            }
        })

        return NextResponse.json(donations)
    } catch (error) {
        console.error("Donations fetch error:", error)
        return NextResponse.json(
            { error: "Failed to fetch donations" },
            { status: 500 }
        )
    }
}
