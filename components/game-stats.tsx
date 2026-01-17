'use client';

import { GameState } from '@/lib/gameData';

interface GameStatsProps {
  state: GameState;
}

export function GameStats({ state }: GameStatsProps) {
  const getStatColor = (value: number) => {
    if (value < 0) return 'text-red-600 border-red-300 bg-red-50';
    if (value < 30) return 'text-orange-600 border-orange-300 bg-orange-50';
    if (value < 60) return 'text-yellow-600 border-yellow-300 bg-yellow-50';
    return 'text-green-600 border-green-300 bg-green-50';
  };

  const getProgressColor = (value: number) => {
    if (value < 0) return 'bg-red-600';
    if (value < 30) return 'bg-orange-600';
    if (value < 60) return 'bg-yellow-500';
    return 'bg-green-600';
  };

  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className={`rounded-lg border-2 p-4 ${getStatColor(state.economic)}`}>
        <div className="text-sm font-semibold mb-2">💰 KINH TẾ</div>
        <div className="text-2xl font-bold mb-3">{state.economic}</div>
        <div className="w-full bg-gray-300 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${getProgressColor(state.economic)} transition-all`}
            style={{ width: `${Math.max(0, Math.min(100, state.economic))}%` }}
          ></div>
        </div>
      </div>

      <div className={`rounded-lg border-2 p-4 ${getStatColor(state.people)}`}>
        <div className="text-sm font-semibold mb-2">❤️ LÒNG DÂN</div>
        <div className="text-2xl font-bold mb-3">{state.people}</div>
        <div className="w-full bg-gray-300 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${getProgressColor(state.people)} transition-all`}
            style={{ width: `${Math.max(0, Math.min(100, state.people))}%` }}
          ></div>
        </div>
      </div>

      <div className={`rounded-lg border-2 p-4 ${getStatColor(state.security)}`}>
        <div className="text-sm font-semibold mb-2">🛡️ AN NINH/VỊ THẾ</div>
        <div className="text-2xl font-bold mb-3">{state.security}</div>
        <div className="w-full bg-gray-300 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${getProgressColor(state.security)} transition-all`}
            style={{ width: `${Math.max(0, Math.min(100, state.security))}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
