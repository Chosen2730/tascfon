import Blog from "../components/blog";
import Gallery from "../components/gallery";
import Hero from "../components/hero";
import MidSection from "../components/midSection";
import Speech from "../components/speech";
import Testimonial from "../components/testimonial";
import Upcoming from "../components/upcoming";
import Layout from "../Layout/layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Speech />
      <Upcoming />
      <Gallery />
      <Blog />
      <MidSection />
      <Testimonial />
    </Layout>
  );
}
