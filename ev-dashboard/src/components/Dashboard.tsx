import { fetchLengthOfRecord, fetchVehicleTypeCounts } from '@/utils/maker';
import { BsEvStation } from 'react-icons/bs';
import { LiaCarSideSolid } from 'react-icons/lia';
import SmallBarChart from './SmallBarChart';

const Dashboard = async () => {
  const length = await fetchLengthOfRecord();
  const vehicleType = await fetchVehicleTypeCounts();
  const bevCount = vehicleType['Battery Electric Vehicle (BEV)'];
  const phevCount = vehicleType['Plug-in Hybrid Electric Vehicle (PHEV)'];

  return (
    <div className="w-full">
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex h-[150px] w-full flex-col gap-2 rounded-md border p-4 shadow-md">
          <div className="w-full">
            <LiaCarSideSolid size={40} className="text-[#1b1b1b]" />
            <p className="w-full text-right text-3xl font-bold">
              {length !== null ? length : '50,426'}
            </p>
            <p className="mt-2 text-right text-xl font-semibold">
              Total Vehicles
            </p>
          </div>
        </div>

        <div className="flex h-[150px] w-full flex-col gap-2 rounded-md border p-4 shadow-md">
          <div className="w-full">
            <BsEvStation size={35} className="text-[#1b1b1b]" />
            <p className="w-full text-right text-3xl font-bold">38</p>
            <p className="mt-2 text-right text-xl font-semibold">
              Total Makers
            </p>
          </div>
        </div>

        <div className="flex h-[150px] w-full flex-col gap-2 rounded-md border shadow-md">
          <SmallBarChart data={{ bev: bevCount, phev: phevCount }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
