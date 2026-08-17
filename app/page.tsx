"use client";

import { useEffect, useRef, useState } from "react";
import { choices, regionById, regions } from "./lesson-data";
import { townLessonById, townLessons } from "./chapter-two-data";
import { journeyLessonById, journeyLessons } from "./chapter-three-data";
import { positionLessonById, positionLessons } from "./chapter-four-data";
import { timeLessonById, timeLessons } from "./chapter-five-data";
import { deALessonById, deALessons } from "./chapter-six-data";
import { verbLessonById, verbLessons } from "./chapter-seven-data";
import { adjectiveLessonById, adjectiveLessons } from "./chapter-eight-data";
import { activityLessonById, activityLessons } from "./chapter-nine-data";
import { reviewLessonById, reviewLessons } from "./chapter-ten-data";

type Screen = "cover" | "contents" | "map" | "town" | "journey" | "position" | "time" | "de-a" | "verbs" | "adjectives" | "activities" | "review" | "quiz" | "passed" | "failed";
type QuizChapter = "countries" | "town" | "journey" | "position" | "time" | "de-a" | "verbs" | "adjectives" | "activities" | "review";

const MASTERY_KEY = "fr-prep-region-mastery-v1";
const TOWN_MASTERY_KEY = "fr-prep-town-mastery-v1";
const JOURNEY_MASTERY_KEY = "fr-prep-journey-mastery-v1";
const POSITION_MASTERY_KEY = "fr-prep-position-mastery-v1";
const TIME_MASTERY_KEY = "fr-prep-time-mastery-v1";
const DE_A_MASTERY_KEY = "fr-prep-de-a-mastery-v1";
const VERB_MASTERY_KEY = "fr-prep-verb-preposition-mastery-v1";
const ADJECTIVE_MASTERY_KEY = "fr-prep-adjective-preposition-mastery-v1";
const ACTIVITY_MASTERY_KEY = "fr-prep-activity-preposition-mastery-v1";
const REVIEW_MASTERY_KEY = "fr-prep-cumulative-review-mastery-v1";
const LEGACY_WESTERN_EUROPE_KEY = "fr-prep-western-europe";
const CHAPTER_ARTWORK_IMAGES = [
  "/notebook-assets/map.webp",
  "/notebook-assets/chapter-2-town.webp",
  "/notebook-assets/chapter-3-journey.webp",
  "/notebook-assets/chapter-4-position.webp",
  "/notebook-assets/chapter-5-time.webp",
  "/notebook-assets/chapter-6-de-a.webp",
  "/notebook-assets/chapter-7-verbs.webp",
  "/notebook-assets/chapter-8-adjectives.webp",
  "/notebook-assets/chapter-9-activities.webp",
  "/notebook-assets/chapter-10-review.webp",
] as const;

if (new Set<string>([ADJECTIVE_MASTERY_KEY, ACTIVITY_MASTERY_KEY, REVIEW_MASTERY_KEY]).size !== 3) {
  throw new Error("Chapters 8, 9 and 10 mastery keys must remain separate.");
}

function loadMastery(): Record<string, boolean> {
  const mastery: Record<string, boolean> = {};
  try {
    const saved = localStorage.getItem(MASTERY_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as unknown;
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        for (const region of regions) {
          if ((parsed as Record<string, unknown>)[region.id] === true) mastery[region.id] = true;
        }
      }
    }
  } catch {
    // Ignore malformed or outdated local progress and continue normally.
  }

  if (localStorage.getItem(LEGACY_WESTERN_EUROPE_KEY) === "complete") {
    mastery["western-europe"] = true;
  }
  return mastery;
}

function loadTownMastery(): Record<string, boolean> {
  const mastery: Record<string, boolean> = {};
  try {
    const saved = localStorage.getItem(TOWN_MASTERY_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as unknown;
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        for (const lesson of townLessons) {
          if ((parsed as Record<string, unknown>)[lesson.id] === true) mastery[lesson.id] = true;
        }
      }
    }
  } catch {
    // Ignore malformed or outdated local progress and continue normally.
  }
  return mastery;
}

function loadJourneyMastery(): Record<string, boolean> {
  const mastery: Record<string, boolean> = {};
  try {
    const saved = localStorage.getItem(JOURNEY_MASTERY_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as unknown;
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        for (const lesson of journeyLessons) {
          if ((parsed as Record<string, unknown>)[lesson.id] === true) mastery[lesson.id] = true;
        }
      }
    }
  } catch {
    // Ignore malformed or outdated local progress and continue normally.
  }
  return mastery;
}

function loadPositionMastery(): Record<string, boolean> {
  const mastery: Record<string, boolean> = {};
  try {
    const saved = localStorage.getItem(POSITION_MASTERY_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as unknown;
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        for (const lesson of positionLessons) {
          if ((parsed as Record<string, unknown>)[lesson.id] === true) mastery[lesson.id] = true;
        }
      }
    }
  } catch {
    // Ignore malformed or outdated local progress and continue normally.
  }
  return mastery;
}

function loadTimeMastery(): Record<string, boolean> {
  const mastery: Record<string, boolean> = {};
  try {
    const saved = localStorage.getItem(TIME_MASTERY_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as unknown;
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        for (const lesson of timeLessons) {
          if ((parsed as Record<string, unknown>)[lesson.id] === true) mastery[lesson.id] = true;
        }
      }
    }
  } catch {
    // Ignore malformed or outdated local progress and continue normally.
  }
  return mastery;
}

function loadDeAMastery(): Record<string, boolean> {
  const mastery: Record<string, boolean> = {};
  try {
    const saved = localStorage.getItem(DE_A_MASTERY_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as unknown;
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        for (const lesson of deALessons) {
          if ((parsed as Record<string, unknown>)[lesson.id] === true) mastery[lesson.id] = true;
        }
      }
    }
  } catch {
    // Ignore malformed or outdated local progress and continue normally.
  }
  return mastery;
}

function loadVerbMastery(): Record<string, boolean> {
  const mastery: Record<string, boolean> = {};
  try {
    const saved = localStorage.getItem(VERB_MASTERY_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as unknown;
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        for (const lesson of verbLessons) {
          if ((parsed as Record<string, unknown>)[lesson.id] === true) mastery[lesson.id] = true;
        }
      }
    }
  } catch {
    // Ignore malformed or outdated local progress and continue normally.
  }
  return mastery;
}

function loadAdjectiveMastery(): Record<string, boolean> {
  const mastery: Record<string, boolean> = {};
  try {
    const saved = localStorage.getItem(ADJECTIVE_MASTERY_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as unknown;
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        for (const lesson of adjectiveLessons) {
          if ((parsed as Record<string, unknown>)[lesson.id] === true) mastery[lesson.id] = true;
        }
      }
    }
  } catch {
    // Ignore malformed or outdated local progress and continue normally.
  }
  return mastery;
}

function loadActivityMastery(): Record<string, boolean> {
  const mastery: Record<string, boolean> = {};
  try {
    const saved = localStorage.getItem(ACTIVITY_MASTERY_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as unknown;
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        for (const lesson of activityLessons) {
          if ((parsed as Record<string, unknown>)[lesson.id] === true) mastery[lesson.id] = true;
        }
      }
    }
  } catch {
    // Ignore malformed or outdated local progress and continue normally.
  }
  return mastery;
}

function loadReviewMastery(): Record<string, boolean> {
  const mastery: Record<string, boolean> = {};
  try {
    const saved = localStorage.getItem(REVIEW_MASTERY_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as unknown;
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        for (const lesson of reviewLessons) {
          if ((parsed as Record<string, unknown>)[lesson.id] === true) mastery[lesson.id] = true;
        }
      }
    }
  } catch {
    // Ignore malformed or outdated local progress and continue normally.
  }
  return mastery;
}

export default function Home() {
  const [screen, setScreen] = useState<Screen>("cover");
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [quizChapter, setQuizChapter] = useState<QuizChapter>("countries");
  const [activeRegionId, setActiveRegionId] = useState("western-europe");
  const [activeTownLessonId, setActiveTownLessonId] = useState("school");
  const [activeJourneyLessonId, setActiveJourneyLessonId] = useState("home");
  const [activePositionLessonId, setActivePositionLessonId] = useState("plant-on-bookcase");
  const [activeTimeLessonId, setActiveTimeLessonId] = useState("today-dates");
  const [activeDeALessonId, setActiveDeALessonId] = useState("du");
  const [activeVerbLessonId, setActiveVerbLessonId] = useState("parler-a");
  const [activeAdjectiveLessonId, setActiveAdjectiveLessonId] = useState("content-de");
  const [activeActivityLessonId, setActiveActivityLessonId] = useState("au-stade");
  const [activeReviewLessonId, setActiveReviewLessonId] = useState("bord-de-mer");
  const [mastery, setMastery] = useState<Record<string, boolean>>({});
  const [townMastery, setTownMastery] = useState<Record<string, boolean>>({});
  const [journeyMastery, setJourneyMastery] = useState<Record<string, boolean>>({});
  const [positionMastery, setPositionMastery] = useState<Record<string, boolean>>({});
  const [timeMastery, setTimeMastery] = useState<Record<string, boolean>>({});
  const [deAMastery, setDeAMastery] = useState<Record<string, boolean>>({});
  const [verbMastery, setVerbMastery] = useState<Record<string, boolean>>({});
  const [adjectiveMastery, setAdjectiveMastery] = useState<Record<string, boolean>>({});
  const [activityMastery, setActivityMastery] = useState<Record<string, boolean>>({});
  const [reviewMastery, setReviewMastery] = useState<Record<string, boolean>>({});
  const frenchVoice = useRef<SpeechSynthesisVoice | null>(null);
  const answered = useRef(false);
  const artworkPreloads = useRef<HTMLImageElement[]>([]);
  const activeRegion = regionById[activeRegionId] ?? regions[0];
  const activeTownLesson = townLessonById[activeTownLessonId] ?? townLessons[0];
  const activeJourneyLesson = journeyLessonById[activeJourneyLessonId] ?? journeyLessons[0];
  const activePositionLesson = positionLessonById[activePositionLessonId] ?? positionLessons[0];
  const activeTimeLesson = timeLessonById[activeTimeLessonId] ?? timeLessons[0];
  const activeDeALesson = deALessonById[activeDeALessonId] ?? deALessons[0];
  const activeVerbLesson = verbLessonById[activeVerbLessonId] ?? verbLessons[0];
  const activeAdjectiveLesson = adjectiveLessonById[activeAdjectiveLessonId] ?? adjectiveLessons[0];
  const activeActivityLesson = activityLessonById[activeActivityLessonId] ?? activityLessons[0];
  const activeReviewLesson = reviewLessonById[activeReviewLessonId] ?? reviewLessons[0];
  const questions = quizChapter === "review" ? activeReviewLesson.questions
    : quizChapter === "adjectives" ? activeAdjectiveLesson.questions
    : quizChapter === "activities" ? activeActivityLesson.questions
    : quizChapter === "verbs" ? activeVerbLesson.questions
    : quizChapter === "de-a" ? activeDeALesson.questions
      : quizChapter === "time" ? activeTimeLesson.questions
      : quizChapter === "position" ? activePositionLesson.questions
        : quizChapter === "journey" ? activeJourneyLesson.questions
          : quizChapter === "town" ? activeTownLesson.questions
            : activeRegion.questions;
  const answerChoices = quizChapter === "review" ? activeReviewLesson.questions[index].choices
    : quizChapter === "adjectives" ? activeAdjectiveLesson.questions[index].choices
    : quizChapter === "activities" ? activeActivityLesson.questions[index].choices
    : quizChapter === "verbs" ? activeVerbLesson.questions[index].choices
    : quizChapter === "de-a" ? activeDeALesson.questions[index].choices
      : quizChapter === "time" ? activeTimeLesson.questions[index].choices
      : quizChapter === "position" ? activePositionLesson.questions[index].choices
        : quizChapter === "journey" ? activeJourneyLesson.questions[index].choices
          : quizChapter === "town" ? activeTownLesson.questions[index].choices
            : choices;

  useEffect(() => {
    let active = true;
    queueMicrotask(() => {
      if (!active) return;
      setMastery(loadMastery());
      setTownMastery(loadTownMastery());
      setJourneyMastery(loadJourneyMastery());
      setPositionMastery(loadPositionMastery());
      setTimeMastery(loadTimeMastery());
      setDeAMastery(loadDeAMastery());
      setVerbMastery(loadVerbMastery());
      setAdjectiveMastery(loadAdjectiveMastery());
      setActivityMastery(loadActivityMastery());
      setReviewMastery(loadReviewMastery());
    });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (screen !== "contents" || artworkPreloads.current.length > 0) return;
    artworkPreloads.current = CHAPTER_ARTWORK_IMAGES.map((src) => {
      const image = new Image();
      image.src = src;
      return image;
    });
  }, [screen]);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    const synthesis = window.speechSynthesis;
    const selectFrenchVoice = () => {
      frenchVoice.current = synthesis
        .getVoices()
        .find((voice) => voice.lang.toLowerCase().startsWith("fr")) ?? null;
    };

    selectFrenchVoice();
    synthesis.addEventListener("voiceschanged", selectFrenchVoice);
    const cancelOnPageExit = () => synthesis.cancel();
    window.addEventListener("pagehide", cancelOnPageExit);

    return () => {
      synthesis.removeEventListener("voiceschanged", selectFrenchVoice);
      window.removeEventListener("pagehide", cancelOnPageExit);
      synthesis.cancel();
    };
  }, []);

  const speakFrench = (sentence: string) => {
    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window) ||
      !("SpeechSynthesisUtterance" in window)
    ) return;

    try {
      const synthesis = window.speechSynthesis;
      synthesis.cancel();
      const utterance = new window.SpeechSynthesisUtterance(sentence);
      utterance.lang = "fr-FR";
      utterance.rate = 0.9;
      if (frenchVoice.current) utterance.voice = frenchVoice.current;
      synthesis.speak(utterance);
    } catch {
      // Speech is an enhancement; the quiz continues normally if unavailable.
    }
  };

  const cancelSpeech = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    try {
      window.speechSynthesis.cancel();
    } catch {
      // Speech cancellation must never interrupt navigation or gameplay.
    }
  };

  const startQuiz = (regionId: string) => {
    cancelSpeech();
    answered.current = false;
    setQuizChapter("countries");
    setActiveRegionId(regionId);
    setIndex(0);
    setCorrect(0);
    setPicked(null);
    setScreen("quiz");
  };

  const startTownQuiz = (lessonId: string) => {
    cancelSpeech();
    answered.current = false;
    setQuizChapter("town");
    setActiveTownLessonId(lessonId);
    setIndex(0);
    setCorrect(0);
    setPicked(null);
    setScreen("quiz");
  };

  const startJourneyQuiz = (lessonId: string) => {
    cancelSpeech();
    answered.current = false;
    setQuizChapter("journey");
    setActiveJourneyLessonId(lessonId);
    setIndex(0);
    setCorrect(0);
    setPicked(null);
    setScreen("quiz");
  };

  const startPositionQuiz = (lessonId: string) => {
    cancelSpeech();
    answered.current = false;
    setQuizChapter("position");
    setActivePositionLessonId(lessonId);
    setIndex(0);
    setCorrect(0);
    setPicked(null);
    setScreen("quiz");
  };

  const startTimeQuiz = (lessonId: string) => {
    cancelSpeech();
    answered.current = false;
    setQuizChapter("time");
    setActiveTimeLessonId(lessonId);
    setIndex(0);
    setCorrect(0);
    setPicked(null);
    setScreen("quiz");
  };

  const startDeAQuiz = (lessonId: string) => {
    cancelSpeech();
    answered.current = false;
    setQuizChapter("de-a");
    setActiveDeALessonId(lessonId);
    setIndex(0);
    setCorrect(0);
    setPicked(null);
    setScreen("quiz");
  };

  const startVerbQuiz = (lessonId: string) => {
    cancelSpeech();
    answered.current = false;
    setQuizChapter("verbs");
    setActiveVerbLessonId(lessonId);
    setIndex(0);
    setCorrect(0);
    setPicked(null);
    setScreen("quiz");
  };

  const startAdjectiveQuiz = (lessonId: string) => {
    cancelSpeech();
    answered.current = false;
    setQuizChapter("adjectives");
    setActiveAdjectiveLessonId(lessonId);
    setIndex(0);
    setCorrect(0);
    setPicked(null);
    setScreen("quiz");
  };

  const startActivityQuiz = (lessonId: string) => {
    cancelSpeech();
    answered.current = false;
    setQuizChapter("activities");
    setActiveActivityLessonId(lessonId);
    setIndex(0);
    setCorrect(0);
    setPicked(null);
    setScreen("quiz");
  };

  const startReviewQuiz = (lessonId: string) => {
    cancelSpeech();
    answered.current = false;
    setQuizChapter("review");
    setActiveReviewLessonId(lessonId);
    setIndex(0);
    setCorrect(0);
    setPicked(null);
    setScreen("quiz");
  };

  const answer = (choice: string) => {
    if (answered.current || picked !== null) return;
    answered.current = true;
    setPicked(choice);
    if (choice === questions[index].answer) {
      setCorrect((score) => score + 1);
      speakFrench(questions[index].spoken);
    }
  };

  const next = () => {
    if (picked === null) return;
    cancelSpeech();
    if (index < questions.length - 1) {
      setIndex((questionIndex) => questionIndex + 1);
      answered.current = false;
      setPicked(null);
      return;
    }
    const finalScore = correct;
    if (finalScore >= 8) {
      if (quizChapter === "review") {
        const nextReviewMastery = { ...reviewMastery, [activeReviewLesson.id]: true };
        localStorage.setItem(REVIEW_MASTERY_KEY, JSON.stringify(nextReviewMastery));
        setReviewMastery(nextReviewMastery);
      } else if (quizChapter === "adjectives") {
        const nextAdjectiveMastery = { ...adjectiveMastery, [activeAdjectiveLesson.id]: true };
        localStorage.setItem(ADJECTIVE_MASTERY_KEY, JSON.stringify(nextAdjectiveMastery));
        setAdjectiveMastery(nextAdjectiveMastery);
      } else if (quizChapter === "activities") {
        const nextActivityMastery = { ...activityMastery, [activeActivityLesson.id]: true };
        localStorage.setItem(ACTIVITY_MASTERY_KEY, JSON.stringify(nextActivityMastery));
        setActivityMastery(nextActivityMastery);
      } else if (quizChapter === "verbs") {
        const nextVerbMastery = { ...verbMastery, [activeVerbLesson.id]: true };
        localStorage.setItem(VERB_MASTERY_KEY, JSON.stringify(nextVerbMastery));
        setVerbMastery(nextVerbMastery);
      } else if (quizChapter === "de-a") {
        const nextDeAMastery = { ...deAMastery, [activeDeALesson.id]: true };
        localStorage.setItem(DE_A_MASTERY_KEY, JSON.stringify(nextDeAMastery));
        setDeAMastery(nextDeAMastery);
      } else if (quizChapter === "time") {
        const nextTimeMastery = { ...timeMastery, [activeTimeLesson.id]: true };
        localStorage.setItem(TIME_MASTERY_KEY, JSON.stringify(nextTimeMastery));
        setTimeMastery(nextTimeMastery);
      } else if (quizChapter === "position") {
        const nextPositionMastery = { ...positionMastery, [activePositionLesson.id]: true };
        localStorage.setItem(POSITION_MASTERY_KEY, JSON.stringify(nextPositionMastery));
        setPositionMastery(nextPositionMastery);
      } else if (quizChapter === "journey") {
        const nextJourneyMastery = { ...journeyMastery, [activeJourneyLesson.id]: true };
        localStorage.setItem(JOURNEY_MASTERY_KEY, JSON.stringify(nextJourneyMastery));
        setJourneyMastery(nextJourneyMastery);
      } else if (quizChapter === "town") {
        const nextTownMastery = { ...townMastery, [activeTownLesson.id]: true };
        localStorage.setItem(TOWN_MASTERY_KEY, JSON.stringify(nextTownMastery));
        setTownMastery(nextTownMastery);
      } else {
        const nextMastery = { ...mastery, [activeRegion.id]: true };
        localStorage.setItem(MASTERY_KEY, JSON.stringify(nextMastery));
        if (activeRegion.id === "western-europe") {
          localStorage.setItem(LEGACY_WESTERN_EUROPE_KEY, "complete");
        }
        setMastery(nextMastery);
      }
      setScreen("passed");
    } else {
      setScreen("failed");
    }
  };

  const returnToMap = () => {
    cancelSpeech();
    setScreen(quizChapter === "review" ? "review" : quizChapter === "adjectives" ? "adjectives" : quizChapter === "activities" ? "activities" : quizChapter === "verbs" ? "verbs" : quizChapter === "de-a" ? "de-a" : quizChapter === "time" ? "time" : quizChapter === "position" ? "position" : quizChapter === "journey" ? "journey" : quizChapter === "town" ? "town" : "map");
  };

  const isRight = picked === questions[index]?.answer;

  return (
    <main className="game-viewport">
      {screen === "cover" && (
        <ArtworkPage image="/notebook-assets/cover.webp" label="Couverture du cahier Prépositions françaises">
          <button className="hotspot cover-start" onClick={() => setScreen("contents")} aria-label="Commencer" />
          <button className="hotspot cover-continue" onClick={() => setScreen("map")} aria-label="Continuer" />
        </ArtworkPage>
      )}

      {screen === "contents" && (
        <section className="notebook-stage paper-page contents-page" aria-label="Table des matières">
          <h1 className="contents-title cursive">Table des matières</h1>
          <div className="page-ornament" aria-hidden="true"><span /><b>•</b><span /></div>
          <div className="contents-grid">
            {Array.from({ length: 10 }, (_, itemIndex) => {
              const chapter = itemIndex + 1;
              const available = chapter <= 10;
              const chapterName = chapter === 1 ? "Pays" : chapter === 2 ? "Villes & lieux" : chapter === 3 ? "Aller & venir" : chapter === 4 ? "Position" : chapter === 5 ? "Temps" : chapter === 6 ? "De / à" : chapter === 7 ? "Verbes + préposition" : chapter === 8 ? "Adjectifs + préposition" : chapter === 9 ? "Activités + préposition" : "Tout revoir !";
              const targetScreen: Screen = chapter === 1 ? "map" : chapter === 2 ? "town" : chapter === 3 ? "journey" : chapter === 4 ? "position" : chapter === 5 ? "time" : chapter === 6 ? "de-a" : chapter === 7 ? "verbs" : chapter === 8 ? "adjectives" : chapter === 9 ? "activities" : "review";
              return (
                <button
                  key={chapter}
                  className={`chapter-entry ${available ? "available" : ""}`}
                  disabled={!available}
                  onClick={available ? () => setScreen(targetScreen) : undefined}
                  aria-label={available ? `Ouvrir la section ${chapterName}` : `Chapitre ${chapter}, indisponible`}
                >
                  <span className="chapter-number">{chapter}.</span>
                  {available && <span className="chapter-name cursive">{chapterName}</span>}
                </button>
              );
            })}
          </div>
        </section>
      )}

      {screen === "map" && (
        <ArtworkPage image="/notebook-assets/map.webp" label="Carte des régions du monde">
          <div className="map-coordinate-layer">
            {regions.map((region) => (
              <button
                key={region.id}
                className={`hotspot map-region-hotspot ${mastery[region.id] ? "mastered" : ""}`}
                style={region.hotspot}
                onClick={() => startQuiz(region.id)}
                aria-label={`${region.name}${mastery[region.id] ? ", terminée" : ""}`}
                data-region={region.id}
              />
            ))}
            <button
              className="hotspot map-back"
              onClick={() => {
                cancelSpeech();
                setScreen("contents");
              }}
              aria-label="Retour au menu des chapitres"
            />
          </div>
        </ArtworkPage>
      )}

      {screen === "town" && (
        <ArtworkPage image="/notebook-assets/chapter-2-town.webp" label="Chapitre 2, ville et lieux">
          <div className="town-coordinate-layer">
            {townLessons.map((lesson) => (
              <div key={lesson.id}>
                {townMastery[lesson.id] && (
                  <span
                    className="town-completion"
                    style={{ ...lesson.hotspot, "--highlight-color": lesson.highlightColor } as React.CSSProperties}
                    aria-hidden="true"
                  />
                )}
                <button
                  className="hotspot town-location-hotspot"
                  style={lesson.hotspot}
                  onClick={() => startTownQuiz(lesson.id)}
                  aria-label={`${lesson.name}${townMastery[lesson.id] ? ", terminée" : ""}`}
                />
              </div>
            ))}
            <button
              className="town-back cursive"
              onClick={() => {
                cancelSpeech();
                setScreen("contents");
              }}
            >
              Retour au menu des chapitres
            </button>
          </div>
        </ArtworkPage>
      )}

      {screen === "journey" && (
        <ArtworkPage image="/notebook-assets/chapter-3-journey.webp" label="Chapitre 3, aller et venir">
          <div className="journey-coordinate-layer">
            {journeyLessons.map((lesson) => (
              <div key={lesson.id}>
                {journeyMastery[lesson.id] && (
                  <span
                    className="town-completion journey-completion"
                    style={{ ...lesson.hotspot, "--highlight-color": lesson.highlightColor } as React.CSSProperties}
                    aria-hidden="true"
                  />
                )}
                <button
                  className="hotspot journey-lesson-hotspot"
                  style={lesson.hotspot}
                  onClick={() => startJourneyQuiz(lesson.id)}
                  aria-label={`${lesson.name}${journeyMastery[lesson.id] ? ", terminée" : ""}`}
                />
              </div>
            ))}
            <button
              className="town-back journey-back cursive"
              onClick={() => {
                cancelSpeech();
                setScreen("contents");
              }}
            >
              Retour au menu des chapitres
            </button>
          </div>
        </ArtworkPage>
      )}

      {screen === "position" && (
        <ArtworkPage image="/notebook-assets/chapter-4-position.webp" label="Chapitre 4, position des objets">
          <div className="position-coordinate-layer">
            {positionLessons.map((lesson) => (
              <div key={lesson.id}>
                {positionMastery[lesson.id] && (
                  <span
                    className="town-completion position-completion"
                    style={{ ...lesson.hotspot, "--highlight-color": lesson.highlightColor } as React.CSSProperties}
                    aria-hidden="true"
                  />
                )}
                <button
                  className="hotspot position-lesson-hotspot"
                  style={lesson.hotspot}
                  onClick={() => startPositionQuiz(lesson.id)}
                  aria-label={`${lesson.name}${positionMastery[lesson.id] ? ", terminée" : ""}`}
                />
              </div>
            ))}
            <button
              className="town-back position-back cursive"
              onClick={() => {
                cancelSpeech();
                setScreen("contents");
              }}
            >
              Retour au menu des chapitres
            </button>
          </div>
        </ArtworkPage>
      )}

      {screen === "time" && (
        <ArtworkPage image="/notebook-assets/chapter-5-time.webp" label="Chapitre 5, expressions de temps">
          <div className="time-coordinate-layer">
            {timeLessons.map((lesson) => (
              <div key={lesson.id}>
                {timeMastery[lesson.id] && (
                  <span
                    className="town-completion time-completion"
                    style={{ ...lesson.hotspot, "--highlight-color": lesson.highlightColor } as React.CSSProperties}
                    aria-hidden="true"
                  />
                )}
                <button
                  className="hotspot time-lesson-hotspot"
                  style={lesson.hotspot}
                  onClick={() => startTimeQuiz(lesson.id)}
                  aria-label={`${lesson.name}${timeMastery[lesson.id] ? ", terminée" : ""}`}
                />
              </div>
            ))}
            <button
              className="town-back time-back cursive"
              onClick={() => {
                cancelSpeech();
                setScreen("contents");
              }}
            >
              Retour au menu des chapitres
            </button>
          </div>
        </ArtworkPage>
      )}

      {screen === "de-a" && (
        <ArtworkPage image="/notebook-assets/chapter-6-de-a.webp" label="Chapitre 6, formes de de et à">
          <div className="de-a-coordinate-layer">
            {deALessons.map((lesson) => (
              <div key={lesson.id}>
                {deAMastery[lesson.id] && (
                  <span className="town-completion de-a-completion" style={{ ...lesson.hotspot, "--highlight-color": lesson.highlightColor } as React.CSSProperties} aria-hidden="true" />
                )}
                <button className="hotspot de-a-lesson-hotspot" style={lesson.hotspot} onClick={() => startDeAQuiz(lesson.id)} aria-label={`${lesson.name}${deAMastery[lesson.id] ? ", terminée" : ""}`} />
              </div>
            ))}
            <button className="town-back de-a-back cursive" onClick={() => { cancelSpeech(); setScreen("contents"); }}>
              Retour au menu des chapitres
            </button>
          </div>
        </ArtworkPage>
      )}

      {screen === "verbs" && (
        <ArtworkPage image="/notebook-assets/chapter-7-verbs.webp" label="Chapitre 7, verbes et prépositions">
          <div className="verbs-coordinate-layer">
            {verbLessons.map((lesson) => (
              <div key={lesson.id}>
                {verbMastery[lesson.id] && (
                  <span className="town-completion verbs-completion" style={{ ...lesson.hotspot, "--highlight-color": lesson.highlightColor } as React.CSSProperties} aria-hidden="true" />
                )}
                <button className="hotspot verbs-lesson-hotspot" style={lesson.hotspot} onClick={() => startVerbQuiz(lesson.id)} aria-label={`${lesson.name}${verbMastery[lesson.id] ? ", terminée" : ""}`} />
              </div>
            ))}
            <button className="town-back verbs-back cursive" onClick={() => { cancelSpeech(); setScreen("contents"); }}>
              Retour au menu des chapitres
            </button>
          </div>
        </ArtworkPage>
      )}

      {screen === "adjectives" && (
        <ArtworkPage image="/notebook-assets/chapter-8-adjectives.webp" label="Chapitre 8, adjectifs et prépositions">
          <div className="adjectives-coordinate-layer">
            {adjectiveLessons.map((lesson) => (
              <div key={lesson.id}>
                {adjectiveMastery[lesson.id] && (
                  <span className="town-completion adjectives-completion" style={{ ...lesson.hotspot, "--highlight-color": lesson.highlightColor } as React.CSSProperties} aria-hidden="true" />
                )}
                <button className="hotspot adjectives-lesson-hotspot" style={lesson.hotspot} onClick={() => startAdjectiveQuiz(lesson.id)} aria-label={`${lesson.name}${adjectiveMastery[lesson.id] ? ", terminée" : ""}`} />
              </div>
            ))}
            <button className="town-back adjectives-back cursive" onClick={() => { cancelSpeech(); setScreen("contents"); }}>
              Retour au menu des chapitres
            </button>
          </div>
        </ArtworkPage>
      )}

      {screen === "activities" && (
        <ArtworkPage image="/notebook-assets/chapter-9-activities.webp" label="Chapitre 9, activités et prépositions">
          <div className="activities-coordinate-layer">
            {activityLessons.map((lesson) => (
              <div key={lesson.id}>
                {activityMastery[lesson.id] && (
                  <span className="town-completion activities-completion" style={{ ...lesson.hotspot, "--highlight-color": lesson.highlightColor } as React.CSSProperties} aria-hidden="true" />
                )}
                <button className="hotspot activities-lesson-hotspot" style={lesson.hotspot} onClick={() => startActivityQuiz(lesson.id)} aria-label={`${lesson.name}${activityMastery[lesson.id] ? ", terminée" : ""}`} />
              </div>
            ))}
            <button className="town-back activities-back cursive" onClick={() => { cancelSpeech(); setScreen("contents"); }}>
              Retour au menu des chapitres
            </button>
          </div>
        </ArtworkPage>
      )}

      {screen === "review" && (
        <ArtworkPage image="/notebook-assets/chapter-10-review.webp" label="Chapitre 10, tout revoir">
          <div className="review-coordinate-layer">
            {reviewLessons.map((lesson) => (
              <div key={lesson.id}>
                {reviewMastery[lesson.id] && (
                  <span className="town-completion review-completion" style={{ ...lesson.hotspot, "--highlight-color": lesson.highlightColor } as React.CSSProperties} aria-hidden="true" />
                )}
                <button className="hotspot review-lesson-hotspot" style={lesson.hotspot} onClick={() => startReviewQuiz(lesson.id)} aria-label={`${lesson.name}${reviewMastery[lesson.id] ? ", terminée" : ""}`} />
              </div>
            ))}
            <button className="town-back review-back cursive" onClick={() => { cancelSpeech(); setScreen("contents"); }}>
              Retour aux chapitres
            </button>
          </div>
        </ArtworkPage>
      )}

      {screen === "quiz" && (
        <section className={`notebook-stage quiz-page ${quizChapter === "position" ? "position-quiz" : quizChapter === "time" ? "time-quiz" : quizChapter === "de-a" ? "de-a-quiz" : quizChapter === "verbs" ? "verbs-quiz" : quizChapter === "adjectives" ? "adjectives-quiz" : quizChapter === "activities" ? "activities-quiz" : quizChapter === "review" ? "review-quiz" : ""}`} aria-label={`Leçon ${quizChapter === "review" ? activeReviewLesson.name : quizChapter === "adjectives" ? activeAdjectiveLesson.name : quizChapter === "activities" ? activeActivityLesson.name : quizChapter === "verbs" ? activeVerbLesson.name : quizChapter === "de-a" ? activeDeALesson.name : quizChapter === "time" ? activeTimeLesson.name : quizChapter === "position" ? activePositionLesson.name : quizChapter === "journey" ? activeJourneyLesson.name : quizChapter === "town" ? activeTownLesson.name : activeRegion.name}`}>
          <div className="quiz-header cursive">{quizChapter === "review" ? "Chapitre 10" : quizChapter === "adjectives" ? "Chapitre 8" : quizChapter === "activities" ? "Chapitre 9" : quizChapter === "verbs" ? "Chapitre 7" : quizChapter === "de-a" ? "Chapitre 6" : quizChapter === "time" ? "Chapitre 5" : quizChapter === "position" ? "Chapitre 4" : quizChapter === "journey" ? "Chapitre 3" : quizChapter === "town" ? "Chapitre 2" : "Leçon 1"}</div>
          <div className="quiz-counter">{index + 1} / {questions.length}</div>
          <div className="quiz-instruction cursive">{quizChapter === "review" ? "Choisis la réponse qui complète la phrase." : quizChapter === "adjectives" ? "Choisis la préposition qui complète l’expression." : quizChapter === "activities" ? "Choisis l’expression qui complète la phrase." : quizChapter === "verbs" ? "Choisis le bon verbe et sa préposition." : quizChapter === "de-a" ? "Choisis la bonne forme de de ou à." : quizChapter === "time" ? "Choisis la bonne expression de temps." : quizChapter === "position" ? "Choisis la bonne position." : quizChapter === "journey" ? "Choisis la bonne réponse." : "Choisis la bonne préposition."}</div>
          <div className="ink-ornament" aria-hidden="true"><span /><b>•</b><span /></div>
          <div className="quiz-sentence">{questions[index].display}</div>

          <div className="answer-grid" aria-label="Réponses possibles">
            {answerChoices.map((choice) => {
              const state = picked === choice ? (choice === questions[index].answer ? "selected-right" : "selected-wrong") : "";
              return (
                <button key={choice} className={`answer-choice ${state}`} disabled={picked !== null} onClick={() => answer(choice)}>
                  {choice}
                </button>
              );
            })}
          </div>

          <div className={`quiz-feedback cursive ${picked === null ? "waiting" : ""}`} aria-live="polite">
            {picked === null ? (
              <><span className="pencil-doodle" aria-hidden="true" />Choisis une réponse.</>
            ) : (
              <>
                <span className={`feedback-symbol ${isRight ? "right" : "wrong"}`} aria-hidden="true" />
                <span className="feedback-copy">
                  <strong>{isRight ? "Bien !" : "Non."}</strong>
                  <small>{questions[index].note}</small>
                </span>
              </>
            )}
          </div>

          {picked !== null && (
            <button className="next-page cursive" onClick={next}>
              {index === questions.length - 1 ? "Terminer" : "Suivant"}
            </button>
          )}
        </section>
      )}

      {screen === "passed" && (
        <ResultPage title="Tu as réussi" score={correct} total={questions.length} onReturn={returnToMap} returnLabel={quizChapter === "review" ? "Retour à la révision" : quizChapter === "adjectives" ? "Retour aux adjectifs" : quizChapter === "activities" ? "Retour aux activités" : quizChapter === "verbs" ? "Retour aux verbes" : quizChapter === "de-a" ? "Retour à de / à" : quizChapter === "time" ? "Retour au temps" : quizChapter === "position" ? "Retour au salon" : quizChapter === "journey" ? "Retour au voyage" : quizChapter === "town" ? "Retour à la ville" : "Retour à la carte"} />
      )}

      {screen === "failed" && (
        <ResultPage title="Tu as échoué" score={correct} total={questions.length} onReturn={returnToMap} returnLabel={quizChapter === "review" ? "Retour à la révision" : quizChapter === "adjectives" ? "Retour aux adjectifs" : quizChapter === "activities" ? "Retour aux activités" : quizChapter === "verbs" ? "Retour aux verbes" : quizChapter === "de-a" ? "Retour à de / à" : quizChapter === "time" ? "Retour au temps" : quizChapter === "position" ? "Retour au salon" : quizChapter === "journey" ? "Retour au voyage" : quizChapter === "town" ? "Retour à la ville" : "Retour à la carte"} />
      )}
    </main>
  );
}

function ArtworkPage({
  image,
  label,
  children,
}: {
  image: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`notebook-stage artwork-page ${image.includes("/cover") ? "artwork-cover" : image.includes("chapter-2") ? "artwork-town" : image.includes("chapter-3") ? "artwork-journey" : image.includes("chapter-4") ? "artwork-position" : image.includes("chapter-5") ? "artwork-time" : image.includes("chapter-6") ? "artwork-de-a" : image.includes("chapter-7") ? "artwork-verbs" : image.includes("chapter-8") ? "artwork-adjectives" : image.includes("chapter-9") ? "artwork-activities" : image.includes("chapter-10") ? "artwork-review" : "artwork-map"}`}
      style={{ backgroundImage: `url("${image}")` }}
      aria-label={label}
    >
      <img className="artwork-image" src={image} alt="" aria-hidden="true" draggable={false} />
      {children}
    </section>
  );
}

function ResultPage({ title, score, total, onReturn, returnLabel }: { title: string; score: number; total: number; onReturn: () => void; returnLabel: string }) {
  return (
    <section className="notebook-stage paper-page result-page" aria-label={title}>
      <div className="result-grade" aria-label={`Résultat : ${score} sur ${total}`}>
        {score} / {total}
      </div>
      <h1 className="result-title cursive">{title}</h1>
      <button className="result-button cursive" onClick={onReturn}>{returnLabel}</button>
    </section>
  );
}
