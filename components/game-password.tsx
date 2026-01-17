'use client';

import { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';

interface GamePasswordProps {
  onSuccess: () => void;
}

const GAME_PASSWORD = 'admin2024';

export function GamePassword({ onSuccess }: GamePasswordProps) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === GAME_PASSWORD) {
      setPassword('');
      setError('');
      onSuccess();
    } else {
      setError('Mật khẩu không chính xác');
      setPassword('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-sm">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-amber-100 p-3 rounded-lg">
            <Lock className="text-amber-600" size={32} />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">🎮 Hành Trình Việt Nam</h1>
        <p className="text-gray-600 text-center text-sm mb-6">Nhập mật khẩu để bắt đầu chơi</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Mật khẩu</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                placeholder="Nhập mật khẩu"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {error && <p className="text-red-600 text-sm font-semibold text-center">{error}</p>}

          <button
            type="submit"
            className="w-full px-4 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-colors text-lg"
          >
            Bắt Đầu Trò Chơi 🚀
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-6">
          Vui lòng nhập mật khẩu được cung cấp để tiếp tục
        </p>
      </div>
    </div>
  );
}
