'use client';
import { getOsInfo } from '@/services/system/osService';
import { useState } from 'react';

export const useOsInfo = () => {
  const [osInfo, setOsInfo] = useState('');

  const fetchOsInfo = async () => {
    const response = await getOsInfo();
    setOsInfo(response);
  };

  //
  // useEffect(() => {
  //   fetchOsInfo();
  // }, []);

  return { osInfo, fetchOsInfo };
};
