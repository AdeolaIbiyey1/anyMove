import type { Metadata } from "next"
import AdminLogin from "@/components/AdminLogin"

export const metadata: Metadata = {
  title: "Admin Login - AnyMove Ireland",
  description: "Secure admin login for AnyMove Ireland management panel.",
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <AdminLogin />
    </div>
  )
}
