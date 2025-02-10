import { EmergencyContactList } from "@/components/emergency-contact-list";
import { HelmetContactList } from "@/components/helmet-contact-list";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage helmet contacts and emergency contacts",
};

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-0.5">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage helmet contacts and emergency contacts for riders.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8">
        <section>
          <h3 className="text-xl font-semibold mb-4">Helmet Contacts</h3>
          <HelmetContactList />
        </section>
        <Separator />
        <section>
          <h3 className="text-xl font-semibold mb-4">Emergency Contacts</h3>
          <EmergencyContactList />
        </section>
      </div>
    </div>
  );
}
