import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { PermittingProcedures } from "@/app/components/PermittingProcedures";
import { OurServices } from "@/app/components/Services";
import { ContactReachOut } from "@/app/components/ContactReachOut";
import { OurMission } from "@/app/components/OurMission";
import { DiscoverNew } from "@/app/components/DiscoverNew";
import { ContactDetails } from "@/app/components/ContactDetails";
import { Footer } from "@/app/components/Footer";
import { ServicesPage } from "@/app/pages/ServicesPage";
import { PermitApplicationPage } from "@/app/pages/PermitApplicationPage";
import { DashboardLayout } from "@/app/dashboard/DashboardLayout";
import { DashboardOverview } from "@/app/dashboard/DashboardOverview";
import { VehicleMaintenance } from "@/app/dashboard/VehicleMaintenance";
import { OrderOversize } from "@/app/dashboard/OrderOversize";
import { Regulations } from "@/app/dashboard/Regulations";

const HomePage = () => (
  <>
    <Hero />
    <PermittingProcedures />
    <OurServices />
    <ContactReachOut />
    <OurMission />
    <DiscoverNew />
    <ContactDetails />
  </>
);

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-site-bg font-hind text-brand-black">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/services" element={<MainLayout><ServicesPage /></MainLayout>} />
        <Route path="/permit-application" element={<MainLayout><PermitApplicationPage /></MainLayout>} />

        {/* Dashboard Routes (Nested) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardOverview />} />
          <Route path="maintenance" element={<VehicleMaintenance />} />
          <Route path="order" element={<OrderOversize />} />
          <Route path="regulations" element={<Regulations />} />
          <Route path="provisions" element={<div>Provisions Page</div>} />
          <Route path="account" element={<div>Account Page</div>} />
          <Route path="settings" element={<div>Settings Page</div>} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
