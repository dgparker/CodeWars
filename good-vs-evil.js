function goodVsEvil(good, evil) {
  goodWorth = [1, 2, 3, 3, 4, 10];
  evilWorth = [1, 2, 2, 2, 3, 5, 10];

  goodValue = good
    .split(" ")
    .map((u, i) => u * goodWorth[i])
    .reduce((a, b) => a + b);

  evilValue = evil
    .split(" ")
    .map((u, i) => u * evilWorth[i])
    .reduce((a, b) => a + b);

  return goodValue === evilValue
    ? "Battle Result: No victor on this battle field"
    : goodValue > evilValue
      ? "Battle Result: Good triumphs over Evil"
      : "Battle Result: Evil eradicates all trace of Good";
}
