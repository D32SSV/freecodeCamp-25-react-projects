import Tabs from "./Tabs";

export default function CustomTab() {
  const tabs = [
    {
      label: "Tab 1",
      content: <p>Jai Bajrang Bali !</p>,
    },
    {
      label: "Tab 2",
      content: <p>Banke Bihari Lal ki Jai !</p>,
    },
    {
      label: "Tab 3",
      content: <p>Rom Rom Bhaio !</p>,
    },
  ];

  //   function handleChange(currentTabIndex) {
  //     console.log(currentTabIndex);
  //   }

  return <Tabs tabsContent={tabs} />;
}
