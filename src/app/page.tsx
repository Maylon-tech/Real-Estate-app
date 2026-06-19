import Layout from "@/components/layouts/Layout";
import Navbar from "@/components/navbar/Navbar";


export default function Home() {
  return (
    <Layout>
      <Navbar variant="solid" />
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[url('/images/hero.jpg')] bg-cover bg-center pt-32 lg-pt-36 py-2">
        {/* OVerlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/50 to-transparent"></div>
      </section>
    </Layout>
  );
}
