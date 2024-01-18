import { IComputer } from '@/components/types/hardwares/computer.types';
import Link from 'next/link';
import { SELL_HOME_PAGE_URL } from '@/constants/url';
import { Button } from '@/components/ui/button';

type Props = IComputer;
export default function RedirectButton({
  cpu,
  motherBoard,
  gpu,
  rams,
  disks,
}: Props) {
  const url = new URL(SELL_HOME_PAGE_URL);
  const searchParams = url.searchParams;
  searchParams.append('cpu', cpu.displayName);
  searchParams.append('motherBoard', motherBoard.displayName);
  searchParams.append('gpu', gpu.displayName);
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
