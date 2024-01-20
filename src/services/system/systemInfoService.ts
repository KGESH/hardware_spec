'use client';
import { invokeSystemCommand } from '@/services/tauri/invoke/invoke';
import { ISystemInfo } from '@/types/dto/commonDto';
import {
  IComputer,
  IWindowsComputer,
} from '@/types/model/computer/computerType';

function formatBytes(bytes: number): string {
  const kilobyte = 1024;
  const megabyte = kilobyte * 1024;
  const gigabyte = megabyte * 1024;
  const terabyte = gigabyte * 1024;

  if (bytes >= terabyte) {
    return `${(bytes / terabyte).toFixed(2)}TB`;
  } else if (bytes >= gigabyte) {
    return `${(bytes / gigabyte).toFixed(2)}GB`;
  } else if (bytes >= megabyte) {
    return `${(bytes / megabyte).toFixed(2)}MB`;
  } else if (bytes >= kilobyte) {
    return `${(bytes / kilobyte).toFixed(2)}KB`;
  } else {
    return `${bytes}B`;
  }
}

function transform(dto: ISystemInfo): IComputer {
  switch (dto.os_type) {
    case 'Darwin':
      return {
        os: { name: dto.system.os.name },
        cpu: {
          type: 'CPU',
          displayName: dto.system.cpu.brand,
          vendorName: dto.system.cpu.vendor_id,
          coreCount: dto.system.cpu.core_count,
        },
        rams: dto.system.rams.map((ram) => ({
          type: 'RAM',
          displayName: formatBytes(ram.total_memory),
          vendorName: dto.system.cpu.vendor_id,
        })),
        disks: dto.system.disks.map((disk) => ({
          type: 'DISK',
          kind: disk.kind,
          totalSpace: disk.total_space,
          displayName: `${disk.name} / ${disk.kind} / ${formatBytes(disk.total_space)}`,
          vendorName: dto.system.cpu.vendor_id,
        })),
      } as IComputer;

    // case 'Windows':
    //   return {
    //     os: { name: dto.system.os.name },
    //     cpu: {
    //       type: 'CPU',
    //       displayName: dto.system.cpu.brand,
    //       vendorName: dto.system.cpu.vendor_id,
    //       coreCount: dto.system.cpu.core_count,
    //     },
    //     motherboard: {
    //       type: 'M/B',
    //       displayName: dto.system.cpu.brand,
    //       vendorName: dto.system.cpu.vendor_id,
    //       chipset: dto.system.motherboard.chipset,
    //     },
    //     gpu: {
    //       type: 'GPU',
    //       displayName: dto.system.gpu.brand,
    //       vendorName: dto.system.gpu.vendor_id,
    //       subVendorName: dto.system.gpu.sub_vendor_name,
    //     },
    //     rams: dto.system.rams.map((ram) => ({
    //       type: 'RAM',
    //       displayName: formatBytes(ram.total_memory),
    //       vendorName: dto.system.cpu.vendor_id,
    //     })),
    //     disks: dto.system.disks.map((disk) => ({
    //       type: 'DISK',
    //       kind: disk.kind,
    //       totalSpace: disk.total_space,
    //       displayName: `${disk.name} / ${disk.kind} / ${formatBytes(disk.total_space)}`,
    //       vendorName: dto.system.cpu.vendor_id,
    //     })),
    //   } as IWindowsComputer;

    default:
      throw new Error(`[osService] transform: unknown osType: ${dto}`);
  }
}

export async function getSystemInfo(): Promise<IComputer> {
  const response = await invokeSystemCommand<ISystemInfo>('get_system_info');

  console.log(`====================`);
  console.log(response);

  const system = transform(response);

  return system;
}
