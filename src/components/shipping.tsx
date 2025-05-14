'use client';

import { useState } from 'react';
import Link from 'next/link';
import { z } from 'zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardTitle } from './ui/card';

import { formatCep } from '@/helpers/formatCep';

interface Address {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export function Shipping() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState<Address | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cepSchema = z.string().length(8, 'CEP deve ter 8 dígitos').regex(/^\d{8}$/, 'CEP deve ser numérico');

  const fetchAddress = async () => {
    const cleanedCep = cep.replace(/\D/g, '');

    const validationResult = cepSchema.safeParse(cleanedCep);
    
    if (!validationResult.success) {
      setError(validationResult.error.format()._errors[0]);
      setAddress(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_CEP}${cleanedCep}/json/`);
      const data = await res.json();

      if (data.erro) {
        setError('CEP não encontrado');
        setAddress(null);
      } else {
        setAddress(data);
      }
    } catch {
      setError('Erro ao buscar o CEP');
      setAddress(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Accordion
      type="single"
      className="w-full border-1 px-4 rounded-lg"
      collapsible
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <span className="font-medium text-gray-700">Disponibilidade de Entrega (CEP)</span>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-4">
            <Input
              id="cep"
              placeholder="00000-000"
              value={formatCep(cep)}
              onChange={(e) => setCep(e.target.value)}
              maxLength={9}
            />
            <Link href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank">
              <p className="text-sm text-gray-700">
                Não sabe seu CEP? Clique aqui para descobrir
              </p>
            </Link>

            <Button onClick={fetchAddress} disabled={loading}>
              {loading ? 'Buscando...' : 'Buscar CEP'}
            </Button>

            {error && <p className="text-sm text-red-500">{error}</p>}

            {address && (
              <div className="text-sm text-gray-700 space-y-4">
                <div className="space-y-2">
                  <p className="text-gray-500"><strong>Endereço:</strong> {address.logradouro}</p>
                  <p className="text-gray-500"><strong>Bairro:</strong> {address.bairro}</p>
                  <p className="text-gray-500"><strong>Cidade:</strong> {address.localidade} - {address.uf}</p>
                </div>

                <div className="space-y-4">
                  <Card>
                    <CardContent className="flex justify-between flex-col">
                      <CardTitle>Normal</CardTitle>
                      <div className="flex flex-row justify-between items-center">
                        <CardDescription>Entrega em até 10 dias úteis.</CardDescription>
                        <CardDescription>R$ 20,00</CardDescription>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    
                    <CardContent className="flex justify-between flex-col">
                      <CardTitle>Express</CardTitle>
                      <div className="flex flex-row justify-between items-center">
                        <CardDescription>Entrega em até 5 dias úteis.</CardDescription>
                        <CardDescription>R$ 40,00</CardDescription>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex justify-between flex-col">
                      <CardTitle>Super Express</CardTitle>
                      <div className="flex flex-row justify-between items-center">
                        <CardDescription>Entrega no mesmo dia.</CardDescription>
                        <CardDescription>R$ 70,00</CardDescription>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
