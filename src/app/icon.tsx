import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
          <path d="M25 45C36.0457 45 45 36.0457 45 25C45 15 25 0 25 0C25 0 5 15 5 25C5 36.0457 13.9543 45 25 45Z" fill="#0ea5e9" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
