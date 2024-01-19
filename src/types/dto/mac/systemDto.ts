import { IMacOs } from '@/types/dto/mac/osDto';
import { IMacCpu } from '@/types/dto/mac/cpuDto';
import { IMacRam } from '@/types/dto/mac/ramDto';
import { IMacDisk } from '@/types/dto/mac/diskDto';

export type IMacSystem = {
  os: IMacOs;
  cpu: IMacCpu;
  rams: IMacRam[];
  disks: IMacDisk[];
};
