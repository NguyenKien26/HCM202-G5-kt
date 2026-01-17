'use client';

import { useState, useEffect } from 'react';
import { GameState, gameRounds, initialState, calculateEnding } from '@/lib/gameData';
import { RoundDisplay } from '@/components/round-display';
import { GameStats } from '@/components/game-stats';
import { EndingDisplay } from '@/components/ending-display';

export function GameContainer() {
  const [gameState, setGameState] = useState<GameState>(initialState);
  const [hasStarted, setHasStarted] = useState(false);
  const [keyInput, setKeyInput] = useState('');

  useEffect(() => {
    if (!hasStarted) {
      setGameState(initialState);
    }
  }, [hasStarted]);

  const handleStartGame = () => {
    setHasStarted(true);
    setGameState(initialState);
  };

  const handleChoice = (choiceKey: 'A' | 'B' | 'C') => {
    if (gameState.gameOver || gameState.currentRound >= gameRounds.length) {
      return;
    }

    const currentRound = gameRounds[gameState.currentRound];
    const choice = currentRound.choices[choiceKey];

    const newState: GameState = {
      ...gameState,
      economic: gameState.economic + choice.economicChange,
      people: gameState.people + choice.peopleChange,
      security: gameState.security + choice.securityChange,
      choices: [...gameState.choices, choice.label],
      currentRound: gameState.currentRound + 1,
    };

    // Check if game should end
    if (newState.economic < 0 || newState.people < 0 || newState.security < 0) {
      const ending = calculateEnding(
        newState.economic,
        newState.people,
        newState.security,
        newState.choices
      );
      newState.gameOver = true;
      newState.ending = ending.type;
    } else if (newState.currentRound >= gameRounds.length) {
      const ending = calculateEnding(
        newState.economic,
        newState.people,
        newState.security,
        newState.choices
      );
      newState.gameOver = true;
      newState.ending = ending.type;
    }

    setGameState(newState);
  };

  const handleRestart = () => {
    setHasStarted(false);
    setGameState(initialState);
  };

  // Start screen
  if (!hasStarted) {
    return (
      <div className="w-full max-w-6xl mx-auto px-6 py-16">
        <div className="rounded-lg border-4 border-amber-300 bg-amber-50 p-12 text-center">
          <h1 className="text-5xl font-bold text-amber-900 mb-6">
            HÀNH TRÌNH VIỆT NAM
          </h1>
          <h2 className="text-3xl font-semibold text-amber-800 mb-8">
            1975 - 2024: Lựa Chọn Của Chúng Ta
          </h2>
          <p className="text-xl text-amber-700 mb-10 leading-relaxed">
            Các bạn sẽ quyết định định hướng phát triển của đất nước qua 5 giai đoạn lịch sử quan trọng.
            Mỗi lựa chọn sẽ ảnh hưởng đến kinh tế, lòng dân và an ninh. Liệu bạn có thể dẫn dắt đất nước
            tới tương lai tươi sáng?
          </p>
          <div className="flex flex-col items-center gap-3 mb-6">
            <label className="text-sm font-medium text-amber-800">Nhập key để tham gia</label>
            <input
              type="password"
              placeholder="Nhập key"
              autoComplete="off"
              onChange={(e) => (e.target && setKeyInput(e.target.value))}
              className="w-48 px-3 py-2 rounded-md border border-amber-300 bg-white text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <button
            onClick={handleStartGame}
            disabled={(keyInput ?? '').trim() !== 'admin2024'}
            className="px-10 py-4 bg-amber-600 hover:bg-amber-700 disabled:bg-amber-300 disabled:hover:bg-amber-300 disabled:cursor-not-allowed text-white font-bold rounded-lg text-xl transition-colors shadow-lg"
          >
            Bắt Đầu Trò Chơi 🚀
          </button>
        </div>
      </div>
    );
  }

  if (gameState.gameOver && gameState.ending) {
    return (
      <div className="w-full max-w-6xl mx-auto px-6 py-16">
        <EndingDisplay
          ending={gameState.ending}
          stats={{
            economic: gameState.economic,
            people: gameState.people,
            security: gameState.security,
          }}
        />
        <div className="flex gap-4 justify-center mt-12">
          <button
            onClick={handleRestart}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-lg"
          >
            Chơi Lại
          </button>
        </div>
      </div>
    );
  }

  if (gameState.currentRound >= gameRounds.length) {
    return (
      <div className="w-full max-w-6xl mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Đang tính toán kết quả...</h2>
        </div>
      </div>
    );
  }

  const currentRound = gameRounds[gameState.currentRound];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16">
      <div className="mb-10">
        <div className="text-center mb-8">
          <p className="text-base font-semibold text-gray-600 mb-2">
            VÒNG {gameState.currentRound + 1} / {gameRounds.length}
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">{currentRound.title}</h2>
          <p className="text-xl text-gray-600">{currentRound.year}</p>
        </div>
        <GameStats state={gameState} />
      </div>

      <RoundDisplay
        round={currentRound}
        onChoice={handleChoice}
        canChoose={!gameState.gameOver}
      />
    </div>
  );
}
