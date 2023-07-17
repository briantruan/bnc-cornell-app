"use client"

import { NextStudio } from 'next-sanity/studio'

export default function SanityStudio({ config }) {
  return <NextStudio config={config} />
}