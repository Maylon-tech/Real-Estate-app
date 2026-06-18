import Layout from "@/components/layouts/Layout";


export default function Home() {
  return (
    <Layout>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[url('/images/hero.jpg')] bg-cover bg-center pt-32 lg-pt-36 py-2">
        <div className="absolute inset-0 bg-black/55"></div>
      </section>
    </Layout>
  );
}
