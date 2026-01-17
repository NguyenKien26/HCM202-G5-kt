'use client';

import { EndingType, calculateEnding } from '@/lib/gameData';

interface EndingDisplayProps {
  ending: EndingType;
  stats: {
    economic: number;
    people: number;
    security: number;
  };
}

export function EndingDisplay({ ending, stats }: EndingDisplayProps) {
  const endingInfo = calculateEnding(stats.economic, stats.people, stats.security, []);

  const getEndingColor = (type: EndingType) => {
    switch (type) {
      case 'bad-ending':
        return 'border-red-500 bg-red-50';
      case 'chaos':
        return 'border-orange-500 bg-orange-50';
      case 'tiger':
        return 'border-blue-500 bg-blue-50';
      case 'fortress':
        return 'border-gray-700 bg-gray-50';
      case 'tieukhang':
        return 'border-green-500 bg-green-50';
      case 'trueending':
        return 'border-yellow-500 bg-yellow-50';
      default:
        return 'border-gray-500 bg-gray-50';
    }
  };

  const getTitleColor = (type: EndingType) => {
    switch (type) {
      case 'bad-ending':
        return 'text-red-700';
      case 'chaos':
        return 'text-orange-700';
      case 'tiger':
        return 'text-blue-700';
      case 'fortress':
        return 'text-gray-700';
      case 'tieukhang':
        return 'text-green-700';
      case 'trueending':
        return 'text-yellow-700';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <div className={`rounded-lg border-4 p-16 ${getEndingColor(ending)}`}>
      <div className="text-center mb-12">
        <h1 className={`text-5xl font-bold ${getTitleColor(ending)} mb-6`}>
          {endingInfo.title}
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
          {endingInfo.description}
        </p>
      </div>

      <div className="bg-white rounded-lg p-10 mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Kết Quả Cuối Cùng</h2>
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-5xl font-bold text-blue-600 mb-2">{stats.economic}</div>
            <div className="text-lg font-semibold text-gray-700 mb-2">💰 KINH TẾ</div>
            <div className="text-sm text-gray-600">
              {stats.economic > 70
                ? '🟢 Phát triển cao'
                : stats.economic > 40
                  ? '🟡 Ổn định'
                  : '🔴 Lạc hậu'}
            </div>
          </div>
          <div className="text-center p-6 bg-rose-50 rounded-lg">
            <div className="text-5xl font-bold text-rose-600 mb-2">{stats.people}</div>
            <div className="text-lg font-semibold text-gray-700 mb-2">❤️ LÒNG DÂN</div>
            <div className="text-sm text-gray-600">
              {stats.people > 70
                ? '🟢 Rất cao'
                : stats.people > 40
                  ? '🟡 Bình thường'
                  : '🔴 Mất lòng dân'}
            </div>
          </div>
          <div className="text-center p-6 bg-slate-50 rounded-lg">
            <div className="text-5xl font-bold text-slate-600 mb-2">{stats.security}</div>
            <div className="text-lg font-semibold text-gray-700 mb-2">🛡️ AN NINH</div>
            <div className="text-sm text-gray-600">
              {stats.security > 70
                ? '🟢 Vững chắc'
                : stats.security > 40
                  ? '🟡 Ổn định'
                  : '🔴 Nguy hiểm'}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-gray-300 pt-6">
        <p className="text-center text-gray-700 italic text-sm">
          Cảm ơn bạn đã chơi! Hành trình của bạn đã hoàn thành.
        </p>
      </div>
    </div>
  );
}
