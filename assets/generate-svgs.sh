#!/bin/bash

# Hero small images
cat > hero-small-1.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><rect width="120" height="120" fill="#fdf2f8"/><circle cx="60" cy="50" r="35" fill="#d4a574"/><path d="M25 60 Q20 90 30 110" stroke="#1a1a1a" stroke-width="15" fill="none"/><path d="M95 60 Q100 90 90 110" stroke="#1a1a1a" stroke-width="15" fill="none"/><circle cx="48" cy="45" r="4" fill="#1a1a1a"/><circle cx="72" cy="45" r="4" fill="#1a1a1a"/><path d="M50 65 Q60 72 70 65" stroke="#c4956a" stroke-width="2" fill="none"/></svg>
EOF

cat > hero-small-2.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#fdf2f8"/><circle cx="50" cy="40" r="28" fill="#d4a574"/><path d="M22 50 Q18 80 25 95" stroke="#3d2314" stroke-width="12" fill="none"/><path d="M78 50 Q82 80 75 95" stroke="#3d2314" stroke-width="12" fill="none"/><circle cx="40" cy="38" r="3" fill="#1a1a1a"/><circle cx="60" cy="38" r="3" fill="#1a1a1a"/><path d="M42 55 Q50 60 58 55" stroke="#c4956a" stroke-width="2" fill="none"/></svg>
EOF

# Category images
for i in 1 2 3 4 5 6; do
  case $i in
    1) name="perruques"; color="#ec4899";;
    2) name="coiffures"; color="#d946ef";;
    3) name="personnalisation"; color="#f9a8d4";;
    4) name="coloration"; color="#d4af37";;
    5) name="entretien"; color="#10b981";;
    6) name="accessoires"; color="#8b5cf6";;
  esac
  cat > cat-${name}.svg << EOF
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><rect width="400" height="500" fill="#fdf2f8"/><circle cx="200" cy="200" r="120" fill="${color}" opacity="0.3"/><circle cx="200" cy="180" r="80" fill="#d4a574"/><path d="M120 220 Q100 350 130 450" stroke="#1a1a1a" stroke-width="40" fill="none"/><path d="M280 220 Q300 350 270 450" stroke="#1a1a1a" stroke-width="40" fill="none"/><circle cx="175" cy="170" r="10" fill="#1a1a1a"/><circle cx="225" cy="170" r="10" fill="#1a1a1a"/><path d="M180 220 Q200 235 220 220" stroke="#c4956a" stroke-width="3" fill="none"/><text x="200" y="420" text-anchor="middle" fill="${color}" font-size="24" font-weight="bold">${name}</text></svg>
EOF
done

# Product images
for i in $(seq 1 12); do
  case $((i % 4)) in
    0) color="#1a1a1a";;
    1) color="#3d2314";;
    2) color="#8b4513";;
    3) color="#d4a574";;
  esac
  cat > produit-${i}.svg << EOF
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><rect width="300" height="400" fill="#fdf2f8"/><circle cx="150" cy="150" r="90" fill="#d4a574"/><path d="M60 190 Q40 320 70 380" stroke="${color}" stroke-width="35" fill="none"/><path d="M240 190 Q260 320 230 380" stroke="${color}" stroke-width="35" fill="none"/><circle cx="125" cy="140" r="8" fill="#1a1a1a"/><circle cx="175" cy="140" r="8" fill="#1a1a1a"/><path d="M130 180 Q150 195 170 180" stroke="#c4956a" stroke-width="3" fill="none"/><rect x="100" y="250" width="100" height="100" rx="10" fill="#ec4899" opacity="0.2"/></svg>
EOF
done

# Prestation images
for i in 1 2 3 4 5 6; do
  case $i in
    1) name="vente";;
    2) name="pose";;
    3) name="confection";;
    4) name="customisation";;
    5) name="coloration";;
    6) name="entretien";;
  esac
  cat > prestation-${name}.svg << EOF
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#fdf2f8"/><circle cx="200" cy="130" r="70" fill="#d4a574"/><path d="M130 160 Q110 250 140 290" stroke="#1a1a1a" stroke-width="30" fill="none"/><path d="M270 160 Q290 250 260 290" stroke="#1a1a1a" stroke-width="30" fill="none"/><circle cx="180" cy="120" r="6" fill="#1a1a1a"/><circle cx="220" cy="120" r="6" fill="#1a1a1a"/><path d="M185 155 Q200 165 215 155" stroke="#c4956a" stroke-width="2" fill="none"/><text x="200" y="280" text-anchor="middle" fill="#ec4899" font-size="16" font-weight="bold">${name}</text></svg>
EOF
done

# Gallery images
for i in $(seq 1 8); do
  case $((i % 4)) in
    0) color="#1a1a1a";;
    1) color="#3d2314";;
    2) color="#8b4513";;
    3) color="#d4a574";;
  esac
  cat > galerie-${i}.svg << EOF
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><rect width="400" height="500" fill="#fdf2f8"/><circle cx="200" cy="180" r="100" fill="#d4a574"/><path d="M100 220 Q80 380 120 480" stroke="${color}" stroke-width="45" fill="none"/><path d="M300 220 Q320 380 280 480" stroke="${color}" stroke-width="45" fill="none"/><circle cx="170" cy="170" r="10" fill="#1a1a1a"/><circle cx="230" cy="170" r="10" fill="#1a1a1a"/><path d="M175 220 Q200 240 225 220" stroke="#c4956a" stroke-width="3" fill="none"/></svg>
EOF
done

# Accessory images
for i in 1 2 3 4 5 6; do
  case $i in
    1) name="bonnet"; color="#ec4899";;
    2) name="soin"; color="#10b981";;
    3) name="peigne"; color="#d4af37";;
    4) name="brosse"; color="#8b5cf6";;
    5) name="serre"; color="#f9a8d4";;
    6) name="huile"; color="#d946ef";;
  esac
  cat > acc-${name}.svg << EOF
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><rect width="300" height="300" fill="#fdf2f8"/><circle cx="150" cy="150" r="100" fill="${color}" opacity="0.3"/><circle cx="150" cy="150" r="60" fill="${color}"/><text x="150" y="160" text-anchor="middle" fill="white" font-size="14" font-weight="bold">${name}</text></svg>
EOF
done

# Nouveautés images
for i in 1 2 3; do
  case $i in
    1) color="#ec4899";;
    2) color="#d946ef";;
    3) color="#f9a8d4";;
  esac
  cat > nouv-${i}.svg << EOF
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 450"><rect width="350" height="450" fill="#fdf2f8"/><circle cx="175" cy="170" r="95" fill="#d4a574"/><path d="M80 210 Q60 360 90 430" stroke="#1a1a1a" stroke-width="40" fill="none"/><path d="M270 210 Q290 360 260 430" stroke="#1a1a1a" stroke-width="40" fill="none"/><circle cx="150" cy="160" r="9" fill="#1a1a1a"/><circle cx="200" cy="160" r="9" fill="#1a1a1a"/><path d="M155 205 Q175 220 195 205" stroke="#c4956a" stroke-width="3" fill="none"/><rect x="120" y="280" width="110" height="80" rx="10" fill="${color}" opacity="0.3"/></svg>
EOF
done

# Instagram images
for i in $(seq 1 6); do
  case $((i % 3)) in
    0) color="#ec4899";;
    1) color="#d946ef";;
    2) color="#f9a8d4";;
  esac
  cat > insta-${i}.svg << EOF
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250"><rect width="250" height="250" fill="#fdf2f8"/><circle cx="125" cy="100" r="60" fill="#d4a574"/><path d="M65 130 Q50 220 70 240" stroke="#1a1a1a" stroke-width="25" fill="none"/><path d="M185 130 Q200 220 180 240" stroke="#1a1a1a" stroke-width="25" fill="none"/><circle cx="105" cy="95" r="6" fill="#1a1a1a"/><circle cx="145" cy="95" r="6" fill="#1a1a1a"/><path d="M110 125 Q125 135 140 125" stroke="#c4956a" stroke-width="2" fill="none"/><rect x="80" y="160" width="90" height="60" rx="8" fill="${color}" opacity="0.3"/></svg>
EOF
done

# Avant/Après images
cat > aa-before-1.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600"><rect width="500" height="600" fill="#f3f4f6"/><circle cx="250" cy="220" r="100" fill="#d4a574"/><path d="M150 260 Q130 400 160 500" stroke="#8b8b8b" stroke-width="40" fill="none"/><path d="M350 260 Q370 400 340 500" stroke="#8b8b8b" stroke-width="40" fill="none"/><circle cx="220" cy="210" r="10" fill="#1a1a1a"/><circle cx="280" cy="210" r="10" fill="#1a1a1a"/><path d="M225 260 Q250 275 275 260" stroke="#c4956a" stroke-width="3" fill="none"/></svg>
EOF

cat > aa-after-1.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600"><rect width="500" height="600" fill="#fdf2f8"/><circle cx="250" cy="220" r="100" fill="#d4a574"/><path d="M150 260 Q130 400 160 500" stroke="#1a1a1a" stroke-width="45" fill="none"/><path d="M350 260 Q370 400 340 500" stroke="#1a1a1a" stroke-width="45" fill="none"/><circle cx="220" cy="210" r="10" fill="#1a1a1a"/><circle cx="280" cy="210" r="10" fill="#1a1a1a"/><path d="M225 260 Q250 275 275 260" stroke="#c4956a" stroke-width="3" fill="none"/><circle cx="250" cy="180" r="12" fill="#d4af37"/></svg>
EOF

# À propos image
cat > apropos.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 600"><rect width="500" height="600" fill="#fdf2f8"/><circle cx="250" cy="200" r="110" fill="#d4a574"/><path d="M140 240 Q120 400 150 520" stroke="#1a1a1a" stroke-width="50" fill="none"/><path d="M360 240 Q380 400 350 520" stroke="#1a1a1a" stroke-width="50" fill="none"/><circle cx="215" cy="190" r="12" fill="#1a1a1a"/><circle cx="285" cy="190" r="12" fill="#1a1a1a"/><path d="M220 245 Q250 265 280 245" stroke="#c4956a" stroke-width="4" fill="none"/><rect x="180" y="320" width="140" height="120" rx="15" fill="#ec4899" opacity="0.2"/><text x="250" y="390" text-anchor="middle" fill="#ec4899" font-size="18" font-weight="bold">BLANCHE</text></svg>
EOF

# Favicon
cat > favicon.svg << 'EOF'
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#ec4899"/><text x="50" y="65" text-anchor="middle" fill="white" font-size="50" font-weight="bold" font-family="serif">B</text></svg>
EOF

echo "All SVG assets generated successfully!"
