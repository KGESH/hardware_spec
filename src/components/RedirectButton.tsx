'use client';
import { IComputer } from '@/types/model/computer/computerType';
import Link from 'next/link';
import { ESTIMATE_HOME_PAGE_URL } from '@/constants/url';
import { Button } from '@/components/ui/button';

type Props = IComputer;
export default function RedirectButton({
  os,
  cpu,
  motherboard,
  gpu,
  rams,
  disks,
}: Props) {
  const url = new URL('/estimate', ESTIMATE_HOME_PAGE_URL);
  const searchParams = url.searchParams;
  searchParams.append('cpu', cpu.displayName);
  motherboard && searchParams.append('motherBoard', motherboard.displayName);
  gpu && searchParams.append('gpu', gpu.displayName);
  rams.forEach((ram) => searchParams.append('rams', ram.displayName));
  disks.forEach((disk) => searchParams.append('disks', disk.displayName));

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <Button size="lg" type="button" variant="outline">
        Sell
      </Button>
    </Link>
  );
}
