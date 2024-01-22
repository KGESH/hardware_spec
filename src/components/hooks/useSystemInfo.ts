'use client';
import { getSystemInfo } from '@/services/system/systemInfoService';
import { useEffect, useState } from 'react';
import { IComputer } from '@/types/model/computer/computerType';
import { useQuery } from '@tanstack/react-query';

export const useSystemInfo = () => {
  // const [systemInfo, setSystemInfo] = useState<IComputer | null>(null);
  //
  // const fetchSystemInfo = async () => {
  //   console.log(`Call fetchSystemInfo`);
  //   const response = await getSystemInfo();
  //   setSystemInfo(response);
  // };

  // useEffect(() => {
  //   fetchSystemInfo();
  // }, []);

  // return { systemInfo, fetchSystemInfo };
  return useQuery({
    queryFn: () => getSystemInfo(),
    queryKey: ['systemInfo'],
  });
};
