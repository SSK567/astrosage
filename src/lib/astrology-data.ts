import type { ReactNode } from 'react';
import {
  AquariusIcon,
  AriesIcon,
  CancerIcon,
  CapricornIcon,
  GeminiIcon,
  LeoIcon,
  LibraIcon,
  PiscesIcon,
  SagittariusIcon,
  ScorpioIcon,
  TaurusIcon,
  VirgoIcon,
  SunIcon,
  MoonIcon,
  MercuryIcon,
  VenusIcon,
  MarsIcon,
  JupiterIcon,
  SaturnIcon,
  UranusIcon,
  NeptuneIcon,
  PlutoIcon,
} from '@/components/icons';

export type ZodiacSign =
  | 'Aries'
  | 'Taurus'
  | 'Gemini'
  | 'Cancer'
  | 'Leo'
  | 'Virgo'
  | 'Libra'
  | 'Scorpio'
  | 'Sagittarius'
  | 'Capricorn'
  | 'Aquarius'
  | 'Pisces';

export const zodiacSigns: {
  name: ZodiacSign;
  dateRange: string;
  icon: (props: { className?: string }) => ReactNode;
}[] = [
  { name: 'Aries', dateRange: 'Mar 21 - Apr 19', icon: AriesIcon },
  { name: 'Taurus', dateRange: 'Apr 20 - May 20', icon: TaurusIcon },
  { name: 'Gemini', dateRange: 'May 21 - Jun 20', icon: GeminiIcon },
  { name: 'Cancer', dateRange: 'Jun 21 - Jul 22', icon: CancerIcon },
  { name: 'Leo', dateRange: 'Jul 23 - Aug 22', icon: LeoIcon },
  { name: 'Virgo', dateRange: 'Aug 23 - Sep 22', icon: VirgoIcon },
  { name: 'Libra', dateRange: 'Sep 23 - Oct 22', icon: LibraIcon },
  { name: 'Scorpio', dateRange: 'Oct 23 - Nov 21', icon: ScorpioIcon },
  { name: 'Sagittarius', dateRange: 'Nov 22 - Dec 21', icon: SagittariusIcon },
  { name: 'Capricorn', dateRange: 'Dec 22 - Jan 19', icon: CapricornIcon },
  { name: 'Aquarius', dateRange: 'Jan 20 - Feb 18', icon: AquariusIcon },
  { name: 'Pisces', dateRange: 'Feb 19 - Mar 20', icon: PiscesIcon },
];

export const horoscopes: Record<ZodiacSign, string> = {
  Aries: "Today is a day for bold action, Aries. Your pioneering spirit is at its peak. Seize new opportunities, but remember to look before you leap. Your energy can be overwhelming for some, so channel it wisely.",
  Taurus: "Patience is your virtue today, Taurus. Focus on steady progress towards your goals. It's a great day for financial planning and indulging in simple, earthly pleasures. Ground yourself in nature.",
  Gemini: "Your curiosity is your guide today, Gemini. Engage in conversations, learn something new, and share your ideas. Your social battery is fully charged, but avoid spreading yourself too thin.",
  Cancer: "Tune into your intuition, Cancer. Your emotional intelligence is heightened, making it a perfect day to connect with loved ones on a deeper level. Nurture your home and your inner self.",
  Leo: "The spotlight finds you today, Leo. Your creativity and charisma are shining brightly. Express yourself authentically and lead with your heart. Don't forget to share the stage and appreciate your audience.",
  Virgo: "Details matter today, Virgo. Your analytical mind can solve complex problems. Focus on organization and efficiency in your work and daily life. Remember to take breaks and not get lost in perfectionism.",
  Libra: "Seek balance and harmony in all things, Libra. It's an excellent day for diplomacy and beautifying your surroundings. Relationships are a key focus; strive for fairness and mutual understanding.",
  Scorpio: "Transformation is the theme for you today, Scorpio. Embrace change and let go of what no longer serves you. Your intensity and focus can lead to profound breakthroughs. Trust your powerful instincts.",
  Sagittarius: "Adventure calls, Sagittarius! Expand your horizons, whether through travel, learning, or philosophy. Your optimism is infectious, but be mindful of making promises you can't keep.",
  Capricorn: "Your ambition is in the driver's seat, Capricorn. Focus on your long-term goals and career aspirations. Your disciplined approach will pay off. Make time for rest to avoid burnout.",
  Aquarius: "Your innovative ideas can make a difference today, Aquarius. Connect with your community and think about the future. Your humanitarian spirit is strong, so find a cause you're passionate about.",
  Pisces: "Your imagination is boundless today, Pisces. Dive into creative projects and listen to the whispers of your dreams. Your compassion can be a healing force for others, but protect your own energy.",
};

export const planets = [
    { name: 'Sun', influence: 'Represents the core self, ego, and life force. It governs your personality, willpower, and the way you shine your light in the world.', icon: SunIcon },
    { name: 'Moon', influence: 'Governs emotions, instincts, and the subconscious. It reflects your inner world, your needs for security, and how you nurture yourself and others.', icon: MoonIcon },
    { name: 'Mercury', influence: 'Rules communication, intellect, and logic. It dictates how you think, speak, learn, and process information.', icon: MercuryIcon },
    { name: 'Venus', influence: 'The planet of love, beauty, and harmony. It influences your romantic relationships, aesthetic tastes, and values.', icon: VenusIcon },
    { name: 'Mars', influence: 'Symbolizes energy, action, and desire. It drives your ambition, courage, and how you assert yourself and pursue your goals.', icon: MarsIcon },
    { name: 'Jupiter', influence: 'The planet of expansion, luck, and growth. It encourages learning, philosophy, and seeking a broader perspective on life.', icon: JupiterIcon },
    { name: 'Saturn', influence: 'Represents discipline, responsibility, and structure. It teaches life lessons through challenges, pushing for maturity and long-term achievement.', icon: SaturnIcon },
    { name: 'Uranus', influence: 'The planet of innovation, rebellion, and sudden change. It encourages originality, and breaking free from convention.', icon: UranusIcon },
    { name: 'Neptune', influence: 'Governs dreams, intuition, and spirituality. It blurs the lines between reality and illusion, inspiring creativity and compassion.', icon: NeptuneIcon },
    { name: 'Pluto', influence: 'Symbolizes transformation, power, and regeneration. It governs deep, underlying forces and the cycles of death and rebirth in your life.', icon: PlutoIcon },
];

export const compatibility: Record<ZodiacSign, Record<ZodiacSign, { title: string; description: string }>> = {
  Aries: {
    Aries: { title: "Dynamic Duo", description: "A fiery, passionate, and competitive match. Full of energy and excitement, but watch out for clashing egos." },
    Taurus: { title: "Challenging but Rewarding", description: "Aries' impulsiveness meets Taurus' stability. Patience is key to making this powerful combination work." },
    Gemini: { title: "Playful Partners", description: "A lively and fun-loving pair. Gemini's wit and Aries' energy create a dynamic social duo." },
    Cancer: { title: "Opposites Attract", description: "Fiery Aries and watery Cancer can be a steamy mix, but emotional sensitivity is needed." },
    Leo: { title: "Power Couple", description: "Two fire signs create a passionate, dramatic, and attention-grabbing partnership. Both love to lead." },
    Virgo: { title: "An Unlikely Pair", description: "Aries' chaos and Virgo's order can clash, but they can also learn a lot from each other." },
    Libra: { title: "Magnetic Attraction", description: "Opposite signs on the zodiac wheel, this pairing has a strong, balancing attraction." },
    Scorpio: { title: "Intense Connection", description: "A powerful and passionate match. Both are intense and loyal, but power struggles can arise." },
    Sagittarius: { title: "Adventure Buddies", description: "Two fire signs with a love for freedom and exploration. A fun, optimistic, and growth-oriented pair." },
    Capricorn: { title: "A Study in Contrasts", description: "Aries' speed vs. Capricorn's slow-and-steady approach. Mutual respect can build a strong foundation." },
    Aquarius: { title: "Innovative Team", description: "Both independent and forward-thinking, this pair can change the world together." },
    Pisces: { title: "Dreams and Drive", description: "Pisces' imagination and Aries' drive can make dreams a reality, but emotional care is vital." },
  },
  Taurus: {
    Taurus: { title: "Solid as a Rock", description: "A stable, sensual, and loyal match. Very comfortable, but be careful of stubborn stand-offs and getting into a rut." },
    Gemini: { title: "Patience and Pace", description: "Taurus provides stability for flighty Gemini. Communication is key to bridging their different paces of life." },
    Cancer: { title: "A Nurturing Bond", description: "A harmonious and deeply caring relationship. Both signs value security, comfort, and loyalty." },
    Leo: { title: "A Royal Clash", description: "Both are fixed signs and can be very stubborn. Leo's flair and Taurus' practicality can clash, but also create luxury." },
    Virgo: { title: "Earthy Harmony", description: "A practical, grounded, and supportive connection. Both signs appreciate hard work and life's simple pleasures." },
    Libra: { title: "Lovers of Beauty", description: "Both ruled by Venus, they share a love for beauty and pleasure. Libra's indecisiveness may frustrate direct Taurus." },
    Scorpio: { title: "Opposites Attract", description: "An intense and magnetic pull. This relationship is deep, passionate, and potentially transformative for both." },
    Sagittarius: { title: "Different Worlds", description: "Sagittarius's love for freedom can feel unsettling for security-loving Taurus. Finding common ground is the challenge." },
    Capricorn: { title: "The Dream Team", description: "A highly compatible and ambitious pair. Both are earthy and practical, working together to build a secure future." },
    Aquarius: { title: "Stubborn Square", description: "A challenging mix of tradition (Taurus) and innovation (Aquarius). Both are fixed and may struggle to compromise." },
    Pisces: { title: "A Gentle Romance", description: "A sweet, romantic, and compassionate pairing. Taurus grounds Pisces' dreamy nature, and Pisces softens Taurus." },
  },
  Gemini: {
    Gemini: { title: "Double Trouble", description: "A whirlwind of ideas, fun, and communication. Never a dull moment, but a lack of grounding can be an issue." },
    Cancer: { title: "Heart and Mind", description: "Gemini's logic meets Cancer's emotion. This can be a nurturing pair if Gemini offers reassurance and Cancer allows freedom." },
    Leo: { title: "The Entertainers", description: "A social, playful, and charismatic couple. Leo's star power and Gemini's wit make them the life of the party." },
    Virgo: { title: "A Mental Match", description: "Both ruled by Mercury, they are highly intellectual. Virgo's need for order can conflict with Gemini's love for chaos." },
    Libra: { title: "Airy and Easy", description: "A highly compatible match of two air signs. They connect through conversation, socializing, and a shared love for ideas." },
    Scorpio: { title: "Deep and Light", description: "Scorpio's intensity can be fascinating or frightening to light-hearted Gemini. A relationship of mystery and intrigue." },
    Sagittarius: { title: "Opposites Attract", description: "Both are curious and love to learn. A partnership full of adventure and intellectual sparring, if they can commit." },
    Capricorn: { title: "An Odd Couple", description: "Gemini is spontaneous, Capricorn is a planner. If they can appreciate their differences, they can be a surprisingly effective team." },
    Aquarius: { title: "Intellectual Soulmates", description: "A brilliant and unconventional match. Both are intellectual, independent, and focused on the bigger picture." },
    Pisces: { title: "Lost in Translation", description: "Gemini's logic and Pisces' intuition can lead to misunderstandings. Both are adaptable, which is their saving grace." },
  },
  Cancer: {
    Cancer: { title: "A Cozy Shell", description: "Deeply emotional, nurturing, and security-oriented. They understand each other perfectly, but can get lost in their own world." },
    Leo: { title: "Sun and Moon", description: "Leo's warmth can bring Cancer out of its shell. A protective and loving pair, but Leo's need for attention may clash with Cancer's need for privacy." },
    Virgo: { title: "A Caring Connection", description: "Both are service-oriented and nurturing. Virgo's practicality helps ground Cancer's emotions." },
    Libra: { title: "A Delicate Balance", description: "Both seek harmony and partnership, but their emotional approaches differ. Direct communication is necessary." },
    Scorpio: { title: "Soulful Waters", description: "A deeply intuitive and emotional bond. Two water signs that understand each other on a profound, unspoken level." },
    Sagittarius: { title: "Homebody and Wanderer", description: "A challenging match of differing needs. Cancer wants a home, Sagittarius wants to roam. Compromise is essential." },
    Capricorn: { title: "Opposites Attract", description: "The ultimate power couple of the zodiac. Capricorn provides structure and security, while Cancer provides emotional depth and a loving home." },
    Aquarius: { title: "Distant Neighbors", description: "Cancer's emotional needs may feel overwhelming to the detached Aquarian. An unusual pairing that requires a lot of understanding." },
    Pisces: { title: "A Dreamy Union", description: "Two water signs that create a world of romance, empathy, and creativity. They connect on a deep spiritual level." },
  },
  Leo: {
    Leo: { title: "Clash of the Titans", description: "A glamorous, dramatic, and passionate pair. The biggest challenge is sharing the spotlight and avoiding a battle of egos." },
    Virgo: { title: "Showman and Critic", description: "Leo's grand gestures meet Virgo's eye for detail. Virgo's criticism can wound Leo's pride, but they can also help each other grow." },
    Libra: { title: "The A-List Couple", description: "A social, charming, and romantic pairing. Both love beauty and social events, creating a glamorous life together." },
    Scorpio: { title: "A Power Struggle", description: "Two powerful, fixed signs with intense loyalty and passion. This relationship is all or nothing, with a high potential for drama." },
    Sagittarius: { title: "A Fiery Adventure", description: "A fun-loving, optimistic, and adventurous couple. Two fire signs that fuel each other's passion for life." },
    Capricorn: { title: "Royalty and The CEO", description: "Leo's flair for performance meets Capricorn's ambition. They can be a formidable power couple if they respect each other's style." },
    Aquarius: { title: "Opposites Attract", description: "The king and the rebel. A magnetic and dynamic pairing that can be either best friends or sworn enemies. They fascinate each other." },
    Pisces: { title: "The Star and The Dreamer", description: "Leo's strength can protect sensitive Pisces, while Pisces' adoration feeds Leo's ego. A romantic but potentially unbalanced match." },
  },
  Virgo: {
    Virgo: { title: "Two Peas in a Pod", description: "A practical, efficient, and well-organized union. They understand each other's need for order, but need to watch out for being overly critical." },
    Libra: { title: "An Elegant Pairing", description: "Libra's charm and Virgo's intellect make for a refined couple. The challenge is balancing Libra's idealism with Virgo's realism." },
    Scorpio: { title: "A Deep Analysis", description: "Both signs are analytical and enjoy depth. Scorpio's passion and Virgo's devotion create a strong, private bond." },
    Sagittarius: { title: "The Perfectionist and The Explorer", description: "A clash of styles. Virgo plans, Sagittarius improvises. They can drive each other crazy or learn to appreciate a different approach." },
    Capricorn: { title: "Earthy Excellence", description: "A highly compatible and productive team. Both are hardworking, practical, and grounded, sharing similar goals and values." },
    Aquarius: { title: "Mind Over Matter", description: "Both are intellectual, but approach life differently. Virgo focuses on the details, Aquarius on the grand vision." },
    Pisces: { title: "Opposites Attract", description: "The healer and the dreamer. This pairing has a strong service-oriented bond, with each offering what the other lacks." },
  },
  Libra: {
    Libra: { title: "Perfect Harmony", description: "A graceful, social, and romantic couple. They value beauty and partnership, but may struggle with indecision and avoiding conflict." },
    Scorpio: { title: "Beauty and the Beast", description: "Libra's light charm meets Scorpio's dark intensity. A deeply magnetic relationship that can be both beautiful and challenging." },
    Sagittarius: { title: "A Social Whirlwind", description: "An upbeat, adventurous, and social pair. They love exploring new ideas and places together." },
    Capricorn: { title: "A Diplomatic Alliance", description: "Libra's social grace and Capricorn's ambition can be a powerful combination. The challenge is bridging emotional and practical differences." },
    Aquarius: { title: "A Meeting of Minds", description: "A highly compatible air-sign match. They share a love for people, ideas, and social justice. An easy, stimulating friendship." },
    Pisces: { title: "Romantic Idealists", description: "Both are romantics at heart. Libra is a social butterfly, Pisces is more reclusive. They connect through art and a shared desire for peace." },
  },
  Scorpio: {
    Scorpio: { title: "The Power of Two", description: "An incredibly intense, passionate, and profound connection. The ultimate power couple, but with potential for epic power struggles and jealousy." },
    Sagittarius: { title: "Fire and Water", description: "Scorpio's intensity meets Sagittarius's freedom. A steamy but potentially volatile mix. Honesty is their common ground." },
    Capricorn: { title: "A Formidable Force", description: "Two powerful and ambitious signs. Scorpio's strategy and Capricorn's discipline make them an unstoppable team in love and business." },
    Aquarius: { title: "An Enigmatic Clash", description: "Both are fixed signs with strong convictions. Scorpio is private and emotional, Aquarius is open and detached. A fascinating but difficult match." },
    Pisces: { title: "A Psychic Connection", description: "Two water signs that merge on a deep, intuitive level. A compassionate, spiritual, and intensely emotional bond." },
  },
  Sagittarius: {
    Sagittarius: { title: "Wild and Free", description: "An adventurous, freedom-loving, and optimistic duo. They give each other space to roam, but commitment can be a challenge." },
    Capricorn: { title: "The Philosopher and The Builder", description: "Sagittarius has the vision, Capricorn has the plan. An unlikely but potentially successful pair if they appreciate their different strengths." },
    Aquarius: { title: "Partners in Crime", description: "A friendly, unconventional, and forward-thinking match. Both value freedom and intellectual exploration. A wonderful friendship." },
    Pisces: { title: "A Clash of Realities", description: "Sagittarius's blunt honesty can hurt sensitive Pisces. They share a love for spirituality but may struggle to connect on a practical level." },
  },
  Capricorn: {
    Capricorn: { title: "The Summit Meeting", description: "A serious, ambitious, and highly responsible couple. They are dedicated to building a successful life together, but must remember to have fun." },
    Aquarius: { title: "Old and New", description: "Capricorn represents tradition, Aquarius represents the future. They can learn much from each other if they can bridge the gap between their worldviews." },
    Pisces: { title: "The Rock and The River", description: "Capricorn provides the stability and structure that Pisces needs, while Pisces brings imagination and emotional depth to Capricorn's life." },
  },
  Aquarius: {
    Aquarius: { title: "Future Forward", description: "A unique, intellectual, and humanitarian pair. They understand each other's need for independence and are best friends above all." },
    Pisces: { title: "Cosmic Connection", description: "The visionary and the dreamer. This pair connects on a humanitarian and spiritual level, though Aquarius's detachment can be hard for emotional Pisces." },
  },
  Pisces: {
    Pisces: { title: "Lost in a Dream", description: "An incredibly romantic, compassionate, and intuitive match. They create their own magical world, but may struggle with practical realities." },
  },
};

// Populate the rest of the compatibility matrix symmetrically
for (const sign1 of zodiacSigns.map(s => s.name)) {
    for (const sign2 of zodiacSigns.map(s => s.name)) {
        if (!compatibility[sign1][sign2] && compatibility[sign2] && compatibility[sign2][sign1]) {
            compatibility[sign1][sign2] = compatibility[sign2][sign1];
        }
    }
}
