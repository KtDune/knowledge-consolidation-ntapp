import { UserIcon, RoboticIcon } from 'hugeicons-react';
import { useTextApi } from './queryCopHk'
import { useNavigate } from 'react-router-dom';

const QueryComponent: React.FC = () => {

  const [query, result] = useTextApi()
  const navigate = useNavigate()

  return (
    <div className="p-6 text-black">

      <div className="m-6">

        <div className="flex items-center space-x-4">

          <UserIcon 
            size={24} 
            color={"#000000"}
          />
          <span className="font-bold">You</span>
          
        </div>

        <p className="mt-12">{query}</p>
      </div>

      <div className="flex flex-col mt-8">

        <div className="flex items-center space-x-4">

          <RoboticIcon
            size={24} 
            color={"#000000"}
          />
          <span className="font-bold">AI</span>
          
        </div>
        <p className="mt-12">{result}</p>
      </div>

      <button type='button' onClick={() => navigate('/')}>
        Back
      </button>

    </div>
  );
};

export default QueryComponent;


