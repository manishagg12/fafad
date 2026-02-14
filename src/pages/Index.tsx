import { Link } from "react-router-dom";
import { Shield, Flame, Sparkles, Truck, Package, Clock, Warehouse, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { z } from "zod";
import Layout from "@/components/Layout";

const inquirySchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  businessName: z.string().trim().min(1, "Business name is required").max(100),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  email: z.string().trim().email("Invalid email address").max(255),
  cityState: z.string().trim().min(1, "City & State is required").max(100),
  quantity: z.string().min(1, "Please select a quantity"),
  message: z.string().trim().max(1000).optional(),
});

const features = [
  { icon: Shield, title: "100% Pure & Adulteration Free", desc: "We guarantee absolute purity in every drop of our ghee." },
  { icon: Flame, title: "Traditional Slow Heating Process", desc: "Prepared using age-old bilona method for authentic taste." },
  { icon: Sparkles, title: "Rich Aroma & Authentic Taste", desc: "Golden ghee with an irresistible aroma and flavour." },
  { icon: Truck, title: "Bulk & Wholesale Supply Available", desc: "Reliable supply for businesses of all sizes across India." },
];

const specs = [
  { icon: Package, label: "Available Packaging", value: "1kg, 5kg, 15kg & 15L Tins" },
  { icon: Clock, label: "Shelf Life", value: "12 Months" },
  { icon: Warehouse, label: "Storage", value: "Cool & Dry Place" },
  { icon: MapPin, label: "Supply", value: "Pan India" },
  { icon: Truck, label: "Minimum Order Quantity", value: "50kg" },
];

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    phone: "",
    email: "",
    cityState: "",
    quantity: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = inquirySchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast({
      title: "Inquiry Submitted!",
      description: "Thank you for your interest. Our team will contact you shortly.",
    });
    setFormData({ fullName: "", businessName: "", phone: "", email: "", cityState: "", quantity: "", message: "" });
  };

  const update = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/15 via-background to-accent/10 py-24 md:py-32">
        <div className="container text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            100% Pure & Authentic<br />
            <span className="text-primary">Desi Ghee</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
            Crafted with traditional methods and modern hygiene standards. Supplying premium quality ghee across India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="font-body">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-body border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="#inquiry">Wholesale Inquiry</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-primary">Manish Pure Desi Ghee?</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <Card key={f.title} className="text-center border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <f.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-base font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Our Ghee */}
      <section className="bg-card py-20">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">About Our Ghee</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At Manish Pure Desi Ghee, we believe in purity, tradition, and trust. Our ghee is prepared using high-quality milk and processed under hygienic conditions to ensure rich flavor and superior quality.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We specialize in bulk supply for wholesalers, distributors, sweet shops, restaurants, and food businesses across India.
          </p>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Our <span className="text-primary">Vision</span></h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Our vision is to become a trusted and reliable name in the desi ghee industry by maintaining consistent quality, transparent business practices, and long-term relationships with our partners.
          </p>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="bg-card py-20">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">Product Specifications</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 max-w-4xl mx-auto">
            {specs.map((s) => (
              <Card key={s.label} className="text-center border-none shadow-sm">
                <CardContent className="pt-6 pb-5">
                  <s.icon className="mx-auto h-6 w-6 text-primary mb-3" />
                  <p className="text-xs text-muted-foreground mb-1">{s.label}</p>
                  <p className="font-display text-sm font-semibold">{s.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale Inquiry Form */}
      <section id="inquiry" className="py-20">
        <div className="container max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">Bulk & Wholesale Inquiry</h2>
          <p className="text-center text-muted-foreground mb-10">
            If you are a retailer, distributor, or food business looking for bulk supply of premium desi ghee, please fill out the form below. Our team will contact you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input id="fullName" value={formData.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder="Your full name" />
                {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name *</Label>
                <Input id="businessName" value={formData.businessName} onChange={(e) => update("businessName", e.target.value)} placeholder="Your business name" />
                {errors.businessName && <p className="text-sm text-destructive">{errors.businessName}</p>}
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" value={formData.phone} onChange={(e) => update("phone", e.target.value)} placeholder="Your phone number" />
                {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" value={formData.email} onChange={(e) => update("email", e.target.value)} placeholder="your@email.com" />
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="cityState">City & State *</Label>
                <Input id="cityState" value={formData.cityState} onChange={(e) => update("cityState", e.target.value)} placeholder="e.g. New Delhi, Delhi" />
                {errors.cityState && <p className="text-sm text-destructive">{errors.cityState}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity Required *</Label>
                <Select value={formData.quantity} onValueChange={(val) => update("quantity", val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select quantity" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    <SelectItem value="50-100">50–100 kg</SelectItem>
                    <SelectItem value="100-500">100–500 kg</SelectItem>
                    <SelectItem value="500+">500kg+</SelectItem>
                  </SelectContent>
                </Select>
                {errors.quantity && <p className="text-sm text-destructive">{errors.quantity}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" value={formData.message} onChange={(e) => update("message", e.target.value)} placeholder="Any additional details..." rows={4} />
            </div>
            <Button type="submit" size="lg" className="w-full font-body">
              Submit Inquiry
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
