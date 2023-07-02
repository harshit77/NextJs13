import CurrentStocks from "./CurrentStocks";
import FeaturedCompanies from "./FeaturedCompanies";
import DiscussionFourm from "./DiscussionForum";
import MarketStories from "./MarketStories";
import Sidebar from "@/app/_components/Sidebar/Sidebar";
import Tab from "@/app/_components/Tab";
import TabItem from "@/app/_components/Tab/item";
import BottomAppBar from "./BottomAppBar";

export default function Home() {

  return (
    <div className="mainWrapper">
      <CurrentStocks />
      <FeaturedCompanies />
      <div className="flex ">
        <Sidebar />
        <div className="hidden md:flex flex-wrap flex-1 w-full p-4 space-y-4 md:space-y-0 ">
          <DiscussionFourm />
          <MarketStories />
        </div>
        <div className="fixed bottom-0 left-0 w-full bg-blue-950 text-white md:hidden">
          <Tab>
            <TabItem>
              <i class="ri-dashboard-line ri-xl" />
            </TabItem>
            <TabItem>
              <i class="ri-apps-2-line ri-xl" />
            </TabItem>
            <TabItem active>
              <i class="ri-home-2-line ri-xl" />
            </TabItem>
            <TabItem>
              <i class="ri-question-answer-line ri-xl" />
            </TabItem>
            <TabItem>
              <i class="ri-list-radio ri-xl" />
            </TabItem>
          </Tab>
        </div>
        <div className="w-full md:hidden">
          <BottomAppBar />
        </div>
      </div>
    </div>
  );
}
