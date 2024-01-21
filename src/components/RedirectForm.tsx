'use client';

import { IComputer } from '@/types/model/computer/computerType';
import { ESTIMATE_HOME_PAGE_URL } from '@/constants/url';
import { Button } from '@/components/ui/button';
import { useEstimate } from '@/components/hooks/useEstimate';

type Props = IComputer;
export default function RedirectForm(props: Props) {
  const { mutate, isSuccess, isPending } = useEstimate();

  const handleSubmit = () => {
    const url = new URL('/estimate', ESTIMATE_HOME_PAGE_URL);
    mutate({ endpoint: url.href, computer: props });
  };

  if (isSuccess) {
    // Todo: Open new window.
    // Change UI
  }

  return (
    <Button
      disabled={isPending}
      size="lg"
      type="button"
      variant="outline"
      onClick={handleSubmit}
    >
      Redirect
    </Button>
  );
}
