/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FIREBASE_API_KEY: string
  // Add other environment variables here if you use them, e.g.,
  // readonly VITE_OTHER_SERVICE_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}