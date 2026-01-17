'use client';

import { Round, Choice } from '@/lib/gameData';

interface RoundDisplayProps {
  round: Round;
  onChoice: (choice: 'A' | 'B' | 'C') => void;
  canChoose: boolean;
}

function ChoiceButton({
  choiceKey,
  choice,
  onChoice,
  canChoose,
}: {
  choiceKey: 'A' | 'B' | 'C';
  choice: Choice;
  onChoice: (key: 'A' | 'B' | 'C') => void;
  canChoose: boolean;
}) {
  const getImpactColor = (change: number) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <button
      onClick={() => onChoice(choiceKey)}
      disabled={!canChoose}
      className="w-full text-left p-6 rounded-lg border-2 border-gray-300 hover:border-blue-500 bg-white hover:bg-blue-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="text-4xl font-bold text-gray-700 min-w-[50px]">{choiceKey}.</div>
        <div className="flex-1">
          <p className="font-bold text-gray-900 text-lg mb-2">{choice.title}</p>
          <p className="text-gray-700 text-base leading-relaxed">{choice.description}</p>
        </div>
      </div>

      <div className="flex gap-6 ml-20 text-base">
        <span className={getImpactColor(choice.economicChange)}>
          💰 {choice.economicChange > 0 ? '+' : ''}{choice.economicChange}
        </span>
        <span className={getImpactColor(choice.peopleChange)}>
          ❤️ {choice.peopleChange > 0 ? '+' : ''}{choice.peopleChange}
        </span>
        <span className={getImpactColor(choice.securityChange)}>
          🛡️ {choice.securityChange > 0 ? '+' : ''}{choice.securityChange}
        </span>
      </div>
    </button>
  );
}

export function RoundDisplay({ round, onChoice, canChoose }: RoundDisplayProps) {
  return (
    <div className="rounded-lg border-2 border-gray-300 bg-white p-10">
      <div className="mb-10">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded">
          <p className="text-gray-700 italic text-lg">{round.context}</p>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-8">{round.question}</h3>
      </div>

      <div className="space-y-6">
        <ChoiceButton
          choiceKey="A"
          choice={round.choices.A}
          onChoice={onChoice}
          canChoose={canChoose}
        />
        <ChoiceButton
          choiceKey="B"
          choice={round.choices.B}
          onChoice={onChoice}
          canChoose={canChoose}
        />
        <ChoiceButton
          choiceKey="C"
          choice={round.choices.C}
          onChoice={onChoice}
          canChoose={canChoose}
        />
      </div>
    </div>
  );
}
