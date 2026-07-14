import * as Phosphor from '@phosphor-icons/react';

const iconsToCheck = [
  'Lightning', 'Timer', 'Desktop', 'Buildings', 'Broadcast', 'Radar', 'Headset', 'Globe', 'ArrowsClockwise', 'FloppyDisk', 'ChartBar', 'Robot', 'LockKey', 'TrendUp', 'Users', 'ClipboardText', 'Money',
  'Target', 'Brain', 'Sparkle', 'MagicWand', 'Eye', 'ChatCircle', 'Factory', 'Microscope', 'TestTube',
  'Cloud', 'TrendDown', 'Rocket', 'Truck', 'HardHat', 'Wrench', 'Lock', 'Trophy', 'Lightbulb',
  'Shield', 'MagnifyingGlass', 'Siren', 'Toolbox', 'Medal', 'Binoculars',
  'ShoppingCart',
  'Laptop', 'DeviceMobile', 'Link', 'CheckCircle'
];

let missing = [];
for (const icon of iconsToCheck) {
  if (!Phosphor[icon]) {
    missing.push(icon);
  }
}

if (missing.length > 0) {
  console.log('Missing icons:', missing.join(', '));
} else {
  console.log('All icons found!');
}
