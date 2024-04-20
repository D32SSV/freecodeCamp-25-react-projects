import Accordion from "./components/accordion";
import ImageCarousel from "./components/image_carousel";
import LoadMore from "./components/load_more";
import RandomColorGenerator from "./components/random_color_generator";
import Star from "./components/star-rating";
import Tree from "./components/tree";
import menus from "../src/components/tree/data";
import QR from "./components/qr";
import SwitchTheme from "./components/switchTheme";
import Scroll from "./components/scroll_Indicator";
import CustomTab from "./components/custom_tabs";
import CustomModal from "./components/Modal";
import Github_Profile from "./components/github_profile";

function App() {
  return (
    <>
      {/* <h1 className="font-bold underline text-yellow-500">Jai Shri Hari</h1> */}
      {/* Accordion */}
      {/* <Accordion /> */}
      {/* <RandomColorGenerator />
      <Star />
      <ImageCarousel
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <LoadMore /> */}
      {/* <Tree menus={menus} /> */}
      {/* <QR /> */}
      <SwitchTheme />
      {/* <Scroll url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <CustomTab /> */}
      <CustomModal />
      <Github_Profile />
    </>
  );
}

export default App;
