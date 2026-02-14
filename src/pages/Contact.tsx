import Layout from "@/components/Layout";
import { MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactItems = [
  { icon: MapPin, label: "Location", value: "New Delhi, India" },
  { icon: Phone, label: "Phone", value: "9999999" },
  { icon: Mail, label: "Email", value: "manishagg.@gmail.com" },
];

const Contact = () => (
  <Layout>
    <section className="py-20">
      <div className="container max-w-2xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="grid gap-6 sm:grid-cols-3">
          {contactItems.map((item) => (
            <Card key={item.label} className="text-center border-none shadow-md">
              <CardContent className="pt-8 pb-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                <p className="font-display text-sm font-semibold">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
