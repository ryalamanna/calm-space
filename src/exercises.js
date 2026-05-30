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
  // Right now, you are okay
  'Right now, in this moment, I am okay.',
  'This feeling is temporary. It will pass.',
  'I am safe right now, in this moment.',
  'I don\'t have to fix everything today. Just this breath.',
  'Nothing catastrophic is happening right now. I am okay.',
  'I can slow down. The world will wait.',
  'I am allowed to feel overwhelmed without being defined by it.',
  'This moment is hard, but I have been through hard before.',
  'Even when everything feels like too much, I am still here.',
  'I don\'t have to be okay right now. But I will be.',

  // Your body is on your side
  'My feet are on the floor. I am held by the earth.',
  'My breath is always with me. I can always return to it.',
  'My body is doing its best to protect me. I am safe.',
  'Every exhale carries some of the tension out with it.',
  'My shoulders can drop. My jaw can unclench. It\'s safe.',
  'Each slow breath tells my nervous system: we are safe now.',
  'My body has carried me through every hard day so far.',
  'I can feel my heartbeat and it is steady. I am alive. I am here.',
  'Tension is just energy that needs somewhere to go. I release it now.',
  'My body is not my enemy. We are in this together.',

  // You are not your anxiety
  'I am not my anxiety. I am the one watching it.',
  'Anxiety is a feeling, not a forecast.',
  'My thoughts are not facts. I don\'t have to believe every one of them.',
  'I can notice this feeling without becoming it.',
  'Just because my mind says something is dangerous doesn\'t make it true.',
  'I can hold worry loosely, the way you hold a leaf in an open hand.',
  'My brain is trying to protect me, even when it overcorrects.',
  'Fear is loud, but it is not always right.',
  'I can have a frightening thought without taking frightening action.',
  'This wave will peak and it will pass. It always does.',

  // You\'ve survived harder things
  'I have survived every difficult moment so far. My record is 100%.',
  'I have faced hard things before and I came out the other side.',
  'I have gotten through days I thought would break me.',
  'I am still standing. That takes more strength than I give myself credit for.',
  'I know what it feels like when hard things end. This will end too.',
  'The version of me that got through yesterday is the same one here now.',
  'I have been scared before and found my footing again. I will now too.',

  // Be gentle with yourself
  'I deserve the same kindness I would give a good friend.',
  'It\'s okay to feel this. I don\'t have to fight it or fix it right now.',
  'I choose to be gentle with myself, especially on the hard days.',
  'I am doing the best I can with what I have right now. That is enough.',
  'I give myself permission to rest without earning it first.',
  'I am not behind. I am not failing. I am human.',
  'There is no version of me that needs to be ashamed of struggling.',
  'I can hold myself with the same softness I\'d offer someone I love.',
  'Struggling doesn\'t mean I\'m weak. It means I\'m carrying something heavy.',
  'I don\'t need to perform okay. I just need to be honest with myself.',

  // Small moments count
  'This quiet moment I\'m giving myself right now counts for something.',
  'Small steps forward are still forward.',
  'I don\'t need to feel completely better. Just a little softer than before.',
  'One breath at a time is enough. That\'s all I need to do.',
  'Even five minutes of stillness can change the rest of the day.',
  'I don\'t have to solve everything today. Just get through this hour.',
  'Rest is not laziness. It\'s how I recover enough to keep going.',
  'I am allowed to take up space, go slowly, and need things.',

  // Grounded and present
  'I am grounded. I am here. I am enough.',
  'I am exactly where I need to be.',
  'This too shall pass — it always has.',
  'The present moment is the only one I actually have to deal with.',
  'Right now there is a floor beneath me, air around me, and breath inside me.',
  'I am real and I am here and that is all that\'s required of me right now.',
  'The past is done. The future isn\'t here. Right now, I am okay.',
  'I belong here, in this body, in this moment.',

  // Hope and softness
  'Healing is not linear, and that\'s okay. I\'m allowed to have hard days.',
  'Tomorrow holds gentler moments than today does.',
  'Something in me knows how to find peace. I trust that part.',
  'I am learning. I am growing. Even when it doesn\'t feel that way.',
  'There is more right with me than wrong with me.',
  'I am held. I am loved. Even when I feel completely alone.',
  'Softer days are ahead. I just have to stay until I reach them.',
  'I am at peace with where I am, even if it\'s not where I want to be yet.',
  'I am allowed to feel better. I am allowed to want more ease.',
  'There is a version of tomorrow where I feel okay. I\'m moving toward it.',
]

export function getRandomExercise() {
  return exercises[Math.floor(Math.random() * exercises.length)]
}

export function getRandomAffirmations(count = 3) {
  const shuffled = [...affirmations].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}
