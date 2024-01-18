import { ICpu } from '@/components/types/hardwares/cpu.types';
import { IMotherBoard } from '@/components/types/hardwares/motherboard.types';
import { IGpu } from '@/components/types/hardwares/gpu.types';
import { IRam } from '@/components/types/hardwares/ram.types';
import { IDisk } from '@/components/types/hardwares/disk.types';

export type IComputer = {
  cpu: ICpu;
  motherBoard: IMotherBoard;
  gpu: IGpu;
  rams: IRam[];
  disks: IDisk[];
};
