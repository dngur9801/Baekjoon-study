소수 : 1과 자신만으로 나누어 떨어지는 정수

- 소수가 아닌 경우
  0 또는 1은 소수가 아니므로 주어진 수들 중 해당 숫자가 있을 시 체크하지않고 바로 return
  2부터 주어진 수 -1까지 나눠주면서 나머지가 0이 된다면 소수가 아니므로 return

위에 조건을 모두 해당하지 않을 경우 소수이므로 count를 1증가
