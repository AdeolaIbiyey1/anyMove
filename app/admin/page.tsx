import type { Metadata } from "next"
import AdminDashboard from "@/components/AdminDashboard"

export const metadata: Metadata = {
  title: "Admin Dashboard - AnyMove Ireland | Review Management",
  description: "Admin panel for managing customer reviews and business operations.",
}

export default function AdminPage() {
  // In production, you would check authentication here
  // For demo purposes, we'll allow access

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminDashboard />
    </div>
  )
}
