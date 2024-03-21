class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enqueue(value) {
    this.queue[this.rear++] = value;
  }
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }
  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(board) {
  let answer = -1;
  const map = board.map((value) => value.split(""));
  const M = board[0].length; // 행
  const N = board.length; // 열
  let visited = Array.from({ length: N }, () => Array(M).fill(0)); // 방문여부 확인을 위한 visited

  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  const queue = new Queue();

  let robotX, robotY;
  // 로봇 시작 위치 찾기
  board.map((value, idx) => {
    if (value.indexOf("R") > -1) {
      [robotX, robotY] = [idx, value.indexOf("R")];
    }
  });
  // 로봇 시작위치 큐에 삽입
  // count(0)를 세기 위해 같이 포함해서 삽입
  queue.enqueue([robotX, robotY, 0]);
  // 로봇 시작 위치는 방문 처리
  visited[robotX][robotY] = 1;

  while (!queue.isEmpty()) {
    const [x, y, count] = queue.dequeue();

    if (map[x][y] === "G") {
      answer = count;
      break;
    }

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      while (nx >= 0 && N > nx && ny >= 0 && M > ny && map[nx][ny] !== "D") {
        nx += dx[i];
        ny += dy[i];
      }

      // 장애물이 있는 위치까지 이동한 상태이기에 다시 dx[i], dy[i] 빼줌
      nx -= dx[i];
      ny -= dy[i];

      if (visited[nx][ny] === 0) { // 방문 안한 지점인 경우
        queue.enqueue([nx, ny, count + 1]);
        visited[nx][ny] = 1;
      }
    }
  }

  return answer;
}

