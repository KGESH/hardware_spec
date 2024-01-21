import { IMacOs } from '@/types/dto/mac/osDto';
import { IMacCpu } from '@/types/dto/mac/cpuDto';
import { IMacRam } from '@/types/dto/mac/ramDto';
import { IMacDisk } from '@/types/dto/mac/diskDto';
import { IMacGpu } from '@/types/dto/mac/gpuDto';

export type IMacSystem = {
  os: IMacOs;
  cpu: IMacCpu;
  gpu: IMacGpu;
  rams: IMacRam[];
  disks: IMacDisk[];
};
