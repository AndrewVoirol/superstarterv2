'use client';

import { useCounterStore } from '@/lib/store'; // Assuming @ refers to the root directory (tsconfig paths)

export function CounterDisplay() {
  const { count, increment } = useCounterStore();

  return (
    <div className="text-center p-4 border border-dashed border-gray-300 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Zustand Counter Example</h2>
      <p className="text-3xl mb-4">{count}</p>
      <button
        onClick={increment}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Increment
      </button>
    </div>
  );
}
