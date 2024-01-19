'use client';
import { useState } from 'react';
import { getWindowsSystemInfo } from '@/services/system/windowsInfoService';

export const useWindowsSystemInfo = () => {
  const [windowsSystemInfo, setWindowsSystemInfo] = useState<string>('');

  const fetchWindowsSystemInfo = async () => {
    const response = await getWindowsSystemInfo();
    setWindowsSystemInfo(response);
  };

  return { windowsSystemInfo, fetchWindowsSystemInfo };
};
