> 체스엔진 API와의 1:1 대전과 체스 퍼즐이 포함된 프로젝트입니다.

## 🧩 주요 기능

### ✅ 1. API와 1:1 대국

- `chess.js` 라이브러리를 활용하여 체스 룰 기반의 게임 상태 관리
- `chess-api.com` API를 통해 다음 수 계산
- 사용자는 `Depth`, `Thinking Time(ms)`을 조절하여 난이도 조정 가능

### ✅ 2. 체스 퍼즐 모드 (Puzzle)

- `https://api.chess.com/pub/puzzle/random` 에서 퍼즐 데이터를 불러옴
- 사용자가 맞는 수를 두면 다음 수가 진행됨
- 틀릴 경우 알림 제공, 정답 수 확인 기능 포함

### ✅ 3. 승격(프로모션) 지원

- 사용자가 마지막 랭크에 폰을 도달시키면 모달이 표시되어 퀸, 룩, 비숍, 나이트 중 선택 가능

## 🖼️ 주요 화면 구성

- `aiBoard`: 자동 플레이 데모 보드

  ![image](https://github.com/user-attachments/assets/90c5052a-606a-4936-8e6f-a9bddd45fd85)

- `myBoard`: 사용자 vs AI 대국

  ![image](https://github.com/user-attachments/assets/9cfa8c02-54b5-4987-93d2-f8354c2bb367)

- `puzzleBoard`: 체스 퍼즐 풀이

  ![image](https://github.com/user-attachments/assets/33934cbb-8eec-4d80-b701-50ff92839d6f)

- 모달: 프로모션 기물 선택 (`♕ ♖ ♗ ♘`)

  ![image](https://github.com/user-attachments/assets/1dad8813-0472-42b4-a1f4-1e36dca6da77)

---
