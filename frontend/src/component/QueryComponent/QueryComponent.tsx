import { HookProp, useTextApi } from './queryCopHk'

interface QueryComponentProps {
  query: string;
  list: HookProp[]
  setShowQueryComponent: () => void
}

const QueryComponent: React.FC = () => {



  return (
    <div className="p-6 bg-gray-100 min-h-screen text-black flec fle-col items-start">

    </div>
  );
};

export default QueryComponent;
