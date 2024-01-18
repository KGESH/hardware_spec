import { IHardware } from '@/components/types/hardwares/common.types';

export type ICpu = IHardware & {
  coreCount?: number;
  threadCount?: number;
  baseClock?: number;
  boostClock?: number;
};
