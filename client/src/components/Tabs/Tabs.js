import React, { onItemClick } from 'react';
import { TabButton } from './styles/TabButton';
import { TabContent } from './styles/TabContent';
import { TabMenu } from './styles/TabMenu';

const Tabs = ({ defaultIndex = 0, onTabClick, children }) => {
  const [bindIndex, setBindIndex] = React.useState(defaultIndex);

  const changeTab = (newIndex) => {
    if (typeof onItemClick === 'function') {
      onItemClick(newIndex);
    }
    setBindIndex(newIndex);
  };
  // const items = children.filter((item) => item.type.name === 'TabItem');
  const items = children;
  console.log({ items, children });
  return (
    <React.Fragment>
      <div>
        {items &&
          items.map(({ props }) => (
            <TabContent
              {...props}
              className={`tab-content ${bindIndex === props.index ? 'selected' : ''}`}
              key={`tab-content-${props.index}`}
            />
          ))}
      </div>
      <TabMenu>
        {items &&
          items.map(({ props: { index, label } }) => (
            <TabButton
              key={`tab-btn-${index}`}
              onClick={() => changeTab(index)}
              className={bindIndex === index ? 'focus' : ''}>
              {label}
            </TabButton>
          ))}
      </TabMenu>
    </React.Fragment>
  );
};

export default Tabs;
