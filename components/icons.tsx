import {
  AlertTriangle,
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  ArrowRight,
  Baby,
  BetweenHorizonalEnd,
  BetweenHorizonalStart,
  BetweenVerticalEnd,
  BetweenVerticalStart,
  Bold,
  Bot,
  CaseSensitive,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Code,
  CreditCard,
  File,
  FileText,
  Globe,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Heart,
  HelpCircle,
  Image,
  ImagePlus,
  Info,
  Italic,
  Laptop,
  LayoutGrid,
  LineChart,
  Link,
  List,
  ListOrdered,
  Loader2,
  LucideProps,
  Menu,
  MessageCircle,
  Minus,
  Moon,
  MoreVertical,
  Network,
  NotepadText,
  Palette,
  Pizza,
  Plus,
  Quote,
  Settings,
  Share,
  SmilePlus,
  Star,
  Strikethrough,
  SunMedium,
  Table,
  Tag,
  TextQuote,
  Trash,
  User,
  X,
  Youtube,
  type IconNode as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  alignLeft: AlignLeft,
  alignCenter: AlignCenter,
  alignRight: AlignRight,
  alignJustify: AlignJustify,
  close: X,
  code: Code,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  link: Link,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  check: Check,
  google: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 120 120"
      {...props}
    >
      <path
        d="M107.145,55H100H87.569H60v18h27.569c-1.852,5.677-5.408,10.585-10.063,14.118 C72.642,90.809,66.578,93,60,93c-12.574,0-23.278-8.002-27.299-19.191C31.6,70.745,31,67.443,31,64 c0-3.839,0.746-7.505,2.101-10.858C37.399,42.505,47.823,35,60,35c7.365,0,14.083,2.75,19.198,7.273l13.699-13.21 C84.305,20.969,72.736,16,60,16c-18.422,0-34.419,10.377-42.466,25.605C14,48.291,12,55.912,12,64c0,7.882,1.9,15.32,5.267,21.882 C25.223,101.389,41.372,112,60,112c12.382,0,23.668-4.688,32.182-12.386C101.896,90.831,108,78.128,108,64 C108,60.922,107.699,57.917,107.145,55z"
        opacity=".35"
      ></path>
      <path
        fill="#44bf00"
        d="M17.267,81.882C25.223,97.389,41.372,108,60,108c12.382,0,23.668-4.688,32.182-12.386L77.506,83.118 C72.642,86.809,66.577,89,60,89c-12.574,0-23.278-8.002-27.299-19.191L17.267,81.882z"
      ></path>
      <path
        d="M77.506,83.118c-0.684,0.553-1.685,1.158-2.398,1.638l14.711,12.846 c0.807-0.641,1.6-1.298,2.363-1.988L77.506,83.118z"
        opacity=".35"
      ></path>
      <path
        fill="#0075ff"
        d="M92.182,95.614C101.896,86.83,108,74.128,108,60c0-3.078-0.301-6.083-0.855-9H100H87.569H60v18 h27.569c-1.852,5.677-5.408,10.585-10.063,14.118L92.182,95.614z"
      ></path>
      <path
        d="M32.701,69.809L17.267,81.882c0.486,0.948,1.004,1.877,1.551,2.787l15.3-11.576 C33.63,72.181,33.05,70.804,32.701,69.809z"
        opacity=".35"
      ></path>
      <path
        fill="#ffc400"
        d="M17.267,81.882C13.9,75.32,12,67.882,12,60c0-8.088,2-15.709,5.534-22.395l15.568,11.537 C31.746,52.496,31,56.161,31,60c0,3.443,0.6,6.745,1.701,9.809L17.267,81.882z"
      ></path>
      <path
        d="M17.534,37.605c-0.482,0.844-1.169,2.36-1.564,3.251l16.059,11.491 c0.299-1.095,0.653-2.167,1.072-3.205L17.534,37.605z"
        opacity=".35"
      ></path>
      <path
        fill="#ff1200"
        d="M33.101,49.142C37.399,38.505,47.823,31,60,31c7.365,0,14.083,2.75,19.198,7.273l13.699-13.21 C84.305,16.969,72.736,12,60,12c-18.422,0-34.419,10.377-42.466,25.605L33.101,49.142z"
      ></path>
    </svg>
  ),
  layoutGrid: LayoutGrid,
  bot: Bot,
  bold: Bold,
  lineChart: LineChart,
  baby: Baby,
  globe: Globe,
  menu: Menu,
  minus: Minus,
  deleteRow: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <path
        fill="currentColor"
        d="M 2 10 L 2 11 L 2 21 L 2 22 L 3 22 L 16.28125 22 C 16.113347 22.643682 16 23.304957 16 24 C 16 28.406433 19.593567 32 24 32 C 28.406433 32 32 28.406433 32 24 C 32 21.966773 31.225786 20.10141 29.96875 18.6875 L 30 18.6875 L 30 11 L 30 10 L 29 10 L 3 10 L 2 10 z M 4 12 L 28 12 L 28 17.09375 C 26.821063 16.40817 25.457374 16 24 16 C 21.050941 16 18.481052 17.614369 17.09375 20 L 4 20 L 4 12 z M 24 18 C 27.325553 18 30 20.674447 30 24 C 30 27.325553 27.325553 30 24 30 C 20.674447 30 18 27.325553 18 24 C 18 20.674447 20.674447 18 24 18 z M 21.71875 20.28125 L 20.28125 21.71875 L 22.5625 24 L 20.28125 26.28125 L 21.71875 27.71875 L 24 25.4375 L 26.28125 27.71875 L 27.71875 26.28125 L 25.4375 24 L 27.71875 21.71875 L 26.28125 20.28125 L 24 22.5625 L 21.71875 20.28125 z"
        overflow="visible"
      />
    </svg>
  ),
  deleteColumn: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <path
        fill="currentColor"
        d="M 10 2 L 10 3 L 10 29 L 10 30 L 11 30 L 18.71875 30 C 20.128447 31.239288 21.982917 32 24 32 C 28.406433 32 32 28.406433 32 24 C 32 19.593567 28.406433 16 24 16 C 23.304957 16 22.643682 16.113347 22 16.28125 L 22 3 L 22 2 L 21 2 L 11 2 L 10 2 z M 12 4 L 20 4 L 20 17.09375 C 17.614369 18.481052 16 21.050941 16 24 C 16 25.457374 16.40817 26.821063 17.09375 28 L 12 28 L 12 4 z M 24 18 C 27.325553 18 30 20.674447 30 24 C 30 27.325553 27.325553 30 24 30 C 20.674447 30 18 27.325553 18 24 C 18 20.674447 20.674447 18 24 18 z M 21.71875 20.28125 L 20.28125 21.71875 L 22.5625 24 L 20.28125 26.28125 L 21.71875 27.71875 L 24 25.4375 L 26.28125 27.71875 L 27.71875 26.28125 L 25.4375 24 L 27.71875 21.71875 L 26.28125 20.28125 L 24 22.5625 L 21.71875 20.28125 z"
        overflow="visible"
      />
    </svg>
  ),
  deleteTable: ({ ...props }: LucideProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="currentColor">
        <path d="m19 10h-6v11h-8.00084c-1.10457 0-1.99916-.8954-1.99916-2v-14c0-1.10457.89543-2 2-2h14c1.1046 0 2 .89543 2 2v8h-2zm-8 0h-6v4h6zm0 9v-3h-6v3zm2-14v3h6v-3zm-2 0h-6v3h6z" />
        <path d="m16 18v-2h8v2z" />
      </g>
    </svg>
  ),
  notepad: NotepadText,
  imagePlus: ImagePlus,
  info: Info,
  share: Share,
  palette: Palette,
  tag: Tag,
  network: Network,
  message: MessageCircle,
  heart: ({ ...props }: LucideProps) => <Heart {...props} />,
  star: Star,
  smilePlus: SmilePlus,
  heading1: Heading1,
  heading2: Heading2,
  heading3: Heading3,
  heading4: Heading4,
  heading5: Heading5,
  heading6: Heading6,
  italic: Italic,
  quote: Quote,
  strikethrough: Strikethrough,
  list: List,
  listOrdered: ListOrdered,
  textQuote: TextQuote,
  youtube: Youtube,
  table: Table,
  addRowBefore: BetweenHorizonalStart,
  addRowAfter: BetweenHorizonalEnd,
  addColumnBefore: BetweenVerticalStart,
  addColumnAfter: BetweenVerticalEnd,
  caseSensitive: CaseSensitive,
}
