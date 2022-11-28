import { useState } from "react";

const useTabs = (initialTab, allTabs) => {
  const [curIndex, setCurIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) return;

  return {
    curItem: allTabs[curIndex],
    changeItem: setCurIndex
  };
};
export default useTabs;