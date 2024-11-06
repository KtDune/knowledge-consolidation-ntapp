import { UserIcon } from 'hugeicons-react';
import { useTextApi } from './queryCopHk'

const QueryComponent: React.FC = () => {

  const [query, itemList] = useTextApi()

  return (
    <div className="p-6 text-black flex justify-start items-start">

      {/** User component. Use it to  create robot */}
      <div className="m-6 flex flex-col">

        <div className="flex items-center space-x-4">

          <UserIcon 
            size={24} 
            color={"#000000"}
          />
          <span className="font-bold">You</span>
          
        </div>

        <p className="mt-12">{query}</p>
      </div>
    </div>
  );
};

export default QueryComponent;
