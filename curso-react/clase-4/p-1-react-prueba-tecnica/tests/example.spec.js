// @ts-check
import { test, expect } from '@playwright/test'

const CAT_PREFIX_IMAGE_URL = 'https://catfact.ninja/fact?max_length=100'
const LOCALHOST_URL = 'http://localhost:5173/'

test('app shoes random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  console.log(textContent, imageSrc)
  // await expect(textContent).not.toBeNull()
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})
