import { FireFilled, AimOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import React, { useState } from "react";
import HowMuchDamagePage from "../1HowMuchDamagePage/HowMuchDamagePage";
import HitsRequiredPage from "../2HitsRequiredPage/HitsRequiredPage";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("2");

  const handleTabClick = (key) => {
    setActiveTab(key);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "1":
        return <HowMuchDamagePage />;
      case "2":
        return <HitsRequiredPage />;
      default:
        return null;
    }
  };

  return (
    <>
      <Tabs
        activeKey={activeTab}
        onTabClick={(key) => handleTabClick(key)}
        items={[FireFilled, AimOutlined].map((Icon, i) => {
          const id = String(i + 1);
          return {
            key: id,
            label: `Tab ${id}`,
            children: `Tab ${id}`,
            icon: <Icon />,
          };
        })}
      />
      {renderTabContent()}
    </>
  );
}
