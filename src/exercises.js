export const exercises = [
  {
    id: 'box-breathing',
    name: 'Box Breathing',
    emoji: '🌬️',
    tagline: 'Used by Navy SEALs to stay calm under pressure.',
    type: 'breathing',
    steps: [
      { label: 'Breathe In', duration: 4, color: '#c4b5fd' },
      { label: 'Hold', duration: 4, color: '#fbcfe8' },
      { label: 'Breathe Out', duration: 4, color: '#a7f3d0' },
      { label: 'Hold', duration: 4, color: '#bae6fd' },
    ],
    rounds: 4,
    description: 'Breathe in a square pattern to reset your nervous system.',
  },
  {
    id: '478-breathing',
    name: '4-7-8 Breathing',
    emoji: '🌊',
    tagline: 'A natural tranquilizer for the nervous system.',
    type: 'breathing',
    steps: [
      { label: 'Breathe In', duration: 4, color: '#c4b5fd' },
      { label: 'Hold', duration: 7, color: '#fbcfe8' },
      { label: 'Breathe Out', duration: 8, color: '#a7f3d0' },
    ],
    rounds: 3,
    description: 'Slow your heart rate and ease anxiety in minutes.',
  },
  {
    id: '5-4-3-2-1',
    name: '5-4-3-2-1 Grounding',
    emoji: '🌿',
    tagline: 'Anchor yourself to the present moment.',
    type: 'grounding',
    prompts: [
      { count: 5, sense: 'see', icon: '👀', examples: 'a plant, a window, your hands, shadows, colors' },
      { count: 4, sense: 'feel', icon: '🤲', examples: 'your chair, your clothes, the air, your feet on the floor' },
      { count: 3, sense: 'hear', icon: '👂', examples: 'traffic, birds, your breath, a hum' },
      { count: 2, sense: 'smell', icon: '👃', examples: 'fresh air, your clothes, a nearby scent' },
      { count: 1, sense: 'taste', icon: '👅', examples: 'what\'s in your mouth right now' },
    ],
    description: 'Use your five senses to pull your mind back to right now.',
  },
  {
    id: 'body-scan',
    name: 'Quick Body Scan',
    emoji: '✨',
    tagline: 'Release tension you didn\'t know you were holding.',
    type: 'scan',
    areas: [
      { part: 'your jaw', instruction: 'Unclench your teeth. Let your jaw go soft.' },
      { part: 'your shoulders', instruction: 'Drop them away from your ears. Let them melt down.' },
      { part: 'your hands', instruction: 'Open your palms. Wiggle your fingers gently.' },
      { part: 'your belly', instruction: 'Take one deep breath and let it fill your belly.' },
      { part: 'your legs', instruction: 'Feel your feet flat on the floor. You are grounded.' },
    ],
    description: 'Scan your body from top to bottom, releasing tension as you go.',
  },
  {
    id: 'safe-place',
    name: 'Safe Place Visualization',
    emoji: '🏡',
    tagline: 'Your mind can be your sanctuary.',
    type: 'visualization',
    scenes: [
      'Close your eyes and picture your favorite peaceful place.',
      'Maybe it\'s a quiet beach at sunset, or a cozy room with soft lighting.',
      'Notice the colors around you in this place.',
      'Feel the temperature — warm sunshine, or a cool gentle breeze.',
      'Listen to the sounds there. Birdsong, waves, silence.',
      'You are safe here. Nothing can reach you in this place.',
      'Breathe slowly and rest here for a moment.',
    ],
    description: 'Escape to a peaceful place in your mind whenever you need to.',
  },
  {
    id: 'mindful-pause',
    name: 'The 3-Breath Reset',
    emoji: '🍃',
    tagline: 'Sometimes three breaths is all you need.',
    type: 'breathing',
    steps: [
      { label: 'Breathe In Slowly', duration: 5, color: '#c4b5fd' },
      { label: 'Breathe Out Slowly', duration: 6, color: '#a7f3d0' },
    ],
    rounds: 3,
    description: 'Three deep, intentional breaths to interrupt the anxiety spiral.',
  },
]

export const affirmations = [
  // Grounding & safety
  'This feeling is temporary. It will pass.',
  'I am safe right now, in this moment.',
  'Right now, in this moment, I am okay.',
  'I am grounded. I am here. I am enough.',
  'My feet are on the floor. I am held by the earth.',
  'This too shall pass — it always has.',
  'I am exactly where I need to be.',

  // Self-compassion
  'I have survived every difficult moment so far.',
  'It\'s okay to feel this. I don\'t have to fight it.',
  'I choose to be gentle with myself today.',
  'I deserve kindness — especially from myself.',
  'I am allowed to take up space and feel my feelings.',
  'I am doing the best I can, and that is always enough.',
  'I give myself permission to rest.',
  'I am worthy of peace, just as I am.',
  'Being gentle with myself is an act of courage.',

  // Breath & body
  'My breath is always with me. I can always return to it.',
  'My body is doing its best to protect me. I am safe.',
  'Every exhale releases what no longer serves me.',
  'With every breath, I release a little more tension.',
  'My body knows how to calm itself. I trust it.',
  'Each slow breath is a message of safety to my body.',

  // Perspective & strength
  'I am not my anxiety. I am the one watching it.',
  'I can let this wave wash over me and pass.',
  'I am more than my fears.',
  'Peace is always just a few breaths away.',
  'I deserve to feel calm and at ease.',
  'My thoughts are not facts. I can choose what I believe.',
  'Anxiety is a feeling, not a truth.',
  'I have faced hard things before. I know how to get through.',
  'I am braver than I feel right now.',
  'My strength is quiet but it is always there.',

  // Softness & hope
  'Healing is not linear, and that is okay.',
  'Small moments of calm are enough. They count.',
  'I am allowed to feel better.',
  'Tomorrow holds gentler moments than today.',
  'I choose to meet this moment with softness.',
  'I am learning. I am growing. I am okay.',
  'There is more right with me than wrong with me.',
  'I am held. I am loved. I am not alone.',
  'This moment will become a memory. I will look back knowing I made it.',
  'Something in me knows how to find peace. I trust that part of me.',
]

export function getRandomExercise() {
  return exercises[Math.floor(Math.random() * exercises.length)]
}

export function getRandomAffirmations(count = 3) {
  const shuffled = [...affirmations].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}
