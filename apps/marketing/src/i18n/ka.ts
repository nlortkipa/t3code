import type { Messages } from "./en";

// Georgian hangs suffixes off Latin words with a hyphen. The word joiner after it (\u2060) keeps a
// line from ending in "PR-" with the suffix wrapped onto the next one.

export const ka: Messages = {
  layout: {
    defaultTitle: "T3 Code",
    defaultDescription: "T3 Code. ღია კოდის მართვის პანელი პროგრამირების აგენტებისთვის.",
    socialImageAlt:
      "T3 Code: ღია კოდის მართვის პანელი პროგრამირების აგენტებისთვის. Claude Code, Codex, Cursor, OpenCode, Grok და Antigravity.",
    homeLabel: "T3 Code-\u2060ის მთავარი გვერდი",
    download: "ჩამოტვირთვა",
    starsLabel: "მიანიჭეთ T3 Code-\u2060ს ვარსკვლავი GitHub-\u2060ზე, {stars} ვარსკვლავი",
    githubStars: "{stars} GitHub-\u2060ზე",
    language: "ენა",
    mitLicensed: "MIT ლიცენზია",
    iosApp: "iOS აპლიკაცია",
    androidApp: "Android აპლიკაცია",
    terms: "პირობები",
    privacy: "კონფიდენციალურობა",
    security: "უსაფრთხოება",
  },
  home: {
    title: "T3 Code | ღია კოდის მართვის პანელი პროგრამირების აგენტებისთვის",
    description: "T3 Code. ღია კოდის მართვის პანელი პროგრამირების აგენტებისთვის.",
    heroTitle: ["ღია კოდის მართვის", "პანელი პროგრამირების", "აგენტებისთვის."],
    heroSub:
      "მართეთ Claude Code, Codex, Antigravity, OpenCode, Cursor და Grok ერთი სივრციდან. გამოიყენეთ საკუთარი გამოწერა. დაფორკეთ მთლიანად.",
    downloadForMac: "ჩამოტვირთვა macOS-\u2060ისთვის",
    downloadForWindows: "ჩამოტვირთვა Windows-\u2060ისთვის",
    downloadForLinux: "ჩამოტვირთვა Linux-\u2060ისთვის",
    downloadForIos: "ჩამოტვირთვა iOS-\u2060ისთვის",
    downloadForAndroid: "ჩამოტვირთვა Android-\u2060ისთვის",
    sourceLink: "მოიპარეთ ჩვენი კოდი (ლეგალურად)",
    alsoOnPhone: "ტელეფონზეც:",
    screenshotAlt:
      "T3 Code ერთ თრედში უშვებს Claude-\u2060ის, Codex-\u2060ის, Muse-\u2060ისა და Gemini-\u2060ის სუბაგენტებს",
    endorsementsTitle: "{users}-\u2060ზე მეტი დეველოპერი გვითმენს",
    endorsementsSub: "ზოგმა ამაზე ტვიტიც კი დაწერა.",
    endorsementsLabel: "დეველოპერების შეფასებები",
    readPost: "{handle}-\u2060ის პოსტის წაკითხვა X-\u2060ზე",
    harnessTitle: "საკუთარი გამოწერით",
    harnessBody:
      "T3 Code ტოკენებს არ ყიდის. მიაერთეთ Claude Code, Codex, Antigravity, OpenCode, Cursor ან Grok იმ გამოწერით, რომელიც უკვე გაქვთ. ჩვენ აგენტებს ვმართავთ, თქვენი გამოწერა კი თქვენვე გრჩებათ.",
    googleSignIn: "Google-\u2060ით შესვლა",
    harnessPoints: [
      "არც გასაღებების გადაყიდვა, არც კვოტის ლიმიტები.",
      "შეცვალეთ მოდელი თრედის შუაში.",
      "ახალი აგენტები ყოველ კვირას ემატება.",
    ],
    gitVisualLabel:
      "T3 Code-\u2060ის Git სამუშაო პროცესის ილუსტრაცია: დიფის განხილვა, ცვლილებების commit და push, pull request-\u2060ის გახსნა.",
    prReady: "მზადაა",
    prCommits: "3 კომიტი",
    viewDiff: "დიფის ნახვა",
    openPullRequest: "Pull request-\u2060ის გახსნა",
    commitPush: "Commit და push",
    gitTitle: "Commit, push და PR ერთი ღილაკით.",
    gitBody:
      "აგენტის ყოველი თრედი საკუთარ ბრენჩში მუშაობს. როცა შედეგი მოგეწონებათ, ერთი ღილაკი GitHub-\u2060ზე PR-\u2060ს გახსნის დაგენერირებული სათაურით, აღწერითა და ცვლილებების სიით. ტერმინალში ცეკვა აღარ დაგჭირდებათ.",
    gitPoints: [
      "PR-\u2060ის სათაურები და აღწერები ავტომატურად",
      "დიფის განხილვა push-\u2060მდე",
      "Draft PR-\u2060ები, PR-\u2060ების სტეკი, PR-\u2060ების შესწორება",
      "მუშაობს თქვენს არსებულ GitHub ავტორიზაციასთან",
    ],
    openTitle: "რამე არ მოგწონთ? დააფორკეთ.",
    openPoints: [
      { lead: "შეცვალეთ ინტერფეისი.", rest: "ყველა ეკრანი საკუთარ გემოვნებაზე მოარგეთ." },
      {
        lead: "დაამატეთ აგენტი.",
        rest: "შეაერთეთ საკუთარი ხელსაწყოები, მოდელები და სამუშაო პროცესები.",
      },
      {
        lead: "გამოუშვით საკუთარი ბილდი.",
        rest: "თავად დაჰოსტეთ ან საკუთარი სახელით გაავრცელეთ.",
      },
    ],
    stars: "{stars} ვარსკვლავი",
    forkOnGithub: "დააფორკეთ GitHub-\u2060ზე",
    browseSource: "საწყისი კოდი",
    ctaTitle: "თქვენი აგენტები ტერმინალზე მეტს იმსახურებენ.",
    ctaSub:
      "T3 Code უფასო, ღია კოდის და სწრაფია. დააინსტალირეთ, შეაერთეთ სერვისი, რომლის საფასურსაც უკვე იხდით, და აგენტები საქმეს შეუდგებიან.",
    otherPlatforms: "სხვა პლატფორმები",
  },
  download: {
    title:
      "T3 Code-\u2060ის ჩამოტვირთვა macOS-\u2060ის, Windows-\u2060ისა და Linux-\u2060ისთვის | T3 Code",
    description:
      "ჩამოტვირთეთ T3 Code-\u2060ის ოფიციალური დესკტოპ აპლიკაცია macOS-\u2060ის, Windows-\u2060ის ან Linux-\u2060ისთვის, ან მიიღეთ iOS და Android აპლიკაციები. t3.codes ჩამოტვირთვის ერთადერთი ოფიციალური საიტია.",
    breadcrumb: "ჩამოტვირთვა",
    heading: "T3 Code-\u2060ის ჩამოტვირთვა",
    channelLabel: "რელიზის არხი",
    stable: "სტაბილური",
    nightly: "Nightly",
    intelNote: "Intel-\u2060ის პროცესორიანი Mac გაქვთ? {link}.",
    intelLink: "ჩამოტვირთეთ x64 ვერსია",
    armNote: "ARM-\u2060ზე ხართ? ჩამოტვირთეთ arm64 {deb} ან {appimage}.",
    mobile: "მობილური",
    iphoneIpad: "iPhone და iPad",
    terminal: "ტერმინალი",
    tryOnce: "ან სცადეთ ერთხელ, ინსტალაციის გარეშე:",
    allBuilds: "ყველა ბილდი განთავსებულია {link}",
    releasesPage: "GitHub-\u2060ის რელიზების გვერდზე",
    builtAgo: "აწყობილია {age}",
    releasesFallback: "რელიზები",
  },
};
