/**
 * Frontend client configurations.
 * The active client is set via the VITE_CLIENT env variable.
 * e.g. VITE_CLIENT=dhc npm run dev
 *
 * Colors follow the same CSS variable naming as index.css.
 * Each client defines a full palette override.
 */

const clients = {

  // ── DHC ──────────────────────────────────────────────────
  dhc: {
    brandName: "DHC",
    tagline: "ビューティーガイド",
    welcome: {
      badge: "DHC AIガイド",
      title: "あなただけの\nビューティールーティン",
      subtitle: "肌の悩みや健康目標を教えてください。最適なDHCのスキンケア・サプリをご提案します。",
      icebreakerLabel: "どんなお悩みからはじめますか？",
      icebreakers: [
        { emoji: "✨", label: "肌のうるおいを高めたい" },
        { emoji: "🌟", label: "シミ・くすみをケアしたい" },
        { emoji: "💊", label: "美容サプリを始めたい" },
        { emoji: "🌙", label: "エイジングケアをしたい" },
        { emoji: "🛡️", label: "敏感肌のケア方法を知りたい" },
        { emoji: "💪", label: "内側から綺麗になりたい" },
      ],
    },
    disclaimer: "情報提供のみを目的としています。深刻な肌トラブルは皮膚科専門医にご相談ください。",
    newChat: "新しい相談",
    colors: {
      "--brand-950": "#1a0a0a",
      "--brand-800": "#6b1a1a",
      "--brand-700": "#9b2c2c",
      "--brand-600": "#c53030",
      "--brand-500": "#e53e3e",
      "--brand-300": "#fc8181",
      "--brand-200": "#fed7d7",
      "--brand-100": "#fff5f5",
      "--brand-50":  "#fff8f8",
      "--text-primary":   "#1a0505",
      "--text-secondary": "#742a2a",
      "--text-muted":     "#c05621",
    },
  },

  // ── ORBIS ─────────────────────────────────────────────────
  orbis: {
    brandName: "ORBIS",
    tagline: "スキンケアガイド",
    welcome: {
      badge: "ORBIS AIガイド",
      title: "あなたの肌に\n寄り添うケアを",
      subtitle: "肌タイプや季節の悩みを教えてください。オイルフリーのORBISで、肌本来の力を引き出しましょう。",
      icebreakerLabel: "どんなお悩みからはじめますか？",
      icebreakers: [
        { emoji: "💧", label: "オイリー肌のテカリを抑えたい" },
        { emoji: "🌸", label: "毛穴・ニキビのケアをしたい" },
        { emoji: "✨", label: "透明感のある肌になりたい" },
        { emoji: "🌿", label: "シンプルなスキンケアを知りたい" },
        { emoji: "☀️", label: "紫外線ダメージをケアしたい" },
        { emoji: "🌙", label: "乾燥ケアのルーティンを作りたい" },
      ],
    },
    disclaimer: "情報提供のみを目的としています。肌トラブルが続く場合は皮膚科専門医にご相談ください。",
    newChat: "新しい相談",
    colors: {
      "--brand-950": "#0a1020",
      "--brand-800": "#1a2a5e",
      "--brand-700": "#2a4494",
      "--brand-600": "#3b5ec7",
      "--brand-500": "#4c72e0",
      "--brand-300": "#90aef0",
      "--brand-200": "#c7d7fa",
      "--brand-100": "#eef2fd",
      "--brand-50":  "#f5f8ff",
      "--text-primary":   "#0a1020",
      "--text-secondary": "#2a3f7a",
      "--text-muted":     "#5a72b0",
    },
  },

  // ── FANCL ─────────────────────────────────────────────────
  fancl: {
    brandName: "FANCL",
    tagline: "無添加ビューティーガイド",
    welcome: {
      badge: "FANCL AIガイド",
      title: "無添加の安心で\n輝く肌へ",
      subtitle: "防腐剤・合成添加物ゼロのFANCLで、あなたの肌と体に本当に合ったケアをご提案します。",
      icebreakerLabel: "どんなお悩みからはじめますか？",
      icebreakers: [
        { emoji: "🌿", label: "敏感肌に合うケアを知りたい" },
        { emoji: "✨", label: "無添加コスメを始めたい" },
        { emoji: "💊", label: "美容サプリの選び方を知りたい" },
        { emoji: "🌸", label: "内側と外側からケアしたい" },
        { emoji: "🧴", label: "洗顔・保湿の正しい順番を知りたい" },
        { emoji: "🌙", label: "エイジングケアを始めたい" },
      ],
    },
    disclaimer: "情報提供のみを目的としています。深刻な肌トラブルは皮膚科専門医にご相談ください。",
    newChat: "新しい相談",
    colors: {
      "--brand-950": "#0d1a10",
      "--brand-800": "#1a4025",
      "--brand-700": "#276034",
      "--brand-600": "#348045",
      "--brand-500": "#3d9e52",
      "--brand-300": "#7ecb90",
      "--brand-200": "#b8e8c2",
      "--brand-100": "#e8f7ec",
      "--brand-50":  "#f3fbf5",
      "--text-primary":   "#0d1a10",
      "--text-secondary": "#1e5530",
      "--text-muted":     "#4a8a5a",
    },
  },

  // ── Montbell ──────────────────────────────────────────────
  montbell: {
    brandName: "mont-bell",
    tagline: "アウトドアギアガイド",
    welcome: {
      badge: "mont-bell AIガイド",
      title: "あなたの冒険を\nサポートするギアを",
      subtitle: "活動スタイルと目的地を教えてください。最適な軽量ギアとウェアをご提案します。",
      icebreakerLabel: "どんなアクティビティのご相談ですか？",
      icebreakers: [
        { emoji: "🏔️", label: "登山ウェアを揃えたい" },
        { emoji: "⛺", label: "キャンプ装備を選びたい" },
        { emoji: "🎿", label: "スキーウェアを探している" },
        { emoji: "🚵", label: "トレイルランの装備を知りたい" },
        { emoji: "🌧️", label: "雨対策のレインウェアを選びたい" },
        { emoji: "🎒", label: "軽量バックパックを探している" },
      ],
    },
    disclaimer: "山岳・アウトドア活動には常に安全確認を行い、無理のない計画で楽しんでください。",
    newChat: "新しい相談",
    colors: {
      "--brand-950": "#0a1520",
      "--brand-800": "#0f3460",
      "--brand-700": "#154e8a",
      "--brand-600": "#1a6ab5",
      "--brand-500": "#2080d0",
      "--brand-300": "#70b8f0",
      "--brand-200": "#b8dcf8",
      "--brand-100": "#e8f4fd",
      "--brand-50":  "#f2f9ff",
      "--text-primary":   "#0a1520",
      "--text-secondary": "#0f3460",
      "--text-muted":     "#3a6a9a",
    },
  },

  // ── Goldwin ───────────────────────────────────────────────
  goldwin: {
    brandName: "Goldwin",
    tagline: "スポーツウェアガイド",
    welcome: {
      badge: "Goldwin AIガイド",
      title: "パフォーマンスを\n引き出すウェアを",
      subtitle: "競技とレベルを教えてください。Goldwinの高機能ウェアで最高のパフォーマンスをサポートします。",
      icebreakerLabel: "どのスポーツのご相談ですか？",
      icebreakers: [
        { emoji: "🎿", label: "スキー・スノーボードウェアを選びたい" },
        { emoji: "🏃", label: "ランニングウェアを探している" },
        { emoji: "🏋️", label: "フィットネスウェアを揃えたい" },
        { emoji: "🧊", label: "防寒インナーを選びたい" },
        { emoji: "⛰️", label: "アウトドアウェアを知りたい" },
        { emoji: "🏅", label: "試合用ウェアを相談したい" },
      ],
    },
    disclaimer: "スポーツ活動は体調を確認しながら、無理のない範囲で行ってください。",
    newChat: "新しい相談",
    colors: {
      "--brand-950": "#0f0f0f",
      "--brand-800": "#1a1a1a",
      "--brand-700": "#2d2d2d",
      "--brand-600": "#404040",
      "--brand-500": "#555555",
      "--brand-300": "#999999",
      "--brand-200": "#cccccc",
      "--brand-100": "#f0f0f0",
      "--brand-50":  "#f8f8f8",
      "--text-primary":   "#0f0f0f",
      "--text-secondary": "#333333",
      "--text-muted":     "#777777",
    },
  },

  // ── Descente ──────────────────────────────────────────────
  descente: {
    brandName: "DESCENTE",
    tagline: "スポーツウェアガイド",
    welcome: {
      badge: "DESCENTE AIガイド",
      title: "競技を高める\nウェアの選び方",
      subtitle: "種目と目標を教えてください。DESCENTEの先進技術でパフォーマンスをサポートします。",
      icebreakerLabel: "どの競技のご相談ですか？",
      icebreakers: [
        { emoji: "🎿", label: "スキー競技ウェアを選びたい" },
        { emoji: "🚴", label: "サイクリングウェアを探している" },
        { emoji: "⚾", label: "野球ユニフォームについて知りたい" },
        { emoji: "🏃", label: "マラソン用ウェアを相談したい" },
        { emoji: "🏔️", label: "山岳ウェアを揃えたい" },
        { emoji: "🏋️", label: "チームウェアのカスタムを検討中" },
      ],
    },
    disclaimer: "スポーツ活動は体調を確認しながら、無理のない範囲で行ってください。",
    newChat: "新しい相談",
    colors: {
      "--brand-950": "#10050a",
      "--brand-800": "#500a20",
      "--brand-700": "#7a1030",
      "--brand-600": "#a01840",
      "--brand-500": "#c02050",
      "--brand-300": "#e87090",
      "--brand-200": "#f5b8c8",
      "--brand-100": "#fce8ee",
      "--brand-50":  "#fef4f7",
      "--text-primary":   "#10050a",
      "--text-secondary": "#600a25",
      "--text-muted":     "#a04060",
    },
  },

  // ── Patagonia ─────────────────────────────────────────────
  patagonia: {
    brandName: "Patagonia",
    tagline: "アウトドアガイド",
    welcome: {
      badge: "Patagonia AIガイド",
      title: "地球を守りながら\n自然を楽しむ",
      subtitle: "活動スタイルと大切にしていることを教えてください。長く使える本物のギアをご提案します。",
      icebreakerLabel: "どんなアウトドアのご相談ですか？",
      icebreakers: [
        { emoji: "🧗", label: "クライミングウェアを選びたい" },
        { emoji: "🌊", label: "サーフィン用アイテムを知りたい" },
        { emoji: "🎣", label: "フライフィッシングギアを探している" },
        { emoji: "♻️", label: "サステナブルな製品を選びたい" },
        { emoji: "🏕️", label: "バックパッキング装備を相談したい" },
        { emoji: "🌿", label: "修理・長持ちさせる方法を知りたい" },
      ],
    },
    disclaimer: "アウトドア活動は安全を最優先に。環境への配慮も忘れずに楽しんでください。",
    newChat: "新しい相談",
    colors: {
      "--brand-950": "#0a1505",
      "--brand-800": "#1a3a0a",
      "--brand-700": "#2a5a10",
      "--brand-600": "#3a7a18",
      "--brand-500": "#4a9420",
      "--brand-300": "#8acc60",
      "--brand-200": "#c0e898",
      "--brand-100": "#e8f7d8",
      "--brand-50":  "#f2fbea",
      "--text-primary":   "#0a1505",
      "--text-secondary": "#1a4008",
      "--text-muted":     "#4a7a20",
    },
  },

  // ── Snow Peak ─────────────────────────────────────────────
  snowpeak: {
    brandName: "Snow Peak",
    tagline: "キャンプスタイルガイド",
    welcome: {
      badge: "Snow Peak AIガイド",
      title: "人生に、\n野遊びを。",
      subtitle: "どんなキャンプスタイルをお考えですか？Snow Peakの一生モノのギアをご提案します。",
      icebreakerLabel: "どんなキャンプのご相談ですか？",
      icebreakers: [
        { emoji: "⛺", label: "テントの選び方を知りたい" },
        { emoji: "🔥", label: "焚き火台を選びたい" },
        { emoji: "🍳", label: "キャンプ調理器具を揃えたい" },
        { emoji: "👨‍👩‍👧", label: "ファミリーキャンプを始めたい" },
        { emoji: "🌲", label: "ソロキャンプの装備を相談したい" },
        { emoji: "🌟", label: "キャンプウェアを選びたい" },
      ],
    },
    disclaimer: "アウトドア活動は安全に配慮し、自然環境を大切に楽しんでください。",
    newChat: "新しい相談",
    colors: {
      "--brand-950": "#0d0d10",
      "--brand-800": "#1a1a2e",
      "--brand-700": "#2a2a4a",
      "--brand-600": "#3a3a6a",
      "--brand-500": "#4a4a8a",
      "--brand-300": "#8a8abe",
      "--brand-200": "#c0c0e0",
      "--brand-100": "#eaeaf5",
      "--brand-50":  "#f5f5fb",
      "--text-primary":   "#0d0d10",
      "--text-secondary": "#2a2a4a",
      "--text-muted":     "#5a5a8a",
    },
  },

  // ── POLA ──────────────────────────────────────────────────
  pola: {
    brandName: "POLA",
    tagline: "プレミアムビューティーガイド",
    welcome: {
      badge: "POLA AIガイド",
      title: "科学が導く\nあなただけの美しさへ",
      subtitle: "肌の悩みと理想の肌を教えてください。POLAの最先端スキンケアで輝く肌をご提案します。",
      icebreakerLabel: "どんなお悩みからはじめますか？",
      icebreakers: [
        { emoji: "✨", label: "シワ・たるみのエイジングケアを知りたい" },
        { emoji: "🌟", label: "シミ・くすみのホワイトニングをしたい" },
        { emoji: "💎", label: "プレミアムケアのルーティンを作りたい" },
        { emoji: "🌙", label: "ハリ・弾力のある肌になりたい" },
        { emoji: "💊", label: "インナーケアサプリを始めたい" },
        { emoji: "🌸", label: "40代・50代の肌ケアを相談したい" },
      ],
    },
    disclaimer: "情報提供のみを目的としています。深刻な肌トラブルは皮膚科専門医にご相談ください。",
    newChat: "新しい相談",
    colors: {
      "--brand-950": "#120510",
      "--brand-800": "#3d0a35",
      "--brand-700": "#5e1050",
      "--brand-600": "#801870",
      "--brand-500": "#a02090",
      "--brand-300": "#d070c0",
      "--brand-200": "#eab8e0",
      "--brand-100": "#f8e8f5",
      "--brand-50":  "#fdf3fc",
      "--text-primary":   "#120510",
      "--text-secondary": "#4a0a40",
      "--text-muted":     "#903080",
    },
  },

  // ── Enoteca ───────────────────────────────────────────────
  enoteca: {
    brandName: "ENOTECA",
    tagline: "ワインガイド",
    welcome: {
      badge: "ENOTECA AIガイド",
      title: "あなたの一本を\n見つけましょう",
      subtitle: "好みのワインやシーンを教えてください。世界中の上質なワインをご提案します。",
      icebreakerLabel: "どんなワインをお探しですか？",
      icebreakers: [
        { emoji: "🍷", label: "食事に合うワインを選びたい" },
        { emoji: "🎁", label: "贈り物に喜ばれるワインを知りたい" },
        { emoji: "🥂", label: "記念日・特別な日のワインを選びたい" },
        { emoji: "🌍", label: "好みのワインから産地を探したい" },
        { emoji: "🍾", label: "ワインの基礎を学びたい" },
        { emoji: "💰", label: "コスパの良いワインを教えてほしい" },
      ],
    },
    disclaimer: "お酒は20歳になってから。飲酒は適量を心がけ、飲んだら乗らない。妊娠中・授乳中の飲酒はお控えください。",
    newChat: "新しい相談",
    colors: {
      "--brand-950": "#10050a",
      "--brand-800": "#3d0f20",
      "--brand-700": "#641830",
      "--brand-600": "#8c2040",
      "--brand-500": "#a82850",
      "--brand-300": "#d87090",
      "--brand-200": "#f0b8c8",
      "--brand-100": "#fae8ee",
      "--brand-50":  "#fdf4f7",
      "--text-primary":   "#10050a",
      "--text-secondary": "#4a1020",
      "--text-muted":     "#903050",
    },
  },
}

const DEFAULT_CLIENT = "dhc"

/**
 * Returns the config for the active client.
 * Reads VITE_CLIENT env variable (set at build/dev time).
 */
export function getClientConfig() {
  const clientId = (import.meta.env.VITE_CLIENT || DEFAULT_CLIENT).toLowerCase()
  const config = clients[clientId]
  if (!config) {
    console.warn(`Unknown VITE_CLIENT="${clientId}", falling back to "${DEFAULT_CLIENT}"`)
    return clients[DEFAULT_CLIENT]
  }
  return config
}

export default clients