/**
 * Frontend client configurations.
 * Switch via: VITE_CLIENT=dhc npm run dev
 * Colors are now handled entirely by client-theme.css.
 */

const clients = {

  dhc: {
    brandName: "DHC",
    tagline: "ビューティーガイド",
    welcome: {
      badge: "DHC AI ガイド",
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
  },

  orbis: {
    brandName: "ORBIS",
    tagline: "スキンケアガイド",
    welcome: {
      badge: "ORBIS AI ガイド",
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
  },

  fancl: {
    brandName: "FANCL",
    tagline: "無添加ビューティーガイド",
    welcome: {
      badge: "FANCL AI ガイド",
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
  },

  montbell: {
    brandName: "MONT-BELL",
    tagline: "アウトドアギアガイド",
    welcome: {
      badge: "MONT-BELL AI ガイド",
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
  },

  goldwin: {
    brandName: "GOLDWIN",
    tagline: "スポーツウェアガイド",
    welcome: {
      badge: "GOLDWIN AI ガイド",
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
  },

  descente: {
    brandName: "DESCENTE",
    tagline: "スポーツウェアガイド",
    welcome: {
      badge: "DESCENTE AI ガイド",
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
  },

  patagonia: {
    brandName: "PATAGONIA",
    tagline: "アウトドアガイド",
    welcome: {
      badge: "PATAGONIA AI ガイド",
      title: "地球を守りながら\n自然を楽しむ",
      subtitle: "活動スタイルと大切にしていることを教えてください。長く使える本物のギアをご提案します。",
      icebreakerLabel: "どんなアウトドアのご相談ですか？",
      icebreakers: [
        { emoji: "🧗", label: "クライミングウェアを選びたい" },
        { emoji: "🌊", label: "サーフィン用アイテムを知りたい" },
        { emoji: "🎣", label: "フライフィッシングギアを探している" },
        { emoji: "♻️", label: "サステナブルな製品を選びたい" },
        { emoji: "🏕️", label: "バックパッキング装備を相談したい" },
        { emoji: "🌿", label: "環境に配慮したギアを選びたい" },
      ],
    },
    disclaimer: "アウトドア活動は安全を最優先に。環境への配慮も忘れずに楽しんでください。",
    newChat: "新しい相談",
  },

  snowpeak: {
    brandName: "SNOW PEAK",
    tagline: "キャンプスタイルガイド",
    welcome: {
      badge: "SNOW PEAK AI ガイド",
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
  },

  pola: {
    brandName: "POLA",
    tagline: "プレミアムビューティーガイド",
    welcome: {
      badge: "POLA AI ガイド",
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
  },

  enoteca: {
    brandName: "ENOTECA",
    tagline: "ワインガイド",
    welcome: {
      badge: "ENOTECA AI ガイド",
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
  },
}

const DEFAULT_CLIENT = "dhc"

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