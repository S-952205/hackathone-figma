export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skGWMsyp0ZbiEPgfqma2Ig6EmVVph5d2E7YGBxiVj2H3LNNf4zzcukpyLdS5AkYOMJZVpKlI0w03HHqCuTvdhN2TwFK3fLuailFlFklsmsYntcGTbzdWPOrqa4HNbFW8Z9in85mB4zHXYbgHCmITxlpXtPr4e3srI9TiRMl28pLQp79MrA4a",
  'Missing environment variable: SANITY_API_TOKEN'
)


function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
