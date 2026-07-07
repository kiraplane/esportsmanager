'use client';

import { Button } from '@/components/ui/button';
import { Calculator, Plus, Trash2 } from 'lucide-react';
import { useMemo, useState } from 'react';

interface CropRow {
  id: string;
  name: string;
  seedCost: number;
  sellPrice: number;
  growthDays: number;
  harvests: number;
  extraCost: number;
}

const starterRows: CropRow[] = [
  {
    id: 'blood-grapes',
    name: 'Blood Grapes',
    seedCost: 0,
    sellPrice: 0,
    growthDays: 1,
    harvests: 1,
    extraCost: 0,
  },
];

export function FarmingProfitCalculatorTool() {
  const [rows, setRows] = useState<CropRow[]>(starterRows);

  const computed = useMemo(
    () =>
      rows.map((row) => {
        const totalRevenue = row.sellPrice * row.harvests;
        const totalCost = row.seedCost + row.extraCost;
        const profit = totalRevenue - totalCost;
        const profitPerDay = profit / Math.max(row.growthDays, 1);
        return { ...row, totalRevenue, totalCost, profit, profitPerDay };
      }),
    [rows]
  );

  function update(id: string, patch: Partial<CropRow>) {
    setRows((current) =>
      current.map((row) => (row.id === id ? { ...row, ...patch } : row))
    );
  }

  function addRow() {
    setRows((current) => [
      ...current,
      {
        id: `crop-${Date.now()}`,
        name: 'New crop',
        seedCost: 0,
        sellPrice: 0,
        growthDays: 1,
        harvests: 1,
        extraCost: 0,
      },
    ]);
  }

  return (
    <section className="space-y-5">
      <div className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-3">
            <Calculator className="mt-1 size-5 shrink-0 text-[#5EE6D6]" />
            <div>
              <h2 className="font-display text-2xl font-bold">
                Manual crop comparison
              </h2>
              <p className="mt-1 text-sm leading-6 text-[#DED2F6]">
                Enter values from your own save. This avoids publishing guessed
                crop prices before finished crop tables exist.
              </p>
            </div>
          </div>
          <Button
            type="button"
            onClick={addRow}
            className="bg-[#C77DFF] text-[#14091E] hover:bg-[#FFB86B]"
          >
            <Plus className="size-4" />
            Add crop
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-[#4B315F] bg-[#1D102A]">
        <table className="min-w-[840px] w-full text-left text-sm">
          <thead className="border-[#4B315F] border-b bg-[#120719] text-xs uppercase tracking-[0.14em] text-[#C77DFF]">
            <tr>
              <th className="px-3 py-3">Crop</th>
              <th className="px-3 py-3">Seed</th>
              <th className="px-3 py-3">Sell</th>
              <th className="px-3 py-3">Days</th>
              <th className="px-3 py-3">Harvests</th>
              <th className="px-3 py-3">Extra</th>
              <th className="px-3 py-3">Profit</th>
              <th className="px-3 py-3">Profit/day</th>
              <th className="px-3 py-3"> </th>
            </tr>
          </thead>
          <tbody>
            {computed.map((row) => (
              <tr key={row.id} className="border-[#4B315F] border-b">
                <td className="px-3 py-3">
                  <input
                    value={row.name}
                    onChange={(event) =>
                      update(row.id, { name: event.target.value })
                    }
                    className="h-10 w-40 rounded-md border border-[#4B315F] bg-[#120719] px-2 text-[#F4EAFE] outline-none focus:border-[#C77DFF]"
                  />
                </td>
                {(
                  [
                    'seedCost',
                    'sellPrice',
                    'growthDays',
                    'harvests',
                    'extraCost',
                  ] as const
                ).map((field) => (
                  <td key={field} className="px-3 py-3">
                    <input
                      type="number"
                      min={
                        field === 'growthDays' || field === 'harvests' ? 1 : 0
                      }
                      value={row[field]}
                      onChange={(event) =>
                        update(row.id, {
                          [field]: Number(event.target.value),
                        })
                      }
                      className="h-10 w-24 rounded-md border border-[#4B315F] bg-[#120719] px-2 text-[#F4EAFE] outline-none focus:border-[#C77DFF]"
                    />
                  </td>
                ))}
                <td className="px-3 py-3 font-semibold text-[#F4EAFE]">
                  {formatNumber(row.profit)}
                </td>
                <td className="px-3 py-3 font-semibold text-[#5EE6D6]">
                  {formatNumber(row.profitPerDay)}
                </td>
                <td className="px-3 py-3">
                  <Button
                    type="button"
                    size="icon"
                    variant="outline"
                    onClick={() =>
                      setRows((current) =>
                        current.filter((item) => item.id !== row.id)
                      )
                    }
                    className="border-[#4B315F] bg-[#120719] text-[#DED2F6] hover:bg-[#2B1838]"
                    aria-label={`Remove ${row.name}`}
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function formatNumber(value: number) {
  return Number.isFinite(value)
    ? value.toLocaleString('en-US', { maximumFractionDigits: 2 })
    : '0';
}
