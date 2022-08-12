import Blog from "../components/blog";
import Gallery from "../components/gallery";
import Hero from "../components/hero";
import MidSection from "../components/midSection";
import Speech from "../components/speech";
import Subscribe from "../components/subscribe";
import Testimonial from "../components/testimonial";
import Upcoming from "../components/upcoming";
import Layout from "../Layout/layout";

export default function Home() {
  return (
    <Layout>
      <div className='max-w-[1440px] mx-auto'>
        <Hero />
        <Speech />
        <Upcoming />
        <Gallery />
        <Blog />
        <MidSection />
        <Testimonial />
      </div>
    </Layout>
  );
}
