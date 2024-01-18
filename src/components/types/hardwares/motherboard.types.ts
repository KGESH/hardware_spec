import { IHardware } from '@/components/types/hardwares/common.types';

export type IMotherBoard = IHardware & {
  chipset?: string;
};
