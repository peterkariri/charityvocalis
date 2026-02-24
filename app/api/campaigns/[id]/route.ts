import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params
        const campaign = await prisma.campaign.findUnique({
            where: { id },
            include: {
                impactUpdates: true,
                donations: {
                    take: 5,
                    orderBy: { createdAt: "desc" },
                    select: {
                        amount: true,
                        createdAt: true,
                        donorName: true,
                        // Don't expose private donor info
                    }
                }
            },
        })

        if (!campaign) {
            return NextResponse.json(
                { error: "Campaign not found" },
                { status: 404 }
            )
        }

        return NextResponse.json(campaign)
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch campaign" },
            { status: 500 }
        )
    }
}
