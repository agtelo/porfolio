import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Nabvar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="w-screen ">
      <Nabvar />
      <Layout>
        <Banner />
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Layout>
      <Footer />
    </main>
  );
}
