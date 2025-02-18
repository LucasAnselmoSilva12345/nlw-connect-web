import { Button } from '@/components/button';
import { IconButton } from '@/components/icon-button';
import { Input } from '@/components/input';
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

      <div>
        <Input type="text" placeholder="Digite seu e-mail" />
        <Input type="text" placeholder="Digite seu e-mail" error />
      </div>
    </main>
  );
}
