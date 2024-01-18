import { IHardware } from '@/components/types/hardwares/common.types';

export type IGpu = IHardware & {
  subVendorName?: string;
};
