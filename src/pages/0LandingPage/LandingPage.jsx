import { FireFilled, AimOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import React, { useState } from "react";
import HowMuchDamagePage from "../1HowMuchDamagePage/HowMuchDamagePage";
import AttacksRequiredPage from "../2AttacksRequiredPage/AttacksRequiredPage";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("1");

  const handleTabClick = (key) => {
    setActiveTab(key);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "1":
        return <HowMuchDamagePage />;
      case "2":
        return <AttacksRequiredPage />;
      default:
        return null;
    }
  };

  return (
    <>
      <Tabs
        activeKey={activeTab}
        onTabClick={(key) => handleTabClick(key)}
        style={{ width: '180%', }}
        // tabBarGutter={30} 
        centered={true}

        items={[
          {
            key: "1",
            label: "Damage", // Custom label for Tab 1
            icon: <FireFilled />,
          },
          {
            key: "2",
            label: "# Attacks", // Custom label for Tab 2
            icon: <AimOutlined />,
          },
        ]}

        // items={[FireFilled, AimOutlined].map((Icon, i) => {
        //   const id = String(i + 1);
        //   return {
        //     key: id,
        //     label: `Tab ${id}`,
        //     // children: `Tab ${id}`,
        //     icon: <Icon />,
        //     // style: { width: '150px' }, // Adjust the width as needed

        //   };
        // })}
      />
      {renderTabContent()}
    </>
  );
}
