export default function getHealthStatus(gamer) {
  if (gamer.health < 15) {
    return 'critical';
  }
  if (gamer.health <= 50) {
    return 'wonded';
  }
  return 'healthy';
}
