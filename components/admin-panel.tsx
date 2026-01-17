'use client';

import { useState } from 'react';
import { gameRounds, calculateEnding } from '@/lib/gameData';
import { X } from 'lucide-react';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  currentRound: number;
  stats: {
    economic: number;
    people: number;
    security: number;
  };
  choices: string[];
}

const labelInfo = {
  red: { emoji: '🔴', text: 'Cứng Rắn/Bảo Thủ' },
  blue: { emoji: '🔵', text: 'Tự Do/Thực Dụng' },
  yellow: { emoji: '⭐', text: 'Định Hướng XHCN' },
};

export function AdminPanel({ isOpen, onClose, currentRound, stats, choices }: AdminPanelProps) {
  if (!isOpen) return null;

  const redCount = choices.filter((c) => c === 'red').length;
  const blueCount = choices.filter((c) => c === 'blue').length;
  const yellowCount = choices.filter((c) => c === 'yellow').length;

  const currentEnding = calculateEnding(stats.economic, stats.people, stats.security, choices);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl m-4 p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">🎮 ADMIN PANEL</h1>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        {/* Stats Hiện Tại */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-4">📊 Stats Hiện Tại</h2>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-blue-100 p-4 rounded">
              <div className="text-2xl font-bold text-blue-600">{stats.economic}</div>
              <div className="text-sm text-gray-700">💰 KINH TẾ</div>
            </div>
            <div className="bg-rose-100 p-4 rounded">
              <div className="text-2xl font-bold text-rose-600">{stats.people}</div>
              <div className="text-sm text-gray-700">❤️ LÒNG DÂN</div>
            </div>
            <div className="bg-slate-100 p-4 rounded">
              <div className="text-2xl font-bold text-slate-600">{stats.security}</div>
              <div className="text-sm text-gray-700">🛡️ AN NINH</div>
            </div>
          </div>
        </div>

        {/* Nhãn Statistics */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-4">🏷️ Nhãn Statistics</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-red-100 p-4 rounded">
              <div className="text-2xl font-bold text-red-600">{redCount}/5</div>
              <div className="text-sm text-gray-700">🔴 Cứng Rắn</div>
              {redCount >= 3 && <div className="text-xs text-red-700 font-semibold mt-1">✓ ENDING UNLOCK</div>}
            </div>
            <div className="bg-blue-100 p-4 rounded">
              <div className="text-2xl font-bold text-blue-600">{blueCount}/5</div>
              <div className="text-sm text-gray-700">🔵 Tự Do</div>
              {blueCount >= 3 && <div className="text-xs text-blue-700 font-semibold mt-1">✓ ENDING UNLOCK</div>}
            </div>
            <div className="bg-yellow-100 p-4 rounded">
              <div className="text-2xl font-bold text-yellow-600">{yellowCount}/5</div>
              <div className="text-sm text-gray-700">⭐ Định Hướng</div>
              {yellowCount >= 3 && <div className="text-xs text-yellow-700 font-semibold mt-1">✓ ENDING UNLOCK</div>}
            </div>
          </div>
        </div>

        {/* Kết Cục Dự Đoán */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-4">🎬 Kết Cục Dự Đoán</h2>
          <div className="bg-white p-4 rounded border-l-4 border-purple-500">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{currentEnding.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{currentEnding.description}</p>
          </div>
        </div>

        {/* Các Lựa Chọn Đã Chọn */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-4">📝 Lịch Sử Lựa Chọn</h2>
          <div className="space-y-2">
            {choices.length === 0 ? (
              <p className="text-gray-600">Chưa có lựa chọn nào</p>
            ) : (
              choices.map((choice, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm">
                  <span className="font-semibold text-gray-700">Vòng {idx + 1}:</span>
                  <span>{labelInfo[choice as keyof typeof labelInfo].emoji}</span>
                  <span className="text-gray-600">{labelInfo[choice as keyof typeof labelInfo].text}</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Chi Tiết Các Vòng */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-4">📖 Chi Tiết Các Vòng</h2>
          <div className="space-y-6 max-h-96 overflow-y-auto">
            {gameRounds.map((round, roundIdx) => (
              <div key={round.id} className="bg-white p-4 rounded border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3">
                  Vòng {round.id}: {round.title} ({round.year})
                </h3>
                <p className="text-sm text-gray-700 mb-3 italic">{round.context}</p>

                <div className="space-y-2">
                  {['A', 'B', 'C'].map((key) => {
                    const choice = round.choices[key as 'A' | 'B' | 'C'];
                    const isChosen = choices[roundIdx] === choice.label;
                    return (
                      <div
                        key={key}
                        className={`p-3 rounded text-sm ${
                          isChosen ? 'bg-green-100 border-2 border-green-500' : 'bg-gray-100'
                        }`}
                      >
                        <div className="font-semibold text-gray-900 mb-1">
                          {key}. {choice.title}
                          {isChosen && ' ✓ CHỌN'}
                        </div>
                        <div className="text-gray-700 text-xs mb-2">{choice.description}</div>
                        <div className="flex gap-3 text-xs">
                          <span className="text-blue-600">💰 {choice.economicChange > 0 ? '+' : ''}{choice.economicChange}</span>
                          <span className="text-rose-600">❤️ {choice.peopleChange > 0 ? '+' : ''}{choice.peopleChange}</span>
                          <span className="text-slate-600">🛡️ {choice.securityChange > 0 ? '+' : ''}{choice.securityChange}</span>
                          <span className="ml-auto">{labelInfo[choice.label].emoji} {labelInfo[choice.label].text}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-lg transition-colors"
        >
          Đóng Admin Panel
        </button>
      </div>
    </div>
  );
}
