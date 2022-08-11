import "./tabs.scss";
import classNames from "classnames";

const Tabs = ({ id, title, activeTab, setActiveTab, type }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  let tabClasses = classNames([
    `tab-${type}`,
    "tab-item",
    {
      active: activeTab === id ? true : false,
    },
  ]);

  return (
    <div id={id} className={tabClasses} onClick={handleClick}>
      <span className="tab-text">{title}</span>
    </div>
  );
};

export default Tabs;
