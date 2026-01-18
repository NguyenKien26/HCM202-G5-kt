import { ReactNode } from 'react';

export type EndingType =
  | 'bad-ending'
  | 'tiger'
  | 'fortress'
  | 'chaos'
  | 'tieukhang'
  | 'trueending';

export interface Choice {
  title: string;
  description: string;
  economicChange: number;
  peopleChange: number;
  securityChange: number;
  label: 'red' | 'blue' | 'yellow';
}

export interface Round {
  id: number;
  year: string;
  title: string;
  context: string;
  question: string;
  choices: {
    A: Choice;
    B: Choice;
    C: Choice;
  };
}

export interface GameState {
  currentRound: number;
  economic: number;
  people: number;
  security: number;
  choices: string[];
  gameOver: boolean;
  ending: EndingType | null;
}

export const gameRounds: Round[] = [
  {
    id: 1,
    year: '1986',
    title: 'Đêm Trước Đổi Mới',
    context: 'Lạm phát 700%, ngăn sông cấm chợ. Dân đói. Kho kho bạc rỗng.',
    question: 'Chúng ta phải làm gì để cứu vãn nền kinh tế đang sụp đổ?',
    choices: {
      A: {
        title: '"Giữ vững ngọn cờ"',
        description: 'Quản lý tập trung, chia đều hàng hóa cho dân. Giữ vững lập trường!',
        economicChange: -10,
        peopleChange: 5,
        securityChange: 5,
        label: 'red',
      },
      B: {
        title: '"Cởi trói toàn diện"',
        description: 'Thay thế nhà nước quản lý, thực hiện kinh tế thị trường hoàn toàn, tư nhân hóa như Đông Âu.',
        economicChange: 20,
        peopleChange: -20,
        securityChange: -10,
        label: 'blue',
      },
      C: {
        title: '"Khoán 10"',
        description: 'Xóa bỏ ngăn sông cấm chợ, để kinh tế nhiều thành phần, nhưng Nhà nước vẫn quản lý.',
        economicChange: 15,
        peopleChange: 10,
        securityChange: -5,
        label: 'yellow',
      },
    },
  },
  {
    id: 2,
    year: '1995',
    title: 'Mở Cửa Hội Nhập',
    context: 'Mỹ bỏ cấm vận. ASEAN mời gia nhập. Chúng ta cần vốn và công nghệ.',
    question: 'Chiến lược ngoại giao và đầu tư của chúng ta là gì?',
    choices: {
      A: {
        title: '"Trải thảm đỏ"',
        description: 'Mời gọi đầu tư. Cho nước ngoài thuê đất, miễn thuế, miễn kiểm soát môi trường. Tập trung ưu tiên tăng trưởng kinh tế trước.',
        economicChange: 25,
        peopleChange: -5,
        securityChange: -15,
        label: 'blue',
      },
      B: {
        title: '"Đa phương hóa"',
        description: 'Mở rộng quan hệ với tất cả. Mở cửa vừa phải, cân bằng ưu tiên lợi ích đồng đều.',
        economicChange: 15,
        peopleChange: 5,
        securityChange: 5,
        label: 'yellow',
      },
      C: {
        title: '"Bảo hộ doanh nghiệp"',
        description: 'Tập trung bảo hộ doanh nghiệp trong nước. Hạn chế tư bản nước ngoài. Tăng khả năng tự lực cánh sinh!',
        economicChange: -5,
        peopleChange: -5,
        securityChange: 10,
        label: 'red',
      },
    },
  },
  {
    id: 3,
    year: '2008-2010',
    title: 'Khủng Hoảng & An Sinh',
    context: 'Kinh tế thế giới suy thoái. Trong nước phân hóa giàu nghèo bắt đầu sâu sắc.',
    question: 'Ngân sách quốc gia năm nay sẽ ưu tiên rót vào đâu?',
    choices: {
      A: {
        title: '"Cứu Doanh Nghiệp"',
        description: 'Bơm tiền cứu bất động sản và ngân hàng để giữ vị thế nền kinh tế.',
        economicChange: 10,
        peopleChange: -15,
        securityChange: 0,
        label: 'blue',
      },
      B: {
        title: '"Quả Đấm Thép"',
        description: 'Bơm tiền cho các Tập đoàn Nhà nước, giữ tính ổn định thị trường.',
        economicChange: -10,
        peopleChange: 0,
        securityChange: 5,
        label: 'red',
      },
      C: {
        title: '"Ưu Dân Sinh"',
        description: 'Bơm tiền xây hạ tầng, ưu tiên xóa đói giảm nghèo.',
        economicChange: -5,
        peopleChange: 20,
        securityChange: 5,
        label: 'yellow',
      },
    },
  },
  {
    id: 4,
    year: '2014',
    title: 'Sóng Gió Biển Đông',
    context: 'Nước lớn hạ đặt giàn khoan trái phép. Tình hình biên giới căng thẳng cực độ.',
    question: 'Quốc hội quyết định đối sách nào?',
    choices: {
      A: {
        title: '"Liên Minh Quân Sự"',
        description: 'Mời một cường quốc khác vào đóng quân ở Cam Ranh để bảo vệ mình.',
        economicChange: -10,
        peopleChange: -10,
        securityChange: 20,
        label: 'blue',
      },
      B: {
        title: '"Cây Tre Việt Nam"',
        description: 'Kiên quyết đấu tranh bằng pháp lý, giữ cái đầu lạnh, vừa hợp tác vừa đấu tranh, không nổ súng trước.',
        economicChange: 5,
        peopleChange: 10,
        securityChange: 5,
        label: 'yellow',
      },
      C: {
        title: '"Cháu Cụ Quang Trung"',
        description: 'Cắt đứt quan hệ ngoại giao, tổng động viên quân đội, mang 29 vạn tàu chiến đến đây.',
        economicChange: -30,
        peopleChange: 10,
        securityChange: -20,
        label: 'red',
      },
    },
  },
  {
    id: 5,
    year: '2024',
    title: 'Kỷ Nguyên Số & Văn Hóa',
    context: 'Mạng xã hội bùng nổ. Tin giả tràn lan. Văn hóa ngoại lai xâm nhập.',
    question: 'Chúng ta quản lý không gian mạng thế nào?',
    choices: {
      A: {
        title: '"Bức Tường Lửa"',
        description: 'Cấm Facebook, Google. Xây dựng mạng nội bộ riêng như Intranet.',
        economicChange: -15,
        peopleChange: -10,
        securityChange: 15,
        label: 'red',
      },
      B: {
        title: '"Hòa Nhập Văn Hóa"',
        description: '"Sức mạnh mềm". Đầu tư làm phim, nhạc, game Việt để xuất khẩu văn hóa, kiểm soát tin giả bằng luật an ninh mạng.',
        economicChange: 10,
        peopleChange: 10,
        securityChange: 10,
        label: 'yellow',
      },
      C: {
        title: '"Tự Do Ngôn Luận"',
        description: 'Kệ, ai muốn nói gì thì nói. Nhà nước không can thiệp.',
        economicChange: 5,
        peopleChange: -10,
        securityChange: -20,
        label: 'blue',
      },
    },
  },
];

export const initialState: GameState = {
  currentRound: 0,
  economic: 30,
  people: 70,
  security: 50,
  choices: [],
  gameOver: false,
  ending: null,
};


export interface EndingInfo {
  type: EndingType;
  title: string;
  description: string;
  emoji: string;
}

// Helper: get ending info by type (for display components)
export function getEndingInfoByType(type: EndingType): EndingInfo {
  switch (type) {
    case 'bad-ending':
      return {
        type,
        title: '💀 BAD ENDING: QUỐC GIA THẤT BẠI',
        description:
          'Rất tiếc, đất nước đã rơi vào hỗn loạn (vỡ nợ/bạo loạn/chiến tranh). Lịch sử đã dừng lại ở đây. Các bạn cần học lại môn Lịch sử Đảng!',
        emoji: '💀',
      };
    case 'chaos':
      return {
        type,
        title: '🎭 BAD ENDING: LOẠN SẮC MÀU (DIỄN BIẾN HÒA BÌNH)',
        description:
          'Chính sách tiền hậu bất nhất. Sáng nắng chiều mưa khiến lòng dân ly tán. Đất nước nổ ra cách mạng màu. Game Over.',
        emoji: '🎭',
      };
    case 'tiger':
      return {
        type,
        title: '💸 NORMAL ENDING: CON HỔ TƯ BẢN',
        description:
          'Việt Nam trở thành một nước công nghiệp phát triển cực thịnh! Tuy nhiên, bị các tập đoàn chi phối. Phân hóa giàu nghèo khủng khiếp. Các bạn giàu, nhưng bất bình đẳng như trong phim hàn quốc.',
        emoji: '💸',
      };
    case 'fortress':
      return {
        type,
        title: '🪖 NORMAL ENDING: PHÁO ĐÀI CÔ ĐỘC',
        description:
          'Đất nước cực kỳ ổn định, không ai dám xâm phạm. Nhưng dân chúng nghèo đói, công nghệ lạc hậu so với thế giới 50 năm. Chúng ta sống mòn mỏi sau lũy tre làng.',
        emoji: '🪖',
      };
    case 'tieukhang':
      return {
        type,
        title: '🌿 GOOD ENDING: TIỂU KHANG (ẤM NO)',
        description:
          'Chúc mừng! Các bạn đã giữ vững độc lập chủ quyền. Dân có cơm ăn áo mặc, xã hội công bằng. Tuy chưa phải cường quốc, nhưng Việt Nam là điểm đến hòa bình của thế giới.',
        emoji: '🌿',
      };
    case 'trueending':
      return {
        type,
        title: '🏆 TRUE ENDING: CƯỜNG QUỐC XHCN (HÓA RỒNG)',
        description:
          'Xuất sắc! Các bạn đã giải được bài toán khó nhất lịch sử: Vừa tăng trưởng kinh tế thần tốc, vừa giữ được công bằng xã hội và chủ quyền. Việt Nam sánh vai với các cường quốc năm châu!',
        emoji: '🏆',
      };
    default:
      return {
        type,
        title: '🎭 BAD ENDING: LOẠN SẮC MÀU (DIỄN BIẾN HÒA BÌNH)',
        description:
          'Chính sách tiền hậu bất nhất. Sáng nắng chiều mưa khiến lòng dân ly tán. Đất nước nổ ra cách mạng màu. Game Over.',
        emoji: '🎭',
      };
  }
}

export function calculateEnding(
  economic: number,
  people: number,
  security: number,
  choices: string[]
): EndingInfo {
  // 💀 BAD ENDING: QUỐC GIA THẤT BẠI
  // Điều kiện: Bất kỳ chỉ số nào < 0 trong quá trình chơi
  if (economic < 0 || people < 0 || security < 0) {
    return {
      type: 'bad-ending',
      title: '💀 BAD ENDING: QUỐC GIA THẤT BẠI',
      description:
        'Rất tiếc, đất nước đã rơi vào hỗn loạn (vỡ nợ/bạo loạn/chiến tranh). Lịch sử đã dừng lại ở đây. Các bạn cần học lại môn Lịch sử Đảng!',
      emoji: '💀',
    };
  }

  // Count labels
  const redCount = choices.filter((c) => c === 'red').length;
  const blueCount = choices.filter((c) => c === 'blue').length;
  const yellowCount = choices.filter((c) => c === 'yellow').length;

  // Determine which label is dominant
  const maxCount = Math.max(redCount, blueCount, yellowCount);
  const labelsWithMaxCount = [
    redCount === maxCount ? 'red' : null,
    blueCount === maxCount ? 'blue' : null,
    yellowCount === maxCount ? 'yellow' : null,
  ].filter((label) => label !== null);

  // 🎭 BAD ENDING: LOẠN SẮC MÀU (DIỄN BIẾN HÒA BÌNH)
  // Điều kiện: Các nhãn bằng nhau (không có nhãn nào chiếm đa số) HOẶC Lòng dân < 40
  // Lưu ý: trì hoãn kiểm tra chaos đến sau khi xét các ending theo nhãn đa số
  const isBalanced = labelsWithMaxCount.length > 1;

  // 🏆 TRUE ENDING: CƯỜNG QUỐC XHCN (HÓA RỒNG)
  // Điều kiện: 4 hoặc 5 nhãn ⭐ [Định Hướng] VÀ Cả 3 chỉ số đều >= 70
  if (yellowCount >= 4 && economic >= 70 && people >= 70 && security >= 70) {
    return {
      type: 'trueending',
      title: '🏆 TRUE ENDING: CƯỜNG QUỐC XHCN (HÓA RỒNG)',
      description:
        'Xuất sắc! Các bạn đã giải được bài toán khó nhất lịch sử: Vừa tăng trưởng kinh tế thần tốc, vừa giữ được công bằng xã hội và chủ quyền. Việt Nam sánh vai với các cường quốc năm châu!',
      emoji: '🏆',
    };
  }

  // 🌿 GOOD ENDING: TIỂU KHANG (ẤM NO)
  // Điều kiện: Đa số nhãn ⭐ [Định Hướng], nhưng chưa đủ điều kiện TRUE ENDING
  if (yellowCount >= 3) {
    return {
      type: 'tieukhang',
      title: '🌿 GOOD ENDING: TIỂU KHANG (ẤM NO)',
      description:
        'Chúc mừng! Các bạn đã giữ vững độc lập chủ quyền. Dân có cơm ăn áo mặc, xã hội công bằng. Tuy chưa phải cường quốc, nhưng Việt Nam là điểm đến hòa bình của thế giới.',
      emoji: '🌿',
    };
  }

  // 💸 NORMAL ENDING: CON HỔ TƯ BẢN
  // Điều kiện: Đa số nhãn 🔵 [Tự Do]
  if (blueCount >= 3) {
    return {
      type: 'tiger',
      title: '💸 NORMAL ENDING: CON HỔ TƯ BẢN',
      description:
        'Việt Nam trở thành một nước công nghiệp phát triển cực thịnh! Tuy nhiên, bị các tập đoàn chi phối. Phân hóa giàu nghèo khủng khiếp. Các bạn giàu, nhưng bất bình đẳng như trong phim hàn quốc.',
      emoji: '💸',
    };
  }

  // 🪖 NORMAL ENDING: PHÁO ĐÀI CÔ ĐỘC
  // Điều kiện: Đa số nhãn 🔴 [Cứng Rắn]
  if (redCount >= 3) {
    return {
      type: 'fortress',
      title: '🪖 NORMAL ENDING: PHÁO ĐÀI CÔ ĐỘC',
      description:
        'Đất nước cực kỳ ổn định, không ai dám xâm phạm. Nhưng dân chúng nghèo đói, công nghệ lạc hậu so với thế giới 50 năm. Chúng ta sống mòn mỏi sau lũy tre làng.',
      emoji: '🪖',
    };
  }

  // 🎭 BAD ENDING: LOẠN SẮC MÀU (DIỄN BIẾN HÒA BÌNH)
  // Đưa xuống cuối: nếu không có nhãn đa số phù hợp và lòng dân thấp/nhãn cân bằng
  if (isBalanced || people < 40) {
    return {
      type: 'chaos',
      title: '🎭 BAD ENDING: LOẠN SẮC MÀU (DIỄN BIẾN HÒA BÌNH)',
      description:
        'Chính sách tiền hậu bất nhất. Sáng nắng chiều mưa khiến lòng dân ly tán. Đất nước nổ ra cách mạng màu. Game Over.',
      emoji: '🎭',
    };
  }

  // Fallback (should not reach here if logic is correct)
  return {
    type: 'chaos',
    title: '🎭 BAD ENDING: LOẠN SẮC MÀU (DIỄN BIẾN HÒA BÌNH)',
    description:
      'Chính sách tiền hậu bất nhất. Sáng nắng chiều mưa khiến lòng dân ly tán. Đất nước nổ ra cách mạng màu. Game Over.',
    emoji: '🎭',
  };
}
