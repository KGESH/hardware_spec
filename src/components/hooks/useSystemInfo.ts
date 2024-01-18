'use client';
import { getSystemInfo } from '@/services/system/systemInfoService';
import { useState } from 'react';

export const useSystemInfo = () => {
  const [systemInfo, setSystemInfo] = useState('');

  const fetchSystemInfo = async () => {
    const response = await getSystemInfo();
    setSystemInfo(response);
  };

  //
  // useEffect(() => {
  //   fetchOsInfo();
  // }, []);

  return { systemInfo, fetchSystemInfo };
};
