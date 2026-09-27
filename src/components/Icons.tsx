type P = { size?: number; className?: string }
const base = (size: number) => ({ width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.9, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const })

export const GitHub = ({ size = 18 }: P) => (
  <svg {...base(size)} fill="currentColor" stroke="none" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
)
export const LinkedIn = ({ size = 18 }: P) => (
  <svg {...base(size)} fill="currentColor" stroke="none" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
)
export const Code = ({ size = 18 }: P) => (
  <svg {...base(size)} aria-hidden="true"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6" /></svg>
)
export const External = ({ size = 15 }: P) => (
  <svg {...base(size)} aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
)
export const Download = ({ size = 16 }: P) => (
  <svg {...base(size)} aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" /></svg>
)
export const Sun = ({ size = 17 }: P) => (
  <svg {...base(size)} aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4" /></svg>
)
export const Moon = ({ size = 17 }: P) => (
  <svg {...base(size)} aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
)
export const Menu = ({ size = 18 }: P) => (
  <svg {...base(size)} aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
)
export const X = ({ size = 18 }: P) => (
  <svg {...base(size)} aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" /></svg>
)
export const Arrow = ({ size = 16 }: P) => (
  <svg {...base(size)} aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
)
export const Mail = ({ size = 16 }: P) => (
  <svg {...base(size)} aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
)
