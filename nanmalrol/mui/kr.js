// The launch date of Nanmalrol
var Ha = new Date(2021, 12, 30, 0, 0, 0, 0);

lang["kr"] = {

    "gametitle": "<small>Nanmalrol</small> 낱말놀",
    "gamename": "Nanmalrol 낱말놀",
    "gamesharelink": "\nhttps:\/\/taximanli.github.io\/nanmalrol\/\n",

    "Hard Mode": "하드 모드",
    "Any revealed hints must be used in subsequent guesses": "공개된 모든 도움말을 충족하는 단어만 입력할 수 있습니다",
    "Dark Theme": "다크 테마",
    "Colour Blind Mode": "색각 이상 모드",
    "High contrast colours": "색상이 고대비가 됩니다",
    "Feedback": "피드백",
    "Copyright": "",

    "Guess must contain": "###text### 답변에 포함시켜야 합니다",

    "Not in word list": "이 대답은 단어 목록에 없습니다.",
    "Not valid in hard mode": "하드 모드에서는 사용할 수 없습니다",
    "Not enough letters": "4낱자를 입력하십시오.",
    "Hard mode can only be enabled at the start of a round": "하드 모드는 게임 시작 시에만 켜질 수 있습니다",
    "Copied results to clipboard": "성적을 클립보드에 복사했습니다",
    "Share failed": "공유에 실패했습니다",

    "Settings": "설정",
    "How to play": "놀이 방법",

    "Statistics": "통계 자료",
    "Guess Distribution": "추측 수 분포",

    "Next Game": "다음 게임까지",
    "Share": "공유",

    "No Data" :"데이터가 없습니다",

    currentStreak: "현재 연속 정답 횟수",
    maxStreak: "최대 연속 횟수",
    winPercentage: "승률",
    gamesPlayed: "플레이 횟수",
    gamesWon: "승리 횟수",
    averageGuesses: "평균 추측 횟수",   
    
};

lang["kr"]["gameinstruction"] =
`<section>\n  
<div class="instructions">\n  
  <p>Guess the word of the day in 12 tries.</p>\n  
  <p>Each guess must be a valid 4-jamo word. Hit the enter button to submit.</p>\n  
  <p>After each guess, the colour of the tiles will change to show how close your guess was to the word.</p>\n  
  <p>오늘의 단어를 12회 이내에 맞추어 주세요.</p>\n  
  <p>각각의 답은 히라가나 4낱자의 단어여야 합니다. 입력 버튼을 눌러 답변을 결정합니다.</p>\n  
  <p>대답 할 때마다 사각형의 색상이 바뀌고 다음 팁이됩니다.</p>\n  
  <div class="examples">\n  
    <p><strong>Examples 예시</strong></p>\n  
    <div class="example">\n  
      <div class="row">\n  
        <game-tile letter="ㄱ" evaluation="correct" reveal></game-tile>\n  
        <game-tile letter="ㅏ"></game-tile>\n  
        <game-tile letter="ㄷ"></game-tile>\n  
        <game-tile letter="ㅏ"></game-tile>\n  
      </div>\n  
      <p>The jamo <strong>ㄱ</strong> is in the word and in the correct spot.<br>낱자 "ㄱ"는 단어 안에 있고 맞는 위치에 있습니다.</p>\n  
    </div>\n  
    <div class="example">\n  
      <div class="row">\n  
        <game-tile letter="ㅎ"></game-tile>\n  
        <game-tile letter="ㅚ" evaluation="present" reveal></game-tile>\n  
        <game-tile letter="ㅅ"></game-tile>\n  
        <game-tile letter="ㅏ"></game-tile>\n  
      </div>\n  
      <p>The jamo <strong>ㅚ</strong> is in the word but in the wrong spot.<br>낱자 'ㅚ'는 단어 안에 있지만 다른 위치에 있습니다.</p>\n  
    </div>\n  
    <div class="example">\n  
      <div class="row">\n  
        <game-tile letter="ㅇ"></game-tile>\n  
        <game-tile letter="ㅜ"></game-tile>\n  
        <game-tile letter="ㄹ" evaluation="absent" reveal></game-tile>\n  
        <game-tile letter="ㅣ"></game-tile>\n  
      </div>\n  
      <p>The jamo <strong>ㄹ</strong> is not in the word in any spot.<br>낱자 'ㄹ'은 단어 어디에도 포함되어 있지 않습니다.</p>\n  
    </div>\n  
  </div>\n  
  <p><strong>A new word will be available each day!<br>단어는 매일 바뀝니다!</strong></p>\n  
  <p>This game was designed by Josh Wardle and it was adapted into Korean by Desmond Lee.</p>\n  
  <p>이 게임은 Josh Wardle이 개발하고 Desmond Lee가 한국어 버전을 만들었습니다.</p>\n  
</div>\n  
  </div>\n  
</div>\n  
</section>\n`;

var ss = [
  "Genius! 천재!",
  "Genius! 천재!",
  "Magnificent! 정말 훌륭해요!",
  "Magnificent! 정말 훌륭해요!",
  "Impressive! 훌륭해요!",
  "Impressive! 훌륭해요!",
  "Splendid! 정말 좋아요！",
  "Splendid! 정말 좋아요！",
  "Great! 좋아요!",
  "Great! 좋아요!",
  "Phew! 안전!",
  "Phew! 안전!",
];
