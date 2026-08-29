"use client"

import { useEffect, useRef, useState } from "react"

import GitHubActivity from "@/components/ui/github-activity"

const GITHUB_USERNAME = "keshavagr273"

const DARK_TOKENS = {
  "--foreground": "#fafafa",
  "--color-foreground": "#fafafa",
  "--card": "#17171a",
  "--color-card": "#17171a",
  "--background": "#303036",
  "--color-background": "#303036",
  "--color-neutral-200": "#0e0e10",
} as React.CSSProperties

const ACCENT = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"]

const WEEKS = 53
const CARD_PADDING = 32
const MIN_CELL = 11
const MAX_CELL = 64
const CELL_STEP = 0.25
const SAFETY = 1

const gapFor = (cell: number) => Math.max(2, Math.round(cell / 4))

const widthFor = (cell: number) => {
  const gap = gapFor(cell)
  return WEEKS * (cell + gap) - gap + CARD_PADDING
}

const fitCell = (available: number) => {
  const cap = available - SAFETY
  let best = MIN_CELL
  for (let cell = MIN_CELL; cell <= MAX_CELL && widthFor(cell) <= cap; cell += CELL_STEP) {
    best = cell
  }
  return best
}

function useFittedCell() {
  const ref = useRef<HTMLDivElement>(null)
  const [cell, setCell] = useState(MIN_CELL)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const measure = () => setCell(fitCell(el.clientWidth))

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, cell] as const
}

const REPOS = [
  {
    name: "GitLens-AI",
    href: "https://github.com/keshavagr273/GitLens-AI",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/project-logos/gitlens.png"
        alt="GitLens-AI"
        className="size-full object-cover rounded-full"
      />
    ),
  },
  {
    name: "ClassMate",
    href: "https://github.com/keshavagr273/ClassMate",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/project-logos/classmate.png"
        alt="ClassMate"
        className="size-full object-contain p-0.5 rounded-full"
      />
    ),
  },
  {
    name: "HydraCache",
    href: "https://github.com/keshavagr273/HydraCache",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/project-logos/hydracache.png"
        alt="HydraCache"
        className="size-full object-contain rounded-full"
      />
    ),
  },
  {
    name: "DocSaarthi",
    href: "https://github.com/keshavagr273/DocSaarthi",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/project-logos/docsaarthi_transparent.png"
        alt="DocSaarthi"
        className="size-full object-contain p-0.5 rounded-full"
      />
    ),
  },
  {
    name: "ChatSphere",
    href: "https://github.com/keshavagr273/Chat-App",
    logo: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/project-logos/chatsphere.png"
        alt="ChatSphere"
        className="size-full object-contain p-0.5 rounded-full"
      />
    ),
  },
]

export default function GithubActivityCard() {
  const [ref, cellSize] = useFittedCell()

  return (
    <div className="px-[3%] py-10">
      <div ref={ref} className="flex">
        <GitHubActivity
          username={GITHUB_USERNAME}
          repos={REPOS}
          accent={ACCENT}
          cellSize={cellSize}
          showMonths
          style={DARK_TOKENS}
          className="bg-[#0e0e10] [&_button>svg]:text-[#3e4346]"
        />
      </div>
    </div>
  )
}
