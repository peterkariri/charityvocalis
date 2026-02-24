export async function sendVerificationEmail(email: string, token: string) {
    const confirmationLink = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/verify?token=${token}`;

    console.log("========================================");
    console.log(`📧 MOCK EMAIL TO: ${email}`);
    console.log(`🔗 VERIFICATION LINK: ${confirmationLink}`);
    console.log("========================================");

    // In a real app, use Resend, SendGrid, etc.
}
