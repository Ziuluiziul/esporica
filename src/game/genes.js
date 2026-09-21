export const GENES = [
  { id: 'esporo+', nome: 'Esporo', tag: 'ARMA', desc: '+1 esporo e +12% cadência.', apply: (p) => { p.sporeCount += 1; p.sporeRate *= 0.88; } },
  { id: 'esporo-dmg', nome: 'Toxina', tag: 'ARMA', desc: 'Esporos fazem +28% dano.', apply: (p) => { p.sporeDmg *= 1.28; } },
  { id: 'esporo-spd', nome: 'Jacto', tag: 'ARMA', desc: 'Esporos 22% mais rápidos e longe.', apply: (p) => { p.sporeSpd *= 1.22; p.sporeLife *= 1.12; } },
  { id: 'foto', nome: 'Fotão', tag: 'NOVA', desc: 'Pulso fótico à volta de ti. Empilha raio.', apply: (p) => { p.nova = true; p.novaR += 1.6; p.novaDmg *= 1.18; } },
  { id: 'olho', nome: 'Olho', tag: 'FEIXE', desc: 'Raio perfurante no inimigo mais próximo.', apply: (p) => { p.eye = true; p.eyeDmg *= 1.25; } },
  { id: 'virus', nome: 'Vírus', tag: 'HOMING', desc: 'Esporos homing. +1 mísseis.', apply: (p) => { p.virus = true; p.virusN += 1; } },
  { id: 'orbita', nome: 'Pilus', tag: 'ÓRBITA', desc: 'Segmentos orbitais que cortam.', apply: (p) => { p.orbit = true; p.orbitN += 1; } },
  { id: 'hp', nome: 'Citoplasma', tag: 'VIDA', desc: '+35 vida máxima e cura 20.', apply: (p) => { p.maxHp += 35; p.hp = Math.min(p.maxHp, p.hp + 20); } },
  { id: 'regen', nome: 'Cicatriz', tag: 'VIDA', desc: 'Regenera 2.2 vida/s.', apply: (p) => { p.regen += 2.2; } },
  { id: 'vel', nome: 'Flagelo', tag: 'MOV', desc: '+16% velocidade.', apply: (p) => { p.speed *= 1.16; } },
  { id: 'ima', nome: 'Quimiotaxia', tag: 'XP', desc: 'Íman de citoplasma +40%.', apply: (p) => { p.magnet *= 1.4; } },
  { id: 'arm', nome: 'Mucilagem', tag: 'DEF', desc: '−12% dano recebido.', apply: (p) => { p.armor = Math.min(0.55, p.armor + 0.12); } },
  { id: 'xp', nome: 'Deriva', tag: 'XP', desc: '+20% XP colhida.', apply: (p) => { p.xpGain *= 1.2; } },
  { id: 'crit', nome: 'Lise', tag: 'CRIT', desc: '+12% chance de lise (×2.4 dano).', apply: (p) => { p.crit += 0.12; } },
  { id: 'area', nome: 'Simetria', tag: 'AREA', desc: 'Área de impacto +18%.', apply: (p) => { p.area *= 1.18; } },
  { id: 'ice', nome: 'Inverno', tag: 'CC', desc: 'Acertos atrasam o alvo 18%.', apply: (p) => { p.slow += 0.18; } },
  { id: 'burn', nome: 'Carmesim', tag: 'DOT', desc: 'Queima 8 dps / 2.4 s.', apply: (p) => { p.burn += 8; } },
  { id: 'knock', nome: 'Squeeze', tag: 'CC', desc: 'Empurrão +28%.', apply: (p) => { p.knock *= 1.28; } }
];

export function tresGenes(rng) {
  const bag = GENES.slice();
  for (let i = bag.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const t = bag[i]; bag[i] = bag[j]; bag[j] = t;
  }
  return bag.slice(0, 3);
}
