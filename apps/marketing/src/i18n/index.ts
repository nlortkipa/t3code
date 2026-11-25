import { de } from "./de";
import { en, type Messages } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { ja } from "./ja";
import { ka } from "./ka";
import { ko } from "./ko";
import type { Locale } from "./locales";
import { ptBR } from "./pt-BR";
import { ru } from "./ru";
import { zh } from "./zh";

const MESSAGES: Record<Locale, Messages> = {
  en,
  es,
  "zh-Hans": zh,
  "pt-BR": ptBR,
  fr,
  de,
  ja,
  ko,
  ru,
  ka,
};

export const messagesFor = (locale: Locale): Messages => MESSAGES[locale];
