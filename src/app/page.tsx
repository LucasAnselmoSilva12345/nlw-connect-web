import { Button } from '@/components/button';
import { IconButton } from '@/components/icon-button';
import { ArrowRight, Copy } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <Button>
        Enviar
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>
    </main>
  );
}
