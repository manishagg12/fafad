import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    <section className="py-20">
      <div className="container max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">
          About <span className="text-primary">Manish Pure Desi Ghee</span>
        </h1>
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Manish Pure Desi Ghee is committed to delivering premium quality clarified butter made using authentic traditional methods.
          </p>
          <p>
            We focus on maintaining hygiene, purity, and customer satisfaction. Our aim is to serve wholesalers and food businesses with reliable supply and competitive pricing.
          </p>
          <p>
            With years of experience in the industry, we have built a reputation for consistency, quality, and transparency. Every batch of our ghee undergoes strict quality checks to ensure that our customers receive nothing but the best.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
