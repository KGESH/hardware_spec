import { IMacSystem } from '@/types/dto/mac/systemDto';
import { IWindowsSystem } from '@/types/dto/windows/systemDto';

type IOperatingSystemType = 'Windows' | 'Darwin';

export type IWindowsSystemInfo = {
  os_type: 'Windows';
} & IWindowsSystem;

export type IMacSystemInfo = {
  os_type: 'Darwin';
} & IMacSystem;

export type ISystemInfo = IWindowsSystemInfo | IMacSystemInfo;
