'use client';
import { getSystemInfo } from '@/services/system/systemInfoService';
import { useState } from 'react';
import { IComputer } from '@/types/model/computer/computerType';

export const useSystemInfo = () => {
  const [systemInfo, setSystemInfo] = useState<IComputer | null>(null);

  const fetchSystemInfo = async () => {
    const response = await getSystemInfo();
    setSystemInfo(response);
  };

  return { systemInfo, fetchSystemInfo };
};
