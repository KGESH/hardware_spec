import { IWindowsOs } from '@/types/dto/windows/osDto';
import { IWindowsCpu } from '@/types/dto/windows/cpuDto';
import { IWindowsDisk } from '@/types/dto/windows/diskDto';
import { IWindowsRam } from '@/types/dto/windows/ramDto';
import { IWindowsMotherboard } from '@/types/dto/windows/motherboardDto';
import { IWindowsGpu } from '@/types/dto/windows/gpuDto';

export type IWindowsSystem = {
  os: IWindowsOs[];
  cpu: IWindowsCpu[];
  motherboard: IWindowsMotherboard[];
  gpu: IWindowsGpu[];
  rams: IWindowsRam[];
  disks: IWindowsDisk[];
};
