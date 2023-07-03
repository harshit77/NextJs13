"use client"

import { useState, Suspense } from "react";
import Typography from "@/_components/Typography";
import Tab from "@/_components/Tab";
import TabItem from "@/app/_components/Tab/item";
import MarketStories from "./MarketStories";
import DiscussionForum from "./DiscussionForum"

export default function BottomAppBar() {
  const [activeTab, setActiveTab] = useState(true);

  return (
    <div className="flex flex-col">
      <Tab className="flex bg-blue-950 text-white md:hidden">
        <TabItem
          active={activeTab}
          onClick={() => setActiveTab((prev) => !prev)}
        >
          <Typography component="body2" family="bold">
            Discussion Forum
          </Typography>
        </TabItem>
        <TabItem
          active={!activeTab}
          onClick={() => setActiveTab((prev) => !prev)}
        >
          <Typography component="body2" family="bold">
            Market Stories
          </Typography>
        </TabItem>
      </Tab>
      <Suspense fallback={<Typography component="body3" >Loading...</Typography>}>
        {activeTab ? <DiscussionForum /> : <MarketStories />}
      </Suspense>
    </div>
  );
}
