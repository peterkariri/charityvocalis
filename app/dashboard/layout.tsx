import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AIAssistant } from "@/components/ai-assistant"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen overflow-hidden bg-background">
            <aside className="hidden md:flex flex-col">
                <DashboardSidebar />
            </aside>
            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                <div className="flex-1 overflow-y-auto">
                    <div className="p-8 pb-20">
                        {children}
                    </div>
                </div>

                {/* Internal AI Helper Widget */}
                <div className="absolute bottom-6 right-6 z-50">
                    <AIAssistant />
                </div>
            </main>
        </div>
    )
}
