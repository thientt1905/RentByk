'use client'

import { useTheme } from 'next-themes'
import Image from "next/image"
import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from "react-icons/fi"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <Image
      src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
      width={38}
      height={38}
      alt="Loading Light/Dark Toggle"
      title="Loading Light/Dark Toggle"
    />
  )

  return (
    <div>
      {resolvedTheme === 'dark' ? (
        <FiSun size={29} onClick={() => setTheme('light')} />
      ) : (
        <FiMoon size={29} onClick={() => setTheme('dark')} />
      )}
    </div>
  )
}