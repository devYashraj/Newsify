const countries = [
    { label: 'Australia', code: 'au' },
    { label: 'Brazil', code: 'br' },
    { label: 'Canada', code: 'ca' },
    { label: 'China', code: 'cn' },
    { label: 'Egypt', code: 'eg' },
    { label: 'France', code: 'fr' },
    { label: 'Germany', code: 'de' },
    { label: 'Greece', code: 'gr' },
    { label: 'Hong Kong', code: 'hk' },
    { label: 'India', code: 'in' },
    { label: 'Ireland', code: 'ie' },
    { label: 'Israel', code: 'il' },
    { label: 'Italy', code: 'it' },
    { label: 'Japan', code: 'jp' },
    { label: 'Netherlands', code: 'nl' },
    { label: 'Norway', code: 'no' },
    { label: 'Pakistan', code: 'pk' },
    { label: 'Peru', code: 'pe' },
    { label: 'Philippines', code: 'ph' },
    { label: 'Portugal', code: 'pt' },
    { label: 'Romania', code: 'ro' },
    { label: 'Russian Federation', code: 'ru' },
    { label: 'Singapore', code: 'sg' },
    { label: 'Spain', code: 'es' },
    { label: 'Sweden', code: 'se' },
    { label: 'Switzerland', code: 'ch' },
    { label: 'Taiwan', code: 'tw' },
    { label: 'Ukraine', code: 'ua' },
    { label: 'United Kingdom', code: 'gb' },
    { label: 'United States', code: 'us' }
];

const languages = [
    { label: 'Arabic', code: 'ar' },
    { label: 'Chinese', code: 'zh' },
    { label: 'Dutch', code: 'nl' },
    { label: 'English', code: 'en' },
    { label: 'French', code: 'fr' },
    { label: 'German', code: 'de' },
    { label: 'Greek', code: 'el' },
    { label: 'Hebrew', code: 'he' },
    { label: 'Hindi', code: 'hi' },
    { label: 'Italian', code: 'it' },
    { label: 'Japanese', code: 'ja' },
    { label: 'Malayalam', code: 'ml' },
    { label: 'Marathi', code: 'mr' },
    { label: 'Norwegian', code: 'no' },
    { label: 'Portuguese', code: 'pt' },
    { label: 'Romanian', code: 'ro' },
    { label: 'Russian', code: 'ru' },
    { label: 'Spanish', code: 'es' },
    { label: 'Swedish', code: 'sv' },
    { label: 'Tamil', code: 'ta' },
    { label: 'Telugu', code: 'te' },
    { label: 'Ukrainian', code: 'uk' }
];

const categories = [
    {label: "General", code:"general"},
    {label: "World", code:"world"},
    {label: "Nation", code:"nation"},
    {label: "Business", code:"business"},
    {label: "Technology", code:"technology"},
    {label: "Entertainment", code:"entertainment"},
    {label: "Sports", code:"sports"},
    {label: "Science", code:"science"},
    {label: "Health", code:"health"},
]

const samplenews = {
    "totalArticles": 6,
    "articles": [
      {
        "title": "Google lost fight against USD 2.7 Billion EU antitrust fine",
        "description": "In 2017, the European Commission imposed a fine on Google for allegedly using its price comparison shopping service to undermine smaller European competitors. After a lower tribunal upheld this decision in 2021, Google appealed the ruling to the Court of Justice of the European Union.",
        "content": "Follow us on Image Source : FILE Google\nAlphabet's Google has reportedly lost its fight against a 2.42 billion Euro (USD 2.7 billion) fine which was levied by EU antitrust regulators seven years ago (in 2017), one of a trio of hefty fines meted out t... [2007 chars]",
        "url": "https://www.indiatvnews.com/technology/news/google-lost-fight-against-usd-2-7-billion-eu-antitrust-fine-2024-09-10-951471",
        "image": "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/09/google-search-1-1725988475.jpg",
        "publishedAt": "2024-09-11T02:30:01Z",
        "source": {
          "name": "India TV News",
          "url": "https://www.indiatvnews.com"
        }
      },
      {
        "title": "Tech firm executives to testify before US Senate about election threats",
        "description": "Google parent Alphabet's global affairs president Kent Walker, Meta's global affairs president Nick Clegg, Microsoft President Brad Smith, and a representative from Adobe will testify at the September 18 hearing",
        "content": "This is AI generated summarization, which may have errors. For context, always refer to the full article.\nGoogle parent Alphabet's global affairs president Kent Walker, Meta's global affairs president Nick Clegg, Microsoft President Brad Smith, and a... [1234 chars]",
        "url": "https://www.rappler.com/world/us-canada/tech-firm-executives-testify-before-united-states-senate-election-threats/",
        "image": "https://www.rappler.com/tachyon/2024/09/google-september-11-2024.jpg",
        "publishedAt": "2024-09-11T02:23:47Z",
        "source": {
          "name": "Rappler",
          "url": "https://www.rappler.com"
        }
      },
      {
        "title": "Tech firm executives to testify before US Senate about election threats",
        "description": "Google parent Alphabet's global affairs president Kent Walker, Meta's global affairs president Nick Clegg, Microsoft President Brad Smith, and a representative from Adobe will testify at the September 18 hearing",
        "content": "This is AI generated summarization, which may have errors. For context, always refer to the full article.\nGoogle parent Alphabet's global affairs president Kent Walker, Meta's global affairs president Nick Clegg, Microsoft President Brad Smith, and a... [1234 chars]",
        "url": "https://www.rappler.com/world/us-canada/tech-firm-executives-testify-before-united-states-senate-election-threats/",
        "image": "https://www.rappler.com/tachyon/2024/09/google-september-11-2024.jpg",
        "publishedAt": "2024-09-11T02:23:47Z",
        "source": {
          "name": "Rappler",
          "url": "https://www.rappler.com"
        }
      },
      {
        "title": "Tech firm executives to testify before US Senate about election threats",
        "description": "Google parent Alphabet's global affairs president Kent Walker, Meta's global affairs president Nick Clegg, Microsoft President Brad Smith, and a representative from Adobe will testify at the September 18 hearing",
        "content": "This is AI generated summarization, which may have errors. For context, always refer to the full article.\nGoogle parent Alphabet's global affairs president Kent Walker, Meta's global affairs president Nick Clegg, Microsoft President Brad Smith, and a... [1234 chars]",
        "url": "https://www.rappler.com/world/us-canada/tech-firm-executives-testify-before-united-states-senate-election-threats/",
        "image": "https://www.rappler.com/tachyon/2024/09/google-september-11-2024.jpg",
        "publishedAt": "2024-09-11T02:23:47Z",
        "source": {
          "name": "Rappler",
          "url": "https://www.rappler.com"
        }
      },
      {
        "title": "Tech firm executives to testify before US Senate about election threats",
        "description": "Google parent Alphabet's global affairs president Kent Walker, Meta's global affairs president Nick Clegg, Microsoft President Brad Smith, and a representative from Adobe will testify at the September 18 hearing",
        "content": "This is AI generated summarization, which may have errors. For context, always refer to the full article.\nGoogle parent Alphabet's global affairs president Kent Walker, Meta's global affairs president Nick Clegg, Microsoft President Brad Smith, and a... [1234 chars]",
        "url": "https://www.rappler.com/world/us-canada/tech-firm-executives-testify-before-united-states-senate-election-threats/",
        "image": "https://www.rappler.com/tachyon/2024/09/google-september-11-2024.jpg",
        "publishedAt": "2024-09-11T02:23:47Z",
        "source": {
          "name": "Rappler",
          "url": "https://www.rappler.com"
        }
      },
      {
        "title": "Tech firm executives to testify before US Senate about election threats",
        "description": "Google parent Alphabet's global affairs president Kent Walker, Meta's global affairs president Nick Clegg, Microsoft President Brad Smith, and a representative from Adobe will testify at the September 18 hearing",
        "content": "This is AI generated summarization, which may have errors. For context, always refer to the full article.\nGoogle parent Alphabet's global affairs president Kent Walker, Meta's global affairs president Nick Clegg, Microsoft President Brad Smith, and a... [1234 chars]",
        "url": "https://www.rappler.com/world/us-canada/tech-firm-executives-testify-before-united-states-senate-election-threats/",
        "image": "https://www.rappler.com/tachyon/2024/09/google-september-11-2024.jpg",
        "publishedAt": "2024-09-11T02:23:47Z",
        "source": {
          "name": "Rappler",
          "url": "https://www.rappler.com"
        }
      },
      {
        "title": "Tech firm executives to testify before US Senate about election threats",
        "description": "Google parent Alphabet's global affairs president Kent Walker, Meta's global affairs president Nick Clegg, Microsoft President Brad Smith, and a representative from Adobe will testify at the September 18 hearing",
        "content": "This is AI generated summarization, which may have errors. For context, always refer to the full article.\nGoogle parent Alphabet's global affairs president Kent Walker, Meta's global affairs president Nick Clegg, Microsoft President Brad Smith, and a... [1234 chars]",
        "url": "https://www.rappler.com/world/us-canada/tech-firm-executives-testify-before-united-states-senate-election-threats/",
        "image": "https://www.rappler.com/tachyon/2024/09/google-september-11-2024.jpg",
        "publishedAt": "2024-09-11T02:23:47Z",
        "source": {
          "name": "Rappler",
          "url": "https://www.rappler.com"
        }
      },
      {
        "title": "Tech firm executives to testify before US Senate about election threats",
        "description": "Google parent Alphabet's global affairs president Kent Walker, Meta's global affairs president Nick Clegg, Microsoft President Brad Smith, and a representative from Adobe will testify at the September 18 hearing",
        "content": "This is AI generated summarization, which may have errors. For context, always refer to the full article.\nGoogle parent Alphabet's global affairs president Kent Walker, Meta's global affairs president Nick Clegg, Microsoft President Brad Smith, and a... [1234 chars]",
        "url": "https://www.rappler.com/world/us-canada/tech-firm-executives-testify-before-united-states-senate-election-threats/",
        "image": "https://www.rappler.com/tachyon/2024/09/google-september-11-2024.jpg",
        "publishedAt": "2024-09-11T02:23:47Z",
        "source": {
          "name": "Rappler",
          "url": "https://www.rappler.com"
        }
      },
      {
        "title": "Tech firm executives to testify before US Senate about election threats",
        "description": "Google parent Alphabet's global affairs president Kent Walker, Meta's global affairs president Nick Clegg, Microsoft President Brad Smith, and a representative from Adobe will testify at the September 18 hearing",
        "content": "This is AI generated summarization, which may have errors. For context, always refer to the full article.\nGoogle parent Alphabet's global affairs president Kent Walker, Meta's global affairs president Nick Clegg, Microsoft President Brad Smith, and a... [1234 chars]",
        "url": "https://www.rappler.com/world/us-canada/tech-firm-executives-testify-before-united-states-senate-election-threats/",
        "image": "https://www.rappler.com/tachyon/2024/09/google-september-11-2024.jpg",
        "publishedAt": "2024-09-11T02:23:47Z",
        "source": {
          "name": "Rappler",
          "url": "https://www.rappler.com"
        }
      }
    ]
  }

export {countries, categories, languages};