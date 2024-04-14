import Accordion from "./components/accordion";
import ImageCarousel from "./components/image_carousel";
import LoadMore from "./components/load_more";
import RandomColorGenerator from "./components/random_color_generator";
import Star from "./components/star-rating";

function App() {
  return (
    <>
      {/* <h1 className="font-bold underline text-yellow-500">Jai Shri Hari</h1> */}
      {/* Accordion */}
      {/* <Accordion /> */}
      <RandomColorGenerator />
      <Star />
      <ImageCarousel
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <LoadMore />
    </>
  );
}

export default App;
