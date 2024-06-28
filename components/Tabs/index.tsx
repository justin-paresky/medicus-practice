/* eslint-disable no-unused-vars */
export interface TabProps {
  title: string;
  id: string;
}

export interface TabsProps {
  onClick: (tab: TabProps) => void;
  selectedTab: TabProps;
  tabs: TabProps[];
}

export default function Tabs({ onClick, selectedTab, tabs }: TabsProps) {
  return (
    <div className="flex w-full flex-row justify-center bg-gray">
      <div className="flex flex-row justify-center gap-4 border-b-[1px] border-primary">
        {tabs.map((tab) => {
          const { id, title } = tab;
          return (
            <button
              className={`rounded-t-[8px] px-[22.5px] py-[8.5px] font-sans text-[0.625rem] text-sm font-semibold uppercase md:px-12 md:py-4 md:text-[1rem] ${selectedTab.id === id ? 'text-white bg-primary' : 'bg-white text-primary'}`}
              key={id}
              onClick={() => onClick(tab)}
              type="button"
              aria-label={title}
            >
              {title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
