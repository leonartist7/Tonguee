import { existsSync } from 'node:fs';
import { chromium } from 'playwright';

export const BASE = process.env.E2E_BASE ?? 'http://localhost:5173';

/**
 * Prefer an explicitly configured Chromium binary, then the fixed browser used
 * in the hosted test environment, and finally Playwright's normal local browser
 * resolution. The final fallback is important for Codex/Windows/macOS/Linux
 * development machines where the hosted path does not exist.
 */
const launchOptions = () => {
  if (process.env.E2E_CHROME) return { executablePath: process.env.E2E_CHROME };

  const preinstalled = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
  return existsSync(preinstalled) ? { executablePath: preinstalled } : {};
};

export const launch = () => chromium.launch(launchOptions());

/** A signed-in, onboarded player. Override anything per test. */
export const seedPlayer = (over = {}) => ({
  state: {
    user: {
      id: 'student-1',
      name: 'Ada',
      email: 'ada@example.com',
      role: 'student',
      isTeacher: false,
    },
    onboardingComplete: true,
    points: 500,
    totalEarned: 500,
    totalSpent: 0,
    streak: 2,
    bestStreak: 2,
    lastCheckIn: null,
    badges: [],
    inventory: [],
    bookings: [],
    createdExperiences: [],
    equipped: {
      character: 'owl',
      hat: null,
      glasses: null,
      accessory: null,
      background: null,
    },
    languages: ['fr'],
    interests: [],
    goal: 'regular',
    completedQuests: [],
    questsDate: null,
    stats: {
      gamesPlayed: 0,
      experiencesBooked: 0,
      conversationsStarted: 0,
      reviewsWritten: 0,
      citiesVisited: 0,
      languagesStudied: 0,
    },
    ...over,
  },
  version: 1,
});

/** Write the player store into localStorage before the app boots. */
export const signIn = async (page, seed = seedPlayer()) => {
  await page.goto(BASE, { waitUntil: 'domcontentloaded' });
  await page.evaluate(
    (data) => localStorage.setItem('conversa-player', JSON.stringify(data)),
    seed
  );
};

/** Read the persisted player state back out. */
export const readStore = (page) =>
  page.evaluate(() => JSON.parse(localStorage.getItem('conversa-player') || '{}')?.state);

/**
 * Minimal test recorder. Collects failures rather than throwing, so one broken
 * step doesn't hide the rest of the run.
 */
export function createRun(name) {
  const failures = [];
  const pageErrors = [];
  let passed = 0;

  return {
    failures,
    pageErrors,
    get passed() {
      return passed;
    },

    /** Attach to a page to capture uncaught runtime errors. */
    watch(page) {
      page.on('pageerror', (error) => pageErrors.push(String(error).slice(0, 200)));
      return page;
    },

    async step(label, fn) {
      try {
        await fn();
        passed++;
        console.log(`    ok   ${label}`);
      } catch (error) {
        const message = String(error).split('\n')[0].slice(0, 160);
        failures.push(`${label} :: ${message}`);
        console.log(`    FAIL ${label}`);
        console.log(`         ${message}`);
      }
    },

    note(text) {
      console.log(`         ${text}`);
    },

    heading(text) {
      console.log(`\n  ${name} - ${text}`);
    },
  };
}

export const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};
