import Blog from "../components/blog";
import Gallery from "../components/gallery";
import Hero from "../components/hero";
import Speech from "../components/speech";
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
    </Layout>
  );
}
